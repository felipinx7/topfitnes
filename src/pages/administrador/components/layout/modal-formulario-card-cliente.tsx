import { useEffect, useState } from "react";
import FotoInputComponente from "@/components/ui/foto-input-componente";
import { DataAluno } from "@/dto/data-aluno";
import { AlunoSchemaDTO, schemaAluno } from "@/schemas/schema-aluno";
import PutClienteAdministrador from "@/services/routes/administrador/put/put-cliente-administrador";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { logo } from "@/assets/image";
import { BaseUrlFoto } from "@/utils/base-url-foto";

interface ModalFormularioCardClienteProps {
  OpenModal: boolean;
  handleVisibilityModal: () => void;
  data?: DataAluno; // opcional
}

export default function ModalFormularioCardCliente({
  OpenModal,
  handleVisibilityModal,
  data,
}: ModalFormularioCardClienteProps) {
  // Se não tem dados, retorna null para evitar erros
  if (!data) return null;

  // Foto padrão (altere o caminho para sua imagem padrão)
  const baseUrl = BaseUrlFoto(data.foto || "");

  const [fotoArquivo, setFotoArquivo] = useState<File | null>(null);

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
    formState: { errors },
  } = useForm<AlunoSchemaDTO>({
    resolver: zodResolver(schemaAluno),
  });

  function base64ToFile(base64String: string, filename: string): File {
    const arr = base64String.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1] || "";
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  async function OnSubmit(formData: AlunoSchemaDTO) {
    try {
      const dataMatricula = formData.data_matricula
        ? new Date(formData.data_matricula + "T00:00:00.000Z")
        : undefined;

      const dataToSend = {
        ...formData,
        data_matricula: dataMatricula,
      };

      if (fotoArquivo) {
        const formDataToSend = new FormData();
        Object.entries(dataToSend).forEach(([key, value]) => {
          if (value === undefined || value === null) return;
          if (value instanceof Date) {
            formDataToSend.append(key, value.toISOString());
          } else {
            formDataToSend.append(key, String(value));
          }
        });

        formDataToSend.append("foto", fotoArquivo);
        const response = await PutClienteAdministrador(
          formData.id,
          formDataToSend
        );
        return response;
      } else {
        const response = await PutClienteAdministrador(formData.id, dataToSend);
        return response;
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  }

  // Sempre reseta o form quando data muda
  useEffect(() => {
    if (data) {
      reset({
        ...data,
        data_matricula: formatarDataISO(data.data_matricula),
      });
    }
  }, [data, reset]);

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
          encType="multipart/form-data"
          noValidate
        >
          <div className="flex items-start max-lg:flex-col gap-8 justify-between">
            {/* Coluna 1 */}
            <div className="flex flex-col w-full items-center gap-4">
              {/* container imagem  */}
              <div className="w-65 h-65 rounded-full">
                <img src={baseUrl} className="rounded-full" alt={`Foto do aluno(a) ${data.nome}`} />
              </div>
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
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
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
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
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
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
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
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="sexo"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Sexo:
                </label>
                <select
                  {...register("sexo")}
                  id="sexo"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                >
                  <option value="MASCULINO">Masculino</option>
                  <option value="FEMININO">Feminino</option>
                  <option value="PREFIRO_NAO_DIZER">Prefiro não dizer</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="peso"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Peso:
                </label>
                <input
                  {...register("peso", { valueAsNumber: true })}
                  id="peso"
                  type="number"
                  step="0.1"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="altura"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Altura:
                </label>
                <input
                  {...register("altura", { valueAsNumber: true })}
                  id="altura"
                  type="number"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                />
              </div>
            </div>

            {/* Coluna 3 */}
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="idade"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Idade:
                </label>
                <input
                  {...register("idade", { valueAsNumber: true })}
                  id="idade"
                  type="number"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100
                  transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="data_matricula"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Data de Matrícula:
                </label>
                <input
                  {...register("data_matricula")}
                  id="data_matricula"
                  type="date"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100
                  transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="treino_dias_por_semana"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Dias de Treino por Semana:
                </label>
                <input
                  {...register("treino_dias_por_semana", {
                    valueAsNumber: true,
                  })}
                  id="treino_dias_por_semana"
                  type="number"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100
                  transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="foco_treino"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Foco do Treino:
                </label>
                <select
                  {...register("foco_treino")}
                  id="foco_treino"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100
                  transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                >
                  <option value="PERDER_PESO">Perder peso</option>
                  <option value="GANHAR_MASSA">Ganhar massa</option>
                  <option value="MANTER_A_FORMA">Manter a forma</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="foco_corpo"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Foco no Corpo:
                </label>
                <select
                  {...register("foco_corpo")}
                  id="foco_corpo"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100
                  transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                >
                  <option value="PEITO">Peito</option>
                  <option value="BRACOS">Braços</option>
                  <option value="COSTAS">Costas</option>
                  <option value="GLUTEOS">Glúteos</option>
                  <option value="PERNAS">Pernas</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="plano"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Plano:
                </label>
                <select
                  {...register("plano")}
                  id="plano"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100
                  transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                >
                  <option value="plano-mensal-id">Mensal - 65,00R$</option>
                  <option value="plano-trimestral-id">Trimestral</option>
                  <option value="plano-semestral-id">Semestral</option>
                  <option value="plano-anual-id">Anual</option>
                </select>
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
