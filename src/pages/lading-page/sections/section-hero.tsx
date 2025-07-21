import {
  imagebackgroundsectionhero,
  imagebackgroundsectionheromobile,
} from "@/assets/image";
import Header from "@/pages/lading-page/components/header";
import HeaderMobile from "@/pages/lading-page/components/headermobile";
import BotaoTreinarAgora from "../components/botaoquerotreinaragora";

export default function SectionHero() {
  return (
    <main className="w-full min-h-[100vh] flex items-start justify-center relative overflow-hidden">
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
          <h1 className="font-[family-name:var(--font-goldman)] leading-12  text-[3.2rem] max-md:text-[2.3rem] w-[80%] max-md:w-full">
            Liberta o teu potencial! <br />
            <span className="text-verde-100">
              junta-se a nós{" "}
            </span>
            <br />e sente a diferença.
          </h1>
          <p className="text-[1.4rem] max-md:text-[1.2rem] w-full">
            Estás pronto para começar a ver resultados <br /> reais no treino?
          </p>
          <div className="w-full flex items-center justify-start max-md:justify-center">
            <div className="w-[40%] max-md:w-[80%]">
              <BotaoTreinarAgora />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
