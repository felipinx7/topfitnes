"use client";

import { SectionType } from "@/types/type-section-header-administrativo";
import HeaderAdministrador from "./components/layout/header";
import { ReactNode, useState } from "react";
import SectionPersonal from "./sections/section-personal";
import SectionCliente from "./sections/section-cliente";
import SectionNotificacao from "./sections/section-notificacao";
import HeaderMobileAdministrador from "./components/layout/header-mobile";

// Define as sections do administrador
export const sectionHeaderAdministrativo: Record<SectionType, ReactNode> = {
  personal: <SectionPersonal />,
  clientes: <SectionCliente />,
  notificacao: <SectionNotificacao />,
};

export default function Adimistrativo() {
  //Estado para controlar a seção selecionada
  const [sectionSelected, setSectionSelected] =
    useState<SectionType>("personal");
  return (
    <main className="bg-white w-full min-h-[100vh]">
      <HeaderAdministrador
        onSelectedSection={setSectionSelected}
        sectionSelected={sectionSelected}
      />
      <HeaderMobileAdministrador
        onSelectedSection={setSectionSelected}
        sectionSelected={sectionSelected}
      />
      <main className="min-h-[calc(100vh-187.29px)] w-full">
        {sectionHeaderAdministrativo[sectionSelected]}
      </main>
    </main>
  );
}
