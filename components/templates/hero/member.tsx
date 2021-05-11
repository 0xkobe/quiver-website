import { FunctionComponent } from 'react'
import Body2 from '../../text/body2'
import { IMember } from './types'

type IProps = {
  member: IMember
}

const Member: FunctionComponent<IProps> = (props) => {
  return (
    <div className="rounded-full border border-purple-200 p-2 pr-6 mx-3 mt-3">
      <div className="flex items-center">
        <img
          className="inline-block h-8 w-8 rounded-full"
          src={props.member.imageUrl}
          alt={props.member.name}
        />
        <Body2 className="ml-3">{props.member.name}</Body2>
      </div>
    </div>
  )
}

export default Member
