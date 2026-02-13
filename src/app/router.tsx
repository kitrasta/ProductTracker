import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import AddProductPage from "../pages/AddProductPage";
import StatisticPage from "../pages/StatisticPage";






export const router = createBrowserRouter(
    [
        {path: '/', element: <LoginPage />},
        {path: 'dashboard', element: <DashboardPage />},
        {path: 'add', element: <AddProductPage />},
        {path: 'statistic', element: <StatisticPage />}
        ]
);