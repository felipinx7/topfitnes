"use client";

import { IconeFechar } from "@/assets/icons/icone-fechar";
import { IconeOlhoAberto } from "@/assets/icons/icone-olho-aberto";
import { OlhoFechado } from "@/assets/icons/icone-olho-fechado";
import FotoInputComponente from "@/components/ui/foto-input-componente";
import { DataAdministradorDTO } from "@/dto/data-administrador-DTO";
import { useState } from "react";

interface ModalInformacoesAdministradorProps<DataAdministradorDTO> {
  data: DataAdministradorDTO;
  onceClose: () => void;
  isOpenModalInformacoes?: boolean;
}

export default function ModalInformacoesAdministrador({data, isOpenModalInformacoes, onceClose}: ModalInformacoesAdministradorProps<DataAdministradorDTO>) {
  // Estados Utilizados no componente
  const [isEditando, setIsEditando] = useState(false);
  const [viwewPassword, setViewPassword] = useState(false);

  // Funções utilizadas no componente
  const handleEditarFormulario = () => {
    setIsEditando((prev) => !prev);
  };
  const handleViewPassword = () => {
    setViewPassword((prev) => !prev);
  };

  return (
    // Container Global do Modal
    <div className={`${isOpenModalInformacoes ? "absolute" : "hidden"} w-full min-h-[calc(100vh-187.29px)] bg-[#CFCFCF] top-[187.29px] flex justify-center`}>
      {/* Modal de Informações do Administrador */}
      <div className="max-w-[1280px] w-[100%] m-0 p-8 flex gap-16 flex-col">
        {/* Container Fechar Informações */}
        <div onClick={onceClose} className="w-full flex items-center gap-4">
          <div className="h-[45px] cursor-pointer w-[45px] rounded-full flex items-center justify-center bg-[#4F4F4F] hover:bg-[#373737] transition-all duration-300 ease-in-out hover:scale-105">
            <IconeFechar className="text-[#CFCFCF]" />
          </div>
          <p className="text-[#4F4F4F] font-Poppins-Bold text-[1.2rem]">
            FECHAR
          </p>
        </div>

        {/* Container formulario das informações do administrador */}
        <form className="flex flex-col justify-between w-full gap-20 items-center">
          {/* container global das informações do formulário  */}
          <div className="flex justify-between w-full gap-20 items-center">
            {/* Container Foto de Perfil  */}
            <div>
              <FotoInputComponente />
            </div>

            {/* container outras informações do formulario  */}
            <div className="w-full">
              <div className="flex flex-col justify-center gap-4">
                {/* input nome e sobrenome  */}
                <div className="flex items-center justify-between gap-16">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="nome"
                      className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      className={`transition-all duration-500 ease-in-out ${isEditando ? "bg-[#E7E7E7] font-[600] text-neutras-100 focus:scale-105 p-4 text-[1.1rem] px-4 w-full ease-in-out transition-all duration-500 placeholder:font-[600] placeholder:text-neutras-100 rounded-full outline-none focus:border-2 focus:border-verde-100" : "bg-[#56c774b9] font-[600] text-neutras-100 p-4 text-[1.1rem] px-9 w-full ease-in-out placeholder:text-neutras-100 rounded-full outline-none "}`}
                      readOnly={isEditando ? false : true}
                      required
                      name=""
                      placeholder="Nome"
                      id="nome"
                    />
                  </div>

                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor="sobrenome"
                      className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                    >
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      readOnly={isEditando ? false : true}
                      required
                      className={`transition-all duration-500 ease-in-out ${isEditando ? "bg-[#E7E7E7] font-[600] text-neutras-100 focus:scale-105 p-4 text-[1.1rem] px-4 w-full ease-in-out transition-all duration-500 placeholder:font-[600] placeholder:text-neutras-100 rounded-full outline-none focus:border-2 focus:border-verde-100" : "bg-[#56c774b9] font-[600] text-neutras-100 p-4 text-[1.1rem] px-9 w-full ease-in-out placeholder:text-neutras-100 rounded-full outline-none "}`}
                      name=""
                      placeholder="sobrenome"
                      id="sobrenome"
                    />
                  </div>
                </div>

                {/* input email e senha  */}
                <div className="flex items-center justify-between gap-16">
                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor="email"
                      className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      readOnly={isEditando ? false : true}
                      required
                      className={`transition-all duration-500 ease-in-out ${isEditando ? "bg-[#E7E7E7] font-[600] text-neutras-100 focus:scale-105 p-4 text-[1.1rem] px-4 w-full ease-in-out transition-all duration-500 placeholder:font-[600] placeholder:text-neutras-100 rounded-full outline-none focus:border-2 focus:border-verde-100" : "bg-[#56c774b9] font-[600] text-neutras-100 p-4 text-[1.1rem] px-9 w-full ease-in-out placeholder:text-neutras-100 rounded-full outline-none "}`}
                      name=""
                      placeholder="email"
                      id="email"
                    />
                  </div>

                  <div className="flex relative flex-col gap-3 w-full">
                    <label
                      htmlFor="senha"
                      className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                    >
                      Senha
                    </label>
                    <input
                      type={viwewPassword ? "text" : "password"}
                      readOnly={isEditando ? false : true}
                      required
                      className={`transition-all duration-500 ease-in-out ${isEditando ? "bg-[#E7E7E7] font-[600] text-neutras-100 focus:scale-105 p-4 text-[1.1rem] px-4 w-full ease-in-out transition-all duration-500 placeholder:font-[600] placeholder:text-neutras-100 rounded-full outline-none focus:border-2 focus:border-verde-100" : "bg-[#56c774b9] font-[600] text-neutras-100 p-4 text-[1.1rem] px-9 w-full ease-in-out placeholder:text-neutras-100 rounded-full outline-none "}`}
                      name=""
                      placeholder="senha"
                      id="senha"
                    />
                    <div
                      onClick={handleViewPassword}
                      className={`${isEditando ? "absolute" : "hidden"} top-[38%] right-4 translate-y-[50%]`}
                    >
                      {viwewPassword ? (
                        <IconeOlhoAberto className="size-8 text-verde-100" />
                      ) : (
                        <OlhoFechado className="size-8 text-verde-100" />
                      )}
                    </div>
                  </div>
                </div>

                {/* input telefone e status */}
                <div className="flex items-center justify-between gap-16">
                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor="telefone"
                      className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                    >
                      Telefone
                    </label>
                    <input
                      type="text"
                      readOnly={isEditando ? false : true}
                      required
                      className={`transition-all duration-500 ease-in-out ${isEditando ? "bg-[#E7E7E7] font-[600] text-neutras-100 focus:scale-105 p-4 text-[1.1rem] px-4 w-full ease-in-out transition-all duration-500 placeholder:font-[600] placeholder:text-neutras-100 rounded-full outline-none focus:border-2 focus:border-verde-100" : "bg-[#56c774b9] font-[600] text-neutras-100 p-4 text-[1.1rem] px-9 w-full ease-in-out placeholder:text-neutras-100 rounded-full outline-none "}`}
                      name=""
                      placeholder="telefone"
                      id="telefone"
                    />
                  </div>

                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor="status"
                      className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                    >
                      Status
                    </label>
                    <input
                      type="text"
                      className="bg-[#56c774b9] font-[600] text-neutras-100 p-4 text-[1.1rem] px-9 w-full ease-in-out placeholder:text-neutras-100 rounded-full outline-none"
                      name=""
                      readOnly
                      value={"Ativo"}
                      placeholder="status"
                      id="status"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* container de botões editar e salvar */}
          <div className="w-full flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleEditarFormulario}
              className={`w-auto p-[14px] font-[600] text-[1.1rem] ${isEditando ? "bg-[#8a998eB3]" : "bg-verde-100"} ${isEditando ? "bg-[#6d746fb3]" : "hover:bg-verde-400"} transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 px-30 rounded-2xl`}
            >
              {isEditando ? "Cancelar" : "Editar"}
            </button>
            <button
              disabled={isEditando ? true : false}
              type={isEditando ? "submit" : "button"}
              className={`${isEditando ? "bg-verde-100" : "bg-[#8a998eB3]"} ${isEditando ? "hover:bg-verde-400" : " bg-[#6d746fb3]"} ${isEditando ? "cursor-pointer" : ""} w-auto p-[14px] font-[600] text-[1.1rem] px-30 rounded-2xl bg-[#8a998eB3]`}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
