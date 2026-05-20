import React from "react";

interface InputProps {
    placeholder?: string;

    type?: string;

    value?: string;

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    className?: string;
}

export default function Input({
                                  placeholder,
                                  type = "text",
                                  value,
                                  onChange,
                                  className = "",
                              }: InputProps) {
    return (
        <div className="relative w-full">

            {/* GLOW */}

            <div
                className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-white/[0.02]
                    blur-xl
                    pointer-events-none
                "
            />

            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
                    relative
                    z-10
                    w-full

                    px-5
                    py-3.5

                    rounded-2xl

                    bg-white/[0.03]
                    backdrop-blur-2xl

                    border
                    border-white/10

                    text-white
                    placeholder:text-zinc-500

                    outline-none

                    transition-all
                    duration-300

                    focus:border-white/20
                    focus:bg-white/[0.05]
                    focus:shadow-[0_0_30px_rgba(255,255,255,0.05)]

                    ${className}
                `}
            />

        </div>
    );
}