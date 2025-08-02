"use client";

import { useEffect, useState } from "react";
import { IconeFechar } from "@/assets/icons/icone-fechar";
import { IconeOlhoAberto } from "@/assets/icons/icone-olho-aberto";
import { OlhoFechado } from "@/assets/icons/icone-olho-fechado";
import FotoInputComponente from "@/components/ui/foto-input-componente";
import { DataAdministradorDTO } from "@/dto/data-administrador-DTO";
import { PutAdministrador } from "@/services/routes/administrador/put/put-administrador";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { FormatarNumero } from "@/utils/formatar-numero-telefone";

interface ModalInformacoesAdministradorProps<T> {
  data: T | null;
  onceClose: () => void;
  isOpenModalInformacoes?: boolean;
}

export default function ModalInformacoesAdministrador({
  data,
  isOpenModalInformacoes,
  onceClose,
}: ModalInformacoesAdministradorProps<DataAdministradorDTO>) {
  if (!data) return null;

  const foto = BaseUrlFoto(data.foto);

  const [isEditando, setIsEditando] = useState(false);
  const [viwewPassword, setViewPassword] = useState(false);

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("*******");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    if (data) {
      setNome(data.nome ?? "");
      setSobrenome(data.sobrenome ?? "");
      setEmail(data.email ?? "");
      setSenha("*****");
      setTelefone(data.telefone ?? "");
    }
  }, [data]);

  const handleEditarFormulario = () => {
    setIsEditando((prev) => !prev);
  };

  const handleViewPassword = () => {
    setViewPassword((prev) => !prev);
  };

  async function atualizarDados(e: React.FormEvent) {
    e.preventDefault();
    if (!data) {
      alert("Dados do administrador não disponíveis.");
      return;
    }

    const dadosAtualizados: DataAdministradorDTO = {
      id: data.id,
      foto: data.foto,
      nome,
      sobrenome,
      email,
      telefone,
    };

    try {
      await PutAdministrador(dadosAtualizados);
      alert("Dados atualizados com sucesso!");
      setIsEditando(false);
    } catch (error) {
      console.error("Erro ao atualizar administrador:", error);
      alert("Erro ao atualizar os dados.");
    }
  }

  return (
    <div
      className={`${
        isOpenModalInformacoes ? "absolute" : "hidden"
      } w-full min-h-[calc(100vh-187.29px)] z-[99999] max-lg:min-h-[calc(100vh-158px)] max-lg:top-[5.9rem] bg-[#CFCFCF] top-[187.29px] flex justify-center`}
    >
      <div className="max-w-[1280px] w-full p-8 flex flex-col gap-16 max-lg:gap-3">
        {/* Botão Fechar */}
        <div
          onClick={onceClose}
          className="flex items-center gap-4 cursor-pointer"
        >
          <div className="h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#4F4F4F] hover:bg-[#373737] transition-all duration-300 hover:scale-105">
            <IconeFechar className="text-[#CFCFCF]" />
          </div>
          <p className="text-[#4F4F4F] font-Poppins-Bold text-[1.2rem]">
            FECHAR
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={atualizarDados}
          className="flex flex-col items-center gap-20 w-full"
        >
          <div className="flex max-lg:flex-col justify-between items-center gap-20 w-full">
            <div className="w-[450px] h-[300px] max-md:w-[300px] max-md:h-[300px] rounded-full overflow-hidden border-4 border-verde-100 shadow-lg">
              <img
                src={foto}
                alt={`Foto do administrador ${nome}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full flex flex-col gap-4">
              {/* Nome e Sobrenome */}
              <div className="flex max-lg:flex-col items-center justify-between gap-16 max-lg:gap-3">
                {/* Nome */}
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="nome"
                    className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    readOnly={!isEditando}
                    required
                    placeholder="Nome"
                    className={`transition-all duration-500 ease-in-out ${
                      isEditando
                        ? "bg-[#E7E7E7] text-neutras-100 font-[600] focus:scale-105 p-4 px-4 rounded-full outline-none focus:border-2 focus:border-verde-100"
                        : "bg-[#56c774b9] text-neutras-100 font-[600] p-4 px-9 rounded-full outline-none"
                    }`}
                  />
                </div>

                {/* Sobrenome */}
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="sobrenome"
                    className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                  >
                    Sobrenome
                  </label>
                  <input
                    id="sobrenome"
                    type="text"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                    readOnly={!isEditando}
                    required
                    placeholder="Sobrenome"
                    className={`transition-all duration-500 ease-in-out ${
                      isEditando
                        ? "bg-[#E7E7E7] text-neutras-100 font-[600] focus:scale-105 p-4 px-4 rounded-full outline-none focus:border-2 focus:border-verde-100"
                        : "bg-[#56c774b9] text-neutras-100 font-[600] p-4 px-9 rounded-full outline-none"
                    }`}
                  />
                </div>
              </div>

              {/* Email e Status */}
              <div className="flex max-lg:flex-col items-center justify-between gap-16 max-lg:gap-3">
                {/* Email */}
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="email"
                    className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    readOnly={!isEditando}
                    required
                    placeholder="Email"
                    className={`transition-all duration-500 ease-in-out ${
                      isEditando
                        ? "bg-[#E7E7E7] text-neutras-100 font-[600] focus:scale-105 p-4 px-4 rounded-full outline-none focus:border-2 focus:border-verde-100"
                        : "bg-[#56c774b9] text-neutras-100 font-[600] p-4 px-9 rounded-full outline-none"
                    }`}
                  />
                </div>

                {/* Status */}
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="status"
                    className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                  >
                    Status
                  </label>
                  <input
                    id="status"
                    type="text"
                    readOnly
                    value="Ativo"
                    className="bg-[#56c774b9] text-neutras-100 font-[600] p-4 px-9 rounded-full outline-none"
                  />
                </div>
              </div>

              {/* Telefone */}
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="telefone"
                  className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                >
                  Telefone
                </label>
               <input
  id="telefone"
  maxLength={15}
  type="text"
  value={telefone}
  onChange={(e) => setTelefone(FormatarNumero(e.target.value))}
  readOnly={!isEditando}
  required
  placeholder="Telefone"
  className={`transition-all duration-500 ease-in-out ${
    isEditando
      ? "bg-[#E7E7E7] text-neutras-100 font-[600] focus:scale-105 p-4 px-4 rounded-full outline-none focus:border-2 focus:border-verde-100"
      : "bg-[#56c774b9] text-neutras-100 font-[600] p-4 px-9 rounded-full outline-none"
  }`}
/>
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="w-full flex max-lg:flex-col items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleEditarFormulario}
              className={`w-auto max-lg:w-full p-[14px] font-[600] text-[1.1rem] px-30 rounded-2xl transition-all duration-500 hover:scale-105 ${
                isEditando
                  ? "bg-[#6d746fb3]"
                  : "bg-verde-100 hover:bg-verde-400"
              }`}
            >
              {isEditando ? "Cancelar" : "Editar"}
            </button>
            <button
              type="submit"
              disabled={!isEditando}
              className={`w-auto max-lg:w-full p-[14px] font-[600] text-[1.1rem] px-30 rounded-2xl ${
                isEditando
                  ? "bg-verde-100 hover:bg-verde-400 cursor-pointer"
                  : "bg-[#6d746fb3]"
              }`}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
