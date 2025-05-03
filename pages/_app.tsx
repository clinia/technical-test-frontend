import type { AppProps } from 'next/app'

import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: Implement the main application component
  return <Component {...pageProps} />
}

export default MyApp;