import { logo } from "@/assets/image";
import { linksHeaderAdministrador } from "@/constants/links-header-adiministrador";
import { SectionType } from "@/types/type-section-header-administrativo";
import Image from "next/image";

interface HeaderMobileAdministradorProps {
  sectionSelected: SectionType;
  onSelectedSection: (section: SectionType) => void;
}

export default function HeaderMobileAdministrador({
  onSelectedSection,
  sectionSelected,
}: HeaderMobileAdministradorProps) {
  // Funções utilizadas no componente
  function handleSelectedButton(id: SectionType) {
    onSelectedSection(id);
  }
  return (
    <header className="hidden max-lg:flex fixed bottom-0 w-full items-center bg-[#e3dfdf] z-[4] justify-center">
      {/* Container Global  */}
      <nav className="max-w-[1280px] gap-4 flex w-full p-2 m-0 items-center justify-between">
        {/* Renderização dos botões de navegação  */}
        {linksHeaderAdministrador.map((link) => (
          <button
            onClick={() => handleSelectedButton(link.id as SectionType)}
            key={link.id}
            className={`${sectionSelected === link.id ? "bg-verde-100" : "bg-transparent"} flex w-[70%] group px-4 flex-col items-center hover:translate-x-1 justify-center gap-2 hover:bg-verde-100 p-2 rounded transition-all`}
          >
            <link.Icone className={`${sectionSelected === link.id ? "text-white" : ""} text-[#4F4F4F] group-hover:text-white hover:translate-x-1.5 transition-all`} />
          </button>
        ))}
      </nav>
    </header>
  );
}
