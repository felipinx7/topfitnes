"use client";

import { SectionType } from "@/types/type-section-header-administrativo";
import ModalFormularioCliente from "./modal-formulario-cliente";
import ModalFormularioPersonal from "./modal-formulario-personal";
import { useEffect, useState } from "react";
import { logo } from "@/assets/image";
import Image from "next/image";
import ModalInformacoesAdministrador from "./modal-informacoes-administrador";
import { GetDadosAdministrador } from "@/services/routes/administrador/get/get-dados-administrador";
import { DataAdministrador } from "@/dto/data-administrador";
import { BaseUrlFoto } from "@/utils/base-url-foto";

interface BarraDeNavagacaoAdministradorMobileProps {
  SectionName: SectionType;
  openModalFormularioCliente?: boolean;
  openModalFormularioPersonal?: boolean;
  handleVisibilityModalFormularioCliente?: () => void | undefined;
  handleVisibilityModalFormularioPersonal?: () => void | undefined;
}

export default function BarraDeNavagacaoAdministradorMobile({
  SectionName,
  handleVisibilityModalFormularioCliente,
  handleVisibilityModalFormularioPersonal,
  openModalFormularioCliente,
  openModalFormularioPersonal,
}: BarraDeNavagacaoAdministradorMobileProps) {
  const [
    isOpenModalInformacoesAdministrador,
    setIsOpenModalInformacoesAdministrador,
  ] = useState(false);
  const [adminData, setAdminData] = useState<DataAdministrador | null>(null);

  // Abrir modal info
  function handleVisibilityModalInformacaoesAdministrador() {
    setIsOpenModalInformacoesAdministrador((prev) => !prev);
  }

  // Buscar dados do admin
  async function carregarAdmin() {
    try {
      const response = await GetDadosAdministrador();
      const dados = {
        id: response.administrador.id,
        nome: response.administrador.nome,
        sobrenome: response.administrador.sobrenome,
        email: response.administrador.email,
        senha: response.administrador.senha,
        telefone: response.administrador.telefone,
        foto: response.administrador.foto,
      };
      setAdminData(dados);
    } catch (error) {
      console.error("Erro ao carregar administrador:", error);
    }
  }

  // Executa quando o componente monta
  useEffect(() => {
    carregarAdmin();
  }, []);

  const foto = BaseUrlFoto(adminData?.foto);

  return (
    <section className="hidden p-4 max-lg:flex px-4 w-full items-center justify-center">
      {/* Modais de Formulario do Clientes e Personais */}
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

      {/* Modal informações administrador */}
      <ModalInformacoesAdministrador
        data={adminData}
        onceClose={handleVisibilityModalInformacaoesAdministrador}
        isOpenModalInformacoes={isOpenModalInformacoesAdministrador}
      />

      {/* Container Barra de Navegação Mobile */}
      <div className="max-w-[1280px] w-[100%] flex flex-col items-start gap-4 justify-between">
        {/* Parte de Cima */}
        <div className="w-full">
          <div
            onClick={handleVisibilityModalInformacaoesAdministrador}
            className="flex items-center gap-4 cursor-pointer"
          >
            <img
              src={foto}
              alt="Foto do administrador"
              className={`transition-all ease-in-out duration-500 ${
                isOpenModalInformacoesAdministrador
                  ? "border-verde-100"
                  : "border-[#4F4F4F]"
              } w-[70px] h-[70px] border-4 rounded-full bg-[#CBCBCB] object-cover`}
            />
            <h1
              className={`transition-all ease-in-out duration-500 ${
                isOpenModalInformacoesAdministrador
                  ? "text-white bg-verde-100 p-1 px-3 rounded-4xl"
                  : "text-[#4F4F4F] bg-transparent"
              } text-[1.2rem] font-[500]`}
            >
              Olá,{" "}
              <span className="font-Poppins-Bold">
                {adminData?.nome} {adminData?.sobrenome}
              </span>
            </h1>
          </div>
        </div>

        {/* Parte de Baixo */}
        <div className="w-full flex items-center justify-between">
          <p className="text-[#737373] font-Poppins-Bold text-[1.2rem]">
            CONTROLE DOS {SectionName.toUpperCase()}
          </p>
          <button
            onClick={
              SectionName === "personal"
                ? handleVisibilityModalFormularioPersonal
                : handleVisibilityModalFormularioCliente
            }
            className="bg-verde-100 w-[40px] text-white cursor-pointer hover:bg-verde-400 h-[40px] flex items-center justify-center rounded-[5.97px] font-bold text-[1.5rem]"
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}
