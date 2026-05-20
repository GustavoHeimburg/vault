import React from "react";

import {
    ArrowDownLeft,
    ArrowUpRight,
    Search,
    Filter,
    CreditCard,
    ShoppingBag,
    Wallet,
    Landmark,
} from "lucide-react";

const transacoes = [
    {
        titulo: "Salário",
        categoria: "Receita",
        valor: "+ R$ 5.000",
        data: "20 Maio 2026",
        tipo: "entrada",
        icone: <Wallet size={20} />,
    },
    {
        titulo: "Steam",
        categoria: "Games",
        valor: "- R$ 199,90",
        data: "19 Maio 2026",
        tipo: "saida",
        icone: <ShoppingBag size={20} />,
    },
    {
        titulo: "Netflix",
        categoria: "Entretenimento",
        valor: "- R$ 39,90",
        data: "18 Maio 2026",
        tipo: "saida",
        icone: <CreditCard size={20} />,
    },
    {
        titulo: "Dividendos",
        categoria: "Investimentos",
        valor: "+ R$ 320",
        data: "17 Maio 2026",
        tipo: "entrada",
        icone: <Landmark size={20} />,
    },
    {
        titulo: "Mercado",
        categoria: "Alimentação",
        valor: "- R$ 420",
        data: "16 Maio 2026",
        tipo: "saida",
        icone: <ShoppingBag size={20} />,
    },
];

export default function TransactionsPage() {
    return (
        <div className="pb-10">

            {/* HEADER */}

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-4xl font-bold tracking-tight">
                        Transações
                    </h1>

                    <p className="text-zinc-500 text-lg mt-3">
                        Visualize e gerencie todas as movimentações financeiras.
                    </p>

                </div>

                <button
                    className="
                        px-5
                        py-3
                        rounded-2xl
                        bg-white
                        text-black
                        font-medium
                        hover:scale-[1.03]
                        transition-all
                    "
                >
                    Nova Transação
                </button>

            </div>

            {/* CARDS */}

            <div className="grid grid-cols-3 gap-6 mt-10">

                <div
                    className="
                        rounded-[30px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        p-6
                    "
                >

                    <div className="flex items-center justify-between">

                        <p className="text-zinc-500 text-sm">
                            Entradas
                        </p>

                        <div
                            className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-emerald-500/10
                                border
                                border-emerald-500/20
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <ArrowDownLeft
                                size={22}
                                className="text-emerald-400"
                            />
                        </div>

                    </div>

                    <h2 className="text-4xl font-bold mt-6">
                        R$ 8.540
                    </h2>

                    <p className="text-emerald-400 text-sm mt-3">
                        +12% este mês
                    </p>

                </div>

                <div
                    className="
                        rounded-[30px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        p-6
                    "
                >

                    <div className="flex items-center justify-between">

                        <p className="text-zinc-500 text-sm">
                            Saídas
                        </p>

                        <div
                            className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-red-500/10
                                border
                                border-red-500/20
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <ArrowUpRight
                                size={22}
                                className="text-red-400"
                            />
                        </div>

                    </div>

                    <h2 className="text-4xl font-bold mt-6">
                        R$ 2.430
                    </h2>

                    <p className="text-red-400 text-sm mt-3">
                        +4% em gastos
                    </p>

                </div>

                <div
                    className="
                        rounded-[30px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        p-6
                    "
                >

                    <div className="flex items-center justify-between">

                        <p className="text-zinc-500 text-sm">
                            Total Movimentado
                        </p>

                        <div
                            className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-white/10
                                border
                                border-white/10
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <Wallet size={22} />
                        </div>

                    </div>

                    <h2 className="text-4xl font-bold mt-6">
                        R$ 10.970
                    </h2>

                    <p className="text-zinc-500 text-sm mt-3">
                        Últimos 30 dias
                    </p>

                </div>

            </div>

            {/* FILTROS */}

            <div
                className="
                    mt-8
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-2xl
                    p-5
                    flex
                    items-center
                    justify-between
                    gap-4
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        flex-1
                        bg-white/[0.03]
                        border
                        border-white/10
                        rounded-2xl
                        px-4
                        py-3
                    "
                >

                    <Search
                        size={18}
                        className="text-zinc-500"
                    />

                    <input
                        type="text"
                        placeholder="Buscar transações..."
                        className="
                            bg-transparent
                            outline-none
                            text-sm
                            w-full
                            placeholder:text-zinc-500
                        "
                    />

                </div>

                <button
                    className="
                        px-5
                        py-3
                        rounded-2xl
                        border
                        border-white/10
                        hover:bg-white/[0.04]
                        transition-all
                        flex
                        items-center
                        gap-2
                    "
                >

                    <Filter size={18} />

                    Filtrar

                </button>

            </div>

            {/* TABELA */}

            <div
                className="
                    mt-8
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-2xl
                    overflow-hidden
                "
            >

                <div
                    className="
                        grid
                        grid-cols-[2fr_1fr_1fr_1fr]
                        px-8
                        py-5
                        border-b
                        border-white/10
                        text-zinc-500
                        text-sm
                    "
                >

                    <p>Transação</p>
                    <p>Categoria</p>
                    <p>Data</p>
                    <p className="text-right">Valor</p>

                </div>

                <div className="flex flex-col">

                    {transacoes.map((transacao, index) => (
                        <div
                            key={index}
                            className="
                                grid
                                grid-cols-[2fr_1fr_1fr_1fr]
                                px-8
                                py-6
                                border-b
                                border-white/5
                                hover:bg-white/[0.02]
                                transition-all
                                items-center
                            "
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-white/[0.04]
                                        border
                                        border-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    {transacao.icone}
                                </div>

                                <div>

                                    <h3 className="font-medium text-lg">
                                        {transacao.titulo}
                                    </h3>

                                    <p className="text-zinc-500 text-sm mt-1">
                                        Movimentação financeira
                                    </p>

                                </div>

                            </div>

                            <p className="text-zinc-400">
                                {transacao.categoria}
                            </p>

                            <p className="text-zinc-500">
                                {transacao.data}
                            </p>

                            <p
                                className={`text-right font-semibold text-lg ${
                                    transacao.tipo === "entrada"
                                        ? "text-emerald-400"
                                        : "text-red-400"
                                }`}
                            >
                                {transacao.valor}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}