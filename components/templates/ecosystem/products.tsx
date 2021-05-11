import { FunctionComponent } from 'react'
import IconAnalyse from '../../icon/analyse'
import IconIDAO from '../../icon/idao'
import IconLending from '../../icon/lending'
import Product from './product'

const supportLinks = [
  {
    name: 'Quiver IDAO',
    description:
      'The first investment DAO running on Quiver Protocol. Any users could join here for co-investment with other professionals and get voting power through our QSTK Token for the funds movement.',
    icon: IconIDAO,
  },
  {
    name: 'Market Analysis Group',
    description:
      'Market Analysis Group will be organized to scout and explore new investment opportunities to give the community well informed financial decisions through vetted information and lead them to the right direction.',
    icon: IconAnalyse,
  },
  {
    name: 'Lending & Borrowing',
    description:
      'Lending & Borrowing is a bonus service for reputational users. Community members provide lending for reputation collateral. As an option, high reputation users can borrow directly from the protocol treasury.',
    icon: IconLending,
  },
]

const Products: FunctionComponent = () => {
  return (
    <section
      className="-mt-12 max-w-7xl mx-auto relative z-10"
      aria-labelledby="contact-heading"
    >
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-6">
        {supportLinks.map((x) => (
          <Product key={x.name} product={x} />
        ))}
      </div>
    </section>
  )
}

export default Products
