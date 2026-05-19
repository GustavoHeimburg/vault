import React from "react"

interface CartaoProps {
    children: React.ReactNode
}

export default function Cartao({ children }: CartaoProps) {
    return (
        <div
            className="
        bg-zinc-900/80
        backdrop-blur-md
        border
        border-zinc-800
        rounded-3xl
        p-6
        shadow-xl
        transition-all
        duration-300
        hover:border-zinc-700
        hover:scale-[1.01]
      "
        >
            {children}
        </div>
    )
}