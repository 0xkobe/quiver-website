import Container from "../container/container";
import Body1 from "../text/body1";
import Headline from "../text/headline";
import Title from "../text/title";
import Products from "./products";

export default function Ecosystem() {
  return (
    <Container className="text-center">
      <Headline>Quiver Upcoming Ecosystem</Headline>
      <Title className="mt-3">
        All-in-one Solution for Stressless
        <br />
        Blockchain Investment
      </Title>
      <Body1 className="mt-6 mx-auto max-w-md md:max-w-3xl">
        Trustworthy information is everything you exchange with your time.
        Reduce your time and stress by being part of Quiver.
      </Body1>

      <img
        className="w-full h-full object-cover mt-24"
        src="https://via.placeholder.com/1216x660"
        alt=""
      />

      <Products />
    </Container>
  );
}
