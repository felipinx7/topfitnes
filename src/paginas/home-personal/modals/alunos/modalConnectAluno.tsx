'use client'

import { ButtonClose } from "@/assets/icons/icon-button-close"
import { IconConnectAlunoToPersonal } from "@/assets/icons/icon-connect-aluno-to-personal"
import { ConectarAlunoAoPersonal } from "@/services/routes/aluno/conectarAlunoAoPersonal"
import ReactDOM from "react-dom"
import { toast } from "react-toastify"

type ModalDeleteAlunoProps = {
    open: boolean,
    close: () => void,
    aluno: any
}
export function ModalConnectTreinoAluno(data: ModalDeleteAlunoProps) {
    return ReactDOM.createPortal(
        <div
            onClick={data.close}
            className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 ${data.open ? 'visible' : 'invisible'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white flex flex-col items-center justify-center px-2 w-[30%] h-[55%] max-md:h-[58%] max-md:w-[80%] max-lg:h-1/2 max-lg:w-1/2 max-md:max-h-[350px] max-lg:max-h-[430px] max-xl:max-h-[500px] max-xl:w-2/3 max-xl:max-w-[550px] text-verde-200 rounded-lg relative duration-300 ease-in-out shadow shadow-black/40 ${data.open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                <svg className="w-[40%] h-[40%] aspect-square" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M640-80v-90q-56-18-94-64t-44-106h80q8 43 40.5 71.5T700-240h120q25 0 42.5 17.5T880-180v100H640Zm120-200q-33 0-56.5-23.5T680-360q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360q0 33-23.5 56.5T760-280ZM360-400q0-150 105-255t255-105v80q-117 0-198.5 81.5T440-400h-80Zm160 0q0-83 58.5-141.5T720-600v80q-50 0-85 35t-35 85h-80ZM80-520v-100q0-25 17.5-42.5T140-680h120q45 0 77.5-28.5T378-780h80q-6 60-44 106t-94 64v90H80Zm120-200q-33 0-56.5-23.5T120-800q0-33 23.5-56.5T200-880q33 0 56.5 23.5T280-800q0 33-23.5 56.5T200-720Z" /></svg>
                <div className="flex flex-col w-full items-center justify-center pt-1 mt-3">
                    <h1 className="font-poppins font-extrabold text-[20px] text-verde-200 max-lg:text-2xl">VINCULAR ALUNO</h1>
                    <h2 className="font-albert font-medium text-[14px] text-verde-200 text-primary-200 text-center max-lg:text-md">Você tem certeza que deseja vincular esse aluno a você?</h2>
                </div>
                <div className="w-full items-center h-1/5 flex justify-center pt-5">
                    <button
                        onClick={async () => {
                            try {
                                await ConectarAlunoAoPersonal(data.aluno?.id)
                                toast.success("Aluno vinculado com sucesso")
                                data.close()
                            } catch (err: any){
                                const msg = err.message;
                                toast.error(msg)
                            }
                        }}
                        className="flex items-center justify-center w-3/5 py-1 font-poppins font-semibold text-white bg-verde-100 cursor-pointer hover:bg-verde-200 duration-500 text-[18px] rounded-lg max-lg:w-4/5 max-lg:text-xl">Vincular</button>
                </div>

                <button onClick={data.close} className="absolute w-fit h-fit top-2 right-1 hover:text-red-500 text-black duration-500 cursor-pointer ">
                    {ButtonClose}
                </button>
            </div>
        </div>,
        document.body
    )
}