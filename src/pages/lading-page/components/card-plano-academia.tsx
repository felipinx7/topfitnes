import { IconeCorreto } from "@/assets/icons/icone-correto";
import { DataCardsLadingPage } from "@/dto/data-cards-lading-page";
import ComponentBotaoProps from "./componente-button";

export default function CardPlanoAcademia(props: DataCardsLadingPage) {
  return (
    <article className="flex relative w-auto h-auto hover:scale-105 transition-all duration-[0.5s] ease-in-out p-8 flex-col justify-center items-center bg-neutras-50 border border-neutras-100 backdrop-blur-[10px] gap-8 z-20 rounded-2xl">
      <div className="flex flex-col gap-3 w-full items-center justify-center max-md:items-start leading-7">
        {/* Título e subititulo */}
        <div className="flex flex-col gap-1 leading-7">
          <h5 className="font-GoldMan text-center max-md:text-left text-verde-100">
            {props.subtitulo}
          </h5>
          <span className=" font-GoldMan-Bold text-center max-md:text-left text-[3rem]">
            {props.titulo}
          </span>
        </div>
      </div>

      {/* listagem dos passos  */}
      <div className="flex w-full flex-col items-start justify-start gap-4">
        {props.listaDescricao?.map((item) => (
          <p
            key={item.text}
            className="font-medium font-GoldMan gap-4 flex text-[1rem]"
          >
            {<IconeCorreto />}
            {item.text}
          </p>
        ))}
      </div>
      <div className="relative w-full">
        <ComponentBotaoProps text="QUERO TREINAR AGORA" />
      </div>
    </article>
  );
}
