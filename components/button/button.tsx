import classNames from "classnames";
import { MouseEventHandler, PropsWithChildren } from "react";

type IProps = {
  href?: string;
  onClick?: MouseEventHandler<any>;
  outlined?: boolean;
  shadow?: boolean;
  icon?: any;
  large?: boolean;
  text?: boolean;
  className?: string;
};

export default function Button(props: PropsWithChildren<IProps>) {
  const structure =
    "whitespace-nowrap inline-flex items-center justify-center rounded-full text-base";
  const px = props.text ? "" : props.large ? "px-6" : "px-4";
  const py = props.large ? "py-3" : "py-2";
  const size = `${px} ${py}`;
  const border = props.outlined
    ? "border border-purple-300 ring-1 ring-black ring-opacity-5"
    : props.text
    ? ""
    : "ring-1 ring-black ring-opacity-5";
  const color = props.outlined
    ? "text-purple-900 bg-white"
    : props.text
    ? "text-primary"
    : "text-white bg-gradient-to-r from-primary to-secondary";
  const shadow = props.shadow && !props.text ? "shadow-xl" : null;
  const icon = props.text
    ? classNames(
        "rounded-full text-white bg-gradient-to-r from-primary to-secondary h-10 w-10 mr-3 p-2 ring-1 ring-black ring-opacity-5",
        props.shadow ? "shadow-xl" : null
      )
    : "mr-3";
  const iconSize = props.text ? "" : "h-4 w-4";
  return (
    <a
      href={"href" in props ? props.href : "#"}
      onClick={"onClick" in props ? props.onClick : null}
      className={classNames(
        structure,
        size,
        border,
        color,
        shadow,
        props.className
      )}
    >
      {props.icon && (
        <div className={classNames("flex justify-center align-middle", icon)}>
          <props.icon className={classNames(iconSize)} aria-hidden="true" />
        </div>
      )}
      {props.children}
    </a>
  );
}
