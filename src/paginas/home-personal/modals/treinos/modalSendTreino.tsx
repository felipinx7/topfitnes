import { IconeCloseModal } from "@/assets/icons/icone-closeModal-treino";
import { ModalSendTreinoProps } from "@/types/type-ModalTreino-Props";
import ReactDOM from "react-dom"
import { SendTreinoComponent } from "../../components/sendTrainingToStudent";
import { useEffect, useState } from "react";
import { GetPersonal } from "@/services/routes/personal/getPersonal";

export function ModalSendTreino(data: ModalSendTreinoProps) {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function getAllAlunos() {
            const response = await GetPersonal();
            if (response) setAlunos(response.alunos)
        }

        getAllAlunos();
    }, [])

    return ReactDOM.createPortal(
        <div
            onClick={data.close}
            className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 ${data.open ? 'visible' : 'invisible'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white w-[38%] h-[95%] max-md:w-[90%] max-md:max-w-[350px] max-lg:max-h-[700px] max-lg:w-[75%] max-lg:max-w-[600px] max-xl:max-h-[800px] max-xl:w-2/3 max-xl:max-w-[700px] relative rounded-xl flex flex-col items-center space-y-1 transition-all duration-500 ${data.open ? "opacity-100 scale-100" : "opacity-0 scale-125"}`}>
                {/* Cabeçalho */}
                <div className="w-full bg-[#F0F0F0] rounded-t-xl flex justify-between items-center px-2 py-3">
                    <div className="flex flex-col text-neutras-100 pl-3 -space-y-1 max-lg:pl-1">
                        <h1 className="font-Poppins-Medium text-xl max-lg:text-lg">Enviar Treino</h1>
                        <h2 className="font-poppins font-light text-[12px] max-lg:text-[11px]">Selecione os alunos que você deseja que tenham acesso ao treino</h2>
                    </div>
                    <button
                        onClick={data.close}
                        className="text-neutras-100 pr-1 duration-500 cursor-pointer hover:text-red-500">
                        <IconeCloseModal />
                    </button>
                </div>

                {/* Alunos */}
                <div className="w-[95%] mt-2 h-full overflow-y-auto flex flex-col items-center space-y-2 max-lg:space-y-4">
                    {alunos.length === 0 ? (
                        <p className="text-center text-gray-500 font-poppins mt-4">
                            Você não tem alunos cadastrados
                        </p>
                    ) : (
                        alunos.map((item) => (
                            <SendTreinoComponent
                                dataAluno={item}
                                key={item.id}
                                training={data.trainingToEdit}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>,
        document.body
    )
}