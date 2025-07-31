import { useEffect, useState } from "react";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DataCadastroPersonal } from "@/dto/data-cadastro-personal";
import {
  schemaCadastroPersonal,
  SchemaPersonal,
} from "@/schemas/schema-personais";
import PutPersonalAdministrador from "@/services/routes/administrador/put/put-personal-administrador";

interface ModalFormularioCardClienteProps {
  OpenModal: boolean;
  handleVisibilityModal: () => void;
  data: DataCadastroPersonal;
}

export default function ModalFormularioCardPersonais({
  OpenModal,
  handleVisibilityModal,
  data,
}: ModalFormularioCardClienteProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SchemaPersonal>({
    resolver: zodResolver(schemaCadastroPersonal),
  });

  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string>("");

  // Preenche formulário ao abrir
  useEffect(() => {
    if (data) {
      reset(data);
      if (data.foto) {
        const baseUrl = BaseUrlFoto(data.foto);
        setFotoPreview(baseUrl);
      }
    }
  }, [data, reset]);

  // Atualiza preview ao escolher novo arquivo
  useEffect(() => {
    if (!fotoFile) return;
    const objectUrl = URL.createObjectURL(fotoFile);
    setFotoPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [fotoFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFotoFile(file);
      setValue("foto", file as any); // força tipagem
    }
  };

  async function OnSubmit(data: SchemaPersonal) {
    try {
      if (fotoFile) {
        data.foto = fotoFile as any;
      }
      const response = await PutPersonalAdministrador(data.id, data);
      return response;
    } catch (error) {
      console.log("Erro ao atualizar dados", error);
    }
  }

  return (
    <section
      className={`overflow-hidden transition-all duration-500 ease-in-out w-full bg-transparent 
        ${OpenModal ? "max-h-[3000px] opacity-100 p-8" : "max-h-0 opacity-0 p-0"} 
      `}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
        <form
          method="POST"
          onSubmit={handleSubmit(OnSubmit)}
          encType="multipart/form-data"
          className="flex flex-col w-full"
        >
          <div className="flex items-start max-lg:flex-col gap-8 justify-between">
            {/* Coluna 1 */}
            <div className="flex flex-col w-full items-center gap-4">
              <div className="w-40 h-40 rounded-full overflow-hidden border">
                {fotoPreview ? (
                  <img
                    src={fotoPreview}
                    className="w-full h-full object-cover"
                    alt={`Foto do profissional ${data.nome}`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-sm text-gray-500">
                    Sem foto
                  </div>
                )}
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="text-sm mt-2"
              />

              <div className="flex mt-4 flex-col w-full">
                <label
                  htmlFor="nome"
                  className="text-[#333] font-Poppins-Semibold mb-1"
                >
                  Nome:
                </label>
                <input
                  {...register("nome")}
                  id="nome"
                  type="text"
                  className="input-padrao"
                />
                {errors.nome && (
                  <span className="text-red-500 text-sm">
                    {errors.nome.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col mb-6 w-full">
                <label
                  htmlFor="sobrenome"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Sobrenome:
                </label>
                <input
                  {...register("sobrenome")}
                  id="sobrenome"
                  className="input-padrao"
                />
                {errors.sobrenome && (
                  <span className="text-red-500 text-sm">
                    {errors.sobrenome.message}
                  </span>
                )}
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="telefone"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Telefone:
                </label>
                <input
                  {...register("telefone")}
                  id="telefone"
                  type="tel"
                  className="input-padrao"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Email:
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="input-padrao"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="formacao"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Formação:
                </label>
                <input
                  {...register("formacao")}
                  id="formacao"
                  type="text"
                  className="input-padrao"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="registro_profissional"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Registro Profissional:
                </label>
                <input
                  {...register("registro_profissional")}
                  id="registro_profissional"
                  type="text"
                  className="input-padrao"
                />
              </div>
            </div>

            {/* Coluna 3 */}
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="especialidade"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Especialidade:
                </label>
                <input
                  {...register("especialidade")}
                  id="especialidade"
                  type="text"
                  className="input-padrao"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="disponibilidade"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Disponibilidade:
                </label>
                <input
                  {...register("disponibilidade")}
                  id="disponibilidade"
                  type="text"
                  className="input-padrao"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex mt-4 items-center justify-center">
            <button
              type="submit"
              className="bg-verde-100 p-3 w-[50%] rounded-2xl hover:bg-verde-400 cursor-pointer transition-all duration-500 ease-in-out"
            >
              Atualizar dados
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
