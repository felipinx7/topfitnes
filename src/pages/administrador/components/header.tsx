"use client";

import { IconeSair } from "@/assets/icons/icone-sair";
import { logo } from "@/assets/image";
import { linksHeaderAdministrador } from "@/constants/links-header-adiministrador";
import Image from "next/image";
import { useState } from "react";
import ModalSair from "./modal-sair";
import ModalInformacoesAdministrador from "./modal-informacoes-administrador";

export default function HeaderAdministrador() {
  // Estado utilizado no componente
  const [isSelected, setIsSelected] = useState("personal");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenModalInformacoes, setIsOpenModalInformacoes] = useState(false);

  //Funções utilizadas no componente
  function handleVisibilityModal() {
    setIsModalOpen((prev) => !prev);
  }
  function handleSelectedButton(id: string) {
    setIsSelected(id);
  }
  function handleOpenModalInformacoes() {
    setIsOpenModalInformacoes((prev) => !prev);
  }

  const data = [
    {
      id: "1",
      nome: "Administrador",
      sobrenome: "Exemplo",
      foto: "/path/to/foto.jpg",
      telefone: "1234567890",
      senha: "senha123",
      email: "flimalimafelipek@gmail.com"
    }   
  ]

  return (
    <header className="">
      {/* modal sair do sistema */}
      <ModalSair isOppen={isModalOpen} LogoutSistem={handleVisibilityModal} handleCloseModal={handleVisibilityModal} />

      {/* Modal de Informações do Administrador  */}
      <ModalInformacoesAdministrador onceClose={handleOpenModalInformacoes} isOpenModalInformacoes={isOpenModalInformacoes}  data={data[0]} />

      {/* Container Parte de Cima logo  */}
      <div className="w-full bg-neutras-100 p-2 flex items-center justify-center">
        <Image src={logo} width={80} alt="logo da academia" />
      </div>

      {/* container Parte de baixo menu de navegação */}
      <nav className="w-full flex items-center justify-center bg-[#CBCBCB]">
        <div className="max-w-[1280px] w-[100%] py-3 flex items-center justify-between gap-4">
          {/* container do perfil do adimistrador */}
          <div onClick={handleOpenModalInformacoes} className="flex items-center gap-4 cursor-pointer">
            <Image
              src={logo}
              alt="Foto do usuário"
              className={`transition-all ease-in-out duration-500 ${isOpenModalInformacoes ? "border-verde-100" : "border-[#4F4F4F]"} w-[70px] h-[70px] border-4 rounded-full bg-[#CBCBCB]`}
            />
              <h1 className={`transition-all ease-in-out duration-500 ${isOpenModalInformacoes ? "text-white bg-verde-100 p-1 px-3 rounded-4xl" : "text-[#4F4F4F] bg-transparent"} text-[1.2rem] font-[500]`}>
              Olá, <span className="font-Poppins-Bold">Administrador!</span>
            </h1>
          </div>

          {/* container de navegação  */}
          <div className="flex items-center justify-center gap-6">
            {linksHeaderAdministrador.map((link) => (
              <button
                onClick={() => handleSelectedButton(link.id)}
                className={`${isSelected === link.id ? "bg-verde-100" : "bg-transparent"} flex items-center ease-in-out duration-300 transition-all p-2 px-4 rounded-2xl group hover:bg-verde-100 justify-center gap-3`}
                key={link.id}
              >
                {
                  <link.Icone
                    className={`${isSelected === link.id ? "text-white" : "text-[#4F4F4F]"} transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:text-white`}
                  />
                }
                <p
                  className={`${isSelected === link.id ? "text-white" : "text-[#4F4F4F]"} group-hover:text-white hover:translate-x-1 transition-all duration-500 ease-in-out font-[600] text-[1.1rem]`}
                >
                  {link.nome}
                </p>
              </button>
            ))}
          </div>

          {/* container sair do sistema */}
          <div>
            <button onClick={handleVisibilityModal} className="flex items-center justify-center gap-4 text-white font-bold text-[1.2rem] group hover:bg-verde-400 transition-all ease-in-out duration-300 cursor-pointer bg-[#AAACAB] p-2 px-4 rounded-2xl">
              <div>
                <IconeSair />
              </div>
              Sair
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
