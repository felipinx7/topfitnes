'use client'

import { AlunoSchemaFormPersonalDTO, schemaAlunoFormPersonal } from "@/schemas/schema-aluno-formPersonal";
import { PreviewImage } from "@/utils/previewImagem";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom"
import { useForm } from "react-hook-form";
import { UserProfileIMG } from "@/assets/image/userProfileimg";
import { IconeCloseModal } from "@/assets/icons/icone-closeModal-treino";
import { infoFocoTreino, infoGrupoMuscularAlvo, infoPlanoId, infoSexoStudent } from "@/constants/infoSexoStudent";
import { FormatarNumero } from "@/utils/formatar-numero-telefone";
import { toast } from "react-toastify";
import { CreateAluno } from "@/services/routes/aluno/createAluno";

type modalCreateAlunoProps = {
    open: boolean,
    close: () => void,
    create: (data: AlunoSchemaFormPersonalDTO) => void
};

export function ModalCreateAluno(data: modalCreateAlunoProps) {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<AlunoSchemaFormPersonalDTO>({ resolver: zodResolver(schemaAlunoFormPersonal) })

    async function onSubmit(rawData: AlunoSchemaFormPersonalDTO) {
        const file = rawData?.foto?.[0];
        const finalData = {
            ...rawData,
            foto: file || null,
            telefone: FormatarNumero(rawData.telefone || "")
        }
        if (file && file.size > 2 * 1024 * 1024) {
            toast.error("A imagem é muito grande. Envie uma com até 2MB.");
            return;
        }

        try {
            const response = await CreateAluno(finalData)
            console.log("response: ", response)
            toast.success("Aluno cadastrado com sucesso!");

            const dataBack = {
                ...rawData,
                id: response.student.id,
                foto: file || null,
                telefone: FormatarNumero(rawData.telefone || "")
            }
            console.log("dataBack: ", dataBack)
            data.create(dataBack)
            data.close()
            reset()
            setPreviewImage(null)
        } catch (err: any) {
            const msg = err?.message || "Erro ao atualizar perfil.";
            toast.error(msg);
        }
    }

    return ReactDOM.createPortal(
        <div
            onClick={data.close}
            className={`fixed inset-0 bg-black/40 flex items-center justify-center z-45 ${data.open ? 'visible' : 'invisible'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white overflow-y-hidden w-4/5 max-md:w-[95%] h-[95%] max-h-[95%] max-md:max-h-[850px] max-xl:max-h-[800px] relative rounded-xl flex flex-col items-center space-y-1 transition-all duration-500 ${data.open ? "opacity-100 scale-100" : "opacity-0 scale-125"}`}>
                {/* Cabeçalho */}
                <div className="w-full bg-[#F0F0F0] rounded-t-xl flex justify-between items-center px-2 py-3">
                    <div className="flex flex-col max-lg:w-4/5 text-neutras-100 pl-3 -space-y-1 max-lg:pl-1 ">
                        <h1 className="font-Poppins-Medium text-xl max-md:text-lg">Cadastro do Aluno</h1>
                        <h2 className="font-poppins font-light text-[12px] max-md:text-[11px] max-lg:pl-0.5 max-md:pl-0">Preencha as informações abaixo e realize o cadastro de um aluno</h2>
                    </div>
                    <button
                        onClick={() => {
                            data.close()
                            setPreviewImage(null)
                            reset()
                        }}
                        className="text-neutras-100 pr-1 duration-500 cursor-pointer hover:text-red-500">
                        <IconeCloseModal />
                    </button>
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex max-md:flex-col max-md:items-center max-md:overflow-y-scroll max-md:space-y-4">
                    {/* Section 1 */}
                    <div className="h-full w-[35%] flex flex-col items-center p-2 md:border-r border-black/20 max-md:w-full max-md:py-0 ">
                        {/* Foto */}
                        <div className="flex flex-col w-[70%] items-center justify-center mt-4">
                            <div className=" aspect-square rounded-full w-2/3 relative duration-500 ease-in-out transition-all hover:scale-105">
                                {previewImage ? (
                                    <div
                                        style={{
                                            backgroundImage: `url(${previewImage})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: 'center'
                                        }}
                                        className="aspect-square w-full object-cover rounded-full duration-500 hover:border-white   "
                                    />) : (<UserProfileIMG />)}
                                <input
                                    className="opacity-0 absolute top-0 w-full h-full cursor-pointer"
                                    type="file"
                                    accept="image/"
                                    {...register("foto")}
                                    onChange={(e) => PreviewImage(e, setPreviewImage)}
                                />

                            </div>
                            <h1 className="font-poppins text-neutras-100 mt-4">Foto de Perfil</h1>
                        </div>

                        {/* Campos 1 */}
                        <div className="w-full h-[70%] flex items-center justify-center space-y-4 flex-col">
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

                            {/* Sobrenome */}
                            <div className="w-4/5 max-lg:w-[90%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Sobrenome: </label>
                                <input
                                    className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                    placeholder="Digite aqui:"
                                    type="text"
                                    {...register("sobrenome")}
                                />
                            </div>

                            {/* Sexo */}
                            <div className="w-4/5 max-lg:w-[90%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Sexo: </label>
                                <select
                                    {...register("sexo")}
                                    className="outline-none w-full text-sm text-[#242424] pl-2 placeholder:text-neutras-200/60 max-lg:text-[14px]"
                                >
                                    <option className="text-neutras-200/60" value="">Selecione seu sexo</option>
                                    {infoSexoStudent.map((item, index) => (
                                        <option value={item.valueBack} key={index}>{item.valueFront}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Idade */}
                            <div className="w-4/5 max-lg:w-[90%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Idade: </label>
                                <input
                                    className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                    placeholder="Digite aqui:"
                                    type="number"
                                    {...register("idade")}
                                />
                            </div>

                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-col justify-between items-center w-[65%] h-full py-5 px-2 max-md:w-full max-md:py-0">

                        {/* Campos 2 */}
                        <div className="flex flex-col w-full items-center space-y-4">
                            {/* Email */}
                            <div className="w-[95%] max-lg:w-[90%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Email: </label>
                                <input
                                    className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                    placeholder="Digite aqui:"
                                    type="text"
                                    {...register("email")}
                                />
                            </div>

                            {/* Objetivo do treino */}
                            <div className="w-[95%] max-lg:w-[90%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                <label className="text-[#242424] font-Poppins-Semibold text-[14px] whitespace-nowrap"> Objetivo do treino: </label>
                                <select
                                    {...register("foco_treino")}
                                    className="outline-none w-full text-sm text-[#242424] pl-2 placeholder:text-neutras-200/60 max-lg:text-[14px]"
                                >
                                    <option className="text-neutras-200/60" value="">Selecione o objetivo</option>
                                    {infoFocoTreino.map((item, index) => (
                                        <option value={item.valueBack} key={index}>{item.valueFront}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Grupo muscular alvo */}
                            <div className="w-[95%] max-lg:w-[90%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                <label className="text-[#242424] font-Poppins-Semibold text-[14px] whitespace-nowrap"> Grupo muscular alvo: </label>
                                <select
                                    {...register("foco_corpo")}
                                    className="outline-none w-full text-sm text-[#242424] pl-2 placeholder:text-neutras-200/60 max-lg:text-[14px]"
                                >
                                    <option className="text-neutras-200/60" value="">Selecione o grupo muscular alvo</option>
                                    {infoGrupoMuscularAlvo.map((item, index) => (
                                        <option value={item.valueBack} key={index}>{item.valueFront}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Campos duplos */}
                            <div className="w-[95%] grid grid-cols-2 md:gap-x-8 md:gap-y-4 max-md:flex max-md:flex-col max-md:space-y-4 max-md:items-center">

                                {/* Telefone */}
                                <div className="w-full max-lg:w-[95%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                    <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Telefone: </label>
                                    <input
                                        className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                        placeholder="Digite aqui:"
                                        maxLength={15}
                                        type="text"
                                        {...register("telefone", {
                                            onChange: (e) => {
                                                const rawValue = e.target.value.replace(/\D/g, "");
                                                e.target.value = FormatarNumero(rawValue);
                                            },
                                        })}
                                    />
                                </div>

                                {/* Plano */}
                                <div className="w-full max-lg:w-[95%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                    <label className="text-[#242424] font-Poppins-Semibold text-[14px] whitespace-nowrap"> Plano: </label>
                                    <select
                                        {...register("plano_id")}
                                        className="outline-none w-full text-sm text-[#242424] pl-2 placeholder:text-neutras-200/60 max-lg:text-[14px]"
                                    >
                                        <option className="text-neutras-200/60" value="">Selecione o plano</option>
                                        {infoPlanoId.map((item, index) => (
                                            <option value={item.valueBack} key={index}>{item.valueFront}</option>
                                        ))}
                                    </select>
                                </div>
                                {/* Senha */}
                                <div className="w-full max-lg:w-[95%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                    <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Senha: </label>
                                    <input
                                        className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                        placeholder="Digite aqui:"
                                        type="password"
                                        {...register("senha")}
                                    />
                                </div>

                                {/* Treinos na semana */}
                                <div className="w-full max-lg:w-[95%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                    <label className="text-[#242424] font-Poppins-Semibold text-[14px] whitespace-nowrap"> Treinos na semana </label>
                                    <input
                                        className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                        placeholder="Digite aqui:"
                                        type="number"
                                        {...register("treino_dias_por_semana")}
                                        maxLength={1}
                                        max={7}
                                    />
                                </div>

                                {/* Altura */}
                                <div className="w-full max-lg:w-[95%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                    <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Altura: </label>
                                    <input
                                        className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                        placeholder="Digite aqui:"
                                        type="text"
                                        {...register("altura")}
                                    />
                                </div>

                                {/* Peso */}
                                <div className="w-full max-lg:w-[95%] border-1 border-neutras-100/40 flex items-center p-2 rounded-xl">
                                    <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Peso: </label>
                                    <input
                                        className="outline-none text-[#242424] w-full pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                        placeholder="Ex: 84.5"
                                        type="number"
                                        {...register("peso")}
                                    />
                                </div>
                            </div>

                            {/* Observação */}
                            <div className="w-[95%] max-lg:w-[90%] border-1 border-neutras-100/40 flex p-2 rounded-xl">
                                <label className="text-[#242424] font-Poppins-Semibold text-[14px]"> Descrição: </label>
                                <textarea
                                    className="outline-none resize-none h-20 w-full text-[#242424] pl-2 placeholder:text-neutras-200/60 text-[15px]"
                                    placeholder="Digite aqui:"
                                    {...register("observacao")}
                                />
                            </div>
                        </div>
                        {/* Button */}
                        <button type="submit" className="w-[75%] bg-verde-100 text-white font-Poppins-Bold text-lg rounded-xl p-0.5 hover:bg-verde-200 duration-500 cursor-pointer max-lg:h-10 max-md:mt-8">
                            Criar Aluno
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    )
}