import { TextosCardPlanos } from "@/constants/textos-card-lading-page";
import CardPlanoAcademia from "../components/card-plano-academia";

export default function SectionPlanosAcademia() {
  return (
    <section className="bg-neutras-400 w-full min-h-[100vh] flex flex-col items-center justify-center">
      {/* container informações principais  */}
      <div className="max-w-[1280px] w-[100%] px-4 m-0 flex flex-col justify-center gap-12 items-center">

        {/* container textos de cima */}
        <div>
          <h1 className="text-[2.4rem] w-full font-GoldMan-Bold text-center leading-12">
            TUDO ISSO <span className="text-verde-100">ESTÁ AO SEU</span>
            <br />
            <span className="text-verde-100">ALCANCE </span>POR:
          </h1>
        </div>

        {/* container cards dos Planos  */}
        <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-12">
          {TextosCardPlanos.map((card, index) => (
            <CardPlanoAcademia key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
