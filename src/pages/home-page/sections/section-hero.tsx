import { imagebackgroundsectionhero } from "@/assets/image";
import Header from "@/pages/components/header";
import HeaderMobile from "@/pages/components/headermobile";

export default function SectionHero() {
  return (
    <main className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Imagem de Fundo Section Hero */}
      <img
        src={`${imagebackgroundsectionhero.src}`}
        alt="banner"
        className="absolute z-0 w-full h-full object-cover"
      />
      <div className="max-w-[1280px] z-20 w-[100%] h-[100%] m-0 flex ">
        <Header />
        <HeaderMobile/>
      </div>
    </main>
  );
}
