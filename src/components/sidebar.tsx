import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-64 h-full border-r border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex flex-col z-10">

            <h1 className="text-2xl font-bold tracking-wide">
                Vault
            </h1>

            <div className="mt-10 flex flex-col gap-2">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-2xl transition-all duration-300 ${
                            isActive
                                ? "bg-white/10"
                                : "hover:bg-white/5"
                        }`
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/transactions"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-2xl transition-all duration-300 ${
                            isActive
                                ? "bg-white/10"
                                : "hover:bg-white/5"
                        }`
                    }
                >
                    Transactions
                </NavLink>

                <NavLink
                    to="/analytics"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-2xl transition-all duration-300 ${
                            isActive
                                ? "bg-white/10"
                                : "hover:bg-white/5"
                        }`
                    }
                >
                    Analytics
                </NavLink>

                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `px-4 py-3 rounded-2xl transition-all duration-300 ${
                            isActive
                                ? "bg-white/10"
                                : "hover:bg-white/5"
                        }`
                    }
                >
                    Settings
                </NavLink>

            </div>

        </aside>
    );
}