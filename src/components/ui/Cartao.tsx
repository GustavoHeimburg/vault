import React from "react"

interface CartaoProps {
    children: React.ReactNode
}

export default function Cartao({ children }: CartaoProps) {
    return (
        <div className="
      bg-zinc-900
      border border-zinc-800
      rounded-2xl
      p-6
      shadow-lg
    ">
            {children}
        </div>
    )
}