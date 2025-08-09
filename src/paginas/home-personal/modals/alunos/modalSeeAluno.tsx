"use client";
import { IconeCloseModal } from "@/assets/icons/icone-closeModal-treino";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { ModalSeeAlunoProps } from "@/types/type-modalAluno-Props";
import { InfoAluno } from "../../components/infoAluno";
import { AlunoTreinoComponent } from "../../components/alunoTreinoComponent ";
import { ModalDeleteTreinoAluno } from "./modalDeleteTreinoAluno";

export function ModalSeeAluno(data: ModalSeeAlunoProps) {
  // Exercises
  const [training, setTraining] = useState<any[]>();
  const [isTraining, setIsTraining] = useState<any | null>(null);
  const [visibilityModalSee, setVisibilityModalSee] = useState(false);
  const [visibilityModalDelete, setVisibilityModalDelete] = useState(false);

  const photo = BaseUrlFoto(data?.dataAluno?.foto || "");
  const previewFoto = data?.dataAluno?.foto ? photo : "url(#)";

  function deleteTrainingStudent() {
    setTraining((item) => item?.map((i: any) => {
      i.id !== isTraining.treino_id}))
  }
  
  useEffect(() => {
    setTraining(data.dataAluno?.treinos_aluno?.map((item) => item.treino) || [])
  }, [data.dataAluno?.treinos_aluno])
  return ReactDOM.createPortal(
    <div
      onClick={data.close}
      className={`fixed inset-0 bg-black/40 flex items-center justify-center z-40 ${data.open ? "visible" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white w-4/5 h-[95%] relative rounded-xl flex flex-col items-center space-y-1 transition-all duration-500 ${data.open ? "opacity-100 scale-100" : "opacity-0 scale-125"}`}
      >
        {/* Cabeçalho */}
        <div className="w-full bg-[#F0F0F0] rounded-t-xl flex justify-between items-center px-2 py-3">
          <h1 className="font-Poppins-Medium text-xl text-neutras-100">
            Aluno
          </h1>
          <button
            onClick={data.close}
            className="text-neutras-100 pr-1 duration-500 cursor-pointer hover:text-red-500"
          >
            <IconeCloseModal />
          </button>
        </div>

        {/* Main */}
        <div className="h-full w-full flex ">
          {/* Info Treino */}
          {data.dataAluno && (
            <InfoAluno
              previewFoto={previewFoto}
              data={{ dataAluno: data.dataAluno }}
            />
          )}

          {/* container renderização dos treinos */}
          <div className="w-full p-2">
            <h1 className="text-[1.3rem] font-Poppins-Medium text-[#262626]">
              Treinos
            </h1>

            {/* container dos cards */}
            <div className="w-full flex flex-col gap-4">
              {data.dataAluno?.treinos_aluno &&
                data.dataAluno.treinos_aluno.length > 0 ? (
                data.dataAluno.treinos_aluno.map((item) => {
                  return (
                  <AlunoTreinoComponent key={item?.treino?.id} foto={(item?.treino?.foto)}
                    treino={item.treino}
                    see={() => {
                      setIsTraining(item);
                      setVisibilityModalSee(prev => !prev)
                    }}
                    delete={() => {
                      setIsTraining(item)
                      setVisibilityModalDelete(prev => !prev)
                    }}
                  />
                )}
              )) : (
                <div className="w-full h-[80vh] flex items-center justify-center">
                  <h1 className="text-lg text-[#262626]">
                    Nenhum Treino Encontrado
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ModalDeleteTreinoAluno
        open={visibilityModalDelete}
        close={() => {
          setVisibilityModalDelete(prev => !prev)
        }}
        onDelete={() => {
          deleteTrainingStudent
        }}
        aluno={isTraining}
      />
    </div>,
    document.body
  );
}
