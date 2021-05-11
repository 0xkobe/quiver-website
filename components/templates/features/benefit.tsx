import { FunctionComponent } from 'react'
import { IBenefit } from './types'

type IProps = {
  benefit: IBenefit
}

const Benefit: FunctionComponent<IProps> = (props) => {
  return (
    <div className="flow-root bg-white rounded-xl shadow-xl px-8 py-16">
      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl">
        <span className="w-10 h-10 text-4xl">{props.benefit.icon}</span>
      </span>
      <h3 className="mt-8 text-lg leading-6 font-medium text-purple-900 tracking-tight">
        {props.benefit.description}
      </h3>
    </div>
  )
}

export default Benefit
