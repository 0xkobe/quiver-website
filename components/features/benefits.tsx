import Benefit from "./benefit";
import { IBenefit } from "./types";

const benefits: IBenefit[] = [
  {
    name: "Access Time",
    description: "Reduce required time to access an information",
    icon: "⏱",
  },
  {
    name: "ROI Performance",
    description: "Increase investment ROI based on performance",
    icon: "🎉",
  },
  {
    name: "Reduce Risk",
    description: "Reduce investment risks through community",
    icon: "⚡️",
  },
  {
    name: "Valuation",
    description: "Increase information value",
    icon: "💎",
  },
];

export default function Benefits() {
  return (
    <div className="relative bg-white pt-20 pb-12">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Quiver Protocol Benefits
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(Benefit)}
          </div>
        </div>
      </div>
    </div>
  );
}
