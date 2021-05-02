import { IMember } from "./types";

export default function Member(member: IMember) {
  return (
    <a
      key={member.name}
      href="#"
      className="flex-shrink-0 group block rounded-full border border-gray-200"
    >
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-9 w-9 rounded-full ring-2 ring-gray-200"
            src={member.imageUrl}
            alt={member.name}
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            {member.name}
          </p>
          {/* <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
            {member.role}
          </p> */}
        </div>
      </div>
    </a>
  );
}
