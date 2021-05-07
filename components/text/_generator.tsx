import classNames from "classnames";
import { PropsWithChildren } from "react";

type IProps = {
  className?: string;
  color?: string;
};

export default function GenerateTextComponent(params: {
  tag: keyof JSX.IntrinsicElements;
  className: string;
  color: string;
}): (props: PropsWithChildren<IProps>) => any {
  return (props) => {
    return (
      <params.tag
        className={classNames(
          params.className,
          props.color || params.color,
          props.className
        )}
      >
        {props.children}
      </params.tag>
    );
  };
}
