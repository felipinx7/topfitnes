"use client";

interface ComponentBotaoProps {
  text: string;
  isSubmiting?: boolean;
  linkWhtsapp?: boolean;
}

export default function ComponentBotao({
  text,
  linkWhtsapp,
  isSubmiting,
}: ComponentBotaoProps) {
  return (
    <a target="_blank" href="#formulario">
      <button
        type="submit"
        className="w-full cursor-pointer font-GoldMan rounded-[0.5rem] shadow-[0px_-3px_26.5px_#00D939] hover:shadow-[0px_-3px_40px_#00D939] ease-in-out duration-500 hover:bg-verde-400 p-3 bg-verde-100"
      >
        {isSubmiting ? "ENVIANDO..." : text}
      </button>
    </a>
  );
}
