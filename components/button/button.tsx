import classNames from 'classnames'
import { FunctionComponent, MouseEventHandler } from 'react'

type IProps = {
  href?: string
  onClick?: MouseEventHandler<any>
  outlined?: boolean
  shadow?: boolean
  icon?: any
  large?: boolean
  text?: boolean
  className?: string
}

const Button: FunctionComponent<IProps> = (props) => {
  const structure =
    'whitespace-nowrap inline-flex items-center justify-center rounded-full text-base'
  const px = props.text
    ? ''
    : props.large
    ? props.children
      ? 'px-6'
      : 'px-3'
    : props.children
    ? 'px-4'
    : 'px-2'
  const py = props.large ? 'py-3' : 'py-2'
  const size = `${px} ${py}`
  const border = props.outlined
    ? 'border border-purple-300 ring-1 ring-black ring-opacity-5'
    : props.text
    ? ''
    : 'ring-1 ring-black ring-opacity-5'
  const color = props.outlined
    ? 'text-purple-900 bg-white'
    : props.text
    ? 'text-primary'
    : 'text-white bg-gradient-to-r from-primary to-secondary'
  const shadow = props.shadow && !props.text ? 'shadow-xl' : null
  const iconMargin = props.children ? 'mr-3' : ''
  const icon = props.text
    ? classNames(
        'rounded-full text-white bg-gradient-to-r from-primary to-secondary h-10 w-10 p-2 ring-1 ring-black ring-opacity-5',
        props.shadow ? 'shadow-xl' : null,
      )
    : ''
  const iconSize = props.text ? '' : 'h-4 w-4'
  return (
    <a
      href={'href' in props ? props.href : '#'}
      onClick={'onClick' in props ? props.onClick : null}
      className={classNames(
        structure,
        size,
        border,
        color,
        shadow,
        props.className,
      )}
    >
      {props.icon && (
        <div
          className={classNames(
            'flex justify-center align-middle',
            icon,
            iconMargin,
          )}
        >
          <props.icon className={classNames(iconSize)} aria-hidden="true" />
        </div>
      )}
      {props.children}
    </a>
  )
}

export default Button
