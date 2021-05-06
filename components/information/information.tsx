import Container from "../container/container";
import IconArrowSmall from "../icon/arrow-small";
import IconQuiver from "../logo/icon";

export default function Information() {
  return (
    <Container className="rounded-2xl bg-secondary bg-opacity-20 px-24 sm:px-24 lg:px-24">
      <div className="rounded-2xl px-6 py-10 bg-white overflow-hidden shadow-xl sm:px-12 sm:py-12 sm:text-center">
        <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
          🤔
          <IconArrowSmall className="inline mx-2 -mt-2" />{" "}
          <IconQuiver className="inline w-10 h-10 align-top" />{" "}
          <IconArrowSmall className="inline mx-2 -mt-2" />
          🤑
        </h2>
        <p className="mt-6 text-2xl leading-8 font-normal mx-auto max-w-2xl text-purple-900">
          Investment information is hard to value, access and trust.
          <br />
          Our mission is to make our pre-vetted investment information,{" "}
          <span className="font-bold text-primary">profitable</span>,{" "}
          <span className="font-bold text-primary">trustable</span> and{" "}
          <span className="font-bold text-primary">accessible</span> to
          everyone.
        </p>
      </div>
    </Container>
  );
}
