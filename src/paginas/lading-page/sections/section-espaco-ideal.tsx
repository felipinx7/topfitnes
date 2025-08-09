import { mulhersectionespaco, texturalinhas } from "@/assets/image";
import {
  TextCardIdeal,
  TextosCardBeneficios,
} from "@/constants/textos-card-lading-page";
import Image from "next/image";
import CardBeneficios from "../components/card-beneficio";
import CardEspacoIdeal from "../components/card-espaco-ideal";

export default function SectionEspacoIdeial() {
  return (
    <section className="w-full relative flex flex-col gap-14 z-10 min-h-screen bg-neutras-400">
      {/* fundo texturas de linhas */}
      <Image
        src={texturalinhas}
        alt="Fundo Listrado"
        className="absolute z-0 w-full h-full object-cover"
      />

      {/* container dos Card Beneficios */}
      <div className="w-full flex items-center z-10 justify-center translate-y-[-4rem] max-md:translate-y-0 px-4">
        <div className="max-w-[1280px] w-[100%] m-0 grid grid-cols-3 max-lg:grid-cols-1 gap-8">
          {TextosCardBeneficios.map((card, index) => (
            <CardBeneficios key={index} {...card} />
          ))}
        </div>
      </div>

      {/* container informações principais  */}
      <div className="w-full flex max-md:p-4 px-4 mb-20 items-center justify-center">
        <div className="max-w-[1280px] w-[100%] max-lg:gap-18 m-0 flex items-center justify-center max-lg:flex-col">
          {/* Container Textos e Beneficios  */}
          <div className="flex flex-col w-[50%] max-lg:w-full">
            <p className="font-GoldMan tracking-[0.4rem]">TOPFITNESS</p>
            <div className="flex flex-col">
              <h1 className="font-GoldMan text-[2.8rem] font-bold leading-11 text-verde-100">
                O ESPAÇO IDEAL
              </h1>
              <h1 className="font-GoldMan text-[2.8rem] font-bold leading-11">
                PARA TREINAR <br />
                COMO QUERES
              </h1>
            </div>
            {/* Renderização das iformações do espaço ideal */}
            <div className="flex flex-col gap-4 pt-8">
              {TextCardIdeal.map((card, index) => (
                <CardEspacoIdeal key={index} {...card} />
              ))}
            </div>
          </div>
          <div className="flex w-[50%] max-lg:w-full items-center justify-center">
            {/* Imagem Mulher */}
            <Image
              src={mulhersectionespaco}
              className="max-md:translate-x-[-3rem]"
              alt="Mulher section Espaço ideal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
