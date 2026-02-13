import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import AddProductPage from "../pages/AddProductPage";






export const router = createBrowserRouter(
    [
        {path: '/', element: <LoginPage />},
        {path: 'dashboard', element: <DashboardPage />},
        {path: 'add', element: <AddProductPage />},
        ]
);