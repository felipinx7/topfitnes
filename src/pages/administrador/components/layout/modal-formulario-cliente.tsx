import { useState } from "react";
import { IconeSetaEsquerda } from "@/assets/icons/icone-seta-esquerda";
import FotoInputComponente from "@/components/ui/foto-input-componente";
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
  // Config do react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataAlunoForm>({
    resolver: zodResolver(schemaAlunoForm),
  });

  // Estado para armazenar o arquivo da foto
  const [fotoArquivo, setFotoArquivo] = useState<File | null>(null);

  // Recebe o arquivo enviado pelo componente de foto
  function onFotoChange(file: File) {
    setFotoArquivo(file);
  }

  // Função criar aluno
  async function onSubmit(data: DataAlunoForm) {
    console.log("Chamou o submit ✅", data);
    const formData = new FormData();

    // Adiciona todos os campos do formulário ao FormData
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    }

    // Adiciona a imagem se houver
    if (fotoArquivo) {
      formData.append("foto", fotoArquivo);
    }

    // Debug: Verifica tudo que está sendo enviado
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      await PostCadastrarAluno(formData);
      console.log("Enviado com sucesso!");
      reset();
      setFotoArquivo(null);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  }

  return (
    // Container global
    <section
      className={`${
        OpenModal ? "absolute" : "hidden"
      } w-full min-h-[calc(100vh-187.29px)]  max-lg:min-h-[calc(100vh-158px)] max-lg:top-0 bg-[#F1F1F1] top-[187.29px] z-20 flex justify-center`}
    >
      {/* container informações principais  */}
      <div className="max-w-[1280px] w-[100%] m-0 p-8 flex gap-16 flex-col">
        {/* container parte fechar formulario  */}
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

        {/* container parte formulario */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start max-lg:flex-col gap-8 justify-between"
          encType="multipart/form-data"
        >
          <div className="flex w-full gap-10 max-lg:flex-col">
            {/* inputs Nome , sobrenome, foto de perfil e botão de enviar  */}
            <div className="flex flex-col w-full items-center gap-4">
              {/* Foto de Perfil */}
              <FotoInputComponente onFileChange={onFotoChange} />

              {/* Nome */}
              <div className="flex mt-16 flex-col w-full">
                <label
                  htmlFor="nome"
                  className="text-[#646464] font-Poppins-Bold mb-1"
                >
                  Nome:
                </label>
                <input
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
                  {...register("sobrenome")}
                  id="sobrenome"
                  type="text"
                  placeholder="Digite o sobrenome"
                  className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
                />
              </div>
            </div>

            {/* inputs telefone, email, senha, sexo, dia pagamento, peso, altura  */}
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
                  {...register("altura", { valueAsNumber: true })}
                  id="altura"
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
                  {...register("data_matricula")}
                  id="data_matricula"
                  type="date"
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
                  {...register("plano")}
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
            {/* button de enviar */}
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
    </section>
  );
}
