import { IBenefit } from "./types";

export default function Benefit(benefit: IBenefit) {
  return (
    <div key={benefit.name} className="pt-6">
      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
              <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
            {benefit.name}
          </h3>
          <p className="mt-5 text-base text-gray-500">{benefit.description}</p>
        </div>
      </div>
    </div>
  );
}
