import Container from "../container/container";
import Newsletter from "../newsletter/newsletter";
import Headline from "../text/headline";
import Subtitle2 from "../text/subtitle";
import Title from "../text/title";
import Benefit from "./benefit";
import NFT from "./nft";
import { IBenefit, INFT } from "./types";

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

const benefits: IBenefit[] = [
  {
    name: "Emotional NFT",
    items: [
      "Lovely art for stressless investment",
      "Get access to locked assets sale",
      "Community gamification",
    ],
    category: "Community Art NFTs",
  },
  {
    name: "QREP Token",
    category: "Reputation Token",
    items: [
      "Get initial reputation in the ecosystem with QREP Token",
      "Access DICP voting power",
      "Unlock DICP protocol rewards",
      "Trust from the community",
    ],
  },
  {
    name: "QSTK Token",
    category: "Economy Token",
    items: [
      "Receive QSTK Token at a discounted price (locked asset)",
      "Access Quiver IDAO voting power",
      "Get discounted price on information purchase from the DICP",
      "Unlock DICP protocol rewards",
    ],
  },
];

export default function Investor() {
  return (
    <Container>
      <div className="lg:grid lg:grid-cols-5 lg:grid-flow-col-dense lg:gap-8">
        <div className="col-span-2 px-4 mx-auto sm:px-6 lg:py-16 lg:mx-0 lg:px-0">
          <Headline>Emotional NFTs sale</Headline>
          <Title className="mt-3">Become a Community Investor</Title>
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
              <NFT nft={x} index={i} key={i} />
            ))}
          </div>
        </div>
      </div>

      <Subtitle2 className="mt-12 text-center">
        Early Investors Bundle Benefits
      </Subtitle2>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {benefits.map(({ category, items, name }, i) => (
            <Benefit name={name} category={category} items={items} key={i} />
          ))}
        </div>
      </div>
    </Container>
  );
}
