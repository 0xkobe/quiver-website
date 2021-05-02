import { IProduct } from "./types";

export default function Product(product: IProduct) {
  return (
    <div
      key={product.name}
      className="flex flex-col bg-white rounded-2xl shadow-xl"
    >
      <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
        <div className="absolute top-0 p-5 inline-block bg-primary-600 rounded-xl shadow-lg transform -translate-y-1/2">
          <product.icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-medium text-gray-900">{product.name}</h3>
        <p className="mt-4 text-base text-gray-500">{product.description}</p>
      </div>
      <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
        <span className="text-base font-medium text-primary-700 hover:text-primary-600">
          Coming soon
        </span>
      </div>
    </div>
  );
}
