import type { TreinoDTO } from "@/types/type-Treino";

type TreinoComponent = {
  treino: TreinoDTO;
  OpenModal: (value: boolean) => void;
  SetTreino: (treino: TreinoDTO) => void;
};

export function Treino({ treino, OpenModal, SetTreino }: TreinoComponent) {
  return (
    <div
      className="w-full shadow-xl shadow-verde-200/5
     rounded-xl h-20 p-2 px-4 border border-neutras-200/20 bg-verde-600 flex flex-row items-center justify-between"
    >
      <div className=" flex flex-row gap-2">
        <div
          className="h-16 w-16 rounded-full bg-verde-100"
          style={{ backgroundImage: `url(#)` }}
        ></div>

        <div className="flex flex-col h-16 items-start justify-center">
          <h1 className="text-verde-200 text-xl font-Poppins-Bold w-full">
            {" "}
            {treino.nome}
          </h1>
          <h1 className=" text-verde-200 text-sm font-Poppins w-full">
            {" "}
            {treino.foco_corpo}
          </h1>
        </div>
      </div>

      <button
        onClick={() => {
          SetTreino(treino);
          OpenModal(true);
        }}
        className="text-base text-neutras-100 duration-300 hover:bg-neutras-200/10 cursor-pointer font-Poppins-Semibold bg-white p-2 px-4 rounded-[8px]"
      >
        Visualizar
      </button>
    </div>
  );
}
