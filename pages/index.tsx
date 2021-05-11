import Head from 'next/head'
import Ecosystem from '../components/templates/ecosystem/ecosystem'
import Features from '../components/templates/features/features'
import Hero from '../components/templates/hero/hero'
import { IMember } from '../components/templates/hero/types'
import Information from '../components/templates/information/information'
import Investor from '../components/templates/inverstor/investor'
import Roadmap from '../components/templates/roadmap/roadmap'

const members: IMember[] = [
  {
    name: '216k155',
    role: 'Co-founder | Marketing Manager',
    imageUrl: '/members/216k155.png',
  },
  {
    name: 'Jun',
    role: 'Co-founder | Strateger',
    imageUrl: '/members/jun.png',
  },
  {
    name: 'Andre',
    role: 'Co-founder | Technical Manager',
    imageUrl: '/members/andre.png',
  },
  {
    name: 'Akira',
    role: 'Co-founder | Project Manager',
    imageUrl: '/members/akira.png',
  },
  {
    name: 'Evil',
    role: 'Co-founder | Design manager',
    imageUrl: '/members/evil.png',
  },
  {
    name: 'Eugen',
    role: 'Dude | Technical Advisor',
    imageUrl: '/members/eugen.png',
  },
  {
    name: 'Adidust.eth',
    role: 'Dude | Marketing Advisor',
    imageUrl: '/members/adidust.eth.png',
  },
  {
    name: 'Ahmed',
    role: 'Dude | Frontend Advisor',
    imageUrl: '/members/ahmed.png',
  },
]

export default function Home(): JSX.Element {
  const title =
    'Quiver Protocol - 1st Community-driven Blockchain Investment Protocol'
  const description =
    'Explore Investment opportunities market driven by the Quiver Community. Find the most profitable information and improve investment decisions, fast, easy and secure.'
  const url = 'https://quiverprotocol.com/'
  const image = `${url}/og-picture.png`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@QuiverProtocol"></meta>
        <meta name="twitter:creator" content="@QuiverProtocol" />
        <meta name="twitter:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/* <meta property="fb:app_id" content="" /> // https://developers.facebook.com/docs/development/create-an-app */}
      </Head>
      <Hero members={members} />
      <Information />
      <Features />
      <Ecosystem />
      <Investor />
      <Roadmap />
    </>
  )
}
