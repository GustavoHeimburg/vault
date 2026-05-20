

import {
    TrendingUp,
    TrendingDown,
    DollarSign,
    PiggyBank,
    ArrowUpRight,
    ArrowDownRight,
    Wallet,
    BarChart3,
} from "lucide-react";
import React from "react";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const dadosReceitas = [
    { mes: "Jan", valor: 4200 },
    { mes: "Fev", valor: 5100 },
    { mes: "Mar", valor: 4900 },
    { mes: "Abr", valor: 6200 },
    { mes: "Mai", valor: 7100 },
    { mes: "Jun", valor: 6800 },
    { mes: "Jul", valor: 8200 },
];

const categorias = [
    { nome: "Investimentos", valor: 40 },
    { nome: "Lazer", valor: 20 },
    { nome: "Mercado", valor: 25 },
    { nome: "Outros", valor: 15 },
];

const COLORS = [
    "#ffffff",
    "#a1a1aa",
    "#71717a",
    "#52525b",
];

export default function AnalyticsPage() {
    return (
        <div className="pb-10">

            {/* HEADER */}

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-4xl font-bold tracking-tight">
                        Análises Financeiras
                    </h1>

                    <p className="text-zinc-500 text-lg mt-3">
                        Visualize métricas e acompanhe sua evolução financeira.
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
                        transition-all
                        hover:scale-[1.03]
                    "
                >
                    Exportar Relatório
                </button>

            </div>

            {/* CARDS */}

            <div className="grid grid-cols-4 gap-6 mt-10">

                <div
                    className="
                        rounded-[28px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        p-6
                    "
                >

                    <div className="flex items-center justify-between">

                        <p className="text-zinc-500 text-sm">
                            Receita Mensal
                        </p>

                        <DollarSign size={20} />

                    </div>

                    <h2 className="text-4xl font-bold mt-5">
                        R$ 8.200
                    </h2>

                    <div className="flex items-center gap-2 mt-4">

                        <ArrowUpRight
                            size={18}
                            className="text-emerald-400"
                        />

                        <span className="text-emerald-400 text-sm">
                            +14% este mês
                        </span>

                    </div>

                </div>

                <div
                    className="
                        rounded-[28px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        p-6
                    "
                >

                    <div className="flex items-center justify-between">

                        <p className="text-zinc-500 text-sm">
                            Gastos Totais
                        </p>

                        <TrendingDown size={20} />

                    </div>

                    <h2 className="text-4xl font-bold mt-5">
                        R$ 3.450
                    </h2>

                    <div className="flex items-center gap-2 mt-4">

                        <ArrowDownRight
                            size={18}
                            className="text-red-400"
                        />

                        <span className="text-red-400 text-sm">
                            +6% em despesas
                        </span>

                    </div>

                </div>

                <div
                    className="
                        rounded-[28px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        p-6
                    "
                >

                    <div className="flex items-center justify-between">

                        <p className="text-zinc-500 text-sm">
                            Economia
                        </p>

                        <PiggyBank size={20} />

                    </div>

                    <h2 className="text-4xl font-bold mt-5">
                        R$ 2.980
                    </h2>

                    <div className="flex items-center gap-2 mt-4">

                        <ArrowUpRight
                            size={18}
                            className="text-emerald-400"
                        />

                        <span className="text-emerald-400 text-sm">
                            +22% acumulado
                        </span>

                    </div>

                </div>

                <div
                    className="
                        rounded-[28px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        p-6
                    "
                >

                    <div className="flex items-center justify-between">

                        <p className="text-zinc-500 text-sm">
                            Patrimônio
                        </p>

                        <Wallet size={20} />

                    </div>

                    <h2 className="text-4xl font-bold mt-5">
                        R$ 28.900
                    </h2>

                    <div className="flex items-center gap-2 mt-4">

                        <TrendingUp
                            size={18}
                            className="text-emerald-400"
                        />

                        <span className="text-emerald-400 text-sm">
                            Crescimento constante
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
                        h-[400px]
                    "
                >

                    <div className="flex items-center justify-between mb-8">

                        <div>

                            <h3 className="text-2xl font-semibold">
                                Evolução Financeira
                            </h3>

                            <p className="text-zinc-500 text-sm mt-2">
                                Receita acumulada dos últimos meses
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
                                +18,2%
                            </span>
                        </div>

                    </div>

                    <ResponsiveContainer width="100%" height="100%">

                        <AreaChart data={dadosReceitas}>

                            <defs>

                                <linearGradient
                                    id="corReceita"
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
                                fill="url(#corReceita)"
                            />

                        </AreaChart>

                    </ResponsiveContainer>

                </div>

                {/* CATEGORIAS */}

                <div
                    className="
                        rounded-[32px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        p-6
                    "
                >

                    <div className="flex items-center justify-between">

                        <div>

                            <h3 className="text-xl font-semibold">
                                Categorias
                            </h3>

                            <p className="text-zinc-500 text-sm mt-1">
                                Distribuição de gastos
                            </p>

                        </div>

                        <BarChart3 size={22} />

                    </div>

                    <div className="h-[260px] mt-6">

                        <ResponsiveContainer width="100%" height="100%">

                            <PieChart>

                                <Pie
                                    data={categorias}
                                    dataKey="valor"
                                    nameKey="nome"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={4}
                                >

                                    {categorias.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}

                                </Pie>

                            </PieChart>

                        </ResponsiveContainer>

                    </div>

                    <div className="flex flex-col gap-4 mt-4">

                        {categorias.map((categoria, index) => (
                            <div
                                key={categoria.nome}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{
                                            background: COLORS[index],
                                        }}
                                    />

                                    <span className="text-zinc-300">
                                        {categoria.nome}
                                    </span>

                                </div>

                                <span className="text-zinc-500 text-sm">
                                    {categoria.valor}%
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}