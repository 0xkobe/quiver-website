import { FunctionComponent } from 'react'
import Button from '../../button/button'
import Container from '../../container/container'
import Body1 from '../../text/body1'
import Headline from '../../text/headline'
import Subtitle from '../../text/subtitle'
import Title from '../../text/title'

const Investor: FunctionComponent = () => {
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
            <Button href="#TODO" large shadow className="mt-12">
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
    </Container>
  )
}

export default Investor
