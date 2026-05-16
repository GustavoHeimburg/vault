import React from "react";
import { motion } from "framer-motion";

import {
    Wallet,
    TrendingDown,
    BarChart3,
} from "lucide-react";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";

const data = [
    { month: "Jan", value: 4000 },
    { month: "Feb", value: 3000 },
    { month: "Mar", value: 5000 },
    { month: "Apr", value: 4780 },
    { month: "May", value: 5890 },
    { month: "Jun", value: 6390 },
    { month: "Jul", value: 7490 },
];

export default function App() {
    return (
        <div className="w-full h-screen bg-[#050505] text-white flex overflow-hidden">

            {/* SIDEBAR */}
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

            {/* CONTENT */}
            <main className="flex-1 p-10 overflow-y-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h2 className="text-5xl font-bold tracking-tight">
                        Dashboard
                    </h2>

                    <p className="text-zinc-500 mt-2 text-lg">
                        Welcome back, Gustavo.
                    </p>

                </motion.div>

                {/* CARDS */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-3 gap-6 mt-10"
                >

                    {/* CARD 1 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.03)]"
                    >

                        <div className="flex items-center justify-between">

                            <p className="text-zinc-500 text-sm">
                                Total Balance
                            </p>

                            <Wallet size={20} />

                        </div>

                        <h3 className="text-4xl font-bold mt-4">
                            R$ 12.450
                        </h3>

                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.03)]"
                    >

                        <div className="flex items-center justify-between">

                            <p className="text-zinc-500 text-sm">
                                Monthly Expenses
                            </p>

                            <TrendingDown size={20} />

                        </div>

                        <h3 className="text-4xl font-bold mt-4">
                            R$ 2.120
                        </h3>

                    </motion.div>

                    {/* CARD 3 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.03)]"
                    >

                        <div className="flex items-center justify-between">

                            <p className="text-zinc-500 text-sm">
                                Investments
                            </p>

                            <BarChart3 size={20} />

                        </div>

                        <h3 className="text-4xl font-bold mt-4">
                            R$ 8.930
                        </h3>

                    </motion.div>

                </motion.div>

                {/* CHART */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-8 bg-white/[0.03] border border-white/10 rounded-3xl p-6 h-[350px] shadow-[0_0_40px_rgba(255,255,255,0.02)]"
                >

                    <div className="mb-6">

                        <h3 className="text-xl font-semibold">
                            Financial Overview
                        </h3>

                        <p className="text-zinc-500 text-sm mt-1">
                            Your balance evolution
                        </p>

                    </div>

                    <ResponsiveContainer width="100%" height="100%">

                        <AreaChart data={data}>

                            <defs>

                                <linearGradient
                                    id="colorBalance"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >

                                    <stop
                                        offset="0%"
                                        stopColor="#ffffff"
                                        stopOpacity={0.35}
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#ffffff"
                                        stopOpacity={0}
                                    />

                                </linearGradient>

                            </defs>

                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#ffffff"
                                strokeWidth={3}
                                fill="url(#colorBalance)"
                                animationDuration={2000}
                            />

                        </AreaChart>

                    </ResponsiveContainer>

                </motion.div>

            </main>

        </div>
    );
}