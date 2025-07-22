import SectionEquipamento from "./sections/section-equipamentos";
import SectionEspacoIdeial from "./sections/section-espaco-ideal";
import SectionFooter from "./sections/section-footer";
import SectionFormulario from "./sections/section-formulario";
import SectionHero from "./sections/section-hero";
import SectionPasso from "./sections/section-passo";
import SectionPlanosAcademia from "./sections/section-planos-academia";

export default function LadingPage() {
  return (
    <main className="bg-neutras-50 w-full text-white font-Poppins">
      <SectionHero />
      <SectionEspacoIdeial />
      <SectionPasso />
      <SectionEquipamento />
      <SectionPlanosAcademia />
      <SectionFormulario />
      <SectionFooter />
    </main>
  );
}
