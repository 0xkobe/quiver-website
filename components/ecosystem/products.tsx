import IconAnalyse from "../icon/analyse";
import IconIDAO from "../icon/idao";
import IconLending from "../icon/lending";
import Product from "./product";

const supportLinks = [
  {
    name: "Quiver IDAO",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: IconIDAO,
  },
  {
    name: "Market Analysis Group",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: IconAnalyse,
  },
  {
    name: "Lending & Borrowing",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: IconLending,
  },
];

export default function Products() {
  return (
    <section
      className="-mt-12 max-w-7xl mx-auto relative z-10"
      aria-labelledby="contact-heading"
    >
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-6">
        {supportLinks.map(Product)}
      </div>
    </section>
  );
}
