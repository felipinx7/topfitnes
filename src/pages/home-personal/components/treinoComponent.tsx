import { IconeExcluirTreino } from "@/assets/icons/icon-excluir-treino";
import { IconeAtualizarTreino } from "@/assets/icons/icone-atualizar-treino";
import { IconeEnviarTreino } from "@/assets/icons/icone-enviar-treino";
import { IconeVisualizarTreino } from "@/assets/icons/icone-visualiar-treino";

type functionButtons = {
    update: () => void,
    send?: () => void,
    delete: () => void,
    see?: () => void,
    nomeTreino: string,
    descricaoTreino: string,
    foto?: File
}


export function TreinoComponent(data: functionButtons) {
    const previewFoto = data.foto ? URL.createObjectURL(data.foto) : 'url(#)';

    return (
        <div className="w-full bg-verde-600 p-3 flex items-center shadow shadow-black/30 rounded-lg justify-between border border-black/30">
            <div className="flex">
                <div
                    style={{ 
                        backgroundImage: `url(${previewFoto})`, 
                        backgroundSize: "cover",
                        backgroundPosition: 'center'
                     }}
                    className="h-14 w-14 rounded-full bg-white-100 border-3 border-verde-100"
                ></div>
                <div className="flex-col flex  justify-center font-Poppins font-bold pl-3 text-verde-200 -space-y-1.5">
                    <h1 className="text-lg font-Poppins-Bold ">{data.nomeTreino}</h1>
                    <h2 className="font font-light text-[11px] pl-0.5">{data.descricaoTreino}</h2>
                </div>
            </div>

            {/* Icones*/}
            <div className="flex space-x-1 items-center justify-center">
                {/* Icone atualizar */}
                <button
                    onClick={data.update}
                    className="p-2 h-[2.1rem] w-[2.1rem] rounded-lg bg-[#FACC15] flex items-center justify-center shadow shadow-black/20 hover:bg-yellow-300 cursor-pointer duration-500">
                    <IconeAtualizarTreino />
                </button>
                {/* Icone enviar */}
                <button
                    onClick={data.send}
                    className="p-2 h-[2.1rem] w-[2.1rem] rounded-lg bg-[#FACC15] flex items-center justify-center shadow shadow-black/20 hover:bg-yellow-300  cursor-pointer duration-500">
                    <IconeEnviarTreino />
                </button>
                {/* Icone Visualizar*/}
                <button
                    onClick={data.see}
                    className="p-2 h-[2.1rem] w-[2.1rem] text-[#1C1B1F] rounded-lg bg-white flex items-center justify-center shadow shadow-black/20 cursor-pointer duration-500 hover:bg-[#3a382eee] hover:text-white">
                    <IconeVisualizarTreino />
                </button>
                {/* Icone Excluir */}
                <button
                    onClick={data.delete}
                    className="p-2 h-[2.1rem] w-[2.1rem] rounded-lg bg-[#EF4444] flex items-center justify-center shadow shadow-black/20 hover:bg-red-600 cursor-pointer duration-500">
                    <IconeExcluirTreino />
                </button>
            </div>
        </div>
    )
}