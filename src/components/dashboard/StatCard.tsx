import type {LucideIcon} from "lucide-react";
import React from "react";

interface StatCardProps {
    titulo: string;
    valor: string;
    icone: LucideIcon;
}

export default function StatCard({
                                     titulo,
                                     valor,
                                     icone: Icon,
                                 }: StatCardProps) {
    return (
        <div
            className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-6
                transition-all
                duration-300
                hover:bg-white/[0.05]
                hover:border-white/20
                hover:-translate-y-1
                shadow-[0_0_50px_rgba(255,255,255,0.03)]
            "
        >

            <div
                className="
                    absolute
                    top-0
                    right-0
                    w-32
                    h-32
                    bg-white/[0.03]
                    rounded-full
                    blur-3xl
                "
            />

            <div className="relative z-10">

                <div className="flex items-center justify-between">

                    <p className="text-zinc-500 text-sm font-medium">
                        {titulo}
                    </p>

                    <div
                        className="
                            w-11
                            h-11
                            rounded-2xl
                            bg-white/10
                            flex
                            items-center
                            justify-center
                            border
                            border-white/10
                        "
                    >
                        <Icon size={20} />
                    </div>

                </div>

                <h3 className="text-4xl font-bold mt-6 tracking-tight">
                    {valor}
                </h3>

                <div className="mt-4 flex items-center gap-2">

                    <div className="w-2 h-2 rounded-full bg-emerald-400" />

                    <span className="text-sm text-zinc-400">
                        +12% este mês
                    </span>

                </div>

            </div>

        </div>
    );
}