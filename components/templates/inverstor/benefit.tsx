import Body2 from "../../text/body2";
import { IBenefit } from "./types";

export default function Benefit(benefit: IBenefit) {
  return (
    <div key={benefit.name} className="p-8 ring-1 ring-purple-300 rounded-xl col-span-3">
      <h3 className="inline text-xl leading-7 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {benefit.name}
      </h3>
      <Body2 className="mt-2" color="text-gray-400">
        [ {benefit.category} ]
      </Body2>
      <ul className="list-disc list-inside mt-6 text-purple-900">
        {benefit.items.map((item, i) => (
          <li key={i} className="mt-4 text-base leading-6 font-normal">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}