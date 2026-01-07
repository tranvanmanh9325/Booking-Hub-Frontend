import '../styles/style.css'
import '../styles/attractions.css'

import { GlobalProvider } from '../global-context'
import { NextIntlClientProvider } from 'next-intl'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps }: AppProps<{ messages?: Record<string, any> }>) {
  return (
    <NextIntlClientProvider locale="en" messages={pageProps?.messages || {}}>
      <GlobalProvider>
        <Component {...pageProps} />
        <Footer />
      </GlobalProvider>
    </NextIntlClientProvider>
  )
}