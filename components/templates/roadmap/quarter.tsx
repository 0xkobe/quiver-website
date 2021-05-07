import { Fragment } from "react";
import IconArrowLarge from "../../icon/arrow-large";
import { IQuarter } from "./types";

export default function Quarter(quarter: IQuarter) {
  return (
    <div className="text-left" key={quarter.quarter}>
      <div className="flex">
        <span className="mr-6 bg-gradient-to-r from-purple-100 to-purple-50 p-3 rounded-xl text-lg leading-6 font-semibold">
          {quarter.quarter}
        </span>
        <IconArrowLarge className="inline mt-4" />
      </div>
      <div className="pl-12 pt-6">
        <dl className="ml-6">
          {quarter.steps.map((x, i) => (
            <Fragment key={i}>
              <dt className="float-left">
                <span className="text-2xl mr-3">{x.icon}</span>
              </dt>
              <dd className="mb-8 text-purple-900 text-base leading-6 font-normal">
                {x.title}
              </dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
}
