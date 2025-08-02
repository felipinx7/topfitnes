"use client";

import { useEffect, useState } from "react";
import { IDataPersonalHome } from "@/dto/data-personalHome-DTO";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaPersonaPerfil, schemaPersonaPerfilDTO } from "@/schemas/schema-personal";
import { toast } from "react-toastify";
import { UpdatePersonal } from "@/services/routes/personal/updatePersonal";
import { FormatarNumero } from "@/utils/formatar-numero-telefone";
import { GetPersonal } from "@/services/routes/personal/getPersonal";


export function PerfilSection() {
  const [personal, setPersonal] = useState<schemaPersonaPerfilDTO>()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, } = useForm<schemaPersonaPerfilDTO>({ resolver: zodResolver(schemaPersonaPerfil) })

  const photo = BaseUrlFoto(personal?.foto);
  const [frontFoto, setFrontFoto] = useState(photo);

  useEffect(() => {
    if (personal) {
      reset({
        nome: personal.nome,
        sobrenome: personal.sobrenome,
        email: personal.email,
        telefone: personal.telefone,
        formacao: personal.formacao
      })

      if (typeof personal.foto === 'string') {
        setFrontFoto(photo)
      }
    }
  }, [personal, reset, open])

  async function onSubmit(data: any) {
    const file = data.foto?.[0] ?? null
    const finalData = {
      ...data,
      foto: file || personal?.foto,
      telefone: FormatarNumero(data.telefone)
    }

    if (file && file.size > 2 * 1024 * 1024) {
      toast.error("A imagem é muito grande. Envie uma com até 2MB.");
      return;
    }

    try {
      await UpdatePersonal(finalData);
      toast.info("Suas informações foram atualizadas");
    } catch (err: any) {
      const msg = err?.message || "Erro ao atualizar perfil.";
      toast.error(msg);
    }

  }

  useEffect(() => {
    if (errors.nome) toast.error(`NomeError: ${errors.nome.message}`);
    if (errors.formacao) toast.error(`FormacaoError: ${errors.formacao.message}`);
    if (errors.email) toast.error("Selecione um email válido.");
    if (errors.telefone) toast.error(`TelefoneError: ${errors.telefone.message}`);
    if (errors.sobrenome) toast.error(`SObrenome error: ${errors.sobrenome.message}`);
  }, [errors]);

  useEffect(() => {
    async function getPersonal() {
      const data = await GetPersonal();
      if (data) setPersonal(data);
    }

    getPersonal();
  }, []);
  return (
    <div className="w-full h-full flex flex-col">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col gap-2 xl:overflow-y-hidden overflow-y-scroll text-xl p-8 md:px-12 text-neutras-100"
      >
        <h1 className="font-Poppins-Bold max-md:text-center">Meu perfil</h1>

        <div className="w-full max-md:h-fit max-md:flex-col p-4 h-36 bg-white shadow-2xl flex flex-row gap-4 shadow-neutras-100/20 max-md:justify-center max-md:items-center rounded-2xl border-2 border-neutras-100/20">
          <div
            className="h-full max-md:h-32 max-md:w-32 aspect-square rounded-full bg-neutras-200/20"
            style={{
              backgroundImage: `url(${frontFoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {" "}
            <input
              {...register("foto")}
              onChange={(e: any) => setFrontFoto(e)}
              className="w-full cursor-pointer rounded-full h-full opacity-0"
              type="file"
            />

          </div>
          <div className="h-30 full flex flex-col justify-center items-start text-xl max-md:items-center  text-verde-200">
            <h1 className="text-xl font-Poppins-Semibold text-black">
              {personal?.nome} {personal?.sobrenome}
            </h1>
            <h1 className="text-sm font-Poppins mb-4">personal</h1>

            <h1 className="text-sm font-Poppins w-full"> {personal?.telefone || "sem telefone"}</h1>
            <h1 className="text-sm font-Poppins w-full">{personal?.email || "sem email"}</h1>
          </div>
        </div>

        <h1 className="font-Poppins-Bold mt-8 pl-1 max-md:text-center">Informações Pessoais</h1>

        <div className="w-full p-4 py-8 bg-white shadow-2xl text-neutras-200 flex flex-col space-y-4 items-center justify-center shadow-neutras-100/20  rounded-2xl border-2 border-neutras-100/20">
          {/* Email */}
          <div className="w-full">
            <label
              htmlFor="email"
              className="w-full wrap-normal whitespace-nowrap border-2 h-10 rounded-lg col-span-2 text-base flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
            >
              Email:
              <input
                {...register("email")}
                placeholder="Digite seu email"
                type="text"
                name="email"
                className="w-full px-2 flex items-end h-full text-base outline-0"
              />
            </label>
          </div>

          {/* Formação */}
          <div className="h-full w-full flex md:space-x-2 max-md:flex-col max-md:space-y-4">
            <label
              className="md:w-1/2 wrap-normal whitespace-nowrap border-2 h-10 rounded-lg col-span-2 text-base flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
            >
              Formação:
              <input
                {...register("formacao")}
                type="text"
                placeholder="Digite sua formação"
                className="w-full px-2 flex items-end h-full text-base outline-0"
              />
            </label>

            {/* Telefone */}
            <label
              className="md:w-1/2 wrap-normal whitespace-nowrap border-2 h-10 rounded-lg col-span-2 text-base flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
            >
              Telefone:
              <input
                {...register("telefone")}
                onChange={(e) => {
                  const valorSemMascara = e.target.value.replace(/\D/g, "")
                  e.target.value = FormatarNumero(valorSemMascara)
                }}
                placeholder="Digite seu telefone"
                className="w-full px-2 flex items-end h-full text-base outline-0"
                maxLength={15}
              />
            </label>
          </div>

          {/* Nome */}
          <div className="h-full w-full flex md:space-x-2 max-md:flex-col max-md:space-y-4">
            <label
              className="md:w-1/2 wrap-normal whitespace-nowrap border-2 h-10 rounded-lg col-span-2 text-base flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
            >
              Nome:
              <input
                {...register("nome")}
                type="text"
                name="email"
                placeholder="Digite seu nome"
                className="w-full px-2 flex items-end h-full text-base outline-0"
              />
            </label>

            {/* Sobrenome */}
            <label
              className="md:w-1/2 wrap-normal whitespace-nowrap border-2 h-10 rounded-lg col-span-2 text-base flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
            >
              Sobrenome:
              <input
                {...register("sobrenome")}
                type="text"
                placeholder="Digite seu sobrenome"
                className="w-full px-2 flex items-end h-full text-base outline-0"
              />
            </label>
          </div>

        </div>

        <div className="flex items-center justify-center mt-8 h-20">
          <button className="bg-verde-200 md:hover:bg-green-800 cursor-pointer text-white font-poppins font-bold text-lg w-3/5 mt-8 py-[3px] text-center rounded-xl duration-500 max-md:w-full shadow-black/30 shadow">
            Salvar alterações
          </button>
        </div>
      </form >
      <div className="h-40 md:hidden"></div>
    </div >
  );
}
