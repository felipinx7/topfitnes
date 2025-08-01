import type { ExercicioDTO, TreinoDTO } from "@/types/type-Treino";

import { IconeFechar } from "@/assets/icons/icone-fechar";

import { Exercicio } from "./Exercicio";

type TreinoModalComponent = {
  treino: TreinoDTO | undefined;
  OpenModal: (value: boolean) => void;
  open: boolean;
};

export function ModalTreino({ treino, OpenModal, open }: TreinoModalComponent) {
  return (
    <div
      className={` ${open ? "" : "invisible opacity-0"} duration-200  w-screen h-screen top-0 z-200 left-0 flex justify-center items-center absolute bg-neutras-100/60 font-Poppins`}
      onClick={() => OpenModal(false)}
    >
      <div
        className={` ${open ? "" : "invisible translate-y-20"} duration-200 w-3/5 h-4/5 min-h-[600px] min-w-[800px] max-md:min-w-0 max-md:min-h-0 max-md:w-full max-md:h-full bg-white rounded-2xl flex flex-col`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-full bg-neutras-100/10 p-2 px-4 h-12 flex justify-between items-center flex-row">
          {" "}
          <h1 className="text-xl text-neutras-100 font-Poppins-Medium">
            Treino
          </h1>{" "}
          <div
            className="text-xl font-Poppins-Semibold text-neutras-100 cursor-pointer"
            onClick={() => OpenModal(false)}
          >
            {" "}
            <IconeFechar></IconeFechar>
          </div>
        </div>
        {/*Infos */}
        <div className="w-full h-full max-md:flex-col p-3 flex flex-row overflow-scroll pb-20">
          {/* Informações: Decrição,foto,nome,partes afetadas */}
          <div className="w-1/3 h-full max-md:border-0 p-5 pr-7 gap-2 border-r-2 max-md:w-full border-neutras-200/10 flex flex-col items-center justify-start text-xl text-neutras-400">
            <div
              className="w-48  h-48 bg-verde-100 rounded-full"
              style={{ backgroundImage: `url(${treino?.foto})`, backgroundSize: "cover" }}
            ></div>
            <div className="w-full flex flex-col justify-center items-center">

              <h1 className="w-full text-neutras-100 h-10 font-Poppins-Semibold text-xl flex justify-center items-center rounded-lg border border-neutras-200/30">
                {treino?.nome}
              </h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="w-full text-neutras-100 text-base font-Poppins-Semibold">
                Partes afetadas
              </h1>
              <h1 className="w-full h-10 font-Poppins-Medium text-neutras-100/80 p-1 flex text-base justify-start items-center rounded-lg border border-neutras-200/30">
                {treino?.foco_corpo}
              </h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="w-full text-neutras-100 text-base font-Poppins-Semibold">
                Descrição
              </h1>
              <h1 className="w-full h-36 text-neutras-100/80 text-base font-Poppins-Medium p-1 flex justify-start items-start rounded-lg border border-neutras-200/30">
                {treino?.descricao}
              </h1>
            </div>
          </div>

          {/* Exercicios */}
          <div className="w-2/3 h-full flex flex-col px-4 max-md:w-full">
            <div className="w-full border-b-2 border-neutras-200/10 pb-3">
              <h1 className="text-xl text-verde-200 font-Poppins-Medium">
                Exercicios
              </h1>
            </div>
            <div className="w-full h-full grid grid-cols-1 gap-4 place-content-start pt-4 place-items-center">
              {treino?.exercicios?.map((exercicio: ExercicioDTO) => (
                <Exercicio {...exercicio} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
