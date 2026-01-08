import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { apiClient } from '../../lib/api-client'
import { useAuth } from '../../contexts/AuthContext'

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
  const { login } = useAuth()

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
      const data = await apiClient.post<any>('/api/auth/register', {
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        phone: formData.phone || undefined,
      })

      // Store token if available
      if (data.token) {
        login(data.token, data.refreshToken, {
          id: data.id || data.userId,
          email: data.email,
          fullName: data.fullName,
          avatarUrl: data.avatarUrl
        })
      }

      // Redirect to home page
      router.push('/')
    } catch (error: any) {
      console.error('Register error:', error)
      const errorMessage = error.response?.data?.message || error.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.';
      setErrors({ general: errorMessage })
      toast.error(errorMessage);
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
      const data = await apiClient.post<any>('/api/auth/google', {
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
        googleId: userInfo.id,
      })

      // Store token if available
      if (data && data.token) {
        login(data.token, data.refreshToken, {
          id: data.id || data.userId,
          email: data.email,
          fullName: data.fullName,
          avatarUrl: data.avatarUrl
        })
      }

      // Redirect to home page
      router.push('/')
    } catch (error: any) {
      console.error('Google token response error:', error)
      setErrors({ general: error.message || 'Có lỗi xảy ra khi xử lý đăng ký Google. Vui lòng thử lại.' })
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