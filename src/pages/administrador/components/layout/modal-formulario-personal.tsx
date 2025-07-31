"use client";

import { useEffect, useState } from "react";
import { IconeSetaEsquerda } from "@/assets/icons/icone-seta-esquerda";
import { DataCadastroPersonal } from "@/dto/data-cadastro-personal";
import { schemaPersonal } from "@/schemas/schema-personal";
import { PostCadastrarPersonal } from "@/services/routes/administrador/post/post-cadastrar-personal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface ModalFormularioClienteProps {
  OpenModal: boolean | undefined;
  handleOpenFormulario: () => void | undefined;
}

export default function ModalFormularioPersonal({
  OpenModal,
  handleOpenFormulario,
}: ModalFormularioClienteProps) {
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string>("");

  useEffect(() => {
    console.log(fotoFile ? "arquivo definido" : "nenhum arquivo");
    if (!fotoFile) {
      setFotoPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(fotoFile);
    setFotoPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [fotoFile]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataCadastroPersonal>({
    resolver: zodResolver(schemaPersonal),
  });

  async function OnSubmit(data: DataCadastroPersonal) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (fotoFile) formData.append("foto", fotoFile);

    try {
      await PostCadastrarPersonal(formData);
      alert("Personal cadastrado com sucesso!");
      reset();
      setFotoFile(null);
    } catch (error) {
      console.error("Erro ao cadastrar personal:", error);
      alert("Erro ao cadastrar personal.");
    }
  }

  return (
    <section
      className={`${OpenModal ? "absolute" : "hidden"} w-full min-h-[calc(100vh-187.29px)] max-lg:min-h-[calc(100vh-158px)] z-20 max-lg:top-0 bg-[#F1F1F1] top-[187.29px] flex justify-center`}
    >
      <div className="max-w-[1280px] w-full p-8 flex flex-col gap-8">
        <div className="w-full flex items-center gap-3">
          <button
            onClick={handleOpenFormulario}
            type="button"
            className="w-[35px] h-[50px] flex items-center justify-center bg-[#4F4F4F] rounded"
          >
            <IconeSetaEsquerda />
          </button>
          <p className="text-[#444] text-[1.2rem] font-Poppins-Bold">
            NOVO PERSONAL
          </p>
        </div>

        <form onSubmit={handleSubmit(OnSubmit)} className="flex flex-col gap-8">
          <div className="flex items-start max-lg:flex-col gap-8 justify-between">
            <div className="flex flex-col items-center gap-4 w-full max-w-[300px]">
              {fotoPreview ? (
                <img
                  src={fotoPreview}
                  alt="Pré-visualização"
                  className="w-40 h-40 rounded-full object-cover border-2 border-red-500"
                />
              ) : (
                <div className="w-40 h-40 rounded-full bg-[#DBDBDB] flex items-center justify-center text-[#7a7a7a]">
                  Sem Foto
                </div>
              )}

              <label className="relative cursor-pointer bg-[#DBDBDB] hover:bg-[#cfcfcf] text-[#1E1E1E] font-Poppins-Medium px-4 py-2 rounded">
                {fotoPreview ? "Trocar Foto" : "Selecionar Foto"}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    console.log("onChange files:", e.target.files);
                    if (file) setFotoFile(file);
                  }}
                />
              </label>

              <div className="w-full">
                <label
                  htmlFor="nome"
                  className="text-[#646464] font-Poppins-Bold mb-1 block"
                >
                  Nome:
                </label>
                <input
                  id="nome"
                  {...register("nome")}
                  type="text"
                  placeholder="Digite o nome"
                  className="w-full bg-[#DBDBDB] px-4 py-2 rounded font-Poppins-Medium text-[#1E1E1E]"
                  required
                />
                {errors.nome && (
                  <p className="text-red-500 text-sm">{errors.nome.message}</p>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="sobrenome"
                  className="text-[#646464] font-Poppins-Bold mb-1 block"
                >
                  Sobrenome:
                </label>
                <input
                  id="sobrenome"
                  {...register("sobrenome")}
                  type="text"
                  placeholder="Digite o sobrenome"
                  className="w-full bg-[#DBDBDB] px-4 py-2 rounded font-Poppins-Medium text-[#1E1E1E]"
                  required
                />
                {errors.sobrenome && (
                  <p className="text-red-500 text-sm">
                    {errors.sobrenome.message}
                  </p>
                )}
              </div>
            </div>

            {/* Bloco 2: Contato */}
            <div className="flex flex-col w-full gap-4">
              {/* Telefone */}
              <div>
                <label
                  htmlFor="telefone"
                  className="text-[#646464] font-Poppins-Bold mb-1 block"
                >
                  Telefone:
                </label>
                <input
                  id="telefone"
                  type="tel"
                  {...register("telefone")}
                  placeholder="(00) 00000-0000"
                  className="w-full bg-[#DBDBDB] px-4 py-2 rounded font-Poppins-Medium text-[#1E1E1E]"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-[#646464] font-Poppins-Bold mb-1 block"
                >
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="exemplo@email.com"
                  className="w-full bg-[#DBDBDB] px-4 py-2 rounded font-Poppins-Medium text-[#1E1E1E]"
                  required
                />
              </div>

              {/* Senha */}
              <div>
                <label
                  htmlFor="senha"
                  className="text-[#646464] font-Poppins-Bold mb-1 block"
                >
                  Senha:
                </label>
                <input
                  id="senha"
                  type="password"
                  {...register("senha")}
                  placeholder="Digite a senha"
                  className="w-full bg-[#DBDBDB] px-4 py-2 rounded font-Poppins-Medium text-[#1E1E1E]"
                  required
                />
              </div>
            </div>

            {/* Bloco 3: Profissional */}
            <div className="flex flex-col w-full gap-4">
              {/* Formação */}
              <div>
                <label
                  htmlFor="formacao"
                  className="text-[#646464] font-Poppins-Bold mb-1 block"
                >
                  Formação:
                </label>
                <input
                  id="formacao"
                  {...register("formacao")}
                  type="text"
                  placeholder="Digite a formação"
                  className="w-full bg-[#DBDBDB] px-4 py-2 rounded font-Poppins-Medium text-[#1E1E1E]"
                  required
                />
              </div>

              {/* Registro Profissional */}
              <div>
                <label
                  htmlFor="registro_profissional"
                  className="text-[#646464] font-Poppins-Bold mb-1 block"
                >
                  Registro Profissional:
                </label>
                <input
                  id="registro_profissional"
                  {...register("registro_profissional")}
                  type="text"
                  placeholder="Digite o registro"
                  className="w-full bg-[#DBDBDB] px-4 py-2 rounded font-Poppins-Medium text-[#1E1E1E]"
                  required
                />
              </div>

              {/* Especialidade */}
              <div>
                <label
                  htmlFor="especialidade"
                  className="text-[#646464] font-Poppins-Bold mb-1 block"
                >
                  Especialidade:
                </label>
                <input
                  id="especialidade"
                  {...register("especialidade")}
                  type="text"
                  placeholder="Digite a especialidade"
                  className="w-full bg-[#DBDBDB] px-4 py-2 rounded font-Poppins-Medium text-[#1E1E1E]"
                  required
                />
              </div>

              {/* Disponibilidade */}
              <div>
                <label
                  htmlFor="disponibilidade"
                  className="text-[#646464] font-Poppins-Bold mb-1 block"
                >
                  Disponibilidade:
                </label>
                <input
                  id="disponibilidade"
                  {...register("disponibilidade")}
                  type="text"
                  placeholder="Ex: Segunda a Sexta, 08h às 17h"
                  className="w-full bg-[#DBDBDB] px-4 py-2 rounded font-Poppins-Medium text-[#1E1E1E]"
                  required
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-Poppins-Bold px-8 py-2 rounded"
            >
              CADASTRAR
            </button>
          </div>
        </form>

        <pre className="text-red-500">{JSON.stringify(errors, null, 2)}</pre>
      </div>
    </section>
  );
}
