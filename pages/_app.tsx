import '../styles/style.css'
import '../styles/attractions.css'
import '../styles/loading-styles.css'
import 'react-toastify/dist/ReactToastify.css';

import { GlobalProvider } from '../global-context'
import { AuthProvider } from '../contexts/AuthContext'
import ErrorBoundary from '../components/ErrorBoundary'
import { NextIntlClientProvider } from 'next-intl'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import { ToastContainer } from 'react-toastify'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import { initAxe } from '../lib/axe'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps<{ messages?: Record<string, any> }>) {
  useEffect(() => {
    initAxe()
  }, [])

  return (
    <NextIntlClientProvider locale="en" messages={pageProps?.messages || {}}>
      <GlobalProvider>
        <ErrorBoundary>
          <AuthProvider>
            <Component {...pageProps} />
            <DefaultSeo {...SEO} />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Footer />
          </AuthProvider>
        </ErrorBoundary>
      </GlobalProvider>
    </NextIntlClientProvider>
  )
}