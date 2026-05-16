import { motion } from "framer-motion";
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

export default function FinancialChart() {
    return (
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
    );
}