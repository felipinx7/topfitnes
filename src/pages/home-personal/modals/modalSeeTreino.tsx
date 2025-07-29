import { IconeCloseModal } from "@/assets/icons/icone-closeModal-treino";
import { ModalSeeTreinoProps } from "@/types/type-ModalTreino-Props";
import ReactDOM from "react-dom"
import { InfoTreino } from "../components/infoTreino";

export function ModalSeeTreino(data: ModalSeeTreinoProps) {
    const previewFoto = data?.dataTraining?.foto ? URL.createObjectURL(data.dataTraining.foto) : 'url(#)';
    
    return ReactDOM.createPortal(
        <div
            onClick={data.close}
            className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 ${data.open ? 'visible' : 'invisible'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white w-3/5 h-[95%] relative rounded-xl flex flex-col items-center space-y-1 transition-all duration-500 ${data.open ? "opacity-100 scale-100" : "opacity-0 scale-125"}`}>
                {/* Cabeçalho */}
                <div className="w-full bg-[#F0F0F0] rounded-t-xl flex justify-between items-center px-2 py-3">
                    <h1 className="font-Poppins-Medium text-xl text-neutras-100">Treino</h1>
                    <button
                        onClick={data.close}
                        className="text-neutras-100 pr-1 duration-500 cursor-pointer hover:text-red-500">
                        <IconeCloseModal />
                    </button>
                </div>

                {/* Main */}
                <div className="h-full w-full flex ">
                    {/* Info Treino */}
                    {data.dataTraining && (
                        <InfoTreino previewFoto={previewFoto} data={{ dataTraining: data.dataTraining }} />
                    )}

                    {/* Exercises */}

                    <div className="w-full h-full border-l border-gray-400">
                        <div className="flex justify-between px-4 py-1 font-poppins-Medium ">
                            <h1 className="text-verde-200 font-medium text-2xl"> Exercícios </h1>
                            <button
                                className="rounded-xl flex items-center justify-center bg-verde-100 text-white hover:bg-verde-200 font-Poppins-Bold py-1.5 px-4 text-sm duration-500 cursor-pointer pr-2">
                                + Novo Exercício
                            </button>
                        </div>

                        <div className="flex-col flex items-center w-full overflow-y-auto">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}