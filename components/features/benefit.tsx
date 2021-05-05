import { IBenefit } from "./types";

export default function Benefit(benefit: IBenefit) {
  return (
    <div
      key={benefit.name}
      className="flow-root bg-white-50 rounded-xl shadow-xl px-8 py-16"
    >
      <span className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-md shadow-lg">
        <span className="w-10 h-10 text-4xl">{benefit.icon}</span>
      </span>
      <h3 className="mt-8 text-lg leading-6 font-medium text-purple-900 tracking-tight">
        {benefit.description}
      </h3>
    </div>
  );
}
