import Button from "../button/button";
import Container from "../container/container";

const links = [
  { name: "Discord", icon: "", href: "#" },
  { name: "Telegram", icon: "", href: "#" },
  { name: "Twitter", icon: "", href: "#" },
  { name: "Medium", icon: "", href: "#" },
  { name: "Github", icon: "", href: "#" },
];

export default function Footer() {
  return (
    <Container className="rounded-2xl rounded-b-none bg-secondary bg-opacity-20 px-24 sm:px-24 lg:px-24">
      <div className="rounded-2xl px-6 py-10 bg-white overflow-hidden shadow-xl sm:px-12 sm:py-12 sm:text-center">
        <h2 className="text-base font-semibold leading-6 text-primary tracking-wide uppercase">
          Ready to dive in?
        </h2>
        <p className="mt-3 text-purple-900 text-4xl leading-10 font-extrabold">
          Join the Community
        </p>
        <nav className="mt-12">
          {links.map((x, i) => (
            <Button
              key="name"
              href={x.href}
              icon={x.icon}
              outlined
              className={i === 0 ? "" : "ml-6"}
            >
              {x.name}
            </Button>
          ))}
        </nav>
      </div>
    </Container>
  );
}
