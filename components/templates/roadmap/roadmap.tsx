import { DownloadIcon } from '@heroicons/react/outline'
import { FunctionComponent } from 'react'
import Button from '../../button/button'
import Container from '../../container/container'
import Headline from '../../text/headline'
import Title from '../../text/title'
import Quarter from './quarter'
import { IQuarter } from './types'

const roadmap: IQuarter[] = [
  {
    quarter: 'Q2',
    steps: [
      {
        title: 'Whitepaper writing',
        icon: '📝',
      },
      {
        title: 'Community introduction & marketing materials',
        icon: '👋',
      },
      {
        title: 'Emotional NFTs Sale',
        icon: '😻',
      },
      {
        title: 'Community Seed investors',
        icon: '💸',
      },
      {
        title: 'Initial community setup',
        icon: '🎉',
      },
      {
        title: 'Initial Quiver IDAO governance setup',
        icon: '⚖️',
      },
    ],
  },
  {
    quarter: 'Q3',
    steps: [
      {
        title: 'Finalization of Quiver IDAO governance setup',
        icon: '⚖️',
      },
      {
        title: 'DICP MVP product',
        icon: '🚀',
      },
      {
        title: 'DAO service management product',
        icon: '📟',
      },
      {
        title: 'Prototyping of seed DAO services',
        icon: '🛠',
      },
      {
        title: 'Community development',
        icon: '💪',
      },
    ],
  },
  {
    quarter: 'Q4',
    steps: [
      {
        title: 'Implement ready-to-go product on Ethereum network',
        icon: '🛰',
      },
      {
        title: 'QSTK Token public sale & DEX listing',
        icon: '💰',
      },
      {
        title: 'Partnerships development',
        icon: '🤝',
      },
      {
        title: 'Protocol governance setup',
        icon: '⚖️',
      },
    ],
  },
]

const Roadmap: FunctionComponent = () => {
  return (
    <Container className="text-center" id="roadmap">
      <Headline>Community Direction</Headline>
      <Title className="mt-3">Roadmap [2021]</Title>
      <div className="mt-12">
        <Button href="/Quiver-Whitepaper-Tech-2021-05-22.pdf" icon={DownloadIcon} text shadow>
          Download the Full Roadmap
        </Button>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {roadmap.map((x) => (
          <Quarter key={x.quarter} quarter={x} />
        ))}
      </div>
    </Container>
  )
}

export default Roadmap
