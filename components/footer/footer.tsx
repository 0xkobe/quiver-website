import Button from "../button/button";
import ContainerWithBackground from "../container/container-with-background";
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
    <ContainerWithBackground className="rounded-b-none">
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
    </ContainerWithBackground>
  );
}
