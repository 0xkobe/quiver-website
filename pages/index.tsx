import Hero from "../components/hero/hero";
import Information from "../components/information/information";
import Members from "../components/members/members";
import Vision from "../components/vision/vision";
import Features from "../components/features/features";
import Ecosystem from "../components/ecosystem/ecosystem";
import NFT from "../components/nft/nft";
import Roadmap from "../components/roadmap/roadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <Members />
      <Information />
      <Vision />
      <Features />
      <Ecosystem />
      <NFT />
      <Roadmap />
    </>
  );
}
