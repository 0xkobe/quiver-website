import classNames from "classnames";
import { PropsWithChildren } from "react";

type IProps = {
  className: string;
};

export default function Container(props: PropsWithChildren<IProps>) {
  const padding = "px-4 sm:px-6 lg:px-8 py-6";
  return (
    <div
      className={classNames(
        "relative mx-auto max-w-7xl",
        padding,
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
