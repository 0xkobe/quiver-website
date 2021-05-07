import { INavigationItem } from "./types";

export default function Item(item: INavigationItem) {
  return (
    <a
      key={item.key}
      href={item.href}
      className="text-base text-gray-500 hover:text-gray-900"
    >
      {item.name}
    </a>
  );
}
