import {
    LayoutDashboard,
    ArrowLeftRight,
    BarChart3,
    Settings,
    Wallet,
} from "lucide-react";
import React from "react";

import { NavLink } from "react-router-dom";

const links = [
    {
        to: "/",
        label: "Painel",
        icon: LayoutDashboard,
    },
    {
        to: "/transactions",
        label: "Transações",
        icon: ArrowLeftRight,
    },
    {
        to: "/analytics",
        label: "Análises",
        icon: BarChart3,
    },
    {
        to: "/settings",
        label: "Configurações",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <aside
            className="
                w-72
                h-screen
                border-r
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-6
                flex
                flex-col
                justify-between
                sticky
                top-0
            "
        >
            <div>

                <div className="flex items-center gap-3">

                    <div
                        className="
                            w-12
                            h-12
                            rounded-2xl
                            bg-white
                            text-black
                            flex
                            items-center
                            justify-center
                            shadow-lg
                        "
                    >
                        <Wallet size={22} />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Vault
                        </h1>

                        <span className="text-sm text-zinc-400">
                            Painel Financeiro
                        </span>
                    </div>

                </div>

                <nav className="mt-12 flex flex-col gap-3">

                    {links.map((link) => {
                        const Icon = link.icon;

                        return (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `
                                    flex
                                    items-center
                                    gap-3
                                    px-4
                                    py-4
                                    rounded-2xl
                                    transition-all
                                    duration-300
                                    border
                                    ${
                                        isActive
                                            ? `
                                                bg-white/10
                                                border-white/10
                                                shadow-lg
                                            `
                                            : `
                                                border-transparent
                                                hover:bg-white/[0.04]
                                                hover:border-white/10
                                            `
                                    }
                                `
                                }
                            >
                                <Icon size={20} />

                                <span className="font-medium">
                                    {link.label}
                                </span>
                            </NavLink>
                        );
                    })}

                </nav>

            </div>

            <div
                className="
                    p-4
                    rounded-3xl
                    bg-white/[0.03]
                    border
                    border-white/10
                    backdrop-blur-xl
                "
            >
                <p className="text-sm text-zinc-400">
                    Saldo Atual
                </p>

                <h2 className="text-3xl font-bold mt-2">
                    R$ 12.450
                </h2>

                <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[72%] h-full bg-white rounded-full" />
                </div>
            </div>

        </aside>
    );
}