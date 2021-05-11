import classNames from 'classnames'
import { FunctionComponent } from 'react'

type IProps = {
  className?: string
}

const ContainerWithBackground: FunctionComponent<IProps> = (props) => {
  return (
    <div
      className={classNames(
        'relative mx-auto max-w-7xl xl:rounded-2xl bg-gradient-to-r from-purple-100 to-purple-50 p-6 sm:p-12 lg:p-24',
        props.className,
      )}
    >
      <div className="rounded-2xl px-6 py-10 bg-white overflow-hidden shadow-xl sm:px-12 sm:py-12 sm:text-center">
        {props.children}
      </div>
    </div>
  )
}

export default ContainerWithBackground
