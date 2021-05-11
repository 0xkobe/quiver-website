import { FunctionComponent } from 'react'

type IProps = {
  className?: string
}

const IconSocialMedium: FunctionComponent<IProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#medium_clip)">
        <path
          d="M4.51256 3.4375C7.00478 3.4375 9.02496 5.47178 9.02496 7.98103C9.02496 10.4903 7.00463 12.5244 4.51256 12.5244C2.02049 12.5244 0 10.4903 0 7.98103C0 5.47178 2.02033 3.4375 4.51256 3.4375ZM11.7188 3.70365C12.9649 3.70365 13.9751 5.6185 13.9751 7.98103H13.9752C13.9752 10.3429 12.9651 12.2584 11.7189 12.2584C10.4728 12.2584 9.46266 10.3429 9.46266 7.98103C9.46266 5.61912 10.4727 3.70365 11.7188 3.70365ZM15.2065 4.14917C15.6446 4.14917 16 5.86472 16 7.98103C16 10.0967 15.6448 11.8129 15.2065 11.8129C14.7681 11.8129 14.4131 10.0972 14.4131 7.98103C14.4131 5.86487 14.7683 4.14917 15.2065 4.14917Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="medium_clip">
          <rect
            width="16"
            height="9.125"
            fill="white"
            transform="translate(0 3.4375)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconSocialMedium
