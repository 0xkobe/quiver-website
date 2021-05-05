import { IMember } from "./types";

export default function Member(member: IMember) {
  return (
    <a
      key={member.name}
      href={member.href}
      className="rounded-full border border-primary border-opacity-10 p-2 pr-6 mx-3 mt-3"
    >
      <div className="flex items-center">
        <img
          className="inline-block h-8 w-8 rounded-full"
          src={member.imageUrl}
          alt={member.name}
        />
        <div className="ml-3">
          <p className="text-base leading-6 font-normal text-purple-900 group-hover:text-purple-700">
            {member.name}
          </p>
        </div>
      </div>
    </a>
  );
}
