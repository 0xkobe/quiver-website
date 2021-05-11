import { PropsWithChildren } from "react";

type IProps = {
  className?: string;
};

export default function IconSocialFacebook(props: PropsWithChildren<IProps>) {
  return (
    <svg
      className={props.className}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5938 3.40625H12.125V0.875C11.8438 0.84375 10.9688 0.75 9.90625 0.75C7.75 0.75 6.25 2.09375 6.25 4.53125V6.75H3.875V9.59375H6.25V16.75H9.1875V9.59375H11.5L11.875 6.75H9.1875V4.8125C9.1875 3.96875 9.4375 3.40625 10.5938 3.40625Z"
        fill="#231B5C"
      />
    </svg>
  );
}
