import type { TreinoDTO } from "@/types/type-Treino";

import { IconeFechar } from "@/assets/icons/icone-fechar";

type TreinoModalComponent = {
  treino: TreinoDTO | undefined;
  OpenModal: (value: boolean) => void;
};

export function ModalTreino({treino, OpenModal}: TreinoModalComponent){

    return(
        <div className="w-screen h-screen top-0 z-200 left-0 flex justify-center items-center absolute bg-neutras-100/60" onClick={() => OpenModal(false)}>
               <div className="w-1/2 h-2/3 min-h-[600px] min-w-[800px] bg-white rounded-2xl flex flex-col" onClick={(e) =>{e.stopPropagation()}}>
               <div className="w-full bg-neutras-100/10 p-2 px-4 h-16 flex justify-between items-center flex-row"> <h1 className="text-2xl text-neutras-100 font-Poppins-Medium">Treino</h1> <div className="text-2xl font-Poppins-Semibold text-neutras-100 cursor-pointer" onClick={()=>OpenModal(false)}> <IconeFechar></IconeFechar></div></div>
               
               </div>
        </div>
    )
}