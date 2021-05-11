import { FunctionComponent } from 'react'
import Body2 from '../../text/body2'
import { IProduct } from './types'

type IProps = {
  product: IProduct
}

const Product: FunctionComponent<IProps> = (props) => {
  return (
    <div className="relative text-left bg-white rounded-2xl shadow-xl px-6 pt-16 pb-8">
      <div className="absolute top-0 p-3 inline-block bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl transform -translate-y-6">
        <props.product.icon className="text-purple-900" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold leading-6 text-purple-900">
        {props.product.name}
      </h3>
      <Body2 className="mt-3">{props.product.description}</Body2>
      <a className="block mt-6 text-primary">Coming soon 🔥</a>
    </div>
  )
}

export default Product
