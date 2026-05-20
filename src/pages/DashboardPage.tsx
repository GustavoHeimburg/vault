import {
    Wallet,
    TrendingDown,
    BarChart3,
    ArrowUpRight,
    ArrowDownRight,
    CreditCard,
    PiggyBank,
} from "lucide-react";
import React from "react";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    Tooltip,
} from "recharts";

const dadosGrafico = [
    { mes: "Jan", valor: 4000 },
    { mes: "Fev", valor: 3000 },
    { mes: "Mar", valor: 5000 },
    { mes: "Abr", valor: 4780 },
    { mes: "Mai", valor: 5890 },
    { mes: "Jun", valor: 6390 },
    { mes: "Jul", valor: 7490 },
];

const transacoes = [
    {
        titulo: "Spotify Premium",
        categoria: "Entretenimento",
        valor: "- R$ 34,90",
        tipo: "saida",
    },
    {
        titulo: "Salário",
        categoria: "Receita",
        valor: "+ R$ 5.000",
        tipo: "entrada",
    },
    {
        titulo: "Steam",
        categoria: "Games",
        valor: "- R$ 199,90",
        tipo: "saida",
    },
    {
        titulo: "Dividendos",
        categoria: "Investimentos",
        valor: "+ R$ 320",
        tipo: "entrada",
    },
];

export default function DashboardPage() {
    return (
        <div className="pb-10">

            {/* HEADER */}

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-4xl font-bold tracking-tight">
                        Painel Financeiro
                    </h1>

                    <p className="text-zinc-500 text-lg mt-3">
                        Bem-vindo de volta, Gustavo.
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

                {/* SALDO */}

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[30px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        p-7
                        shadow-[0_0_60px_rgba(255,255,255,0.03)]
                        hover:border-white/20
                        transition-all
                        duration-300
                    "
                >

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
                        "
                    />

                    <div className="relative z-10">

                        <div className="flex items-center justify-between">

                            <p className="text-zinc-500 text-sm font-medium">
                                Saldo Total
                            </p>

                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-2xl
                                    bg-white/10
                                    flex
                                    items-center
                                    justify-center
                                    border
                                    border-white/10
                                "
                            >
                                <Wallet size={22} />
                            </div>

                        </div>

                        <h2 className="text-4xl font-bold mt-6 tracking-tight">
                            R$ 12.450
                        </h2>

                        <div className="flex items-center gap-2 mt-5">

                            <ArrowUpRight
                                size={18}
                                className="text-emerald-400"
                            />

                            <span className="text-emerald-400 text-sm font-medium">
                                +12% este mês
                            </span>

                        </div>

                    </div>

                </div>

                {/* GASTOS */}

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[30px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        p-6
                        shadow-[0_0_60px_rgba(255,255,255,0.03)]
                        hover:border-white/20
                        transition-all
                        duration-300
                    "
                >

                    <div className="flex items-center justify-between">

                        <p className="text-zinc-500 text-sm font-medium">
                            Gastos Mensais
                        </p>

                        <div
                            className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-white/10
                                flex
                                items-center
                                justify-center
                                border
                                border-white/10
                            "
                        >
                            <TrendingDown size={22} />
                        </div>

                    </div>

                    <h2 className="text-5xl font-bold mt-6 tracking-tight">
                        R$ 2.120
                    </h2>

                    <div className="flex items-center gap-2 mt-5">

                        <ArrowDownRight
                            size={18}
                            className="text-red-400"
                        />

                        <span className="text-red-400 text-sm font-medium">
                            +4% em relação ao mês passado
                        </span>

                    </div>

                </div>

                {/* INVESTIMENTOS */}

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[30px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        p-7
                        shadow-[0_0_60px_rgba(255,255,255,0.03)]
                        hover:border-white/20
                        transition-all
                        duration-300
                    "
                >

                    <div className="flex items-center justify-between">

                        <p className="text-zinc-500 text-sm font-medium">
                            Investimentos
                        </p>

                        <div
                            className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-white/10
                                flex
                                items-center
                                justify-center
                                border
                                border-white/10
                            "
                        >
                            <BarChart3 size={22} />
                        </div>

                    </div>

                    <h2 className="text-5xl font-bold mt-6 tracking-tight">
                        R$ 8.930
                    </h2>

                    <div className="flex items-center gap-2 mt-5">

                        <ArrowUpRight
                            size={18}
                            className="text-emerald-400"
                        />

                        <span className="text-emerald-400 text-sm font-medium">
                            +18% de rendimento
                        </span>

                    </div>

                </div>

            </div>

            {/* GRID PRINCIPAL */}

            <div className="grid grid-cols-[2fr_1fr] gap-6 mt-8">

                {/* GRÁFICO */}

                <div
                    className="
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

                        <AreaChart data={dadosGrafico}>

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

                </div>

                {/* LATERAL */}

                <div className="flex flex-col gap-6">

                    {/* CARTÃO */}

                    <div
                        className="
                            rounded-[30px]
                            border
                            border-white/10
                            bg-gradient-to-br
                            from-white/10
                            to-white/[0.02]
                            backdrop-blur-2xl
                            p-6
                            shadow-[0_0_60px_rgba(255,255,255,0.03)]
                        "
                    >

                        <div className="flex items-center justify-between">

                            <p className="text-zinc-400 text-sm">
                                Cartão Principal
                            </p>

                            <CreditCard size={20} />

                        </div>

                        <div className="mt-10">

                            <h2 className="text-3xl font-bold tracking-widest">
                                •••• 4589
                            </h2>

                            <div className="flex items-center justify-between mt-8">

                                <div>

                                    <p className="text-zinc-500 text-xs">
                                        Limite Disponível
                                    </p>

                                    <h3 className="text-xl font-semibold mt-1">
                                        R$ 4.200
                                    </h3>

                                </div>

                                <PiggyBank size={28} />

                            </div>

                        </div>

                    </div>

                    {/* TRANSAÇÕES */}

                    <div
                        className="
                            rounded-[30px]
                            border
                            border-white/10
                            bg-white/[0.03]
                            backdrop-blur-2xl
                            p-6
                            shadow-[0_0_60px_rgba(255,255,255,0.03)]
                        "
                    >

                        <div className="flex items-center justify-between">

                            <h3 className="text-xl font-semibold">
                                Últimas Transações
                            </h3>

                            <button className="text-zinc-500 text-sm hover:text-white transition">
                                Ver tudo
                            </button>

                        </div>

                        <div className="mt-6 flex flex-col gap-5">

                            {transacoes.map((transacao, index) => (
                                <div
                                    key={index}
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                >

                                    <div>

                                        <h4 className="font-medium">
                                            {transacao.titulo}
                                        </h4>

                                        <p className="text-zinc-500 text-sm mt-1">
                                            {transacao.categoria}
                                        </p>

                                    </div>

                                    <span
                                        className={
                                            transacao.tipo === "entrada"
                                                ? "text-emerald-400 font-medium"
                                                : "text-red-400 font-medium"
                                        }
                                    >
                                        {transacao.valor}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}