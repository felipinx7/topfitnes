import { imagemfundosectionpassos } from "@/assets/image";
import { TextosCardPassos } from "@/constants/textos-card-lading-page";
import Image from "next/image";
import CardPasso from "../components/card-passos-a-passo";

export default function SectionPasso() {
  return (
    <section className="relative w-full bg-neutras-400 flex min-h-[100vh] items-center justify-center">
      {/* imagem fundo da section  */}
      <Image
        src={imagemfundosectionpassos}
        className="absolute w-full opacity-40 h-screen object-cover top-0"
        alt="Fundo da Seção de Passos"
      />

      {/* container Informações principais  */}
      <div className="max-w-[1280px] w-[100%] px-4 h-screen flex flex-col m-0 gap-20 items-start justify-start">
        {/* container textos de cima  */}
        <div className="pt-12 w-full flex flex-col items-center leading-8 gap-4 justify-center">
          <div className="text-center leading-8">
            <p className="font-GoldMan tracking-[0.2rem]">TOPFITNESS</p>
            <h1 className="font-GoldMan text-[3rem] w-full max-md:text-[2.8rem]">
              EM ALGUNS <span className="text-verde-100">PASSOS:</span>
            </h1>
          </div>
          <p className="leading-5 text-center text-[1.2rem] max-md:text-[1.2rem]">
            Deixe que a TopFitness te guie para um caminho mais saudável e
            feliz.
          </p>
        </div>

        {/* container cards de passos  */}
        <div className="w-full object-center grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10">
          {/* renderização dos cards de passos a passos  */}
          {TextosCardPassos.map((card, index) => (
            <CardPasso key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
