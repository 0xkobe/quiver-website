import Button from "../../button/button";
import ContainerWithBackground from "../../container/container-with-background";
import IconSocialDiscord from "../../icon/social/discord";
import IconSocialFacebook from "../../icon/social/facebook";
import IconSocialGithub from "../../icon/social/github";
import IconSocialMedium from "../../icon/social/medium";
import IconSocialTelegram from "../../icon/social/telegram";
import IconSocialTwitter from "../../icon/social/twitter";
import Body2 from "../../text/body2";
import Headline from "../../text/headline";
import Title from "../../text/title";

const links = [
  {
    name: "Discord",
    icon: IconSocialDiscord,
    href: "https://discord.com/invite/jqemf5XRMj",
  },
  {
    name: "Telegram",
    icon: IconSocialTelegram,
    href: "https://t.me/quiveridaochat",
  },
  {
    name: "Twitter",
    icon: IconSocialTwitter,
    href: "https://twitter.com/QuiverProtocol",
  },
  {
    name: "Facebook",
    icon: IconSocialFacebook,
    href: "https://www.facebook.com/Quiver-Protocol-106899561569141",
  },
  {
    name: "Medium",
    icon: IconSocialMedium,
    href: "https://quiverprotocol.medium.com/",
  },
  {
    name: "Github",
    icon: IconSocialGithub,
    href: "https://github.com/QuiverCommunity",
  },
];

export default function Footer() {
  return (
    <ContainerWithBackground className="xl:rounded-b-none">
      <img src="/icon.svg" className="mx-auto" />
      <Headline className="mt-12 inline-block">Ready to dive in?</Headline>
      <Title className="mt-3">Join the Community</Title>
      <nav className="mt-12 grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {links.map((x, i) => (
          <Button key={x.name} href={x.href} icon={x.icon} outlined>
            {x.name}
          </Button>
        ))}
      </nav>
      <Body2 className="hidden lg:block absolute bottom-8 right-0 left-0">
        © {new Date().getFullYear()} Quiver. All rights reserved.
      </Body2>
    </ContainerWithBackground>
  );
}
