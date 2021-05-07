import { PropsWithChildren } from "react";

type IProps = {
  className?: string;
};

export default function IconArrowSmall(props: PropsWithChildren<IProps>) {
  return (
    <svg
      className={props.className}
      width="25"
      height="15"
      viewBox="0 0 25 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3431 0.428925L24.7071 6.79289C25.0976 7.18341 25.0976 7.81658 24.7071 8.2071L18.3431 14.5711C17.9526 14.9616 17.3195 14.9616 16.9289 14.5711C16.5384 14.1805 16.5384 13.5474 16.9289 13.1568L21.5858 8.49999H0V6.49999H21.5858L16.9289 1.84314C16.5384 1.45261 16.5384 0.81945 16.9289 0.428925C17.3195 0.038401 17.9526 0.038401 18.3431 0.428925Z"
        fill="#D7D1FE"
      />
    </svg>
  );
}
