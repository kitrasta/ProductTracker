import StatusCards from '../features/products/components/StatusCards/StatusCards'
import TableProducts from '../features/products/components/TableProducts/TableProducts'
import ProductFilters from '../features/products/components/ProductFilters/ProductFilters'
import Pagination from '../features/products/components/Pagination/Pagination'
export default function ProductsPage() {
  return (
    <div>
      <StatusCards />
      <ProductFilters />
      <TableProducts />
      <Pagination />

    </div>
  )
}