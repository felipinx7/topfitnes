import { useEffect } from "react";
import { IconeSetaEsquerda } from "@/assets/icons/icone-seta-esquerda";
import FotoInputComponente from "@/components/ui/foto-input-componente";
import { DataAluno } from "@/dto/data-aluno";
import { AlunoSchemaDTO, schemaAluno } from "@/schemas/schema-aluno";
import PutClienteAdministrador from "@/services/routes/administrador/put/put-cliente-administrador";
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
  // estados e variaveis utilizadas no componente
  const foto = BaseUrlFoto(data.foto);
  const telefoneFormatado = data.telefone;
  function formatarDataISO(data: Date | string | undefined): string {
    if (!data) return "";
    const d = new Date(data);
    if (isNaN(d.getTime())) return "";
    return d.toISOString().substring(0, 10);
  }

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm<SchemaPersonal>({
    resolver: zodResolver(schemaCadastroPersonal),
  });

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  async function OnSubmit(data: SchemaPersonal) {
    try {
      console.log("OnSubmit");
      const response = await PutPersonalAdministrador(data.id, data);
      return response;
    } catch (error) {
      console.log("Error ao atualizar dados", error);
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
          className="flex flex-col w-full"
        >
          <div className="flex items-start max-lg:flex-col gap-8 justify-between">
            {/* Coluna 1 */}
            <div className="flex flex-col w-full items-center gap-4">
              <FotoInputComponente
                initialPhotoUrl={watch("foto")}
                onFileChange={(file) => setValue("foto", file)}
                submitedPhoto={isSubmitted}
              />

              <div className="flex mt-16 flex-col w-full">
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

              <div className="flex flex-col">
                <label
                  htmlFor="senha"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Senha:
                </label>
                <input
                  {...register("senha")}
                  id="senha"
                  type="password"
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
