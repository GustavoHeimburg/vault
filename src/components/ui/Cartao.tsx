import React from "react";

interface CartaoProps {
    children: React.ReactNode;
    className?: string;
}

export default function Cartao({
                                   children,
                                   className = "",
                               }: CartaoProps) {
    return (
        <div
            className={`
                relative
                overflow-hidden

                rounded-[32px]

                border
                border-white/10

                bg-white/[0.03]
                backdrop-blur-2xl

                p-6

                shadow-[0_0_60px_rgba(255,255,255,0.03)]

                transition-all
                duration-500

                hover:border-white/20
                hover:bg-white/[0.05]
                hover:-translate-y-1

                ${className}
            `}
        >

            {/* GLOW */}

            <div
                className="
                    absolute
                    top-0
                    right-0
                    w-40
                    h-40
                    bg-white/[0.03]
                    rounded-full
                    blur-3xl
                    pointer-events-none
                "
            />

            {/* CONTENT */}

            <div className="relative z-10">
                {children}
            </div>

        </div>
    );
}