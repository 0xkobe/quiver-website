import { PropsWithChildren } from "react";

type IProps = {
  className?: string;
};

export default function IconArrowLarge(props: PropsWithChildren<IProps>) {
  return (
    <svg
      className={props.className}
      width="313"
      height="16"
      viewBox="0 0 313 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M306.343 0.928925L312.707 7.29289C313.098 7.68341 313.098 8.31658 312.707 8.7071L306.343 15.0711C305.953 15.4616 305.319 15.4616 304.929 15.0711C304.538 14.6805 304.538 14.0474 304.929 13.6568L309.586 8.99999H0V6.99999H309.586L304.929 2.34314C304.538 1.95261 304.538 1.31945 304.929 0.928925C305.319 0.538401 305.953 0.538401 306.343 0.928925Z"
        fill="url(#icon_arrow_large_gradient)"
      />
      <defs>
        <linearGradient
          id="icon_arrow_large_gradient"
          x1="3.49805e-06"
          y1="15.364"
          x2="245.962"
          y2="-120.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5540DB" />
          <stop offset="1" stopColor="#D270FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
