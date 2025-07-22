import { equipamento01, equipamento02, equipamento03 } from "@/assets/image";
import Image from "next/image";

export default function SectionEquipamento() {
  return (
    <section className="bg-neutras-400 flex relative justify-center w-full min-h-[100vh]">
      {/* container informações principais  */}
      <div className="max-w-[1280px] z-10 w-[100%] h-full px-4 flex flex-col items-center justify-center py-12 gap-14 m-0">
        {/* container textos  */}
        <div className="flex flex-col text-center">
          <h2 className="font-GoldMan font-bold text-4xl">CONHEÇA AS NOSSAS</h2>
          <h1 className="font-GoldMan font-bold text-3xl text-verde-100">
            INSTALAÇÕES
          </h1>
        </div>

        {/* container fotos dos aparelhos  */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 justify-items-center">
          <Image
            src={equipamento01}
            className="w-[400px] rounded-2xl h-[400px] object-cover max-md:h-auto max-md:w-full transition-all duration-500 ease-in-out hover:scale-105"
            alt="Foto dos aparelhos da academia"
          />
          <Image
            src={equipamento02}
            className="w-[400px] rounded-2xl h-[400px] object-cover max-md:h-auto max-md:w-full transition-all duration-500 ease-in-out hover:scale-105"
            alt="Foto dos aparelhos da academia"
          />
          <Image
            src={equipamento03}
            className="w-[400px] rounded-2xl h-[400px] object-cover max-md:h-auto max-md:w-full transition-all duration-500 ease-in-out hover:scale-105"
            alt="Foto dos aparelhos da academia"
          />
        </div>
      </div>
    </section>
  );
}
