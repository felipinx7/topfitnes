'use client'

import { ButtonClose } from "@/assets/icons/icon-button-close"
import { IconDelete } from "@/assets/icons/icon-excluir-treinoModal"
import DeleteClienteAdministrador from "@/services/routes/administrador/delete/delete-cliente-administrador"
import ReactDOM from "react-dom"
import { toast } from "react-toastify"

type ModalDeleteAlunoProps = {
    open: boolean,
    close: () => void,
    onDelete: () => void,
    aluno: any
}
export function ModalDeleteAluno(data: ModalDeleteAlunoProps) {
    return ReactDOM.createPortal(
        <div
            onClick={data.close}
            className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 ${data.open ? 'visible' : 'invisible'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-black/80 flex flex-col items-center justify-center px-2 w-[30%] h-[55%] max-md:h-[58%] max-md:w-[80%] max-lg:h-1/2 max-lg:w-1/2 max-md:max-h-[350px] max-lg:max-h-[430px] max-xl:max-h-[500px] max-xl:w-2/3 max-xl:max-w-[550px] rounded-lg relative duration-300 ease-in-out ${data.open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                {IconDelete}
                <div className="flex flex-col w-full items-center justify-center pt-1 mt-3">
                    <h1 className="font-poppins font-extrabold text-[20px] text-white max-lg:text-2xl">DELETAR ALUNO</h1>
                    <h2 className="font-albert font-medium text-[14px] text-white text-primary-200 text-center max-lg:text-md">Você tem certeza que deseja deletar esse aluno?</h2>
                </div>
                <div className="w-full items-center h-1/5 flex justify-center pt-5">
                    <button
                        onClick={async () => {
                            data.onDelete?.()
                            toast.success("Aluno deletado com sucesso")
                            data.close()
                            await DeleteClienteAdministrador(data.aluno.usuario_id)
                        }}
                        className="flex items-center justify-center w-3/5 py-1 font-poppins font-semibold text-white bg-red-500 cursor-pointer hover:bg-red-600 duration-500 text-[18px] rounded-lg max-lg:w-4/5 max-lg:text-xl">Deletar</button>
                </div>

                <button onClick={data.close} className="absolute w-fit h-fit top-2 right-1 hover:text-red-500 text-white duration-500 cursor-pointer ">
                    {ButtonClose}
                </button>
            </div>
        </div>,
        document.body
    )
}