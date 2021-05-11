import { FunctionComponent } from 'react'

type IProps = {
  className?: string
}

const IconCryptoEth: FunctionComponent<IProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.6"
        d="M9.0668 6.70001L5.99805 8.09376L9.0668 9.90626L12.1355 8.09376L9.0668 6.70001Z"
        fill="black"
      />
      <path
        opacity="0.45"
        d="M5.99805 8.09375L9.0668 9.90625V6.7V3L5.99805 8.09375Z"
        fill="black"
      />
      <path
        opacity="0.8"
        d="M9.06738 3V6.7V9.90625L12.1361 8.09375L9.06738 3Z"
        fill="black"
      />
      <path
        opacity="0.45"
        d="M5.99805 8.67502L9.0668 13V10.4875L5.99805 8.67502Z"
        fill="black"
      />
      <path
        opacity="0.8"
        d="M9.06738 10.4875V13L12.1361 8.67502L9.06738 10.4875Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99805 15C12.864 15 15.998 11.866 15.998 8C15.998 4.13401 12.864 1 8.99805 1C5.13205 1 1.99805 4.13401 1.99805 8C1.99805 11.866 5.13205 15 8.99805 15ZM8.99805 16C13.4163 16 16.998 12.4183 16.998 8C16.998 3.58172 13.4163 0 8.99805 0C4.57977 0 0.998047 3.58172 0.998047 8C0.998047 12.4183 4.57977 16 8.99805 16Z"
        fill="#F3F4F6"
      />
    </svg>
  )
}

export default IconCryptoEth
