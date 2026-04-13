import { Routes, Route } from 'react-router-dom'
import ProductsPage from '../pages/ProductsPage'
import AddProductsPage from '../pages/AddProductsPage'
import StatisticsPage from '../pages/StatisticsPage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/add" element={<AddProductsPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
    </Routes>
  )
}