import { IQuarter } from "./types";

export default function Quarter(quarter: IQuarter) {
  return (
    <div className="text-left" key={quarter.quarter}>
      <span className="bg-purple-100 p-3 rounded-lg text-lg leading-6 font-semibold">
        {quarter.quarter}
      </span>
      <div className="pl-12 pt-6">
        <ul className="ml-6">
          {quarter.steps.map((x) => (
            <li
              key={x.title}
              className="mb-8 text-purple-900 text-base leading-6 font-normal"
            >
              <span className="text-2xl mr-3">{x.icon}</span> {x.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
