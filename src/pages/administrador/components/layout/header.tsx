"use client";

import { IconeSair } from "@/assets/icons/icone-sair";
import { logo } from "@/assets/image";
import { linksHeaderAdministrador } from "@/constants/links-header-adiministrador";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModalInformacoesAdministrador from "./modal-informacoes-administrador";
import { SectionType } from "@/types/type-section-header-administrativo";
import ModalConfirmar from "./modal-confirmar";
import { DataAdministrador } from "@/dto/data-administrador";
import { GetDadosAdministrador } from "@/services/routes/administrador/get/get-dados-administrador";
import { LogoutSistema } from "@/services/routes/administrador/delete/logout-sistema";
import { useRouter } from "next/navigation";
import { BaseUrlFoto } from "@/utils/base-url-foto";

interface HeaderAdministradorProps {
  sectionSelected: SectionType;
  onSelectedSection: (section: SectionType) => void;
}

export default function HeaderAdministrador({
  onSelectedSection,
  sectionSelected,
}: HeaderAdministradorProps) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal sair
  const [isOpenModalInformacoes, setIsOpenModalInformacoes] = useState(false); // Modal info admin
  const [adminData, setAdminData] = useState<DataAdministrador | null>(null);
  const [informacaoAdmin, setInformacaoAdmin] =
    useState<DataAdministrador | null>(null);
  const router = useRouter();

  function handleVisibilityModal() {
    setIsModalOpen((prev) => !prev);
  }

  function handleSelectedButton(id: SectionType) {
    onSelectedSection(id);
  }

  function openModalInformacoes() {
    setIsOpenModalInformacoes((prev) => !prev);
  }

  function closeModalInformacoes() {
    setIsOpenModalInformacoes(false);
  }

  async function DeslogarSistema() {
    const response = await LogoutSistema();
    router.push("/login");
  }

  async function pegarUser() {
    const response = await GetDadosAdministrador();

    const dadosFormatados = {
      id: response.administrador.id,
      email: response.administrador.email,
      foto: response.administrador.foto,
      nome: response.administrador.nome,
      sobrenome: response.administrador.sobrenome,
      telefone: response.administrador.telefone,
      senha: response.administrador.senha,
    };

    setInformacaoAdmin(dadosFormatados);

    console.log("Dados do Aluno:", response);
  }

  const baseUrl = BaseUrlFoto(informacaoAdmin?.foto)

  useEffect(() => {
    pegarUser();
  }, [adminData]);

  console.log("Dados administrador", informacaoAdmin);

  return (
    <header className="max-lg:hidden">
      {/* Modal confirmação sair */}
      <ModalConfirmar
        text="Você realmente deseja sair do sistema?"
        isOppen={isModalOpen}
        handleActionComponente={DeslogarSistema}
        handleCloseModal={handleVisibilityModal}
      />

      {/* Modal informações do administrador */}
      <ModalInformacoesAdministrador
        isOpenModalInformacoes={isOpenModalInformacoes}
        onceClose={closeModalInformacoes}
        data={adminData || informacaoAdmin}
      />

      {/* Logo */}
      <div className="w-full bg-neutras-100 p-2 flex items-center justify-center">
        <Image src={logo} width={80} alt="logo da academia" />
      </div>

      {/* Navegação */}
      <nav className="w-full flex items-center px-4 justify-center bg-[#CBCBCB]">
        <div className="max-w-[1280px] w-full py-3 flex items-center justify-between gap-4">
          {/* Perfil do administrador - clique abre modal */}
          <div
            onClick={openModalInformacoes}
            className="flex items-center gap-4 cursor-pointer select-none"
          >
            <img
              src={baseUrl}
              alt="Foto do administrador"
              width={70}
              height={70}
              className={`transition-all duration-500 ${
                isOpenModalInformacoes ? "border-verde-100" : "border-[#4F4F4F]"
              } w-[70px] h-[70px] border-4 rounded-full bg-[#CBCBCB] object-cover`}
            />
            <h1
              className={`transition-all duration-500 ${
                isOpenModalInformacoes
                  ? "text-white bg-verde-100 p-1 px-3 rounded-4xl"
                  : "text-[#4F4F4F]"
              } text-[1.2rem] font-[500]`}
            >
              Olá,{" "}
              <span className="font-Poppins-Bold">
                {adminData?.nome || `${informacaoAdmin?.nome} ${informacaoAdmin?.sobrenome} ${informacaoAdmin?.id}`}!
              </span>
            </h1>
          </div>

          {/* Botões de navegação */}
          <div className="flex items-center justify-center gap-6">
            {linksHeaderAdministrador.map((link) => (
              <button
                key={link.id}
                onClick={() => handleSelectedButton(link.id as SectionType)}
                className={`${
                  sectionSelected === link.id
                    ? "bg-verde-100"
                    : "bg-transparent"
                } flex items-center p-2 px-4 rounded-2xl group hover:bg-verde-100 gap-3 transition-all duration-300`}
              >
                <link.Icone
                  className={`${
                    sectionSelected === link.id
                      ? "text-white"
                      : "text-[#4F4F4F]"
                  } w-[39px] h-[40px] group-hover:text-white group-hover:translate-x-1 transition-all duration-500`}
                />
                <p
                  className={`${
                    sectionSelected === link.id
                      ? "text-white"
                      : "text-[#4F4F4F]"
                  } group-hover:text-white transition-all duration-500 text-[1.1rem] font-[600]`}
                >
                  {link.nome}
                </p>
              </button>
            ))}
          </div>

          {/* Botão sair */}
          <div>
            <button
              onClick={handleVisibilityModal}
              className="flex items-center gap-4 text-white font-bold text-[1.2rem] group hover:bg-verde-400 transition-all bg-[#AAACAB] p-2 px-4 rounded-2xl"
            >
              <IconeSair />
              Sair
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
