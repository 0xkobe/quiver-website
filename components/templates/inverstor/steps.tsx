import { BigNumber } from '@ethersproject/bignumber'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { Dialog } from '@headlessui/react'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { useWeb3React } from '@web3-react/core'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { FunctionComponent, useMemo, useState } from 'react'
import { injectedConnector, walletConnectConnector } from '../../../providers'
import Button from '../../button/button'
import Body2 from '../../text/body2'

const Purchase: FunctionComponent<{
  getEthPrice: (amount: BigNumber) => BigNumber
  purchase: (amount: BigNumber) => void
}> = ({ purchase, getEthPrice }) => {
  const [amount, setAmount] = useState<BigNumber>()
  const canPurchase = useMemo(() => {
    return amount !== undefined && amount.gt(0)
  }, [amount])
  return (
    <>
      <Body2 className="mt-6">Chose an amount</Body2>
      <Dialog.Description className="mt-2 text-sm leading-5 font-normal text-gray-500">
        Put the amount of QSTK Token you want to purchase.
      </Dialog.Description>
      <label htmlFor="qstk-amount" className="mt-6 block">
        Amount to purchase
      </label>
      <div className="relative mt-2">
        <input
          type="number"
          min="1"
          onChange={(e) => setAmount(BigNumber.from(e.target.value || '0'))}
          id="qstk-amount"
          className="w-full border shadow rounded-2xl text-sm leading-5 font-normal text-purple-900 px-4 py-2 pr-16 outline-none placeholder-gray-400 focus:ring-2 ring-purple-300 border-purple-100"
        />
        <span className="absolute right-5 top-2.5 text-sm leading-5 font-medium text-purple-900">
          QSTK
        </span>
      </div>
      <div className="rounded-2xl bg-gray-50 p-4 mt-6">
        <div className="flex text-sm leading-5 font-medium text-purple-900">
          <span>Price</span>
          <span className="flex-grow"></span>
          <span className="text-purple-700">
            {getEthPrice && formatEther(getEthPrice(amount))} ETH
          </span>
        </div>

        <Button
          outlined={!canPurchase}
          className="w-full mt-4"
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            purchase(amount)
          }}
        >
          Purchase
        </Button>
      </div>
    </>
  )
}

const Connect: FunctionComponent<{ error?: Error }> = ({ error }) => {
  const { activate, setError } = useWeb3React<Web3Provider>('user')
  const [isWalletConnectActivating, setIsWalletConnectActivating] =
    useState<boolean>(false)

  function activateWithConnector(event: any, connector: AbstractConnector) {
    event.stopPropagation()
    event.preventDefault()
    if (connector instanceof WalletConnectConnector) {
      if (isWalletConnectActivating) return
      setIsWalletConnectActivating(true)
      // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
      // from issue https://github.com/NoahZinsmeister/web3-react/issues/124
      // let's remove this hack when issue is resolved
      if (connector.walletConnectProvider?.wc?.uri) {
        connector.walletConnectProvider = undefined
      }
    }
    activate(connector, null, true)
      .then(() => setIsWalletConnectActivating(false))
      .catch(setError)
  }
  return (
    <>
      <Body2 className="mt-6">Connect to a Wallet</Body2>
      <Dialog.Description className="mt-2 text-sm leading-5 font-normal text-gray-500">
        To purchase QSTK Token you need to connect to an Ethereum Wallet.
      </Dialog.Description>
      {error && (
        <span className="text-sm leading-5 font-normal text-red-600 ">
          {'error' in error ? (error as any).error.message : error.message}
        </span>
      )}
      <nav className="flex flex-col">
        <Button
          onClick={(e) => activateWithConnector(e, injectedConnector)}
          outlined
          className="mt-6"
        >
          Metamask
        </Button>
        <Button
          onClick={(e) => activateWithConnector(e, walletConnectConnector)}
          outlined
          className="mt-4"
        >
          Wallet connect
        </Button>
      </nav>
    </>
  )
}

const Network: FunctionComponent<{ chainId: number }> = ({ chainId }) => {
  const name = { 1: 'Mainnet', 3: 'Ropsten' }[chainId]
  return (
    <>
      <Body2 className="mt-6">Select {name} Network</Body2>
      <Dialog.Description className="mt-2 text-sm leading-5 font-normal text-gray-500">
        Please open your Ethereum wallet and select the {name} network.
      </Dialog.Description>
    </>
  )
}

const Wallet: FunctionComponent = () => (
  <>
    <Body2 className="mt-6">Continue on Wallet</Body2>
    <Dialog.Description className="mt-2 text-sm leading-5 font-normal text-gray-500">
      Please open your Ethereum wallet and follow the instructions to continue
      the purchase process.
    </Dialog.Description>
  </>
)

const Transaction: FunctionComponent<{ hash: string }> = ({ hash }) => (
  <>
    <Body2 className="mt-6">Processing the Transaction</Body2>
    <Dialog.Description className="mt-2 text-sm leading-5 font-normal text-gray-500 truncate">
      Transaction submitted with hash: {hash}
    </Dialog.Description>
    <div className="mt-6 rounded-2xl bg-gray-50 p-4 text-sm leading-5 font-medium text-purple-900">
      View details on Etherscan:
      <br />
      <a
        href={`https://etherscan.com/tx/${hash}`}
        target="_blank"
        className="text-purple-700 block truncate"
      >
        https://etherscan.com/tx/{hash}
      </a>
    </div>
  </>
)

const Success: FunctionComponent<{ account: string; amount: BigNumber }> = ({
  account,
  amount,
}) => (
  <>
    <Body2 className="mt-6">Transaction Succeeded</Body2>
    <Dialog.Description className="mt-2 text-sm leading-5 font-normal text-gray-500 truncate">
      You successfully purchased {amount.toString()} QSTK tokens
    </Dialog.Description>
    <Button
      href={`https://etherscan.com/address/${account}`}
      target="_blank"
      className="mt-6 w-full"
    >
      Check my wallet on Etherscan
    </Button>
  </>
)

export default {
  Purchase,
  Connect,
  Wallet,
  Network,
  Transaction,
  Success,
}
