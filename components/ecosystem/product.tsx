import { IProduct } from "./types";

export default function Product(product: IProduct) {
  return (
    <div
      key={product.name}
      className="text-left bg-white rounded-2xl shadow-xl px-6 pt-16 pb-8"
    >
      <div className="absolute top-0 p-5 inline-block bg-purple-100 rounded-xl shadow-lg transform -translate-y-1/2">
        <product.icon className="h-6 w-6 text-purple-900" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold leading-6 text-purple-900">
        {product.name}
      </h3>
      <p className="mt-3 text-base leading-6 font-normal text-purple-900">
        {product.description}
      </p>
      <a className="block mt-6 text-primary">Coming soon 🔥</a>
    </div>
  );
}
