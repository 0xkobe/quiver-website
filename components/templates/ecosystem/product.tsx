import Body2 from "../../text/body2";
import { IProduct } from "./types";

export default function Product(product: IProduct) {
  return (
    <div
      key={product.name}
      className="relative text-left bg-white rounded-2xl shadow-xl px-6 pt-16 pb-8"
    >
      <div className="absolute top-0 p-5 inline-block bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl shadow-lg transform -translate-y-1/2">
        <product.icon className="text-purple-900" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold leading-6 text-purple-900">
        {product.name}
      </h3>
      <Body2 className="mt-3">{product.description}</Body2>
      <a className="block mt-6 text-primary">Coming soon 🔥</a>
    </div>
  );
}
