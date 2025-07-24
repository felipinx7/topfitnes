import { SectionType } from "@/types/type-section-header-administrativo";
import ModalFormularioCliente from "./modal-formulario-cliente";
import ModalFormularioPersonal from "./modal-formulario-personal";
import { useState } from "react";
import { logo } from "@/assets/image";
import Image from "next/image";
import ModalInformacoesAdministrador from "./modal-informacoes-administrador";

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
  //  Estado utilizado no componente
  const [
    isOpenModalInformacoesAdministrador,
    setIsOpenModalInformacoesAdministrador,
  ] = useState(false);
  const [isOpenModalFormularioCadastro, setisOpenModalFormularioCadastro] =
    useState(false);

  //   Funções utilizadas no componente
  function handleOpenModalInformacoes() {
    setisOpenModalFormularioCadastro((prev) => !prev);
  }
  function handleVisibilityModalInformacaoesAdministrador() {
    setIsOpenModalInformacoesAdministrador((prev) => !prev);
    console.log("Valor do Estado", isOpenModalInformacoesAdministrador)
  }

   const data = [
    {
      id: "1",
      nome: "Administrador",
      sobrenome: "Exemplo",
      foto: "/path/to/foto.jpg",
      telefone: "1234567890",
      senha: "senha123",
      email: "flimalimafelipek@gmail.com",
    },
  ];


  return (
    <section className="hidden p-4 max-lg:flex px-4 w-full items-center justify-center">
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

      <ModalInformacoesAdministrador
        data={data[0]}
        onceClose={handleVisibilityModalInformacaoesAdministrador}
        isOpenModalInformacoes={isOpenModalInformacoesAdministrador}
      />

      {/* Container Barra de Navegação Mobile  */}
      <div className="max-w-[1280px] w-[100%] flex flex-col items-start gap-4 justify-between">
        {/* container Parte de Cima  */}
        <div className="w-full">
          {/* container do perfil do adimistrador */}
          <div
            onClick={handleVisibilityModalInformacaoesAdministrador}
            className="flex items-center gap-4 cursor-pointer"
          >
            <Image
              src={logo}
              alt="Foto do usuário"
              className={`transition-all ease-in-out duration-500 ${isOpenModalInformacoesAdministrador ? "border-verde-100" : "border-[#4F4F4F]"} w-[70px] h-[70px] border-4 rounded-full bg-[#CBCBCB]`}
            />
            <h1
              className={`transition-all ease-in-out duration-500 ${isOpenModalInformacoesAdministrador ? "text-white bg-verde-100 p-1 px-3 rounded-4xl" : "text-[#4F4F4F] bg-transparent"} text-[1.2rem] font-[500]`}
            >
              Olá, <span className="font-Poppins-Bold">Administrador!</span>
            </h1>
          </div>
        </div>

        {/* Container Parte de Baixo  */}
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
