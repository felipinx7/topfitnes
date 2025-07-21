import {
  imagebackgroundsectionhero,
  imagebackgroundsectionheromobile,
} from "@/assets/image";
import Header from "@/pages/lading-page/components/header";
import HeaderMobile from "@/pages/lading-page/components/headermobile";
import BotaoTreinarAgora from "../components/botao-quero-treinar-agora";

export default function SectionHero() {
  return (
    <main className="w-full min-h-[100vh] flex items-start justify-center relative overflow-hidden">
      {/*Sombras da hero */}
      <div className="w-full absolute h-40 top-0 bg-gradient-to-b from-30% from-neutras-400/80     to-transparent z-10"></div>
      <div className="w-full absolute h-40 bottom-0 bg-gradient-to-t from-30% from-neutras-400/80     to-transparent z-10"></div>


      <div className="w-1/2 absolute h-full left-0 bg-gradient-to-r from-30% from-neutras-400/80     to-transparent z-10"></div>

      {/* Imagem de Fundo Section Hero - Desktop  */}
      <img
        src={imagebackgroundsectionhero.src}
        alt="banner"
        className="hidden md:block absolute z-0 w-full h-full object-cover"
      />

      {/* Imagem de Fundo Section Hero - Mobile */}
      <img
        src={imagebackgroundsectionheromobile.src}
        alt="banner"
        className="block md:hidden absolute z-0 w-full h-full object-cover"
      />

      {/* Conteudo Section Hero */}
      <div className="max-w-[1280px] relative flex flex-col z-20 w-[100%] h-[100%] max-md:h-screen m-0 ">
        <Header />
        <HeaderMobile />

        {/* Container de Textos da section hero */}
        <div className="w-[100%] h-[100%] py-46 max-md:p-0 max-md:px-1 gap-4 px-6 flex flex-col items-start max-md:justify-end max-md:text-center justify-center">
          <h1 className="font-GoldMan-Bold leading-12  text-[2.6rem] max-md:text-[2.0rem] w-[80%] max-md:w-full">
            LIBERTA O TEU POTENCIAL! <br />
            <span className="text-verde-100">
              JUNTA-SE A NÓS{" "}
            </span>
            <br />E SENTE A DIFERENÇA.
          </h1>
          <p className="text-[1.2rem] max-md:text-[1rem] w-full">
            Estás pronto para começar a ver resultados <br /> reais no treino?
          </p>
          <div className="w-full flex items-center justify-start max-md:justify-center">
            <div className="w-[40%] max-md:w-[80%]">
              <BotaoTreinarAgora text="QUERO TREINAR AGORA"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
