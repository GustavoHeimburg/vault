import React from "react";

import {
    User,
    Bell,
    Shield,
    Moon,
    Palette,
    Smartphone,
    Globe,
    ChevronRight,
    Lock,
} from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="pb-10">

            {/* HEADER */}

            <div>

                <h1 className="text-4xl font-bold tracking-tight">
                    Configurações
                </h1>

                <p className="text-zinc-500 text-lg mt-3">
                    Gerencie preferências, segurança e aparência do Vault.
                </p>

            </div>

            {/* PERFIL */}

            <div
                className="
                    mt-10
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-2xl
                    p-8
                    flex
                    items-center
                    justify-between
                "
            >

                <div className="flex items-center gap-5">

                    <div
                        className="
                            w-20
                            h-20
                            rounded-3xl
                            bg-white/10
                            border
                            border-white/10
                            flex
                            items-center
                            justify-center
                            text-2xl
                            font-bold
                        "
                    >
                        G
                    </div>

                    <div>

                        <h2 className="text-2xl font-semibold">
                            Gustavo
                        </h2>

                        <p className="text-zinc-500 mt-1">
                            gustavo@vault.app
                        </p>

                    </div>

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
                    Editar Perfil
                </button>

            </div>

            {/* CONFIGURAÇÕES */}

            <div className="grid grid-cols-2 gap-6 mt-8">

                {/* CONTA */}

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

                    <h3 className="text-2xl font-semibold mb-6">
                        Conta
                    </h3>

                    <div className="flex flex-col gap-4">

                        <button
                            className="
                                flex
                                items-center
                                justify-between
                                p-5
                                rounded-2xl
                                border
                                border-white/10
                                hover:bg-white/[0.04]
                                transition-all
                            "
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <User size={20} />
                                </div>

                                <div className="text-left">

                                    <h4 className="font-medium">
                                        Informações Pessoais
                                    </h4>

                                    <p className="text-zinc-500 text-sm mt-1">
                                        Nome, email e dados da conta
                                    </p>

                                </div>

                            </div>

                            <ChevronRight size={18} />

                        </button>

                        <button
                            className="
                                flex
                                items-center
                                justify-between
                                p-5
                                rounded-2xl
                                border
                                border-white/10
                                hover:bg-white/[0.04]
                                transition-all
                            "
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Lock size={20} />
                                </div>

                                <div className="text-left">

                                    <h4 className="font-medium">
                                        Senha e Segurança
                                    </h4>

                                    <p className="text-zinc-500 text-sm mt-1">
                                        Altere senha e autenticação
                                    </p>

                                </div>

                            </div>

                            <ChevronRight size={18} />

                        </button>

                        <button
                            className="
                                flex
                                items-center
                                justify-between
                                p-5
                                rounded-2xl
                                border
                                border-white/10
                                hover:bg-white/[0.04]
                                transition-all
                            "
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Bell size={20} />
                                </div>

                                <div className="text-left">

                                    <h4 className="font-medium">
                                        Notificações
                                    </h4>

                                    <p className="text-zinc-500 text-sm mt-1">
                                        Configure alertas e lembretes
                                    </p>

                                </div>

                            </div>

                            <ChevronRight size={18} />

                        </button>

                    </div>

                </div>

                {/* PREFERÊNCIAS */}

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

                    <h3 className="text-2xl font-semibold mb-6">
                        Preferências
                    </h3>

                    <div className="flex flex-col gap-4">

                        <button
                            className="
                                flex
                                items-center
                                justify-between
                                p-5
                                rounded-2xl
                                border
                                border-white/10
                                hover:bg-white/[0.04]
                                transition-all
                            "
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Moon size={20} />
                                </div>

                                <div className="text-left">

                                    <h4 className="font-medium">
                                        Tema Escuro
                                    </h4>

                                    <p className="text-zinc-500 text-sm mt-1">
                                        Personalize a aparência
                                    </p>

                                </div>

                            </div>

                            <div
                                className="
                                    w-14
                                    h-8
                                    rounded-full
                                    bg-white
                                    flex
                                    items-center
                                    px-1
                                "
                            >

                                <div
                                    className="
                                        w-6
                                        h-6
                                        rounded-full
                                        bg-black
                                    "
                                />

                            </div>

                        </button>

                        <button
                            className="
                                flex
                                items-center
                                justify-between
                                p-5
                                rounded-2xl
                                border
                                border-white/10
                                hover:bg-white/[0.04]
                                transition-all
                            "
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Palette size={20} />
                                </div>

                                <div className="text-left">

                                    <h4 className="font-medium">
                                        Aparência
                                    </h4>

                                    <p className="text-zinc-500 text-sm mt-1">
                                        Ajuste cores e interface
                                    </p>

                                </div>

                            </div>

                            <ChevronRight size={18} />

                        </button>

                        <button
                            className="
                                flex
                                items-center
                                justify-between
                                p-5
                                rounded-2xl
                                border
                                border-white/10
                                hover:bg-white/[0.04]
                                transition-all
                            "
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Smartphone size={20} />
                                </div>

                                <div className="text-left">

                                    <h4 className="font-medium">
                                        Dispositivos
                                    </h4>

                                    <p className="text-zinc-500 text-sm mt-1">
                                        Sessões e acessos conectados
                                    </p>

                                </div>

                            </div>

                            <ChevronRight size={18} />

                        </button>

                        <button
                            className="
                                flex
                                items-center
                                justify-between
                                p-5
                                rounded-2xl
                                border
                                border-white/10
                                hover:bg-white/[0.04]
                                transition-all
                            "
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-white/10
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Globe size={20} />
                                </div>

                                <div className="text-left">

                                    <h4 className="font-medium">
                                        Idioma e Região
                                    </h4>

                                    <p className="text-zinc-500 text-sm mt-1">
                                        Português - Brasil
                                    </p>

                                </div>

                            </div>

                            <ChevronRight size={18} />

                        </button>

                    </div>

                </div>

            </div>

            {/* SEGURANÇA */}

            <div
                className="
                    mt-8
                    rounded-[32px]
                    border
                    border-white/10
                    bg-gradient-to-br
                    from-white/[0.04]
                    to-white/[0.01]
                    backdrop-blur-2xl
                    p-8
                    flex
                    items-center
                    justify-between
                "
            >

                <div className="flex items-center gap-5">

                    <div
                        className="
                            w-16
                            h-16
                            rounded-3xl
                            bg-white/10
                            border
                            border-white/10
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <Shield size={28} />
                    </div>

                    <div>

                        <h3 className="text-2xl font-semibold">
                            Segurança Avançada
                        </h3>

                        <p className="text-zinc-500 mt-2">
                            Sua conta está protegida com autenticação segura.
                        </p>

                    </div>

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
                    "
                >
                    Gerenciar Segurança
                </button>

            </div>

        </div>
    );
}