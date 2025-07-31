'use client'
import { IconeCloseModal } from "@/assets/icons/icone-closeModal-treino"
import { PreviewImage } from "@/utils/previewImagem"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { useForm } from "react-hook-form"
import userProfile from "../../../../assets/image/userProfile.svg"
import { ModalCreateExercicioProps } from "@/types/type-ModalExercise-Props"
import { exerciseDTO, exerciseDTOInput, exerciseSchema } from "@/schemas/schema-exercicio"
import { CreateExercise } from "@/services/routes/exercises/createExercise"
import { toast } from "react-toastify"

export function ModalCreateExercicio({ open, close, create, treinoId }: ModalCreateExercicioProps) {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<exerciseDTOInput>({
        resolver: zodResolver(exerciseSchema)
    });

    async function onSubmit(data: exerciseDTO) {
        const file = data.foto?.[0];
        const finalData = {
            ...data,
            foto: file || null,
        }

        create(finalData)
        toast.success("Exercicio criado com sucesso!")

        reset()
        setPreviewImage(null)
        close()

        const dataBack = { ...data, foto: file, treino_id: treinoId, intervalo_descanso: 30 }
        await CreateExercise(dataBack)
    };

    return ReactDOM.createPortal(
        <div
            onClick={close}
            className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 ${open ? 'visible' : 'invisible'}`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white w-[38%] h-[95%] relative rounded-xl flex flex-col items-center space-y-1 transition-all duration-500 ${open ? "opacity-100 scale-100" : "opacity-0 scale-125"}`}>
                {/* Cabeçalho */}
                <div className="w-full bg-[#F0F0F0] rounded-t-xl flex justify-between items-center px-2 py-3">
                    <div className="flex flex-col text-neutras-100 pl-3 -space-y-1 ">
                        <h1 className="font-Poppins-Medium text-xl">Criação do Exercício</h1>
                        <h2 className="font-poppins font-light text-[12px]">Preencha as informações abaixo para criar um novo exercício</h2>
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
                                src={previewImage ?? userProfile}
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
                            {errors.foto && (
                                <p className="text-red-500 text-sm">
                                    {errors.foto.message as string}
                                </p>
                            )}
                        </div>
                        <h1 className="mt-3 font-Poppins-Medium text-neutras-50"> Foto do Exercicio </h1>
                    </div>

                    {/* Campos*/}
                    <div className="flex flex-col space-y-2 w-full items-center p-2">

                        {/* Nome */}
                        <div className="w-4/5 border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                            <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Nome: </label>
                            <input
                                className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                placeholder="Digite aqui:"
                                type="text"
                                {...register("nome")}
                            />
                            {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
                        </div>

                        {/* repetições e exercuções */}
                        <div className="w-4/5 flex space-x-2">
                            <div className="border border-neutras-100/40 flex items-center justify-between p-2 rounded-xl gap-4">
                                <label className="text-[#242424] font-Poppins-Semibold text-[14px]">Repetições:</label>
                                <input
                                    className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                    placeholder="ex. 12"
                                    type="text"
                                    {...register("repeticoes")}
                                />
                            </div>

                            <div className="border border-neutras-100/40 flex items-center justify-between p-2 rounded-xl gap-4">
                                <label className="text-[#242424] font-Poppins-Semibold text-[14px]">Execuções:</label>
                                <input
                                    className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                    placeholder="ex. 3"
                                    type="text"
                                    {...register("execucoes")}
                                />
                            </div>
                        </div>

                        {/* Descrição */}
                        <div className="w-4/5 border-1 border-neutras-100/40 flex p-2 rounded-xl">
                            <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Descrição: </label>
                            <textarea
                                className="outline-none resize-none h-20 w-full text-[#242424] pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                placeholder="Digite aqui:"
                                {...register("descricao")}
                            />
                            {errors.descricao && <p className="text-red-500 text-sm">Descrição inválida</p>}
                        </div>
                    </div>
                    {/* Button */}
                    <button type="submit" className="w-[75%] bg-verde-100 text-white font-Poppins-Bold text-lg rounded-xl p-0.5 hover:bg-verde-200 duration-500 cursor-pointer">
                        Criar Exercício
                    </button>
                </form>
            </div>
        </div>,
        document.body
    )
}