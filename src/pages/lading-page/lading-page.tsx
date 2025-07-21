import SectionEspacoIdeial from "./sections/section-espaco-ideal";
import SectionHero from "./sections/section-hero";

export default function LadingPage() {
  return (
    <main className="bg-neutras-400 w-full
     text-white font-Poppins">
      <SectionHero />
      <SectionEspacoIdeial/>
    </main>
  );
}
