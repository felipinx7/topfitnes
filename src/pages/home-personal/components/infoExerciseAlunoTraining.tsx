import { exerciseDTO } from "@/schemas/schema-exercicio";
import { ExercicioComponent } from "./exercicioComponent";
import { ExercicioDTO } from "@/types/type-Treino";
import { ExercicioAlunoComponent } from "./exercicioAlunoComponent";

type infoExerciesProps = {
  setIsExercises: (exercise: exerciseDTO) => void;
  setVisibleModalDelete: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void
  exercises: exerciseDTO[];
};

export function InfoExercisesAluno({
  setIsExercises,
  setVisibleModalDelete,
  exercises,
}: infoExerciesProps) {
  return (
    <div className="w-full h-full border-l border-gray-400 overflow-y-hidden flex flex-col">
      {/* Exercicios */}
      <div className="flex flex-col h-full w-full gap-4 mt-6 overflow-x-hidden overflow-y-auto pb-20 px-4">
        {exercises ? (
          exercises?.map((item: exerciseDTO) => (
            <div className="w-full">
              <ExercicioAlunoComponent
                key={item.id}
                delete={() => {
                  setIsExercises(item);
                  setVisibleModalDelete((prev) => !prev);
                }}
                dataExercise={item}
                foto={item.foto}
              />
            </div>
          ))
        ) : (
          <p>Não há exercícios cadastrados</p>
        )}
      </div>
    </div>
  );
}
