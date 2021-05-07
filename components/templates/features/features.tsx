import { DownloadIcon } from "@heroicons/react/outline";
import Button from "../../button/button";
import Container from "../../container/container";
import Benefits from "./benefits";
import Headline from "../../text/headline";
import Title from "../../text/title";
import Subtitle from "../../text/subtitle";
import Body1 from "../../text/body1";
import Body2 from "../../text/body2";

export default function Protocol() {
  return (
    <Container className="text-center">
      <Headline>Quiver Community Vision</Headline>
      <Title className="mt-3">An Innovative Way to Value Information</Title>
      <Body1 className="mt-6 mx-auto max-w-md md:max-w-4xl">
        Information is monetized to earn full potential.
        <br />
        Discover how it is converted to real-value NFTs.
      </Body1>

      <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-8 mt-24 text-left">
        <div className="px-4 mx-auto sm:px-6 lg:pt-16 lg:mx-0 lg:px-0">
          <Subtitle>Decentralized Information Collector Protocol</Subtitle>
          <Body2 className="mt-6">
            DICP, the backbone of Quiver Protocol, is the first ever
            decentralized protocol to collect information to make it beneficial
            for the community. This protocol is run by the information
            collectors, verifiers, purchasers and the governance system.
          </Body2>
          <div className="mt-6">
            <Button href="#" icon={DownloadIcon} text shadow>
              Download Whitepaper
            </Button>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <img
            className="rounded-xl border border-purple-200"
            src="https://via.placeholder.com/696x500/fff"
            alt=""
          />
        </div>
      </div>

      <Benefits />

      <div className="mt-12 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-8 text-left">
        <div className="px-4 mx-auto sm:px-6 lg:pt-16 lg:mx-0 lg:px-0 lg:col-start-2">
          <Subtitle>
            Reputation Based Community: <br />
            The Source of Trust
          </Subtitle>
          <Body2 className="mt-6">
            Reputation doesn’t have a valuable factor and it’s hard to know who
            to trust. Quiver introduces tokenized reputation through our QREP
            Token to show users’ value in the ecosystem and mutual benefits
            between information providers and investors. <br />
            The better you do, the more reputation you get. The more reputation
            you get, the community’s level of trust in you increases.
          </Body2>
          <div className="mt-6">
            <Button href="#" icon={DownloadIcon} text shadow>
              Download Whitepaper
            </Button>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <img
            className="rounded-xl border border-purple-200"
            src="https://via.placeholder.com/696x500/fff"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
}
