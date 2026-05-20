import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar.tsx";
import React from "react";

export default function MainLayout() {
    return (
        <div
            className="
                w-full
                min-h-screen
                flex
                overflow-hidden
                relative
                bg-[#09090b]
                text-white
            "
        >

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_top,#18181b_0%,#09090b_45%)]
                "
            />

            <div
                className="
                    absolute
                    top-[-200px]
                    left-[-200px]
                    w-[500px]
                    h-[500px]
                    bg-white/10
                    rounded-full
                    blur-[140px]
                    opacity-60
                "
            />

            <div
                className="
                    absolute
                    bottom-[-250px]
                    right-[-200px]
                    w-[500px]
                    h-[500px]
                    bg-zinc-400/10
                    rounded-full
                    blur-[160px]
                    opacity-50
                "
            />

            <div
                className="
                    absolute
                    top-[30%]
                    left-[40%]
                    w-[300px]
                    h-[300px]
                    bg-white/[0.03]
                    rounded-full
                    blur-[120px]
                "
            />

            <div className="relative z-10 flex w-full">

                <Sidebar />

                <main
                    className="
                        flex-1
                        p-10
                        overflow-y-auto
                    "
                >

                    <Outlet />

                </main>

            </div>

        </div>
    );
}