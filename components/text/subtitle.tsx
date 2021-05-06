import classNames from "classnames";
import { PropsWithChildren } from "react";

type IProps = {
  className?: string;
};

export default function Subtitle2(props: PropsWithChildren<IProps>) {
  return (
    <h3
      className={classNames(
        "text-2xl leading-7 font-bold text-purple-900",
        props.className
      )}
    >
      {props.children}
    </h3>
  );
}
