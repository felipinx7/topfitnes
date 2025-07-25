import { IconeSetaEsquerda } from "@/assets/icons/icone-seta-esquerda";
import FotoInputComponente from "@/components/ui/foto-input-componente";
import { DataAluno } from "@/dto/data-aluno";

interface ModalFormularioCardClienteProps {
  OpenModal: boolean;
  handleVisibilityModal: () => void;
}

export default function ModalFormularioCardCliente({
  OpenModal,
  handleVisibilityModal,
}: ModalFormularioCardClienteProps) {
  return (
    <section
      className={`overflow-hidden transition-all duration-500 ease-in-out w-full bg-transparent 
        ${OpenModal ? "max-h-[3000px] opacity-100 p-8" : "max-h-0 opacity-0 p-0"} 
      `}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
        {/* Formulário de edição */}
        <form className="flex flex-col w-full">
          <div className="flex items-start max-lg:flex-col gap-8 justify-between">
            {/* Coluna 1: Foto, Nome, Sobrenome */}
            <div className="flex flex-col w-full items-center gap-4">
              <FotoInputComponente />

              <div className="flex mt-16 flex-col w-full">
                <label
                  htmlFor="nome"
                  className="text-[#333] font-Poppins-Semibold mb-1"
                >
                  Nome:
                </label>
                <input
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
                  id="sobrenome"
                  type="text"
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
                  id="email"
                  type="email"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
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
                  id="senha"
                  type="password"
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
                  id="sexo"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                >
                  <option value="MASCULINO">Masculino</option>
                  <option value="FEMININO">Feminino</option>
                  <option value="OUTRO">Prefiro não dizer</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="diaPagamento"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Dia de Pagamento:
                </label>
                <input
                  id="diaPagamento"
                  type="number"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="peso"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Peso:
                </label>
                <input
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
                  id="idade"
                  type="number"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
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
                  id="data_matricula"
                  type="date"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="treino_dias"
                  className="text-[#333] font-Poppins-Bold mb-1"
                >
                  Dias de Treino por Semana:
                </label>
                <input
                  id="treino_dias"
                  type="number"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
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
                  id="foco_treino"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
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
                  id="foco_corpo"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
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
                  id="plano"
                  className="bg-white text-[#1E1E1E] rounded-full outline-none focus:border-verde-100 transition-all ease-in-out duration-500 focus:scale-105 focus:border-2 font-Poppins-Medium px-4 py-3"
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
            <button className="bg-verde-100 p-3 w-[50%] rounded-2xl hover:bg-verde-400 cursor-pointer transition-all duration-500 ease-in-out">Atualizar dados</button>
          </div>
        </form>
      </div>
    </section>
  );
}
