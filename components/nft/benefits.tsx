import {
  CloudUploadIcon,
  LockClosedIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import Benefit from "./benefit";
import { IBenefit } from "./types";

const benefits: IBenefit[] = [
  {
    name: "Emotional NFT",
    items: ["Benefit", "Benefit", "Benefit"],
    icon: CloudUploadIcon,
  },
  {
    name: "QREP Token",
    items: ["Benefit", "Benefit", "Benefit"],
    icon: LockClosedIcon,
  },
  {
    name: "QSTK Token",
    items: ["Benefit", "Benefit", "Benefit"],
    icon: RefreshIcon,
  },
];

export default function Benefits() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Early Investors Benefits
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {benefits.map(Benefit)}
          </div>
        </div>
      </div>
    </div>
  );
}
