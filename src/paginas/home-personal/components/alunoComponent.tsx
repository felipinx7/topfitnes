'use client'
import { IconConnectAlunoToPersonal } from "@/assets/icons/icon-connect-aluno-to-personal";
import { IconeExcluirTreino } from "@/assets/icons/icon-excluir-treino";
import { IconeMenuTreino } from "@/assets/icons/icon-menu-treino";
import { IconeAtualizarTreino } from "@/assets/icons/icone-atualizar-treino";
import { IconeEnviarTreino } from "@/assets/icons/icone-enviar-treino";
import { IconeVisualizarTreino } from "@/assets/icons/icone-visualiar-treino";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { useEffect, useState } from "react";

export type functionButtons = {
    update: () => void,
    delete: () => void,
    see?: () => void,
    menuTraining: () => void,
    connect: () => void,
    nomeAluno: string,
    emailAluno?: string,
    telefoneAluno?: string,
    sexoAluno: string
    foto?: File
}


export function AlunoComponent(data: functionButtons) {
    const [previewFoto, setPreviewFoto] = useState<string>("");
    const dataSexo = (data.sexoAluno || "").toLowerCase();
    const SexoFormat = dataSexo
        ? dataSexo[0].toUpperCase() + dataSexo.slice(1)
        : "Sem informação";

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
        <div className="w-full bg-verde-600 p-3 flex items-center shadow shadow-black/30 rounded-lg justify-between border border-black/30 max-lg:h-28 max-lg:max-h-28 max-md:h-fit">
            <div className="flex">
                <div
                    style={{
                        backgroundImage: `url(${previewFoto})`,
                        backgroundSize: "cover",
                        backgroundPosition: 'center'
                    }}
                    className="h-14 w-14 max-lg:h-20 max-lg:w-20 max-md:h-14 max-md:w-14 aspect-square rounded-full bg-white-100 border-3 border-verde-100"
                ></div>
                <div className="flex-col flex justify-center font-Poppins font-bold pl-3 text-verde-200 md:-space-y-1.5 max-md:pl-1 max-md:w-3/5">
                    <h1 className="text-lg font-Poppins-Bold max-md:text-sm max-lg:text-xl">{data.nomeAluno}</h1>
                    <h2 className="font font-light text-[11px] md:text-sm">{data.emailAluno || data.telefoneAluno || "não tem nada"}</h2>
                    <div className="px-2 py-0.5 bg-verde-500 text-verde-200 rounded-2xl mt-2 text-[10px] text-center font-Poppins font-light translate-y-1 pr-1 w-20 max-xl:max-w-3/5 max-xl:min-w-20">{data.sexoAluno === "PREFIRO_NAO_DIZER" ? "Sem informação" : SexoFormat}</div>
                </div>
            </div>

            {/* Icones*/}
            <div className="flex space-x-1 items-center justify-center">
                {/* Icone atualizar */}
                <button
                    onClick={data.update}
                    className="p-2 h-[2.1rem] w-[2.1rem] max-lg:h-[2.5rem] max-lg:w-[2.5rem] max-md:h-[2.1rem] max-md:w-[2.1rem] rounded-lg bg-[#FACC15] flex items-center justify-center shadow shadow-black/20 hover:bg-yellow-300 cursor-pointer duration-500 max-md:hidden">
                    <IconeAtualizarTreino />
                </button>
                {/* Icone Visualizar*/}
                <button
                    onClick={data.see}
                    className="p-2 h-[2.1rem] w-[2.1rem] max-lg:h-[2.5rem] max-lg:w-[2.5rem] max-md:h-[2.1rem] max-md:w-[2.1rem] text-[#1C1B1F] rounded-lg bg-white flex items-center justify-center shadow shadow-black/20 cursor-pointer duration-500 hover:bg-[#3a382eee] hover:text-white max-md:hidden">
                    <IconeVisualizarTreino />
                </button>
                {/* Icone conectar Aluno ao personal */}
                <button
                    onClick={data.connect}
                    className="p-2 h-[2.1rem] w-[2.1rem] max-lg:h-[2.5rem] max-lg:w-[2.5rem] max-md:h-[2.1rem] max-md:w-[2.1rem] text-[#1C1B1F] rounded-lg bg-white flex items-center justify-center shadow shadow-black/20 cursor-pointer duration-500 hover:bg-[#3a382eee] hover:text-white max-md:hidden">
                    <IconConnectAlunoToPersonal />
                </button>
                {/* Icone Excluir */}
                <button
                    onClick={data.delete}
                    className="p-2 h-[2.1rem] w-[2.1rem] max-lg:h-[2.5rem] max-lg:w-[2.5rem] max-md:h-[2.1rem] max-md:w-[2.1rem] rounded-lg bg-[#EF4444] flex items-center justify-center shadow shadow-black/20 hover:bg-red-600 cursor-pointer duration-500 max-md:hidden">
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