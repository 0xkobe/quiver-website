import classNames from "classnames";
import { PropsWithChildren } from "react";

type IProps = {
  href: string;
  outlined?: boolean;
  shadow?: boolean;
  icon?: any;
  large?: boolean;
  className?: string;
};

export default function Button(props: PropsWithChildren<IProps>) {
  const structure =
    "whitespace-nowrap inline-flex items-center justify-center rounded-full text-base";
  const size = props.large ? "px-6 py-3" : "px-4 py-2";
  const border = props.outlined ? "ring-2 ring-inset ring-primary" : null;
  const color = props.outlined
    ? "text-primary bg-white"
    : "text-white bg-gradient-to-r from-primary to-secondary";
  const shadow = props.shadow ? "shadow-xl" : null;
  return (
    <a
      href={props.href}
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
        <props.icon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      )}
      {props.children}
    </a>
  );
}
