import { useState } from "react";
import { IconeSetaEsquerda } from "@/assets/icons/icone-seta-esquerda";
import { PostCadastrarAluno } from "@/services/routes/administrador/post/post-cadastrar-aluno";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DataAlunoForm } from "@/dto/data-aluno-form";
import { schemaAlunoForm } from "@/schemas/schema-aluno-form";

interface ModalFormularioClienteProps {
  OpenModal: boolean | undefined;
  handleOpenFormulario: () => void | undefined;
}

export default function ModalFormularioCliente({
  OpenModal,
  handleOpenFormulario,
}: ModalFormularioClienteProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataAlunoForm>({
    resolver: zodResolver(schemaAlunoForm),
  });

  const [fotoArquivo, setFotoArquivo] = useState<File | null>(null);

  function onFotoChange(file: File) {
    setFotoArquivo(file);
  }

  async function onSubmit(data: DataAlunoForm) {
    // Validar se foto foi selecionada
    if (!fotoArquivo) {
      alert("Foto obrigatória");
      return;
    }

    // Converter data_matricula para Date válido
    const dataMatriculaValida = new Date(data.data_matricula ?? "");

    if (
      isNaN(dataMatriculaValida.getTime()) || // data inválida
      dataMatriculaValida.getFullYear() < 1900 // ano inválido (antes de 1900)
    ) {
      alert(
        "Data de matrícula inválida! Informe uma data válida a partir de 1900."
      );
      return;
    }

    // Criar FormData para envio multipart/form-data
    const formData = new FormData();

    // Adicionar os dados ao FormData (convertendo data_matricula para ISO string)
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined && value !== null) {
        if (key === "data_matricula") {
          formData.append(key, dataMatriculaValida.toISOString());
        } else {
          formData.append(key, String(value));
        }
      }
    }

    // Adicionar foto ao FormData
    formData.append("foto", fotoArquivo);

    try {
      console.log("Enviando dados para backend...");
      await PostCadastrarAluno(formData);
      alert("Aluno cadastrado com sucesso!");
      reset();
      setFotoArquivo(null);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao cadastrar aluno");
    }
  }

  return (
    <section
      className={`${
        OpenModal ? "absolute" : "hidden"
      } w-full min-h-[calc(100vh-187.29px)] max-lg:min-h-[calc(100vh-158px)] max-lg:top-0 bg-[#F1F1F1] top-[187.29px] z-20 flex justify-center`}
    >
      <div className="max-w-[1280px] w-[100%] m-0 p-8 flex gap-16 flex-col">
        <div className="w-full flex items-center gap-3">
          <div
            onClick={handleOpenFormulario}
            className="w-[35px] rounded-[5.97px] items-center justify-center flex h-[50px] bg-[#4F4F4F]"
          >
            <IconeSetaEsquerda />
          </div>
          <p className="text-[#444] text-[1.2rem] font-Poppins-Bold">
            NOVO CLIENTE
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start max-lg:flex-col gap-8 justify-between"
          encType="multipart/form-data"
        >
          <div className="flex w-full gap-10 max-lg:flex-col">
            <div className="flex flex-col w-full items-center gap-4">
              {/* Foto de Perfil */}
              <div className="w-full flex flex-col items-center gap-2 mt-4">
                {fotoArquivo && (
                  <img
                    src={URL.createObjectURL(fotoArquivo)}
                    alt="Pré-visualização"
                    className="w-60 h-60 rounded-full object-cover border"
                  />
                )}

                <label
                  htmlFor="fotoInput"
                  className="cursor-pointer bg-[#DBDBDB] hover:bg-[#cfcfcf] text-[#1E1E1E] font-Poppins-Medium px-4 py-2 rounded transition-all"
                >
                  {fotoArquivo ? "Trocar Foto" : "Selecionar Foto"}
                </label>

                <input
                  required
                  id="fotoInput"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      onFotoChange(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
              </div>

              {/* Nome */}
              <div className="flex mt-16 flex-col w-full">
                <label
                  htmlFor="nome"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Nome:
                </label>
                <input
                  required
                  id="nome"
                  {...register("nome")}
                  type="text"
                  placeholder="Digite o nome"
                  className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                />
              </div>

              {/* Sobrenome */}
              <div className="flex flex-col mb-6 w-full">
                <label
                  htmlFor="sobrenome"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Sobrenome:
                </label>
                <input
                  required
                  {...register("sobrenome")}
                  id="sobrenome"
                  type="text"
                  placeholder="Digite o sobrenome"
                  className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                />
              </div>
            </div>

            {/* Coluna do meio */}
            <div className="flex flex-col w-full gap-4">
              {/* Telefone */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="telefone"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Telefone:
                </label>
                <input
                  required
                  {...register("telefone")}
                  id="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Email:
                </label>
                <input
                  required
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="exemplo@email.com"
                  className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                />
              </div>

              {/* Senha */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="senha"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Senha:
                </label>
                <input
                  required
                  id="senha"
                  {...register("senha")}
                  type="password"
                  placeholder="Digite a senha"
                  className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                />
              </div>

              {/* Sexo */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="sexo"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Sexo:
                </label>
                <select
                  id="sexo"
                  {...register("sexo")}
                  className="bg-[#DBDBDB] text-[#1E1E1E] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                >
                  <option value="">Selecione</option>
                  <option value="MASCULINO">Masculino</option>
                  <option value="FEMININO">Feminino</option>
                  <option value="PREFIRO_NAO_DIZER">Prefiro não dizer</option>
                </select>
              </div>

              {/* Peso */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="peso"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Peso (kg):
                </label>
                <input
                  required
                  id="peso"
                  {...register("peso", { valueAsNumber: true })}
                  type="number"
                  placeholder="Ex: 70.5"
                  step="0.1"
                  className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                />
              </div>

              {/* Altura */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="altura"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Altura (cm):
                </label>
                <input
                  required
                  id="altura"
                  {...register("altura", { valueAsNumber: true })}
                  type="number"
                  placeholder="Ex: 170"
                  className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                />
              </div>
            </div>

            {/* inputs data nascimento data matricula treinos na semana foco treino categoria foco corpo plano */}
            <div className="flex flex-col w-full gap-4">
              {/* Idade */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="idade"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Idade:
                </label>
                <input
                  required
                  {...register("idade", { valueAsNumber: true })}
                  id="idade"
                  type="number"
                  placeholder="Ex: 25"
                  min={0}
                  className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                />
              </div>

              {/* Data de Matrícula */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="data_matricula"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Data de Matrícula:
                </label>
                <input
                  required
                  type="date"
                  max={new Date().toISOString().slice(0, 10)}
                  {...register("data_matricula")}
                  className="bg-[#DBDBDB] text-[#1E1E1E] w-full font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                />
              </div>

              {/* Treinos por Semana */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="treino_dias"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Dias de Treino por Semana:
                </label>
                <input
                  required
                  id="treino_dias"
                  {...register("treino_dias_por_semana", {
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Ex: 3"
                  min={1}
                  max={7}
                  className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                />
              </div>

              {/* Foco do Treino */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="foco_treino"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Foco do Treino:
                </label>
                <select
                  {...register("foco_treino")}
                  id="foco_treino"
                  className="bg-[#DBDBDB] text-[#1E1E1E] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                >
                  <option value="">Selecione</option>
                  <option value="PERDER_PESO">Perder peso</option>
                  <option value="GANHAR_MASSA">Ganhar massa</option>
                  <option value="MANTER_A_FORMA">Manter a forma</option>
                </select>
              </div>

              {/* Foco no Corpo */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="foco_corpo"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Foco no Corpo:
                </label>
                <select
                  {...register("foco_corpo")}
                  id="foco_corpo"
                  className="bg-[#DBDBDB] text-[#1E1E1E] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                >
                  <option value="">Selecione</option>
                  <option value="PEITO">Peito</option>
                  <option value="BRACOS">Braços</option>
                  <option value="COSTAS">Costas</option>
                  <option value="GLUTEOS">Glúteos</option>
                  <option value="PERNAS">Pernas</option>
                </select>
              </div>

              {/* Plano (Plano ID) */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="plano_id"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Plano:
                </label>
                <select
                  id="plano_id"
                  {...register("plano_id")}
                  className="bg-[#DBDBDB] max-lg:mb-6 text-[#1E1E1E] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                >
                  <option value="">Selecione um plano</option>
                  <option value="69621913-2577-4f02-976c-c705914df714">
                    Mensal - 65,00R$
                  </option>
                  <option value="f0d784c4-df5c-46a8-abe8-c01e17cf7848">
                    Trimestral
                  </option>
                  <option value="01ba1832-9a3d-4585-a68b-7285e7949d65">
                    Semestral - 355R$
                  </option>
                  <option value="ffb8e1b3-5fef-40ac-8cd4-23667e99811a">
                    Anual - 660R$
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              onClick={() => console.log("Clicou no botão")}
              className="bg-green-500 text-white px-4 py-2"
            >
              CADASTRAR
            </button>
          </div>
        </form>
      </div>
      <pre className="text-black">{JSON.stringify(errors, null, 2)}</pre>
    </section>
  );
}
