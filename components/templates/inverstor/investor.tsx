import { BigNumber } from '@ethersproject/bignumber'
import { ContractReceipt, ContractTransaction } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import { useWeb3React } from '@web3-react/core'
import {
  FunctionComponent,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from 'react'
import useQSTKSale from '../../../hooks/useQSTKSale'
import { networkConnector } from '../../../providers'
import Button from '../../button/button'
import Container from '../../container/container'
import Modal, { LoaderTitleSuffix, SuccessTitleSuffix } from '../../modal/modal'
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

  const {
    activate,
    library,
    account,
    error: walletError,
    setError,
  } = useWeb3React<Web3Provider>()
  const { error, started, getEthPrice, purchase } = useQSTKSale()

  useEffect(() => {
    void activate(networkConnector, null, true)
  }, [activate, walletError]) // fallback to network connector in case of error

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
  }, [isOpen])

  useEffect(() => {
    if (!amount) return
    if (!account) return
    if (!library.getSigner(account)) return
    purchase(amount, library.getSigner(account)).then(setTx).catch(setError)
    return () => {
      setTx(undefined)
    }
  }, [amount, account, library])

  useEffect(() => {
    if (!tx) return
    tx.wait().then(setReceipt).catch(setError)
    return () => {
      setReceipt(undefined)
    }
  }, [tx])

  const modal: {
    content: ReactElement
    titleSuffix?: ReactElement
    info?: ReactElement
  } = useMemo(() => {
    if (!isOpen) return null
    if (receipt)
      return {
        content: <Steps.Success account={account} amount={amount} />,
        titleSuffix: SuccessTitleSuffix,
      }

    if (tx)
      return {
        content: <Steps.Transaction hash={tx.hash} />,
        titleSuffix: LoaderTitleSuffix,
      }
    if (account && !walletError)
      return {
        content: <Steps.Wallet />,
      }
    if (amount)
      return {
        content: <Steps.Connect />,
      }

    return {
      content: (
        <Steps.Purchase purchase={setAmount} getEthPrice={getEthPrice} />
      ),
      info: Info,
    }
  }, [isOpen, receipt, tx, account, walletError, amount, setAmount])

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
            {started && (
              <Button onClick={openModal} large shadow className="mt-12">
                Buy QSTK Token
              </Button>
            )}
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
          info={modal.info}
          titleSuffix={modal.titleSuffix}
        >
          {modal.content}
        </Modal>
      )}
    </Container>
  )
}

export default Investor
