import mockProducts from '../data/mockProducts'
import ProductTable from '../components/products/ProductTable'

function MyProductsPage() {
  return (
    <div>
      <ProductTable products={mockProducts} />
    </div>
  )
}

export default MyProductsPage