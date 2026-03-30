import mockProducts from '../data/mockProducts'
import ProductTable from '../components/products/ProductTable'
import StatCard from '../components/ui/StatCards'
import { getProductStatus } from '../utils/productUtils'
import './MyProductsPage.css'

function MyProductsPage() {
  const expired = mockProducts.filter(p => getProductStatus(p.expiryDate) === 'expired').length
  const warning = mockProducts.filter(p => getProductStatus(p.expiryDate) === 'warning').length
  const ok = mockProducts.filter(p => getProductStatus(p.expiryDate) === 'ok').length

  return (
    <div className='page'>
      <div className='stat-cards'>
        <StatCard type='warning' count={warning} />
        <StatCard type='expired' count={expired} />
        <StatCard type='ok' count={ok} />
      </div>

      <h2 className='page__title'>Мои Продукты</h2>

      <ProductTable products={mockProducts} />
    </div>
  )
}

export default MyProductsPage