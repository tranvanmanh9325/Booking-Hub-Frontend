import './style.css'

import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps<{ messages?: Record<string, any> }>) {
  return (
    <NextIntlProvider messages={pageProps?.messages}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </NextIntlProvider>
  )
}
