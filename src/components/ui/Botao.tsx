import React from "react";

interface BotaoProps {
    children: React.ReactNode;

    variante?: "primario" | "secundario" | "ghost";

    className?: string;

    onClick?: () => void;

    type?: "button" | "submit" | "reset";
}

export default function Botao({
                                  children,

                                  variante = "primario",

                                  className = "",

                                  onClick,

                                  type = "button",
                              }: BotaoProps) {

    const variantes = {
        primario: `
            bg-white
            text-black

            hover:opacity-90
            hover:scale-[1.02]
        `,

        secundario: `
            bg-white/[0.05]
            text-white
            border
            border-white/10

            hover:bg-white/[0.08]
            hover:border-white/20
        `,

        ghost: `
            bg-transparent
            text-zinc-300

            hover:bg-white/[0.05]
            hover:text-white
        `,
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                relative
                overflow-hidden

                px-5
                py-3

                rounded-2xl

                font-medium
                tracking-wide

                backdrop-blur-xl

                transition-all
                duration-300

                active:scale-[0.98]

                disabled:opacity-50
                disabled:pointer-events-none

                shadow-[0_0_30px_rgba(255,255,255,0.03)]

                ${variantes[variante]}

                ${className}
            `}
        >

            {/* GLOW */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-0
                    hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-gradient-to-r
                    from-white/[0.08]
                    to-transparent
                    pointer-events-none
                "
            />

            <span className="relative z-10">
                {children}
            </span>

        </button>
    );
}