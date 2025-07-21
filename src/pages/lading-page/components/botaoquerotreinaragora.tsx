"use client";

interface BotaoTreinarAgoraProp {
  text: string;
}

export default function BotaoTreinarAgora({ text }: BotaoTreinarAgoraProp) {
  return (
    <button className="w-full cursor-pointer font-[family-name:var(--font-goldman)] rounded-[0.5rem] shadow-[0px_-3px_26.5px_#00D939] hover:shadow-[0px_-3px_40px_#00D939] ease-in-out duration-[.5s] hover:bg-[var(--color-verde-400)] p-3 bg-[var(--color-verde-100)]">
      {text}
    </button>
  );
}
