import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AddPage } from '../pages/AddPage'
import { ProductPage } from '../pages/ProductPage'
import { StatsPage } from '../pages/StatsPage'
import { MainLayout } from '../shared/MainLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/products' replace />,
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
        element: <StatsPage />,
      },
    ],
  },
])
