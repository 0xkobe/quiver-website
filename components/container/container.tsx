import { PropsWithChildren } from "react";

export default function Container(props: PropsWithChildren<{}>) {
  return (
    <div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        {/* "relative   py-24  sm:py-32  lg:px-8 // ecosystem */}
        {/* " max-w-md  text-center sm:max-w-3xl  lg:px-8 lg:" */}
        {/* "mt-16    sm:mt-24  text-center" */}
        {/* " max-w-md  sm:max-w-3xl  lg: lg:px-8" */}
        {/* "  py-12  text-center  lg:px-8 lg:py-24" */}
        {/* " max-w-md  text-center sm:max-w-3xl  lg:px-8 lg:" */}
        {/* "  w-full pt-16 pb-20 text-center lg:py-48 lg:text-left" */}
        {/* "  py-16  sm:py-24  lg:px-8" */}
        {props.children}
      </div>
    </div>
  );
}
