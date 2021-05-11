import { FunctionComponent } from 'react'

type IProps = {
  className?: string
}

const IconSocialTelegram: FunctionComponent<IProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.58065 0 0 3.58065 0 8C0 12.4194 3.58065 16 8 16C12.4194 16 16 12.4194 16 8C16 3.58065 12.4194 0 8 0ZM11.9032 5.48387L10.6129 11.6774C10.5161 12.129 10.2581 12.2258 9.87097 12.0323L7.87097 10.5484L6.90323 11.4839C6.80645 11.5806 6.70968 11.6774 6.51613 11.6774L6.64516 9.64516L10.3548 6.29032C10.5161 6.16129 10.3226 6.06452 10.0968 6.19355L5.51613 9.09677L3.54839 8.48387C3.12903 8.35484 3.12903 8.03226 3.64516 7.83871L11.3548 4.87097C11.7097 4.74194 12.0323 4.96774 11.9032 5.48387Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default IconSocialTelegram
