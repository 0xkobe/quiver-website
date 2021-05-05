import Container from "../container/container";
import Headline from "../title/headline";
import Products from "./products";

export default function Ecosystem() {
  return (
    <Container className="text-center">
      <Headline>Quiver Upcoming Ecosystem</Headline>
      <p className="mt-3 text-4xl leading-10 font-extrabold text-purple-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
        <span className="block">All-in-one Solution for Stressless</span>
        <span className="block">Blockchain Investment</span>
      </p>
      <p className="max-w-xl mt-6 leading-7 mx-auto text-xl text-purple-900">
        Trustworthy information is everything you exchange with your time.
        Reduce your time and stress by being part of Quiver.
      </p>

      <img
        className="w-full h-full object-cover mt-24"
        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
        alt=""
      />

      <Products />
    </Container>
  );
}
