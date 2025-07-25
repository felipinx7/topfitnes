import type { TreinoDTO } from "@/types/type-Treino";
import type { ExercicioDTO } from "@/types/type-Treino";

export function Exercicio(exercicio: ExercicioDTO) {
  return (
    <div
      className="w-full shadow-xl shadow-verde-200/5
     rounded-xl h-36 p-2 px-4 border border-neutras-200/20 bg-verde-600 flex flex-row items-center justify-between"
    >
      <div className=" flex flex-row gap-2">
        <div
          className="h-16 w-16 rounded-full bg-verde-100"
          style={{ backgroundImage: `url(#)` }}
        ></div>

        <div className="flex flex-col h-16 items-start justify-center">
          <h1 className="text-verde-200 text-xl font-Poppins-Bold w-full">
            {" "}
            {exercicio.name}
          </h1>
          <h1 className=" text-verde-200 text-sm -mt-1 font-Poppins w-full">
            {" "}
            {exercicio.series} series x {exercicio.reps} repetições
          </h1>

          <h1 className=" text-verde-200 text-sm mt-2 font-Poppins w-full">
            {" "}
            {exercicio.description}
          </h1>
        </div>
      </div>
    </div>
  );
}
