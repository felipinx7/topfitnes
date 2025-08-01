'use client'
import { IconeExcluirTreino } from "@/assets/icons/icon-excluir-treino";
import { IconeMenuTreino } from "@/assets/icons/icon-menu-treino";
import { IconeAtualizarTreino } from "@/assets/icons/icone-atualizar-treino";
import { IconeEnviarTreino } from "@/assets/icons/icone-enviar-treino";
import { IconeVisualizarTreino } from "@/assets/icons/icone-visualiar-treino";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { useEffect, useState } from "react";

export type functionButtons = {
    update: () => void,
    send?: () => void,
    delete: () => void,
    see?: () => void,
    menuTraining: () => void,
    nomeTreino: string,
    descricaoTreino: string,
    foto?: File
}


export function TreinoComponent(data: functionButtons) {
    const [previewFoto, setPreviewFoto] = useState<string>("");

    useEffect(() => {
    if (data.foto instanceof File) {
      const objectUrl = URL.createObjectURL(data.foto);
      setPreviewFoto(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewFoto(BaseUrlFoto(String(data.foto)));
    }
  }, [data.foto]);

    return (
        <div className="w-full bg-verde-600 p-3 flex items-center shadow shadow-black/30 rounded-lg justify-between border border-black/30">
            <div className="flex">
                <div
                    style={{
                        backgroundImage: `url(${previewFoto})`,
                        backgroundSize: "cover",
                        backgroundPosition: 'center'
                    }}
                    className="h-14 w-14 aspect-square rounded-full bg-white-100 border-3 border-verde-100"
                ></div>
                <div className="flex-col flex justify-center font-Poppins font-bold pl-3 text-verde-200 md:-space-y-1.5 max-md:pl-1 max-md:w-3/5">
                    <h1 className="text-lg font-Poppins-Bold max-md:text-sm">{data.nomeTreino}</h1>
                    <h2 className="font font-light text-[11px] pl-0.5 text-[8px]">{data.descricaoTreino.length > 50 ? data.descricaoTreino.slice(0, 50) + '...' : data.descricaoTreino}</h2>
                </div>
            </div>

            {/* Icones*/}
            <div className="flex space-x-1 items-center justify-center">
                {/* Icone atualizar */}
                <button
                    onClick={data.update}
                    className="p-2 h-[2.1rem] w-[2.1rem] rounded-lg bg-[#FACC15] flex items-center justify-center shadow shadow-black/20 hover:bg-yellow-300 cursor-pointer duration-500 max-md:hidden">
                    <IconeAtualizarTreino />
                </button>
                {/* Icone enviar */}
                <button
                    onClick={data.send}
                    className="p-2 h-[2.1rem] w-[2.1rem] rounded-lg bg-[#FACC15] flex items-center justify-center shadow shadow-black/20 hover:bg-yellow-300  cursor-pointer duration-500 max-md:hidden">
                    <IconeEnviarTreino />
                </button>
                {/* Icone Visualizar*/}
                <button
                    onClick={data.see}
                    className="p-2 h-[2.1rem] w-[2.1rem] text-[#1C1B1F] rounded-lg bg-white flex items-center justify-center shadow shadow-black/20 cursor-pointer duration-500 hover:bg-[#3a382eee] hover:text-white max-md:hidden">
                    <IconeVisualizarTreino />
                </button>
                {/* Icone Excluir */}
                <button
                    onClick={data.delete}
                    className="p-2 h-[2.1rem] w-[2.1rem] rounded-lg bg-[#EF4444] flex items-center justify-center shadow shadow-black/20 hover:bg-red-600 cursor-pointer duration-500 max-md:hidden">
                    <IconeExcluirTreino />
                </button>
                {/* Icone Menu (apenas celular) */}
                <button
                    onClick={data.menuTraining}
                    className="p-2 h-[2.1rem] w-[2.1rem] text-[#1C1B1F] rounded-lg bg-white flex items-center justify-center shadow shadow-black/50 cursor-pointer duration-500 md:hover:bg-[#3a382eee] md:hidden">
                    <IconeMenuTreino />
                </button>
            </div>
        </div>
    )
}