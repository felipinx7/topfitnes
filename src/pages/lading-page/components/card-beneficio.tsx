import { DataCardsLadingPage } from "@/dto/data-cards-lading-page";

export default function CardBeneficios(props: DataCardsLadingPage) {
  return (
    <article className="flex flex-col hover:scale-105 transition-all duration-[0.5s] ease-in-out items-start justify-start gap-2 z-20 p-4 bg-verde-100 rounded-2xl">
      {/* Icone do Card  */}
      <div>{<props.icone />}</div>

       {/* Título e Span */}
      <div className="flex flex-col w-full items-start justify-start leading-7">
        <h3 className="font-GoldMan font-bold text-[1.5rem]">{props.titulo}</h3>
        <span className="text-verde-200 font-GoldMan font-bold text-[1.5rem]">{props.span}</span>
      </div>

      {/* Descrição do Card  */}
      <p className="font-medium text-[1.1rem]">{props.descricao}</p>
    </article>
  );
}
