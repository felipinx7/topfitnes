import SectionEquipamento from "./sections/section-equipamentos";
import SectionEspacoIdeial from "./sections/section-espaco-ideal";
import SectionHero from "./sections/section-hero";
import SectionPasso from "./sections/section-passo";

export default function LadingPage() {
  return (
    <main className="bg-neutras-50 w-full text-white font-Poppins">
      <SectionHero />
      <SectionEspacoIdeial />
      <SectionPasso />
      <SectionEquipamento />
    </main>
  );
}
