import classNames from "classnames";
import { PropsWithChildren } from "react";

type IProps = {
  className?: string;
};

export default function Subtitle(props: PropsWithChildren<IProps>) {
  return (
    <h4
      className={classNames(
        "text-3xl leading-9 font-bold text-purple-900",
        props.className
      )}
    >
      {props.children}
    </h4>
  );
}
