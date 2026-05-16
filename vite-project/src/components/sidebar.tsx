import React from "react";

export default function Sidebar() {
    return (
        <aside className="w-64 h-full border-r border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex flex-col">

            <h1 className="text-2xl font-bold tracking-wide">
                Vault
            </h1>

            <div className="mt-10 flex flex-col gap-2">

                <button className="text-left px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-all duration-300">
                    Dashboard
                </button>

                <button className="text-left px-4 py-3 rounded-2xl hover:bg-white/5 transition-all duration-300">
                    Transactions
                </button>

                <button className="text-left px-4 py-3 rounded-2xl hover:bg-white/5 transition-all duration-300">
                    Analytics
                </button>

                <button className="text-left px-4 py-3 rounded-2xl hover:bg-white/5 transition-all duration-300">
                    Settings
                </button>

            </div>

        </aside>
    );
}