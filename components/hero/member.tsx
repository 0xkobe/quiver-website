import Body2 from "../text/body2";
import { IMember } from "./types";

export default function Member(member: IMember) {
  return (
    <a
      key={member.name}
      href={member.href}
      className="rounded-full border border-purple-200 p-2 pr-6 mx-3 mt-3"
    >
      <div className="flex items-center">
        <img
          className="inline-block h-8 w-8 rounded-full"
          src={member.imageUrl}
          alt={member.name}
        />
        <Body2 className="ml-3">{member.name}</Body2>
      </div>
    </a>
  );
}
