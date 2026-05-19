import {
    Wallet,
    TrendingDown,
    BarChart3,
} from "lucide-react";
import React from "react";

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

export default function Dashboard() {
    return (
        <>
            {/* HEADER */}

            <div>
                <h2 className="text-5xl font-bold tracking-tight">
                    Dashboard
                </h2>

                <p className="text-zinc-500 mt-2 text-lg">
                    Welcome back, Gustavo.
                </p>
            </div>

            {/* CARDS */}

            <div className="grid grid-cols-3 gap-6 mt-10">

                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.05] transition-all duration-300">

                    <div className="flex items-center justify-between">
                        <p className="text-zinc-500 text-sm">
                            Total Balance
                        </p>

                        <Wallet size={20} />
                    </div>

                    <h3 className="text-4xl font-bold mt-4">
                        R$ 12.450
                    </h3>

                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.05] transition-all duration-300">

                    <div className="flex items-center justify-between">
                        <p className="text-zinc-500 text-sm">
                            Monthly Expenses
                        </p>

                        <TrendingDown size={20} />
                    </div>

                    <h3 className="text-4xl font-bold mt-4">
                        R$ 2.120
                    </h3>

                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.05] transition-all duration-300">

                    <div className="flex items-center justify-between">
                        <p className="text-zinc-500 text-sm">
                            Investments
                        </p>

                        <BarChart3 size={20} />
                    </div>

                    <h3 className="text-4xl font-bold mt-4">
                        R$ 8.930
                    </h3>

                </div>

            </div>

            {/* CHART */}

            <div className="mt-8 bg-white/[0.03] border border-white/10 rounded-3xl p-6 h-[350px]">

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
                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity={0.35} />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#ffffff"
                            strokeWidth={3}
                            fill="url(#colorBalance)"
                        />

                    </AreaChart>
                </ResponsiveContainer>

            </div>
        </>
    );
}