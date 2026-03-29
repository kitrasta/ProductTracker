import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyProducts from './pages/MyProductsPage'
import AddProduct from './pages/AddProductsPage'
import Statistics from './pages/StatisticsPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyProducts />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </>
  )
}

export default App