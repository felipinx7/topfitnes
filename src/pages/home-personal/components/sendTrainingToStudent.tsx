'use client'
import { IconeEnviarTreino } from "@/assets/icons/icone-enviar-treino";
import { AlunoSchemaDTO } from "@/schemas/schema-aluno-form";
import { useState } from "react";

type functionButtons = {
    sendTraining?: () => void,
    dataAluno?: AlunoSchemaDTO
}


export function SendTreinoComponent(data: functionButtons) {
    const [onClick, setOnClick] = useState(false)

    return (
        <div className="w-full bg-verde-600 p-3 flex items-center shadow shadow-black/30 rounded-lg justify-between border border-black/30">
            <div className="flex">
                <div
                    style={{ 
                        backgroundImage: `url(#)`, 
                        backgroundSize: "cover",
                        backgroundPosition: 'center'
                     }}
                    className="h-14 w-14 rounded-full bg-white-100 border-3 border-verde-100"
                ></div>
                <div className="flex-col flex  justify-center font-Poppins font-bold pl-3 text-verde-200 -space-y-1.5">
                    <h1 className="text-lg font-Poppins-Bold ">{data?.dataAluno?.nome || "piroco"}</h1>
                    <h2 className="font font-light text-[11px] pl-0.5">{data?.dataAluno?.email || data?.dataAluno?.telefone || "email@gmail.com"}</h2>
                    <div className="px-2 py-0.5 translate-y-2 bg-verde-300 text-verde-200 font-poppins font-light text-center text-[10px] rounded-full w-2/3">
                        Iniciante
                    </div>
                </div>
            </div>

            {/* Icones*/}
            <div className="flex space-x-1 items-center justify-center">
                <button
                    onClick={() => {
                        setOnClick(prev => !prev)
                        data.sendTraining
                    }}
                    className={`p-2 h-[1.8rem] rounded-lg bg-[#FACC15] flex items-center justify-around shadow shadow-black/20 ${onClick ? 'bg-gray-400 hover:bg-gray-500' : 'hover:bg-yellow-300 bg-[#FACC15]'}  cursor-pointer duration-500 font-poppins font-bold text-[13px] space-x-1 `}>
                        <h1>{onClick ? 'Enviado' : 'Enviar'}</h1> 
                        {onClick ? '' : <IconeEnviarTreino />}
                </button>
            </div>
        </div>
    )
}