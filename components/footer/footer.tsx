import Button from "../button/button";
import Container from "../container/container";
import IconSocialDiscord from "../icon/social/discord";
import IconSocialGithub from "../icon/social/github";
import IconSocialMedium from "../icon/social/medium";
import IconSocialTelegram from "../icon/social/telegram";
import IconSocialTwitter from "../icon/social/twitter";
import Headline from "../text/headline";
import Title from "../text/title";

const links = [
  { name: "Discord", icon: IconSocialDiscord, href: "#" },
  { name: "Telegram", icon: IconSocialTelegram, href: "#" },
  { name: "Twitter", icon: IconSocialTwitter, href: "#" },
  { name: "Medium", icon: IconSocialMedium, href: "#" },
  { name: "Github", icon: IconSocialGithub, href: "#" },
];

export default function Footer() {
  return (
    <Container className="rounded-2xl rounded-b-none bg-secondary bg-opacity-20 px-24 sm:px-24 lg:px-24">
      <div className="rounded-2xl px-6 py-10 bg-white overflow-hidden shadow-xl sm:px-12 sm:py-12 sm:text-center">
        <Headline>Ready to dive in?</Headline>
        <Title className="mt-3">Join the Community</Title>
        <nav className="mt-12">
          {links.map((x, i) => (
            <Button
              key={x.name}
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
