import classNames from "classnames";
import { PropsWithChildren } from "react";

type IProps = {
  className?: string;
};

export default function Headline(props: PropsWithChildren<IProps>) {
  return (
    <span
      className={classNames(
        "text-base leading-6 font-semibold tracking-wide uppercase text-primary",
        props.className
      )}
    >
      {props.children}
    </span>
  );
}
