import Container from "../container/container";

export default function Information() {
  return (
    <Container>
      <div className="rounded-2xl bg-secondary bg-opacity-20 sm:p-24">
        <div className="relative rounded-2xl px-6 py-10 bg-secondary bg-opacity-20 sm:bg-white overflow-hidden shadow-xl sm:px-12 sm:py-12">
          <div className="relative">
            <div className="sm:text-center">
              <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
                🔮 &rarr; Q &rarr; 🤑
              </h2>
              <p className="mt-6 font-normal mx-auto max-w-2xl text-lg text-purple-900">
                Investment information are hard to value, access and trust.
                <br />
                Our mission is to make them{" "}
                <span className="font-bold text-primary">profitable</span>,{" "}
                <span className="font-bold text-primary">trustable</span> and{" "}
                <span className="font-bold text-primary">accessible</span> to
                everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
