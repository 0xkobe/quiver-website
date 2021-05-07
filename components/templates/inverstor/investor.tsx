import { Fragment } from "react";
import Container from "../../container/container";
import IconCryptoBtc from "../../icon/crypto/BTC";
import IconCryptoEth from "../../icon/crypto/ETH";
import Newsletter from "../../newsletter/newsletter";
import Body1 from "../../text/body1";
import Body2 from "../../text/body2";
import Headline from "../../text/headline";
import Subtitle2 from "../../text/subtitle2";
import Title from "../../text/title";
import Benefit from "./benefit";
import NFT from "./nft";
import { IBenefit, INFT } from "./types";

const nfts: INFT[] = [
  {
    name: "Fish",
    category: "Silver",
    crypto: IconCryptoBtc,
    progress: "up",
    imageUrl: "/nfts/fish/silver/happy.png",
  },
  {
    name: "Dragon",
    category: "Platinium",
    crypto: IconCryptoEth,
    progress: "stable",
    imageUrl: "/nfts/dragon/platinum/normal.png",
  },
  {
    name: "Bull",
    category: "Bronze",
    crypto: IconCryptoBtc,
    progress: "down",
    imageUrl: "/nfts/bull/bronze/angry.png",
  },
  {
    name: "Dear",
    category: "Bronze",
    crypto: IconCryptoEth,
    progress: "down",
    imageUrl: "/nfts/deer/bronze/angry.png",
  },
  {
    name: "Bear",
    category: "Diamond",
    crypto: IconCryptoBtc,
    progress: "stable",
    imageUrl: "/nfts/bear/diamond/normal.png",
  },
  {
    name: "Whale",
    category: "Diamond",
    crypto: IconCryptoEth,
    progress: "up",
    imageUrl: "/nfts/whale/diamond/happy.png",
  },
];

const benefits: IBenefit[] = [
  {
    name: "Emotional NFT",
    category: "Community Art NFTs",
    items: [
      "Lovely art for stressless investment",
      "Get access to locked assets sale",
      "Community gamification",
    ],
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
          <Body1 className="mt-6">
            Quiver Emotional NFTs are designed to be part of our upcoming
            stressless portfolio tracker. They give you an ability to buy
            discounted QSTK token along with voting power.
          </Body1>
          <Body2 className="mt-12">
            <strong className="text-primary font-bold">Coming June 1st</strong>,
            sign up to get notified of the sale
          </Body2>
          <Newsletter className="my-6" />
        </div>
        <div className="col-span-3 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-11">
          {benefits.map(({ category, items, name }, i) => (
            <Fragment key={i}>
              {i > 0 && (
                <div className="flex items-center">
                  <span className="border border-purple-300 rounded-full text-purple-300 w-9 h-9 px-2 py-1 text-center mx-auto">
                    +
                  </span>
                </div>
              )}
              <Benefit name={name} category={category} items={items} />
            </Fragment>
          ))}
        </div>
      </div>
    </Container>
  );
}
