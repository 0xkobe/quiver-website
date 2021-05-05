import Container from "../container/container";
import Newsletter from "../newsletter/newsletter";
import Benefits from "./benefits";
import NFT from "./nft";
import { INFT } from "./types";

const nfts: INFT[] = [
  {
    name: "Fish",
    category: "Silver",
    crypto: "BTC",
    progress: "stable",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/Evil.png",
  },
  {
    name: "Dragon",
    category: "Platinium",
    crypto: "ETH",
    progress: "stable",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/Evil.png",
  },
  {
    name: "Bull",
    category: "Bronze",
    crypto: "BTC",
    progress: "down",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/Evil.png",
  },
  {
    name: "Dear",
    category: "Bronze",
    crypto: "ETH",
    progress: "down",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/Evil.png",
  },
  {
    name: "Bear",
    category: "Silver",
    crypto: "BTC",
    progress: "stable",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/Evil.png",
  },
  {
    name: "Whale",
    category: "Diamond",
    crypto: "ETH",
    progress: "up",
    imageUrl:
      "https://quivercommunity.github.io/quiver-website/images/Evil.png",
  },
];

export default function Investor() {
  return (
    <Container>
      <div className="lg:grid lg:grid-cols-5 lg:grid-flow-col-dense lg:gap-8">
        <div className="col-span-2 px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <h2 className="text-base font-semibold leading-6 text-primary tracking-wide uppercase">
            Emotional NFTs sale
          </h2>
          <p className="mt-3 text-4xl leading-10 font-extrabold text-purple-900 sm:tracking-tight">
            Become a Community Investor
          </p>
          <p className="mt-6 leading-7 text-xl text-purple-900">
            Quiver Emotional NFTs are designed to be part of our upcoming
            stressless portfolio tracker. They give you an ability to buy
            discounted QSTK token along with voting power.
          </p>
          <p className="mt-12 text-base leading-6 font-normal text-purple-900">
            <span className="text-primary">Coming July 1st</span>, sign up to
            get notified of the sale
          </p>
          <div className="my-6">
            <Newsletter />
          </div>
        </div>
        <div className="col-span-3 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {nfts.map((x, i) => (
              <NFT nft={x} index={i} />
            ))}
          </div>
        </div>
      </div>

      <Benefits />
    </Container>
  );
}
