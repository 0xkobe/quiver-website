import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { AppProps } from 'next/app'
import Footer from '../components/layouts/footer/footer'
import Navigation from '../components/layouts/navigation/navigation'
import ScrollButton from '../components/scroll-button/scroll-button'
import '../styles/globals.css'

function getLibrary(provider: any): Web3Provider {
  return new Web3Provider(provider)
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="fixed bg-radial-gradient w-full h-full"></div>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      <ScrollButton />
    </Web3ReactProvider>
  )
}

export default MyApp
