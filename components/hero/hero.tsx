import { ChevronRightIcon } from "@heroicons/react/outline";
import Button from "../button/button";
import Container from "../container/container";
import Tag from "../tag/tag";

export default function Hero() {
  return (
    <Container className="mt-16 px-12 sm:mt-24 text-center">
      <a
        href="#"
        className="inline-flex items-center text-purple-900 bg-purple-100 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-purple-600"
      >
        <Tag>Emotional NFTs Sale</Tag>
        <span className="ml-4 text-sm">Coming July 1st 🔥</span>
      </a>
      <h1 className="mt-12 text-4xl tracking-tight font-extrabold text-purple-900 sm:text-5xl md:text-6xl">
        <span className="block">1st Community-driven</span>
        <span className="block">Blockchain Investment Protocol</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
      </p>
      <div className="mt-12 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
          <Button href="#" large shadow>
            Join our Discord
          </Button>
          <Button href="#" large shadow outlined>
            Join our Telegram
          </Button>
        </div>
      </div>
    </Container>
  );
}
