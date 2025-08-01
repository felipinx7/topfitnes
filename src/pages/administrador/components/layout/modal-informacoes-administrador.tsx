"use client";

import { IconeFechar } from "@/assets/icons/icone-fechar";
import { IconeOlhoAberto } from "@/assets/icons/icone-olho-aberto";
import { OlhoFechado } from "@/assets/icons/icone-olho-fechado";
import FotoInputComponente from "@/components/ui/foto-input-componente";
import { DataAdministradorDTO } from "@/dto/data-administrador-DTO";
import { PutAdministrador } from "@/services/routes/administrador/put/put-administrador";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { useEffect, useState } from "react";

interface ModalInformacoesAdministradorProps<DataAdministradorDTO> {
  data: DataAdministradorDTO | null;
  onceClose: () => void;
  isOpenModalInformacoes?: boolean;
}

export default function ModalInformacoesAdministrador({
  data,
  isOpenModalInformacoes,
  onceClose,
}: ModalInformacoesAdministradorProps<DataAdministradorDTO>) {
  if (!data) return null;

  // Foto com base na URL
  const foto = BaseUrlFoto(data?.foto);

  // Estados de edição e visibilidade da senha
  const [isEditando, setIsEditando] = useState(false);
  const [viwewPassword, setViewPassword] = useState(false);

  // Estados dos campos do formulário
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("*******");
  const [telefone, setTelefone] = useState("");

  // Carrega dados quando o modal abrir / data mudar
  useEffect(() => {
    if (data) {
      setNome(data.nome ?? "");
      setSobrenome(data.sobrenome ?? "");
      setEmail(data.email ?? "");
      setSenha("*****");
      setTelefone(data.telefone ?? "");
    }
  }, [data]);

  // Alterna modo edição
  const handleEditarFormulario = () => {
    setIsEditando((prev) => !prev);
  };

  // Alterna visibilidade da senha
  const handleViewPassword = () => {
    setViewPassword((prev) => !prev);
  };

  // Função para enviar os dados atualizados ao backend
  async function atualizarDados(e: React.FormEvent) {
    e.preventDefault();

    if (!data) {
      alert("Dados do administrador não disponíveis.");
      return;
    }

    // Sempre inclui a senha, usando string vazia se for o placeholder
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
      <div className="max-w-[1280px] w-[100%] m-0 p-8 flex gap-16 max-lg:gap-3 flex-col">
        <div
          onClick={onceClose}
          className="w-full flex items-center gap-4 cursor-pointer"
        >
          <div className="h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#4F4F4F] hover:bg-[#373737] transition-all duration-300 ease-in-out hover:scale-105">
            <IconeFechar className="text-[#CFCFCF]" />
          </div>
          <p className="text-[#4F4F4F] font-Poppins-Bold text-[1.2rem]">
            FECHAR
          </p>
        </div>

        {/* Formulário com onSubmit */}
        <form
          onSubmit={atualizarDados}
          className="flex flex-col justify-between w-full gap-20 items-center"
        >
          <div className="flex max-lg:flex-col justify-between w-full gap-20 items-center">
            <div className="w-[450px] h-[300px] max-md:w-[300px] max-md:h-[300px] rounded-full overflow-hidden border-4 border-verde-100 shadow-lg">
              <img
                src={foto}
                alt={`Foto do administrador ${nome}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full">
              <div className="flex flex-col justify-center gap-4">
                <div className="flex max-lg:flex-col items-center justify-between gap-16 max-lg:gap-3">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="nome"
                      className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className={`transition-all duration-500 ease-in-out ${
                        isEditando
                          ? "bg-[#E7E7E7] font-[600] text-neutras-100 focus:scale-105 p-4 text-[1.1rem] px-4 w-full rounded-full outline-none focus:border-2 focus:border-verde-100"
                          : "bg-[#56c774b9] font-[600] text-neutras-100 p-4 text-[1.1rem] px-9 w-full rounded-full outline-none"
                      }`}
                      readOnly={!isEditando}
                      required
                      id="nome"
                      placeholder="Nome"
                    />
                  </div>

                  <div className="flex max-lg:flex-col flex-col gap-3 w-full">
                    <label
                      htmlFor="sobrenome"
                      className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                    >
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      value={sobrenome}
                      onChange={(e) => setSobrenome(e.target.value)}
                      readOnly={!isEditando}
                      required
                      className={`transition-all duration-500 ease-in-out ${
                        isEditando
                          ? "bg-[#E7E7E7] font-[600] text-neutras-100 focus:scale-105 p-4 text-[1.1rem] px-4 w-full rounded-full outline-none focus:border-2 focus:border-verde-100"
                          : "bg-[#56c774b9] font-[600] text-neutras-100 p-4 text-[1.1rem] px-9 w-full rounded-full outline-none"
                      }`}
                      id="sobrenome"
                      placeholder="Sobrenome"
                    />
                  </div>
                </div>

                <div className="flex max-lg:flex-col items-center justify-between gap-16 max-lg:gap-3">
                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor="email"
                      className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      readOnly={!isEditando}
                      required
                      className={`transition-all duration-500 ease-in-out ${
                        isEditando
                          ? "bg-[#E7E7E7] font-[600] text-neutras-100 focus:scale-105 p-4 text-[1.1rem] px-4 w-full rounded-full outline-none focus:border-2 focus:border-verde-100"
                          : "bg-[#56c774b9] font-[600] text-neutras-100 p-4 text-[1.1rem] px-9 w-full rounded-full outline-none"
                      }`}
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex max-lg:flex-col flex-col gap-3 w-full">
                    <label
                      htmlFor="status"
                      className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                    >
                      Status
                    </label>
                    <input
                      type="text"
                      className="bg-[#56c774b9] font-[600] text-neutras-100 p-4 text-[1.1rem] px-9 w-full rounded-full outline-none"
                      readOnly
                      value={"Ativo"}
                      id="status"
                      placeholder="Status"
                    />
                  </div>
                </div>

                <div className="flex max-lg:flex-col items-center justify-between gap-16 max-lg:gap-3">
                  <div className="flex flex-col gap-3 w-full">
                    <label
                      htmlFor="telefone"
                      className="px-2 text-[1.1rem] font-Poppins-Bold text-neutras-100"
                    >
                      Telefone
                    </label>
                    <input
                      type="text"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      readOnly={!isEditando}
                      required
                      className={`transition-all duration-500 ease-in-out ${
                        isEditando
                          ? "bg-[#E7E7E7] font-[600] text-neutras-100 focus:scale-105 p-4 text-[1.1rem] px-4 w-full rounded-full outline-none focus:border-2 focus:border-verde-100"
                          : "bg-[#56c774b9] font-[600] text-neutras-100 p-4 text-[1.1rem] px-9 w-full rounded-full outline-none"
                      }`}
                      id="telefone"
                      placeholder="Telefone"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botões editar e salvar */}
          <div className="w-full max-lg:flex-col flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleEditarFormulario}
              className={`w-auto max-lg:w-full p-[14px] font-[600] text-[1.1rem] ${
                isEditando ? "bg-[#8a998eB3]" : "bg-verde-100"
              } ${isEditando ? "bg-[#6d746fb3]" : "hover:bg-verde-400"} transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 px-30 rounded-2xl`}
            >
              {isEditando ? "Cancelar" : "Editar"}
            </button>
            <button
              disabled={!isEditando}
              type="submit"
              className={`${
                isEditando
                  ? "bg-verde-100 hover:bg-verde-400 cursor-pointer"
                  : "bg-[#6d746fb3]"
              } w-auto max-lg:w-full p-[14px] font-[600] text-[1.1rem] px-30 rounded-2xl`}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
