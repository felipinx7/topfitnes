'use client'

import { ButtonClose } from "@/assets/icons/icon-button-close"
import { IconConnectAlunoToPersonal } from "@/assets/icons/icon-connect-aluno-to-personal"
import { ConectarAlunoAoPersonal } from "@/services/routes/aluno/conectarAlunoAoPersonal"
import { DisconectarAlunoAoPersonal } from "@/services/routes/aluno/disconectarAlunoAoPersonal"
import ReactDOM from "react-dom"
import { toast } from "react-toastify"

type ModalDeleteAlunoProps = {
    open: boolean,
    close: () => void,
    aluno: any,
    disconnect: () => void
}
export function ModalDisconnectTreinoAluno(data: ModalDeleteAlunoProps) {
    return ReactDOM.createPortal(
        <div
            onClick={data.close}
            className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 ${data.open ? 'visible' : 'invisible'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-black/80 flex flex-col items-center justify-center px-2 w-[30%] h-[55%] max-md:h-[58%] max-md:w-[80%] max-lg:h-1/2 max-lg:w-1/2 max-md:max-h-[350px] max-lg:max-h-[430px] max-xl:max-h-[500px] max-xl:w-2/3 max-xl:max-w-[550px] text-red-500 rounded-lg relative duration-300 ease-in-out shadow shadow-black/40 ${data.open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                <svg className="w-2/5 h-2/5" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m791-55-91-91q-48 32-103.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-61 17-116.5T146-700l-91-91 57-57 736 736-57 57ZM412-168q26-51 62-81.5t75-47.5L204-642q-21 36-32.5 76.5T160-480q0 45 11.5 86t34.5 76q41-20 85-31t89-11q32 0 61.5 5.5T500-340q-23 12-43.5 28T418-278q-12-2-20.5-2H380q-32 0-63.5 7T256-252q32 32 71.5 53.5T412-168Zm402-92-58-58q21-35 32.5-76t11.5-86q0-134-93-227t-227-93q-45 0-85.5 11.5T318-756l-58-58q48-32 103.5-49T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 61-17 116.5T814-260ZM520-554 374-700q62-2 105 41.5T520-554ZM380-420q-58 0-99-41t-41-99q0-33 14.5-60.5T292-668l196 196q-20 23-47.5 37.5T380-420Zm310 36L564-510q10-31 36-50.5t60-19.5q42 0 71 29t29 71q0 34-19.5 60T690-384ZM537-537ZM423-423Z" /></svg>
                <div className="flex flex-col w-full items-center justify-center pt-1 mt-3">
                    <h1 className="font-poppins font-extrabold text-[20px] text-white max-lg:text-2xl">DESVINCULAR ALUNO</h1>
                    <h2 className="font-albert font-medium text-[14px] text-white text-primary-200 text-center max-lg:text-md">Você tem certeza que deseja desvincular esse aluno a você?</h2>
                </div>
                <div className="w-full items-center h-1/5 flex justify-center pt-5">
                    <button
                        onClick={async () => {
                            try {
                                await DisconectarAlunoAoPersonal(data.aluno?.id)
                                toast.success("Aluno desvinculado com sucesso")
                                data.disconnect()
                                data.close()
                            } catch (err: any) {
                                const msg = err.message;
                                toast.error(msg)
                            }
                        }}
                        className="flex items-center justify-center w-3/5 py-1 font-poppins font-semibold text-white bg-red-500 cursor-pointer hover:bg-red-600 duration-500 text-[18px] rounded-lg max-lg:w-4/5 max-lg:text-xl">Desvincular</button>
                </div>

                <button onClick={data.close} className="absolute w-fit h-fit top-2 right-1 hover:text-red-500 text-white duration-500 cursor-pointer ">
                    {ButtonClose}
                </button>
            </div>
        </div>,
        document.body
    )
}