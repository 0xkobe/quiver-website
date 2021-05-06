import classNames from "classnames";
import { PropsWithChildren } from "react";

type IProps = {
  className?: string;
};

export default function MainTitle(props: PropsWithChildren<IProps>) {
  return (
    <h1
      className={classNames(
        "text-5xl leading-none font-extrabold text-purple-900",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}
