import Button from "../button/button";
import Container from "../container/container";
import IconSocialDiscord from "../icon/social/discord";
import IconSocialGithub from "../icon/social/github";
import IconSocialMedium from "../icon/social/medium";
import IconSocialTelegram from "../icon/social/telegram";
import IconSocialTwitter from "../icon/social/twitter";
import IconQuiver from "../logo/icon";
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
    <Container className="rounded-2xl rounded-b-none bg-gradient-to-r from-purple-100 to-purple-50 px-24 sm:px-24 lg:px-24">
      <div className="rounded-2xl px-6 py-10 bg-white overflow-hidden shadow-xl sm:px-12 sm:py-12 text-center">
        <IconQuiver className="mx-auto" />
        <Headline className="mt-12 block">Ready to dive in?</Headline>
        <Title className="mt-3">Join the Community</Title>
        <nav className="mt-12 grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {links.map((x, i) => (
            <Button key={x.name} href={x.href} icon={x.icon} outlined>
              {x.name}
            </Button>
          ))}
        </nav>
      </div>
    </Container>
  );
}
