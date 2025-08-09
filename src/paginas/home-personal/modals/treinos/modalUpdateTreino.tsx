'use client'
import { IconeCloseModal } from "@/assets/icons/icone-closeModal-treino"
import { focoCorpoEnum, trainingSchema, TrainingSchemaDTO } from "@/schemas/schema-treino"
import { ModalUPdateTreinoProps } from "@/types/type-ModalTreino-Props"
import { PreviewImage } from "@/utils/previewImagem"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { useForm } from "react-hook-form"
import { BaseUrlFoto } from "@/utils/base-url-foto"
import { axiosUpdateTreino } from "@/services/routes/treinos/updateTreino"
import { toast } from "react-toastify"

export function ModalUpdateTreino({ open, close, trainingToEdit, updateTreino }: ModalUPdateTreinoProps) {
    const photo = BaseUrlFoto(trainingToEdit?.foto || "")

    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const previewFoto = trainingToEdit?.foto ? photo : 'url(#)';

    const { register, handleSubmit, reset, formState: { errors } } = useForm<TrainingSchemaDTO>({
        resolver: zodResolver(trainingSchema),
    })

    useEffect(() => {
        if (trainingToEdit && open) {
            reset({
                nome: trainingToEdit.nome,
                descricao: trainingToEdit.descricao,
                foco_corpo: trainingToEdit.foco_corpo,
                foto: undefined,
            })

            if (typeof trainingToEdit.foto === 'string') {
                setPreviewImage(photo)
            }
        }
    }, [trainingToEdit, reset, open])

    async function onSubmit(data: TrainingSchemaDTO) {

        const file = data.foto?.[0] ?? null
        const finalData = {
            ...data,
            foto: file || trainingToEdit?.foto,
        }
       
        if (file && file.size > 2 * 1024 * 1024) {
            toast.error("A imagem é muito grande. Envie uma com até 2MB.");
            return;
        }

        toast.info(`O ${data.nome} foi atualizado com sucesso!`)
        if (updateTreino) updateTreino(finalData)
        close()

        if (!trainingToEdit?.id) return;
        await axiosUpdateTreino(trainingToEdit.id, finalData);
    }

    useEffect(() => {
        if (errors.nome) {
            toast.error(errors.nome.message);
        }
        if (errors.descricao) {
            toast.error(errors.descricao.message);
        }
        if (errors.foco_corpo) {
            toast.error("Selecione um foco de treino.");
        }
    }, [errors]);

    return ReactDOM.createPortal(
        <div
            onClick={close}
            className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 ${open ? 'visible' : 'invisible'}`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white w-[38%] h-[95%] max-md:w-[90%] max-md:max-w-[350px] max-lg:max-h-[700px] max-lg:w-[75%] max-lg:max-w-[600px] max-xl:max-h-[600px] max-xl:w-2/3 max-xl:max-w-[700px]  relative rounded-xl flex flex-col items-center space-y-1 transition-all duration-500 ${open ? "opacity-100 scale-100" : "opacity-0 scale-125"}`}>
                {/* Cabeçalho */}
                <div className="w-full bg-[#F0F0F0] rounded-t-xl flex justify-between items-center px-2 py-3">
                    <div className="flex flex-col max-lg:w-4/5 text-neutras-100 pl-3 -space-y-1 max-lg:pl-1">
                        <h1 className="font-Poppins-Medium text-xl max-md:text-lg">Edição do Treino</h1>
                        <h2 className="font-poppins font-light text-[12px] max-md:text-[11px]">Atualize as informações desejadas do treino</h2>
                    </div>
                    <button
                        onClick={() => {
                            close()
                            setPreviewImage(null)
                            reset()
                        }}
                        className="text-neutras-100 pr-1 duration-500 cursor-pointer hover:text-red-500">
                        <IconeCloseModal />
                    </button>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col h-full w-full justify-evenly items-center -p-4">

                    {/* foto */}

                    <div className="flex flex-col w-[70%] items-center justify-center">
                        <div className=" aspect-square rounded-full w-[50%] relative bg-[#131313] duration-500 ease-in-out transition-all hover:scale-105">
                            <img
                                src={previewImage ?? previewFoto}
                                alt="preview"
                                className="aspect-square w-full object-cover rounded-full duration-500 hover:border-white hover:scale-105"
                            />
                            <input
                                className="opacity-0 absolute top-0 w-full h-full cursor-pointer"
                                type="file"
                                accept="image/"
                                {...register("foto")}
                                onChange={(e) => PreviewImage(e, setPreviewImage)}
                            />
                        </div>
                        <h1 className="mt-3 font-Poppins-Medium text-neutras-50"> Foto do Treino </h1>
                    </div>

                    {/* Campos*/}
                    <div className="flex flex-col space-y-2 w-full items-center p-2 max-lg:space-y-4">

                        {/* Nome */}
                        <div className="w-4/5 max-lg:w-[90%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                            <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Nome: </label>
                            <input
                                className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                placeholder="Digite aqui:"
                                type="text"
                                {...register("nome")}
                            />
                        </div>

                        {/* Parte Afetada */}
                        <div className="w-4/5 max-lg:w-[90%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                            <label className="text-[#242424] font-Poppins-Semibold whitespace-nowrap text-[14px]"> Parte Afetada: </label>
                            <select
                                {...register("foco_corpo")}
                                className="outline-none appearance-none w-full text-sm text-[#242424] pl-2 placeholder:text-neutras-200/60 text-[12px]"
                            >
                                <option value="">Selecione a parte afetada</option>
                                {focoCorpoEnum.options.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>

                        {/* Descrição */}
                        <div className="w-4/5 max-lg:w-[90%] border-1 border-neutras-100/40 flex p-2 rounded-xl">
                            <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Descrição: </label>
                            <textarea
                                className="outline-none resize-none h-20 w-full text-[#242424] pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                placeholder="Digite aqui:"
                                {...register("descricao")}
                            />
                        </div>
                    </div>
                    {/* Button */}
                    <button type="submit" className="w-[75%] bg-verde-100 text-white font-Poppins-Bold text-lg rounded-xl p-0.5 hover:bg-verde-200 duration-500 cursor-pointer max-lg:h-10">
                        Atualizar informações
                    </button>
                </form>
            </div>
        </div>,
        document.body
    )
}