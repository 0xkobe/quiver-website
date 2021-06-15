import { BigNumber } from '@ethersproject/bignumber'
import { ContractReceipt, ContractTransaction } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import { useWeb3React } from '@web3-react/core'
import {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react'
import useQSTKSale from '../../../hooks/useQSTKSale'
import { networkConnector } from '../../../providers'
import Button from '../../button/button'
import Container from '../../container/container'
import Modal from '../../modal/modal'
import Body1 from '../../text/body1'
import Headline from '../../text/headline'
import Subtitle from '../../text/subtitle'
import Title from '../../text/title'
import Steps from './steps'

const Info = (
  <>
    <h5 className="text-sm leading-5 font-medium text-purple-900">
      Get a better deal with Emotional NFTs
    </h5>
    <p className="mt-2 text-xs leading-4 font-normal text-purple-900">
      Did you know you can get a higher discount on your QSTK Token purchase?
    </p>
    <a
      href="https://emotional.quiverprotocol.com"
      className="mt-4 text-xs leading-4 font-medium text-purple-700"
    >
      Check out our Emotional NFTs
      <ArrowNarrowRightIcon className="ml-2 w-3 h-3 inline-flex" />
    </a>
  </>
)

const Investor: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [amount, setAmount] = useState<BigNumber>()
  const [tx, setTx] = useState<ContractTransaction>()
  const [receipt, setReceipt] = useState<ContractReceipt>()

  const { activate, chainId: remoteChainId } = useWeb3React<Web3Provider>()
  const { error, started, getEthPrice } = useQSTKSale()
  const {
    library,
    account,
    active,
    setError,
    chainId: userChainId,
  } = useWeb3React<Web3Provider>('user')
  const { ready, purchase } = useQSTKSale('user')

  const signer = useMemo(() => {
    if (!library) return
    if (!account) return
    return library.getSigner(account)
  }, [library, account])

  useEffect(() => {
    void activate(networkConnector, null, true)
  }, [])

  useEffect(() => {
    if (!error) return
    alert(error.message)
  }, [error])

  useEffect(() => {
    if (isOpen) return
    if (tx && !receipt) return
    setAmount(undefined)
    setTx(undefined)
    setReceipt(undefined)
    setError(undefined)
  }, [isOpen])

  useEffect(() => {
    if (!amount) return
    if (!account) return
    if (!signer) return
    if (!ready) return
    if (userChainId !== remoteChainId) return
    purchase(amount, signer).then(setTx).catch(setError)
    return () => {
      setTx(undefined)
    }
  }, [amount, account, ready, signer, userChainId, remoteChainId])

  useEffect(() => {
    if (!tx) return
    tx.wait().then(setReceipt).catch(setError)
    return () => {
      setReceipt(undefined)
    }
  }, [tx])

  // TODO: improve with some state machine eg: https://github.com/davidkpiano/xstate/tree/main/packages/xstate-react or similar
  const modal: {
    children: ReactNode
    info?: ReactElement
    loading?: boolean
    closable?: boolean
  } = useMemo(() => {
    if (!isOpen) return null
    if (receipt)
      return {
        children: <Steps.Success account={account} amount={amount} />,
        closable: true,
      }

    if (tx)
      return {
        children: <Steps.Transaction hash={tx.hash} />,
        loading: true,
        closable: false,
      }
    if (!amount)
      return {
        children: (
          <Steps.Purchase purchase={setAmount} getEthPrice={getEthPrice} />
        ),
        closable: true,
        info: Info,
      }
    if (!account || !active)
      return {
        children: <Steps.Connect />,
        closable: true,
      }

    if (remoteChainId !== userChainId)
      return {
        children: <Steps.Network chainId={remoteChainId} />,
        closable: true,
      }

    return {
      children: <Steps.Wallet />,
      closable: true,
    }
  }, [
    isOpen,
    receipt,
    tx,
    account,
    userChainId,
    remoteChainId,
    amount,
    setAmount,
  ])

  function openModal(event) {
    event.preventDefault()
    event.stopPropagation()
    setIsOpen(true)
  }

  return (
    <Container id="invest" className="text-center">
      <Headline>Quiver seed sale</Headline>
      <Title className="mt-3 mx-auto max-w-md md:max-w-2xl">
        Become part of the journey as a Quiver early-investor
      </Title>
      <Body1 className="mt-6 mx-auto max-w-md md:max-w-4xl">
        As an early-investor and supporter you will access benefits like QSTK
        token at a discounted price, eligibility to upcoming airdrops and much
        more.
      </Body1>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 text-left mt-12">
        <div className="p-12">
          <div className="mb-6">
            <span className="bg-white rounded-2xl shadow-md inline-block overflow-hidden">
              <img src="/icon.svg" className="m-4 w-10 h-10" />
            </span>
          </div>
          <Headline>Option #1</Headline>
          <Subtitle className="mt-3">Buy QSTK Token</Subtitle>
          <Body1 className="mt-6">
            QSTK Token is the Fuel of the Quiver ecosystem. <br />
            You can purchase it right now as part of our Seed Sale to become a
            Quiver investor and access the following benefits:
          </Body1>
          <ul className="list-disc list-inside mt-6 text-purple-900">
            <li>Invest together with DAO</li>
            <li>Access Quiver IDAO voting power</li>
            <li>Unlock DICP protocol rewards</li>
          </ul>
          <div>
            <Button
              onClick={openModal}
              disabled={!started}
              large
              shadow
              className="mt-12"
            >
              Buy QSTK Token
            </Button>
          </div>
        </div>

        <div className="p-12">
          <div className="mb-6">
            <span className="bg-white rounded-2xl shadow-md inline-block overflow-hidden">
              <img src="/nft-pic.png" width={72} height={72} />
            </span>
          </div>
          <Headline>Option #2</Headline>
          <Subtitle className="mt-3">Mint your own Emotional NFTs</Subtitle>
          <Body1 className="mt-6">
            Quiver Emotional NFTs are designed to be part of our upcoming
            stressless portfolio tracker. It’s an innovative way to become an
            investor and access the following benefits:
          </Body1>
          <ul className="list-disc list-inside mt-6 text-purple-900">
            <li>Lovely art for stressless investment</li>
            <li>Receive QSTK Token at a discounted price (locked asset)</li>
            <li>Access Quiver IDAO and DICP voting power </li>
            <li>Unlock DICP protocol rewards</li>
          </ul>
          <div>
            <Button
              href="https://emotional.quiverprotocol.com/"
              large
              shadow
              className="mt-12"
            >
              Mint Emotional NFTs
            </Button>
          </div>
        </div>
      </div>

      {modal && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="Buy QSTK Token"
          {...modal}
        />
      )}
    </Container>
  )
}

export default Investor
