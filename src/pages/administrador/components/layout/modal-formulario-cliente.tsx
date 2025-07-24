import { IconeSetaEsquerda } from "@/assets/icons/icone-seta-esquerda";
import FotoInputComponente from "@/components/ui/foto-input-componente";

interface ModalFormularioClienteProps {
  OpenModal: boolean | undefined;
  handleOpenFormulario: () => void | undefined;
}

export default function ModalFormularioCliente({
  OpenModal,
  handleOpenFormulario,
}: ModalFormularioClienteProps) {
  return (
    // Container global
    <section
      className={`${OpenModal ? "absolute" : "hidden"} w-full min-h-[calc(100vh-187.29px)]  max-lg:min-h-[calc(100vh-158px)] max-lg:top-0 bg-[#F1F1F1] top-[187.29px] flex justify-center`}
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
        <form className="flex items-start max-lg:flex-col gap-8 justify-between">
          {/* inputs Nome , sobrenome, foto de perfil e botão de enviar  */}
          <div className="flex flex-col w-full items-center gap-4">
            {/* Foto de Perfil */}
            <FotoInputComponente />

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
                id="sobrenome"
                type="text"
                placeholder="Digite o sobrenome"
                className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full max-lg:hidden  cursor-pointer bg-verde-100 hover:bg-verde-400 text-white font-Poppins-Bold text-[1.2rem] py-2 rounded transition-all"
            >
              CADASTRAR
            </button>
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
                className="bg-[#DBDBDB] text-[#1E1E1E] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Prefiro não dizer</option>
              </select>
            </div>

            {/* Dia de pagamento */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="diaPagamento"
                className="text-[#646464] font-Poppins-Bold mb-1"
              >
                Dia de Pagamento:
              </label>
              <input
                id="diaPagamento"
                type="number"
                placeholder="Ex: 5"
                min={1}
                max={31}
                className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
              />
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
                className="bg-[#DBDBDB] max-lg:mb-6 text-[#1E1E1E] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
              >
                <option value="">Selecione um plano</option>
                <option value="plano-mensal-id">Mensal - 65,00R$</option>
                <option value="plano-trimestral-id">Trimestral</option>
                <option value="plano-semestral-id">Semestral</option>
                <option value="plano-anual-id">Anual</option>
              </select>

              {/* button de enviar */}
              <button
                type="submit"
                className="hidden max-lg:block w-full cursor-pointer bg-verde-100 hover:bg-verde-400 text-white font-Poppins-Bold text-[1.2rem] py-2 rounded transition-all"
              >
                CADASTRAR
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
