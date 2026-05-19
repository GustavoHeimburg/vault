interface BotaoProps {
    children: React.ReactNode
}

export default function Botao({ children }: BotaoProps) {
    return (
        <button className="
      bg-white
      text-black
      px-4
      py-2
      rounded-xl
      font-medium
      hover:opacity-80
      transition
    ">
            {children}
        </button>
    )
}