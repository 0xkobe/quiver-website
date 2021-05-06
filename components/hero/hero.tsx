import { PropsWithChildren } from "react";
import Button from "../button/button";
import Container from "../container/container";
import Tag from "../text/tag";
import Body1 from "../text/body1";
import MainTitle from "../text/main-title";
import Subtitle2 from "../text/subtitle2";
import Member from "./member";
import { IMember } from "./types";
import IconSocialDiscord from "../icon/social/discord";
import IconSocialTelegram from "../icon/social/telegram";

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

      <Body1 className="mt-6 mx-auto max-w-md md:max-w-3xl">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </Body1>

      <div className="mt-12 mb-24 mx-auto sm:flex sm:justify-center">
        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
          <Button href="#" large shadow icon={IconSocialDiscord}>
            Join our Discord
          </Button>
          <Button href="#" large shadow outlined icon={IconSocialTelegram}>
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
