import { IconeSetaEsquerda } from "@/assets/icons/icone-seta-esquerda";
import FotoInputComponente from "@/components/ui/foto-input-componente";

interface ModalFormularioClienteProps {
  OpenModal: boolean | undefined;
  handleOpenFormulario: () => void | undefined;
}

export default function ModalFormularioPersonal({
  OpenModal,
  handleOpenFormulario,
}: ModalFormularioClienteProps) {
  return (
    // Container global
    <section
      className={`${OpenModal ? "absolute" : "hidden"} w-full min-h-[calc(100vh-187.29px)] bg-[#F1F1F1] top-[187.29px] flex justify-center`}
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
            NOVO PERSONAL
          </p>
        </div>

        {/* container parte formulario */}
        <form className="flex items-start max-lg:flex-col gap-8 justify-between">
          {/* Bloco 1: Foto, Nome, Sobrenome + botão */}
          <div className="flex flex-col w-full items-center gap-4">
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
              className="w-full max-lg:hidden cursor-pointer bg-verde-100 hover:bg-verde-400 text-white font-Poppins-Bold text-[1.2rem] py-2 rounded transition-all"
            >
              CADASTRAR
            </button>
          </div>

          {/* Bloco 2: Dados pessoais e de acesso */}
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
          </div>

          {/* Bloco 3: Dados Profissionais */}
          <div className="flex flex-col w-full gap-4">
            {/* Formação */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="formacao"
                className="text-[#646464] font-Poppins-Bold mb-1"
              >
                Formação:
              </label>
              <input
                id="formacao"
                type="text"
                placeholder="Digite a formação"
                className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
              />
            </div>

            {/* Registro Profissional */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="registro_profissional"
                className="text-[#646464] font-Poppins-Bold mb-1"
              >
                Registro Profissional:
              </label>
              <input
                id="registro_profissional"
                type="text"
                placeholder="Digite o registro"
                className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
              />
            </div>

            {/* Especialidade */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="especialidade"
                className="text-[#646464] font-Poppins-Bold mb-1"
              >
                Especialidade:
              </label>
              <input
                id="especialidade"
                type="text"
                placeholder="Digite a especialidade"
                className="bg-[#DBDBDB] text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
              />
            </div>

            {/* Disponibilidade */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="disponibilidade"
                className="text-[#646464] font-Poppins-Bold mb-1"
              >
                Disponibilidade:
              </label>
              <input
                id="disponibilidade"
                type="text"
                placeholder="Ex: Segunda a Sexta, 08h às 17h"
                className="bg-[#DBDBDB] max-lg:mb-6 text-[#1E1E1E] placeholder:text-[#1e1e1e7d] font-Poppins-Medium px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-verde-100 transition-all"
              />
            </div>

            {/* Botão (mobile) */}
            <button
              type="submit"
              className="hidden max-lg:block w-full cursor-pointer bg-verde-100 hover:bg-verde-400 text-white font-Poppins-Bold text-[1.2rem] py-2 rounded transition-all"
            >
              CADASTRAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
