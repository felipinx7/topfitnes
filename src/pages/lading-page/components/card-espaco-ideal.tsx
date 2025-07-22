import { DataCardsLadingPage } from "@/dto/data-cards-lading-page-DTO";

export default function CardEspacoIdeal(props: DataCardsLadingPage) {
  return (
    <article className="flex items-center w-full justify-start gap-4">
      {/* Icone do Card  */}
      <div>{<props.icone />}</div>
      {/* Titulo do Card  */}
      <h4 className="text-[1.2rem] tracking-[0.1rem] font-[500]">
        {props.titulo}
      </h4>
    </article>
  );
}
