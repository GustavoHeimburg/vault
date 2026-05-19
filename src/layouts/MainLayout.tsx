import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar.tsx";
import React from "react";

export default function MainLayout() {
    return (
        <div className="w-full h-screen bg-[#050505] text-white flex overflow-hidden relative">

            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />

            <div className="absolute bottom-[-250px] right-[-200px] w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px]" />

            <Sidebar />

            <main className="flex-1 p-10 overflow-y-auto z-10">

                <Outlet />

            </main>

        </div>
    );
}