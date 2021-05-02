import { INavigationItem } from "./types";

export default function ItemWithIcon(item: INavigationItem) {
  return (
    <a
      key={item.key}
      href={item.href}
      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
    >
      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white">
        <item.icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="ml-4 text-base font-medium text-gray-900">
        {item.name}
      </div>
    </a>
  );
}
