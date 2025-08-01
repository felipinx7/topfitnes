'use client'
import { IconeExcluirTreino } from "@/assets/icons/icon-excluir-treino";
import { IconeAtualizarTreino } from "@/assets/icons/icone-atualizar-treino";
import { IconeEnviarTreino } from "@/assets/icons/icone-enviar-treino";
import { IconeVisualizarTreino } from "@/assets/icons/icone-visualiar-treino";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { useEffect, useState } from "react";

type functionButtons = {
        see?: () => void,
    nomeAluno?: string,
    foto?: File
}


export function AlunoComponent(data: functionButtons) {
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
                    className="h-14 w-14 rounded-full bg-white-100 border-3 border-verde-100"
                ></div>
                <div className="flex-col flex  justify-center font-Poppins font-bold pl-3 text-verde-200 -space-y-1.5">
                    <h1 className="text-lg font-Poppins-Bold ">{data.nomeAluno}</h1>
                </div>
            </div>

            {/* Icones*/}
            <div className="flex space-x-1 items-center justify-center">
                                {/* Icone Visualizar*/}
                                <button
                                    onClick={data.see}
                                    className="p-2 h-[2.1rem] w-[2.1rem] text-[#1C1B1F] rounded-lg bg-white flex items-center justify-center shadow shadow-black/20 cursor-pointer duration-500 hover:bg-[#3a382eee] hover:text-white">
                                    <IconeVisualizarTreino />
                                </button>

 

            </div>
        </div>
    )
}