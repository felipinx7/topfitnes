"use client";

import { TypeBarraNavegacao } from "@/types/type-barra-navegacao";
import { Icon } from "@/types/type-icon";
import ModalFormularioCliente from "./modal-formulario-cliente";
import { useState } from "react";
import ModalFormularioPersonal from "./modal-formulario-personal";

interface BarraDeNavegacaoAdministradorProps {
  Icone: Icon;
  nomeSection: TypeBarraNavegacao;
  openModalFormularioCliente?: boolean;
  openModalFormularioPersonal?: boolean;
  handleVisibilityModalFormularioCliente?: () => void | undefined;
  handleVisibilityModalFormularioPersonal?: () => void | undefined;
}

export default function BarraDeNavegacaoAdministrador({
  Icone,
  nomeSection,
  handleVisibilityModalFormularioPersonal,
  handleVisibilityModalFormularioCliente,
  openModalFormularioCliente,
  openModalFormularioPersonal,
}: BarraDeNavegacaoAdministradorProps) {
  return (
    // Container Global da Barra de Navegação
    <section className="w-full px-4 flex pt-5 items-center justify-center">
      {/* Modais de Formulario do Clientes e Personais  */}
      <ModalFormularioCliente
        OpenModal={openModalFormularioCliente}
        handleOpenFormulario={
          handleVisibilityModalFormularioCliente || (() => {})
        }
      />
      <ModalFormularioPersonal
        OpenModal={openModalFormularioPersonal}
        handleOpenFormulario={
          handleVisibilityModalFormularioPersonal || (() => {})
        }
      />
      {/* Barra de Navegação */}
      <article className="max-w-[1280px] max-sm:flex-col max-sm:items-start max-sm:gap-4 w-[100%] m-0 flex items-center justify-between p-4 rounded-[1rem] bg-verde-100">
        {/* Container Informação section  */}
        <div className="flex items-center gap-3 justify-center">
          <div className="bg-white flex items-center justify-center w-[55px] rounded-[0.8rem] h-[55px]">
            {<Icone />}
          </div>
          <p className="text-white font-Poppins-Bold text-[1.2rem]">
            CONTROLE DOS {nomeSection.toUpperCase()}
          </p>
        </div>

        {/* Container de Adição de um novo aluno ou personal */}
        <div className="max-sm:w-full">
          <button
            onClick={
              nomeSection === "Personal"
                ? handleVisibilityModalFormularioPersonal
                : handleVisibilityModalFormularioCliente
            }
            className="bg-white w-full p-3 hover:scale-105 rounded-[5.97px] hover:bg-[#efeeee] cursor-pointer ease-in-out duration-500 transition-all text-verde-100 font-Poppins-Bold text-[1rem]"
          >
            + Novo {nomeSection}
          </button>
        </div>
      </article>
    </section>
  );
}
