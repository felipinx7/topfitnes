"use client";

import { useRef } from "react";
import { IconeFechar } from "@/assets/icons/icone-fechar";
import { DataAlunoRelatorio } from "@/dto/data-aluno-relatorio";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { handleGerarPDF } from "@/utils/handle-gerar-pdf";

interface ModalRelatorioProps {
  openModal: boolean;
  handleClosedModal: () => void;
  data: DataAlunoRelatorio;
}

export default function ModalRelatorio({
  openModal,
  handleClosedModal,
  data,
}: ModalRelatorioProps) {
  const fotoAluno = BaseUrlFoto(data?.foto);
  const printRef = useRef<HTMLDivElement>(null);
  const observacaoRef = useRef<HTMLTextAreaElement>(null);

  return (
    <section
    onClick={handleClosedModal}
      className={`${openModal ? "visible" : "invisible"} absolute z-[9999] flex items-center justify-center inset-0 top-0 bg-black/40`}
    >
      {/* Modal */}
      <div
      onClick={(e)=> e.stopPropagation()}
        className={`w-[60%] max-md:w-[90%] p-8 ${openModal ? "opacity-100 scale-100" : "opacity-0 scale-125"} ease-in-out duration-500 flex items-center flex-col transition-all h-[80%] bg-white rounded-2xl`}
      >
        {/* header */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[#057333] text-[1.3rem] font-Poppins-Medium">
            Dados do Aluno
          </h1>
          <div onClick={handleClosedModal}>
            <IconeFechar className="w-10 h-10 text-neutras-200 hover:text-verde-400 ease-in-out duration-100 cursor-pointer" />
          </div>
        </div>

        {/* conteúdo que será gerado no PDF */}
        <div ref={printRef} className="w-full flex flex-col gap-4 mt-4">
          {/* Info usuário */}
          <div className="w-full flex items-center justify-between border border-[#999] p-2 rounded-[5.97px]">
            <div className="flex items-center gap-4 justify-center">
              <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
                <img
                  src={fotoAluno}
                  width={300}
                  className="rounded-full object-cover"
                  alt={`Foto do aluno ${data?.nome}`}
                />
              </div>
              <div className="flex flex-col items-start">
                <h1 className="text-[#057333] font-Poppins-Medium">
                  {data?.nome}
                </h1>
                <p className="text-[#057333] text-[0.8rem]">{data?.email}</p>
              </div>
            </div>
          </div>

          {/* Tabela de treinos */}
          <div>
            <h1 className="text-[#057333] font-Poppins-Medium text-[1.1rem] mb-2">
              Histórico de Treinos
            </h1>
            <div className="overflow-x-auto rounded-lg border border-[#ccc]">
              <table className="w-full text-left table-auto">
                <thead className="bg-[#00D939] text-white text-[0.8rem]">
                  <tr>
                    <th className="px-4 py-2">Tipo de Treino</th>
                    <th className="px-4 py-2">Exercício</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.treinos?.map((treino, index) => (
                    <tr
                      key={index}
                      className="border-t text-[#057333] text-[0.85rem]"
                    >
                      <td className="px-4 py-2">{treino.tipo_treino}</td>
                      <td className="px-4 py-2">{treino.nome_exercicio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Observação (opcional) */}
          <div className="mt-4 w-full">
            <textarea
              ref={observacaoRef}
              placeholder="Digite aqui a sua observação personal"
              className="border-2 rounded-2xl border-[#999] ease-in-out duration-500 p-4 text-verde-100 outline-none focus:border-verde-100 w-full"
            />
          </div>
        </div>

        {/* Botão de gerar PDF */}
        <div className="w-full flex items-center justify-center mt-6">
          <button
            onClick={() =>
              handleGerarPDF(data, observacaoRef.current?.value ?? "")
            }
            className="bg-verde-100 hover:scale-105 transition-all max-md:text-[1rem] max-md:w-full ease-in-out duration-500 hover:bg-verde-400 p-2 font-Poppins-Bold text-[1.3rem] w-[60%] rounded-[5.97px] cursor-pointer"
          >
            GERAR RELATÓRIO
          </button>
        </div>
      </div>
    </section>
  );
}
