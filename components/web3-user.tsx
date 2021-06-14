import { createWeb3ReactRoot } from '@web3-react/core'

const Web3ReactProviderUser = createWeb3ReactRoot('user')

const Web3ReactProviderUserSSR = ({ children, getLibrary }) => {
  return (
    <Web3ReactProviderUser getLibrary={getLibrary}>
      {children}
    </Web3ReactProviderUser>
  )
}

export default Web3ReactProviderUserSSR
