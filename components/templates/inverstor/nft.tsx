import classNames from 'classnames'
import { FunctionComponent } from 'react'
import IconTrendDown from '../../icon/trend/down'
import IconTrendStable from '../../icon/trend/stable'
import IconTrendUp from '../../icon/trend/up'
import Body2 from '../../text/body2'
import { INFT } from './types'

type IProps = {
  index: number
  nft: INFT
}

const NFT: FunctionComponent<IProps> = (props) => {
  const config = {
    up: {
      color: 'green',
      text: 'Happy',
      icon: IconTrendUp,
    },
    down: {
      color: 'red',
      text: 'Angry',
      icon: IconTrendDown,
    },
    stable: {
      color: 'blue',
      text: 'Rest',
      icon: IconTrendStable,
    },
  }[props.nft.progress]

  return (
    <div>
      <div
        className={classNames(
          'p-6 ring-2 ring-purple-200 rounded-xl shadow-xl bg-gradient-to-t via-white to-white w-44 mx-auto',
          `from-${config.color}-50`,
          props.index < 3 && props.index % 3 !== 1 ? 'md:mt-12' : '',
        )}
      >
        <div className="flex justify-between">
          <span
            className={`bg-${config.color}-50 text-${config.color}-500 rounded-full px-2 py-1 text-xs leading-none font-normal block`}
          >
            {config.text}
          </span>
          <span className={`flex text-${config.color}-500 block`}>
            <config.icon className="mr-2" />
            <props.nft.crypto className="w-6 h-6 -mt-1" />
          </span>
        </div>
        <img
          src={props.nft.imageUrl}
          className={`mt-6 mx-auto w-32 h-32 ${
            props.index % 3 == 1 ? 'md:mt-12 md:mb-12' : ''
          }`}
        />
        <Body2 className="mt-6 font-bold">{props.nft.name}</Body2>
        <p className="mt-1 text-xs leading-none font-normal text-gray-400">
          [ {props.nft.category} ]
        </p>
      </div>
    </div>
  )
}

export default NFT
