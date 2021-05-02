import { ChevronRightIcon } from "@heroicons/react/outline";
import Tag from "../tag/tag";

export default function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 text-center">
          <a
            href="#"
            className="inline-flex items-center text-gray-700 bg-gray-200 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-900"
          >
            <Tag>Emotional NFTs Sale</Tag>
            <span className="ml-4 text-sm">Become a community investor</span>
            <ChevronRightIcon
              className="ml-2 w-5 h-5 text-gray-500"
              aria-hidden="true"
            />
          </a>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">1st Community-driven</span>
            <span className="block text-primary-600">
              Blockchain Investment Protocol
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-500 sm:px-8"
              >
                Join our Discord
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-700 bg-white hover:bg-primary-50 sm:px-8"
              >
                Join our Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
