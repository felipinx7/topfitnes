"use client";
import { IconeCloseModal } from "@/assets/icons/icone-closeModal-treino";
import ReactDOM from "react-dom";
import { useState } from "react";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { ModalSeeAlunoProps } from "@/types/type-modalAluno-Props";
import { InfoAluno } from "../../components/infoAluno";
import { TrainingSchemaDTO } from "@/schemas/schema-treino";
import { ModalSeeTreino } from "../treinos/modalSeeTreino";
import { AlunoTreinoComponent } from "../../components/alunoTreinoComponent ";

export function ModalSeeAluno(data: ModalSeeAlunoProps) {
  // Exercises
  const [training, setTraining] = useState<TrainingSchemaDTO[]>([]);
  const [isTraining, setIsTraining] = useState<TrainingSchemaDTO | null>(null);
  const [visibilityModalSee, setVisibilityModalSee] = useState(false);
  const [visibilityModalDelete, setVisibilityModalDelete] = useState(false);

  const photo = BaseUrlFoto(data?.dataAluno?.foto || "");
  const previewFoto = data?.dataAluno?.foto ? photo : "url(#)";

  function handleVisibilityModalSee() {
    setVisibilityModalSee((prev) => !prev);
  }
  function handleVisibilityModalDelete() {
    setVisibilityModalDelete((prev) => !prev);
  }

  console.log("CUSCUZ:", data.dataAluno?.treinos_aluno);

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

            <ModalSeeTreino
              close={handleVisibilityModalSee}
              open={visibilityModalSee}
              dataTraining={
                data.dataAluno?.treinos_aluno?.[0]?.treino
                  ? {
                      id: data.dataAluno.treinos_aluno[0].treino.id,
                      nome: data.dataAluno.treinos_aluno[0].treino.nome,
                      descricao:
                        data.dataAluno.treinos_aluno[0].treino.descricao,
                      foco_corpo: data.dataAluno.treinos_aluno[0].treino
                        .foco_corpo as
                        | "PEITO"
                        | "COSTAS"
                        | "PERNAS"
                        | "BRACOS"
                        | "GLUTEOS",
                      foto: data.dataAluno.treinos_aluno[0].treino.foto,
                    }
                  : null
              }
            />

            {/* container dos cards */}
            <div className="w-full flex flex-col gap-4">
              {data.dataAluno?.treinos_aluno &&
              data.dataAluno.treinos_aluno.length > 0 ? (
                data.dataAluno.treinos_aluno
                  .filter((card) => card.treino)
                  .map((card, index) => (
                    <AlunoTreinoComponent
                      key={card.treino!.id || index}
                      see={handleVisibilityModalSee}
                      delete={() => handleVisibilityModalDelete}
                      dataExercise={{
                        id: card.treino!.id,
                        nome: card.treino!.nome,
                        descricao: card.treino!.descricao,
                        execucoes: "3", // exemplo
                        repeticoes: "10", // exemplo
                      }}
                      foto={card.treino!.foto}
                      treino={{
                        ...card.treino!,
                        foco_corpo: card.treino!.foco_corpo as
                          | "PEITO"
                          | "COSTAS"
                          | "PERNAS"
                          | "BRACOS"
                          | "GLUTEOS",
                      }}
                    />
                  ))
              ) : (
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
    </div>,
    document.body
  );
}
