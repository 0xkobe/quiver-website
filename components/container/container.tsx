import classNames from 'classnames'
import { FunctionComponent } from 'react'

type IProps = {
  className?: string
  id?: string
}

const Container: FunctionComponent<IProps> = (props) => {
  return (
    <div
      id={props.id}
      className={classNames(
        'relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24',
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}

export default Container
