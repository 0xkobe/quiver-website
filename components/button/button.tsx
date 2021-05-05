import classNames from "classnames";
import { MouseEventHandler, PropsWithChildren } from "react";

type ILink = {
  href: string;
  onClick?: MouseEventHandler<any>;
};

type IButton = {
  onClick: MouseEventHandler<any>;
};

type IProps = (ILink | IButton) & {
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
  const border = props.outlined ? "ring-2 ring-inset ring-primary" : null;
  const color = props.outlined
    ? "text-primary bg-white"
    : props.text
    ? "text-primary"
    : "text-white bg-gradient-to-r from-primary to-secondary";
  const shadow = props.shadow && !props.text ? "shadow-xl" : null;
  const icon = props.text
    ? classNames(
        "rounded-full text-white bg-gradient-to-r from-primary to-secondary h-8 w-8 mr-3 p-2",
        props.shadow ? "shadow-xl" : null
      )
    : "mr-2";
  return (
    <a
      href={"href" in props ? props.href : "#"}
      onClick={props.onClick}
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
          <props.icon className={classNames("h-4 w-4")} aria-hidden="true" />
        </div>
      )}
      {props.children}
    </a>
  );
}
