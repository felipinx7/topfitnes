import { DataAlunoRelatorio } from "@/dto/data-aluno-relatorio";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import ModalRelatorio from "../modals/relatorio/moda-relatorio";
import { useState } from "react";

export function CardRelatorioAluno(data: DataAlunoRelatorio) {
  // estados e variaveis utilizados no componente
  const fotoAluno = BaseUrlFoto(data.foto);
  const [openModal, setOpenModal] = useState(false);

  // Funções utilizadas no componente
  function handleVisibildadeModal() {
    setOpenModal((prev) => !prev);
  }

  return (
    <>
      {/* Modal do Relatorio */}
      <ModalRelatorio
        openModal={openModal}
        handleClosedModal={handleVisibildadeModal}
      />
      {/* card clientes */}
      <article className="w-full bg-[#F0FCECEF] max-sm:flex-col max-sm:items-baseline max-sm:gap-4 border border-[#D9D9D9] shadow-[0_4px_20px_0_rgba(55,87,64,0.15)] p-2  rounded-[1rem] flex items-center justify-between">
        {/* container informações pessoais */}
        <div className="flex items-center justify-center gap-4">
          {/* container foto de perfil  */}
          <div className="w-[73px] border-3 border-verde-100 rounded-full h-[73px] overflow-hidden">
            <img
              className="rounded-full border-2 border-white w-full h-full object-cover"
              src={fotoAluno}
              alt={`Foto do aluno(a) ${data.nome}`}
            />
          </div>

          {/* container informações de nome, email e categoria */}
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-[#057333] text-[1.2rem] font-Poppins-Bold">
              {data.nome} {data.sobrenome}
            </h1>
            <p className="text-[#057333] text-[0.8rem]">{data.email}</p>
            <div className="bg-verde-300 mt-1 text-[#057333] w-max px-4 text-[0.7rem] rounded-[20px]">
              Iniciante
            </div>
          </div>
        </div>

        {/* container botões de visualização  */}
        <div className="max-sm:w-full">
          <button onClick={handleVisibildadeModal} className="bg-verde-100 rounded-[0.6rem] w-auto max-sm:w-full px-4 py-1 duration-500 ease-in-out transition-all hover:bg-verde-400 cursor-pointer text-white font-[600]">
            ACESSAR
          </button>
        </div>
      </article>
    </>
  );
}
