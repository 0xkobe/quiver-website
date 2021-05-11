import { FunctionComponent } from 'react'
import ContainerWithBackground from '../../container/container-with-background'
import IconArrowSmall from '../../icon/arrow-small'

const Information: FunctionComponent = () => {
  return (
    <ContainerWithBackground>
      <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
        🤔
        <IconArrowSmall className="inline mx-2 -mt-2" />{' '}
        <img src="/icon.svg" className="inline w-10 h-10 align-top" />{' '}
        <IconArrowSmall className="inline mx-2 -mt-2" />
        🤑
      </h2>
      <p className="mt-6 text-2xl leading-8 font-normal mx-auto max-w-2xl text-purple-900">
        Investment information is hard to value, access and trust.
        <br />
        Our mission is to make our pre-vetted investment information,{' '}
        <span className="font-bold">profitable</span>,{' '}
        <span className="font-bold">trustable</span> and{' '}
        <span className="font-bold">accessible</span> to everyone.
      </p>
    </ContainerWithBackground>
  )
}

export default Information
