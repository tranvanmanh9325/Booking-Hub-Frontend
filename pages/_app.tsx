import '../styles/style.css'
import '../styles/attractions.css'
import '../styles/loading-styles.css'
import 'react-toastify/dist/ReactToastify.css';

// Providers removed
import ErrorBoundary from '../components/ErrorBoundary'
import { NextIntlClientProvider } from 'next-intl'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import { ToastContainer } from 'react-toastify'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import { initAxe } from '../lib/axe'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '../lib/react-query'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps<{ messages?: Record<string, any> }>) {
  useEffect(() => {
    initAxe()
  }, [])

  return (
    <NextIntlClientProvider locale="en" messages={pageProps?.messages || {}}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
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
        </ErrorBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NextIntlClientProvider>
  )
}