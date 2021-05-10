import { INavigationItem } from "./types";

export default function Item(item: INavigationItem) {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById(item.id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      key={item.key}
      href={item.href ? item.href : `#${item.id}`}
      onClick={item.id && handleClick}
      className="text-base text-gray-500 hover:text-gray-900"
    >
      {item.name}
    </a>
  );
}
