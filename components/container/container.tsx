import classNames from "classnames";
import { PropsWithChildren } from "react";

type IProps = {
  className?: string;
  id?: string;
};

export default function Container(props: PropsWithChildren<IProps>) {
  return (
    <div
      id={props.id}
      className={classNames(
        "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
