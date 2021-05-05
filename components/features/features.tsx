import { DownloadIcon } from "@heroicons/react/outline";
import Button from "../button/button";
import Container from "../container/container";
import Benefits from "./benefits";
import Headline from "../title/headline";
import Title from "../title/title";
import Subtitle from "../title/subtitle";

export default function Protocol() {
  return (
    <Container className="text-center">
      <Headline>Quiver Community Vision</Headline>
      <Title className="mt-3">An Innovative Way to Value Information</Title>
      <p className="mt-6 leading-7 mx-auto text-xl text-purple-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam
        voluptatum cupiditate veritatis in, accusamus quisquam.
      </p>

      <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-8 mt-24 text-left">
        <div className="px-4 mx-auto sm:px-6 lg:pt-16 lg:mx-0 lg:px-0">
          <Subtitle>Decentralized Information Collector Protocol</Subtitle>
          <p className="mt-4 text-base leading-6 text-purple-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            minima sequi recusandae, porro maiores officia assumenda aliquam
            laborum ab aliquid veritatis impedit odit adipisci optio iste
            blanditiis facere. Totam, velit.
          </p>
          <div className="mt-6">
            <Button href="#" icon={DownloadIcon} text shadow>
              Download Whitepaper
            </Button>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="rounded-xl ring-1 ring-black ring-opacity-5"
              src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <Benefits />

      <div className="mt-12 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-8 text-left">
        <div className="px-4 mx-auto sm:px-6 lg:pt-16 lg:mx-0 lg:px-0 lg:col-start-2">
          <Subtitle>Reputation Based Community: The Source of Trust</Subtitle>
          <p className="mt-4 text-base leading-6 text-purple-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
            obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
            quod quibusdam expedita nemo.
          </p>
          <div className="mt-6">
            <Button href="#" icon={DownloadIcon} text shadow>
              Download Whitepaper
            </Button>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="rounded-xl ring-1 ring-black ring-opacity-5"
              src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
