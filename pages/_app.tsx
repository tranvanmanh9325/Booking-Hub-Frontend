import '../styles/style.css'
import '../styles/attractions.css'

import { GlobalProvider } from '../global-context'
import { AuthProvider } from '../contexts/AuthContext'
import ErrorBoundary from '../components/ErrorBoundary'
import { NextIntlClientProvider } from 'next-intl'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps }: AppProps<{ messages?: Record<string, any> }>) {
  return (
    <NextIntlClientProvider locale="en" messages={pageProps?.messages || {}}>
      <GlobalProvider>
        <ErrorBoundary>
          <AuthProvider>
            <Component {...pageProps} />
            <Footer />
          </AuthProvider>
        </ErrorBoundary>
      </GlobalProvider>
    </NextIntlClientProvider>
  )
}