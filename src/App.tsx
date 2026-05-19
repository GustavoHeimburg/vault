import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.tsx";

import Dashboard from "./pages/Dashboard.tsx";
import Transactions from "./pages/Transactions.tsx";
import Analytics from "./pages/Analytics.tsx";
import Settings from "./pages/Settings.tsx";
import React from "react";

export default function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<MainLayout />}>

                    <Route index element={<Dashboard />} />

                    <Route
                        path="transactions"
                        element={<Transactions />}
                    />

                    <Route
                        path="analytics"
                        element={<Analytics />}
                    />

                    <Route
                        path="settings"
                        element={<Settings />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}