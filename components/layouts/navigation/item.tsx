import { FunctionComponent } from 'react'
import { INavigationItem } from './types'

type IProps = {
  item: INavigationItem
}

const Item: FunctionComponent<IProps> = (props) => {
  const handleClick = (event) => {
    event.preventDefault()
    event.stopPropagation()
    document
      .getElementById(props.item.id)
      .scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a
      href={props.item.href ? props.item.href : `#${props.item.id}`}
      onClick={props.item.id && handleClick}
      className="text-base text-gray-500 hover:text-gray-900"
    >
      {props.item.name}
    </a>
  )
}

export default Item
