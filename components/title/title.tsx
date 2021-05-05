import classNames from "classnames";
import { PropsWithChildren } from "react";

type IProps = {
  className?: string;
};

export default function Title(props: PropsWithChildren<IProps>) {
  return (
    <h2
      className={classNames(
        "text-4xl leading-10 font-extrabold tracking-tight text-purple-900",
        props.className
      )}
    >
      {props.children}
    </h2>
  );
}
