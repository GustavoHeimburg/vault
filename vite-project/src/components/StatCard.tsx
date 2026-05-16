import { motion } from "framer-motion";
import React from "react";

interface StatCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
}

export default function StatCard({
                                     title,
                                     value,
                                     icon,
                                 }: StatCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.03)]"
        >

            <div className="flex items-center justify-between">

                <p className="text-zinc-500 text-sm">
                    {title}
                </p>

                {icon}

            </div>

            <h3 className="text-4xl font-bold mt-4">
                {value}
            </h3>

        </motion.div>
    );
}