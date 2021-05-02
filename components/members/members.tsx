import Member from "./member";
import { IMember } from "./types";

const members: IMember[] = [
  {
    name: "216k155",
    role: "Co-founder | Marketing Manager",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/dlf.pt-gon-png-4932385.png",
  },
  {
    name: "Jun",
    role: "Co-founder | Strateger",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/dlf.pt-hunter-x-hunter-png-5268695.png",
  },
  {
    name: "Andre",
    role: "Co-founder | Technical Manager",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/KurapikaFullbody.png",
  },
  {
    name: "Akira",
    role: "Co-founder | Project Manager",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/b24d133df726437aae9dbe5bbc69c683.png",
  },
  {
    name: "Evil",
    role: "Co-founder | Design manager",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/Evil.png",
  },
  {
    name: "Eugen",
    role: "Dude | Technical Advisor",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/Leorio-2011.png",
  },
  {
    name: "Adidust.eth",
    role: "Dude | Marketing Advisor",
    imageUrl:
      "https://www.larvalabs.com/public/images/cryptopunks/punk5917.png",
  },
  {
    name: "Ahmed",
    role: "Dude | Frontend Advisor",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/dlf.pt-killua-png-4294457.png",
  },
];

export default function Members() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Community core members
            </h2>
          </div>
          <nav className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
            {members.map(Member)}
          </nav>
        </div>
      </div>
    </div>
  );
}
