import { InboxIcon } from "@heroicons/react/outline";
import { PropsWithChildren } from "react";
import { INFT } from "./types";

type IProps = {
  index: number;
  nft: INFT;
};

export default function NFT(props: PropsWithChildren<IProps>) {
  const { color, text, icon } = {
    up: {
      color: "green",
      text: "Happy",
      icon: InboxIcon,
    },
    down: {
      color: "red",
      text: "Rest",
      icon: InboxIcon,
    },
    stable: {
      color: "blue",
      text: "Angry",
      icon: InboxIcon,
    },
  }[props.nft.progress];

  return (
    <div key={props.nft.name}>
      <div
        className={`p-6 border-2 border-primary rounded-xl shadow-xl ${
          props.index < 3 && props.index % 3 !== 1 ? "mt-12" : ""
        }`}
      >
        <div className="flex justify-between">
          <span
            className={`bg-${color}-50 text-${color}-500 rounded-full px-2 py-1 text-xs leading-none font-normal block`}
          >
            {text}
          </span>
          <span className={`text-${color}-500 block`}>
            {/* {icon} */}
            {props.nft.crypto}
          </span>
        </div>

        <img
          src={props.nft.imageUrl}
          className={`mt-6 w-32 h-${props.index % 3 == 1 ? 44 : 32}`}
        />

        <p className="mt-6 text-base leading-6 font-bold text-purple-900">
          {props.nft.name}
        </p>
        <p className="mt-1 text-xs leading-none font-normal text-gray-400">
          [{props.nft.category}]
        </p>
      </div>
    </div>
  );
}
