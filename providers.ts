import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const chains = {
  3: 'https://eth-ropsten.alchemyapi.io/v2/j3511RMZjDGkirYD0QPu8nGn1sIY0Y7c',
}

export const injectedConnector = new InjectedConnector({})
export const walletConnectConnector = new WalletConnectConnector({
  rpc: chains,
})
export const networkConnector = new NetworkConnector({
  urls: chains,
})
