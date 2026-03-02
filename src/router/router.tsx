import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "../shared/MainLayout"
import { AddPage } from "../pages/AddPage"
import { ProductPage } from "../pages/ProductPage"
import { StatsPage } from "../pages/StatsPage"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:[
            index: true,
            element: <Navigate to="/products" replace />,
        ] 
    },
    {
    path: 'products',
    element: <ProductPage />,
    },
    {
        path: 'add',
        element: <AddPage />,
    },
    {
        path: 'stats',
        element: <StatsPage />
    }
])
