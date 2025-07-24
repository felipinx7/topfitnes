"use client";

import { useState } from "react";
import BarraDeNavegacaoAdministrador from "../components/barra-de-navegacao-administrador";
import { IconeAlunos } from "@/assets/icons/icone-alunos";

export default function SectionCliente() {
  // Etados Utilizado no componente
  const [openModalFormularioCliente, setOpenModalFormularioCliente] =
    useState(false);

  // Funções utilizadas no componente
  function handleVisibilityModalFormularioCliente() {
    setOpenModalFormularioCliente((prev) => !prev);
  }

  return (
    <section className="bg-white w-full min-h-[calc(100vh-187.29px)]">
      <BarraDeNavegacaoAdministrador
        handleVisibilityModalFormularioCliente={
          handleVisibilityModalFormularioCliente
        }
        openModalFormularioCliente={openModalFormularioCliente}
        Icone={IconeAlunos}
        nomeSection="Cliente"
      />
    </section>
  );
}
