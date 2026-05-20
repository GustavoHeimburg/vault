import { motion } from "framer-motion";
import React from "react";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    Tooltip,
} from "recharts";

const dados = [
    { mes: "Jan", valor: 4000 },
    { mes: "Fev", valor: 3000 },
    { mes: "Mar", valor: 5000 },
    { mes: "Abr", valor: 4780 },
    { mes: "Mai", valor: 5890 },
    { mes: "Jun", valor: 6390 },
    { mes: "Jul", valor: 7490 },
];

export default function FinancialChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
                mt-8
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-8
                h-[380px]
                shadow-[0_0_60px_rgba(255,255,255,0.03)]
            "
        >

            <div className="flex items-start justify-between mb-8">

                <div>

                    <h3 className="text-2xl font-semibold tracking-tight">
                        Visão Financeira
                    </h3>

                    <p className="text-zinc-500 text-sm mt-2">
                        Evolução do saldo nos últimos meses
                    </p>

                </div>

                <div
                    className="
                        px-4
                        py-2
                        rounded-2xl
                        bg-emerald-500/10
                        border
                        border-emerald-500/20
                    "
                >
                    <span className="text-emerald-400 text-sm font-medium">
                        +12,4%
                    </span>
                </div>

            </div>

            <ResponsiveContainer width="100%" height="100%">

                <AreaChart data={dados}>

                    <defs>

                        <linearGradient
                            id="corSaldo"
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

                    <Tooltip
                        contentStyle={{
                            background: "#18181b",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "16px",
                            color: "#fff",
                        }}
                    />

                    <Area
                        type="monotone"
                        dataKey="valor"
                        stroke="#ffffff"
                        strokeWidth={3}
                        fill="url(#corSaldo)"
                        animationDuration={2000}
                    />

                </AreaChart>

            </ResponsiveContainer>

        </motion.div>
    );
}