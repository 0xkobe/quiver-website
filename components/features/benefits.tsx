import Subtitle2 from "../text/subtitle2";
import Benefit from "./benefit";
import { IBenefit } from "./types";

const benefits: IBenefit[] = [
  {
    name: "Access Time",
    description: "Reduce required time to access information",
    icon: "⏱",
  },
  {
    name: "ROI Performance",
    description: "Increase investment ROI based on performance",
    icon: "🚀",
  },
  {
    name: "Reduce Risk",
    description: "Minimize investment risks ..",
    icon: "🤝",
  },
  {
    name: "Valuation",
    description: "Maximize expected value of information",
    icon: "💎",
  },
];

export default function Benefits() {
  return (
    <div className="relative bg-white pt-20 pb-12">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <Subtitle2 className="mt-2">Quiver Protocol Benefits</Subtitle2>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(Benefit)}
          </div>
        </div>
      </div>
    </div>
  );
}
