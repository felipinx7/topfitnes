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
    <button
      type="submit"
      className="w-full cursor-pointer font-GoldMan rounded-[0.5rem] shadow-[0px_-3px_26.5px_#00D939] hover:shadow-[0px_-3px_40px_#00D939] ease-in-out duration-500 hover:bg-verde-400 p-3 bg-verde-100"
    >
      <a
        href={`${linkWhtsapp ? "https://wa.me/5588994287754?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20academia%20e%20tenho%20interesse%20em%20fazer%20parte%20dela." : "#"}`}
      >
        {isSubmiting ? "ENVIANDO..." : text}
      </a>
    </button>
  );
}
