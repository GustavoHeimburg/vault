import React from "react";
import Cartao from "../ui/Cartao";

interface StatCardProps {
    titulo: string;
    valor: string;
}

export default function StatCard({
                                     titulo,
                                     valor,
                                 }: StatCardProps) {
    return (
        <Cartao>
            <div className="flex flex-col gap-2">
        <span className="text-zinc-400 text-sm">
          {titulo}
        </span>

                <h2 className="text-3xl font-bold text-white">
                    {valor}
                </h2>
            </div>
        </Cartao>
    );
}