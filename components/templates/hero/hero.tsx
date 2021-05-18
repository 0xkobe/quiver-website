import { FunctionComponent } from 'react'
import Button from '../../button/button'
import Container from '../../container/container'
import IconSocialDiscord from '../../icon/social/discord'
import IconSocialTelegram from '../../icon/social/telegram'
import Body1 from '../../text/body1'
import MainTitle from '../../text/main-title'
import Subtitle2 from '../../text/subtitle2'
import Tag from '../../text/tag'
import Member from './member'
import { IMember } from './types'

type IProps = {
  members: IMember[]
}

const Hero: FunctionComponent<IProps> = (props) => {
  return (
    <div className="relative">
      <div
        className="absolute -top-24 left-0 right-0 bottom-0 bg-local bg-top bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url(/background.svg)' }}
      ></div>
      <Container className="px-12 text-center">
        <div className="inline-flex items-center text-purple-900 bg-white border border-purple-300 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base">
          <Tag>Emotional NFTs Sale</Tag>
          <span className="ml-4 text-sm">Coming June 1st 🔥</span>
        </div>

        <MainTitle className="mt-12">
          <span className="block">1st Community-driven</span>
          <span className="block">Blockchain Investment Protocol</span>
        </MainTitle>

        <Body1 className="mt-6 mx-auto max-w-md md:max-w-4xl">
          Explore Investment opportunities market driven by the Quiver
          Community. Find the most profitable information and improve investment
          decisions, fast, easy and secure.
        </Body1>

        <div className="mt-12 mb-24 mx-auto sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <Button
              href="https://discord.com/invite/jqemf5XRMj"
              large
              shadow
              icon={IconSocialDiscord}
            >
              Join our Discord
            </Button>
            <Button
              href="https://t.me/quiverprotocolchat"
              large
              shadow
              outlined
              icon={IconSocialTelegram}
            >
              Join our Telegram
            </Button>
          </div>
        </div>

        <Subtitle2 className="mt-12">Community Core Members</Subtitle2>
        <nav className="mt-12 flex flex-wrap justify-center">
          {props.members.map((x, i) => (
            <Member key={i} member={x} />
          ))}
        </nav>
      </Container>
    </div>
  )
}

export default Hero
