"use client";

import { IconePersonal } from "@/assets/icons/icone-personal";
import BarraDeNavegacaoAdministrador from "../components/layout/barra-de-navegacao-administrador";
import { useState } from "react";
import BarraDeNavagacaoAdministradorMobile from "../components/layout/barra-de-navegacao-administrador-mobile";

export default function SectionPersonal() {
  // Etados Utilizado no componente
  const [openModalFormularioPersonal, setOpenModalFormularioPersonal] =
    useState(false);

  // Funções utilizadas no componente
  function handleVisibilityModalFormularioPersonal() {
    setOpenModalFormularioPersonal((prev) => !prev);
  }
  return (
    <section className="bg-white w-full min-h-[calc(100vh-187.29px)]">
      {/* Barra de navegação desktop e mobile */}
      <BarraDeNavegacaoAdministrador
        Icone={IconePersonal}
        nomeSection="Personal"
        handleVisibilityModalFormularioPersonal={
          handleVisibilityModalFormularioPersonal
        }
        openModalFormularioPersonal={openModalFormularioPersonal}
      />
      <BarraDeNavagacaoAdministradorMobile
        SectionName="personal"
        openModalFormularioPersonal={openModalFormularioPersonal}
        handleVisibilityModalFormularioPersonal={
          handleVisibilityModalFormularioPersonal
        }
      />
    </section>
  );
}
