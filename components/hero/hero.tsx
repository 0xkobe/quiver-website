import { PropsWithChildren } from "react";
import Button from "../button/button";
import Container from "../container/container";
import Tag from "../tag/tag";
import MainTitle from "../title/main-title";
import Subtitle2 from "../title/subtitle";
import Member from "./member";
import { IMember } from "./types";

type IProps = {
  members: IMember[];
};

export default function Hero(props: PropsWithChildren<IProps>) {
  return (
    <Container className="px-12 text-center">
      <a
        href="#"
        className="inline-flex items-center text-purple-900 bg-purple-100 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-purple-600"
      >
        <Tag>Emotional NFTs Sale</Tag>
        <span className="ml-4 text-sm">Coming July 1st 🔥</span>
      </a>

      <MainTitle className="mt-12">
        <span className="block">1st Community-driven</span>
        <span className="block">Blockchain Investment Protocol</span>
      </MainTitle>
      <p className="mt-3 max-w-md mx-auto text-base text-purple-900 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </p>

      <div className="mt-12 mb-24 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
          <Button href="#" large shadow>
            Join our Discord
          </Button>
          <Button href="#" large shadow outlined>
            Join our Telegram
          </Button>
        </div>
      </div>

      <Subtitle2 className="mt-12">Community core members</Subtitle2>
      <nav className="mt-12 flex flex-wrap justify-center">
        {props.members.map(Member)}
      </nav>
    </Container>
  );
}
