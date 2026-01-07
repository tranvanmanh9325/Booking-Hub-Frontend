import { useRouter } from 'next/router'

export interface RegisterFormData {
  email: string
  password: string
  confirmPassword: string
  fullName: string
  phone: string
}

export interface RegisterErrors {
  email?: string
  password?: string
  confirmPassword?: string
  fullName?: string
  phone?: string
  general?: string
}

export const useRegisterHandlers = (
  formData: RegisterFormData,
  setFormData: React.Dispatch<React.SetStateAction<RegisterFormData>>,
  errors: RegisterErrors,
  setErrors: React.Dispatch<React.SetStateAction<RegisterErrors>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setIsGoogleLoading: React.Dispatch<React.SetStateAction<boolean>>,
  agreeToTerms: boolean
) => {
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = () => {
    const newErrors: RegisterErrors = {}

    if (!formData.fullName) {
      newErrors.fullName = 'Họ và tên là bắt buộc'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Họ và tên phải có ít nhất 2 ký tự'
    }

    if (!formData.email) {
      newErrors.email = 'Email là bắt buộc'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ'
    }

    if (!formData.password) {
      newErrors.password = 'Mật khẩu là bắt buộc'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng xác nhận mật khẩu'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp'
    }

    if (formData.phone && !/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ'
    }

    if (!agreeToTerms) {
      newErrors.general = 'Vui lòng đồng ý với điều khoản sử dụng'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrors({})

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
          phone: formData.phone || undefined,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setErrors({ general: data.message || 'Đăng ký thất bại. Vui lòng thử lại.' })
        setIsLoading(false)
        return
      }

      // Store token if available
      if (data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user || {}))
      }

      // Redirect to home page
      router.push('/')
    } catch (error) {
      console.error('Register error:', error)
      setErrors({ general: 'Có lỗi xảy ra. Vui lòng thử lại sau.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleTokenResponse = async (tokenResponse: any) => {
    try {
      if (!tokenResponse || !tokenResponse.access_token) {
        setErrors({ general: 'Không thể lấy token từ Google.' })
        setIsGoogleLoading(false)
        return
      }

      // Get user info from Google
      const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      })

      if (!userInfoResponse.ok) {
        throw new Error('Không thể lấy thông tin người dùng từ Google.')
      }

      const userInfo = await userInfoResponse.json()

      // Send user info to backend
      const backendResponse = await fetch('http://localhost:8080/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userInfo.email,
          name: userInfo.name,
          picture: userInfo.picture,
          googleId: userInfo.id,
        }),
      })

      // Check if response is ok and has content
      if (!backendResponse.ok) {
        let errorMessage = 'Đăng ký với Google thất bại.'
        try {
          const errorData = await backendResponse.json()
          errorMessage = errorData.message || errorMessage
        } catch (e) {
          // If response is not JSON, use status text
          errorMessage = backendResponse.statusText || errorMessage
        }
        setErrors({ general: errorMessage })
        setIsGoogleLoading(false)
        return
      }

      // Parse JSON response
      let data
      const contentType = backendResponse.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        const text = await backendResponse.text()
        if (text) {
          try {
            data = JSON.parse(text)
          } catch (e) {
            console.error('Failed to parse JSON:', e)
            setErrors({ general: 'Phản hồi từ server không hợp lệ.' })
            setIsGoogleLoading(false)
            return
          }
        } else {
          setErrors({ general: 'Phản hồi từ server trống.' })
          setIsGoogleLoading(false)
          return
        }
      } else {
        setErrors({ general: 'Phản hồi từ server không đúng định dạng.' })
        setIsGoogleLoading(false)
        return
      }

      // Store token if available
      if (data && data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify({
          id: data.userId,
          email: data.email,
          fullName: data.fullName
        }))
      }

      // Redirect to home page
      router.push('/')
    } catch (error) {
      console.error('Google token response error:', error)
      setErrors({ general: 'Có lỗi xảy ra khi xử lý đăng ký Google. Vui lòng thử lại.' })
      setIsGoogleLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true)
    setErrors({})

    try {
      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
      
      if (!clientId) {
        setErrors({ general: 'Google Client ID chưa được cấu hình. Vui lòng liên hệ quản trị viên.' })
        setIsGoogleLoading(false)
        return
      }

      // Wait for Google Identity Services to load (with timeout)
      let attempts = 0
      const maxAttempts = 50 // 5 seconds max wait
      
      while (typeof window !== 'undefined' && !(window as any).google && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 100))
        attempts++
      }

      if (typeof window !== 'undefined' && (window as any).google) {
        const google = (window as any).google
        
        // Use OAuth 2.0 flow with popup
        const client = google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: 'email profile',
          callback: handleGoogleTokenResponse,
        })

        client.requestAccessToken()
      } else {
        // Fallback: redirect to Google OAuth if script didn't load
        const redirectUri = `${window.location.origin}/auth/google/callback`
        const scope = 'email profile'
        const responseType = 'code'
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=${responseType}&scope=${encodeURIComponent(scope)}&access_type=offline&prompt=consent`
        
        window.location.href = googleAuthUrl
      }
    } catch (error) {
      console.error('Google Sign-In error:', error)
      setErrors({ general: 'Có lỗi xảy ra khi đăng ký với Google. Vui lòng thử lại.' })
      setIsGoogleLoading(false)
    }
  }

  return {
    handleChange,
    handleSubmit,
    handleGoogleSignIn,
  }
}