import Head from "next/head";
import Hero from "../components/templates/hero/hero";
import Information from "../components/templates/information/information";
import Features from "../components/templates/features/features";
import Ecosystem from "../components/templates/ecosystem/ecosystem";
import Investor from "../components/templates/inverstor/investor";
import Roadmap from "../components/templates/roadmap/roadmap";
import { IMember } from "../components/templates/hero/types";

const members: IMember[] = [
  {
    name: "216k155",
    role: "Co-founder | Marketing Manager",
    imageUrl: "/members/216k155.png",
  },
  {
    name: "Jun",
    role: "Co-founder | Strateger",
    imageUrl: "/members/jun.png",
  },
  {
    name: "Andre",
    role: "Co-founder | Technical Manager",
    imageUrl: "/members/andre.png",
  },
  {
    name: "Akira",
    role: "Co-founder | Project Manager",
    imageUrl: "/members/akira.png",
  },
  {
    name: "Evil",
    role: "Co-founder | Design manager",
    imageUrl: "/members/evil.png",
  },
  {
    name: "Eugen",
    role: "Dude | Technical Advisor",
    imageUrl: "/members/eugen.png",
  },
  {
    name: "Adidust.eth",
    role: "Dude | Marketing Advisor",
    imageUrl: "/members/adidust.eth.png",
  },
  {
    name: "Ahmed",
    role: "Dude | Frontend Advisor",
    imageUrl: "/members/ahmed.png",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Quiver Protocol - 1st Community-driven Blockchain Investment Protocol
        </title>
        <meta
          name="description"
          content="Explore Investment opportunities market driven by the Quiver Community. Find the most profitable information and improve investment decisions, fast, easy and secure."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero members={members} />
      <Information />
      <Features />
      <Ecosystem />
      <Investor />
      <Roadmap />
    </>
  );
}
