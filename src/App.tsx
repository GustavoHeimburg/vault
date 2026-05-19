import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.tsx";

import DashboardPage from "./pages/DashboardPage.tsx";
import TransactionsPage from "./pages/TransactionsPage.tsx";
import AnalyticsPage from "./pages/AnalyticsPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import React from "react";

export default function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<MainLayout />}>

                    <Route index element={<DashboardPage />} />

                    <Route
                        path="transactions"
                        element={<TransactionsPage />}
                    />

                    <Route
                        path="analytics"
                        element={<AnalyticsPage />}
                    />

                    <Route
                        path="settings"
                        element={<SettingsPage />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}