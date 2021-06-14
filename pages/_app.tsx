import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Footer from '../components/layouts/footer/footer'
import Navigation from '../components/layouts/navigation/navigation'
import ScrollButton from '../components/scroll-button/scroll-button'
import '../styles/globals.css'

const Web3ReactProviderUser = dynamic(() => import('../components/web3-user'), {
  ssr: false,
})

function getLibrary(provider: any): Web3Provider {
  return new Web3Provider(provider)
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProviderUser getLibrary={getLibrary}>
        <div className="fixed bg-radial-gradient w-full h-full"></div>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
        <ScrollButton />
      </Web3ReactProviderUser>
    </Web3ReactProvider>
  )
}

export default MyApp
