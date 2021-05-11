import { FunctionComponent } from 'react'
import Container from '../../container/container'
import Body1 from '../../text/body1'
import Headline from '../../text/headline'
import Title from '../../text/title'
import Products from './products'

const Ecosystem: FunctionComponent = () => {
  return (
    <Container className="text-center" id="ecosystem">
      <Headline>Quiver Upcoming Ecosystem</Headline>
      <Title className="mt-3">
        All-in-one Solution for Stressless <br />
        Blockchain Investment
      </Title>
      <Body1 className="mt-6 mx-auto max-w-md md:max-w-4xl">
        Trustworthy information is everything you exchange with your time.
        <br />
        Reduce your time and stress and make a well informed financial decision
        by being part of Quiver.
      </Body1>

      <img
        className="w-full h-full object-cover mt-24 rounded-xl"
        src="ecosystem.svg"
        alt=""
      />

      <Products />
    </Container>
  )
}

export default Ecosystem
