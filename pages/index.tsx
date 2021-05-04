import Hero from "../components/hero/hero";
import Information from "../components/information/information";
import Vision from "../components/vision/vision";
import Features from "../components/features/features";
import Ecosystem from "../components/ecosystem/ecosystem";
import NFT from "../components/nft/nft";
import Roadmap from "../components/roadmap/roadmap";
import { IMember } from "../components/hero/types";

const members: IMember[] = [
  {
    name: "216k155",
    href: "#",
    role: "Co-founder | Marketing Manager",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/dlf.pt-gon-png-4932385.png",
  },
  {
    name: "Jun",
    href: "#",
    role: "Co-founder | Strateger",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/dlf.pt-hunter-x-hunter-png-5268695.png",
  },
  {
    name: "Andre",
    href: "#",
    role: "Co-founder | Technical Manager",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/KurapikaFullbody.png",
  },
  {
    name: "Akira",
    href: "#",
    role: "Co-founder | Project Manager",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/b24d133df726437aae9dbe5bbc69c683.png",
  },
  {
    name: "Evil",
    href: "#",
    role: "Co-founder | Design manager",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/Evil.png",
  },
  {
    name: "Eugen",
    href: "#",
    role: "Dude | Technical Advisor",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/Leorio-2011.png",
  },
  {
    name: "Adidust.eth",
    href: "#",
    role: "Dude | Marketing Advisor",
    imageUrl:
      "https://www.larvalabs.com/public/images/cryptopunks/punk5917.png",
  },
  {
    name: "Ahmed",
    href: "#",
    role: "Dude | Frontend Advisor",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/dlf.pt-killua-png-4294457.png",
  },
];

export default function Home() {
  return (
    <>
      <Hero members={members} />
      <Information />
      <Vision />
      <Features />
      <Ecosystem />
      <NFT />
      <Roadmap />
    </>
  );
}
