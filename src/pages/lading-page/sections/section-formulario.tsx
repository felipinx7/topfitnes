"use client";

import { imagemfundosectionformulario, imagemhomemulher } from "@/assets/image";
import Image from "next/image";
import ComponentBotao from "../components/componente-button";
import { useForm } from "react-hook-form";
import { DataFormularioLadingPage } from "@/dto/data-formulario-lading-page-DTO";
import { zodResolver } from "@hookform/resolvers/zod";
import { formularioLadingPageSchema } from "@/schemas/schema-formulario-lading-page";
import { FormatarNumero } from "@/utils/formatar-numero-telefone";
import { useState } from "react";
import { RegisterFormLadingPage } from "@/services/routes/lading-page/register-form";
import { IconeCorreto } from "@/assets/icons/icone-correto";
import { set } from "zod";

export default function SectionFormulario() {
  // Estado utilizados no componente
  const [telefone, setTelefone] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleVisibility() {
    setIsVisible((prev) => !prev);
    console.log("Status do estado", isVisible);
  }

  // Função de Formatação
  FormatarNumero(telefone);

  // Config do react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataFormularioLadingPage>({
    resolver: zodResolver(formularioLadingPageSchema),
  });

  // Função para enviar o formulário
  async function OnSubmit(data: DataFormularioLadingPage) {
    try {
      setIsSubmiting(true);
      const response = await RegisterFormLadingPage(data);
      setIsVisible(true);
      reset();
      setTelefone("");
      return response;
    } catch (error) {
    } finally {
      setIsSubmiting(false);
    }

    setIsSubmiting(false);
  }

  return (
    <section className="w-full relative flex items-center justify-between min-h-[100vh]">
      {/* container do Modal de Sucesso  */}
      <div
        className={`${isVisible ? "flex" : "hidden"} transition-all backdrop-blur-[5px] z-50 absolute w-full min-h-[100vh] items-center justify-center`}
      >
        {/* Modal de Sucesso  */}
        <article className="bg-verde-100 w-[30%] h-[50%] rounded-4xl flex items-center justify-center flex-col gap-4 p-6 max-md:w-[90%]">
          <div className="h-[7rem] w-[7rem] bg-white flex items-center justify-center rounded-full">
            <IconeCorreto className="w-[5.5rem] h-[4.4rem]" />
          </div>
          <h5 className="text-[1.2rem] leading-7 text-white text-center">
            Informações enviadas com sucesso! Aguarde a equipe entrar em
            contato.
          </h5>
          <div className="w-[80%] flex items-center justify-center">
            <button
              onClick={handleToggleVisibility}
              className="bg-verde-200 font-bold text-white p-2 text-2xl rounded-[0.5rem] hover:bg-[#06984d] ease-in-out duration-500 transition-all cursor-pointer w-full"
            >
              Fechar
            </button>
          </div>
        </article>
      </div>

      {/* imagem de fundo da seção  */}
      <Image
        src={imagemfundosectionformulario}
        className="absolute w-full opacity-30 h-[100%] object-cover top-0"
        alt="Imagem de Fundo de Seção"
      />

      {/* container informações principais  */}
      <div className="max-w-[1280px] m-0 w-[100%] flex max-md:flex-col max-md:p-4 px-6 mb-10 items-center justify-between">
        {/* container foto homem mulher */}
        <div className="w-[60%] flex items-start max-md:hidden">
          <Image src={imagemhomemulher} alt="foto de um homem e uma mulher" />
        </div>

        {/* container formulário */}
        <form
          onSubmit={handleSubmit(OnSubmit)}
          className="flex w-[50%] relative max-md:w-full items-end gap-4 justify-center flex-col"
        >
          {/* container textos formulário */}
          <div className="flex flex-col gap-4">
            <h1 className="font-GoldMan-Bold leading-9 text-[2.3rem]">
              PRONTO PARA{" "}
              <span className="text-verde-100">
                {" "}
                LIBERTAR <br /> SEU POTENCIAL{" "}
              </span>
            </h1>
            <p className="text-[1.2rem]">
              Preencha as informações abaixo e complete as etapas para iniciar
              sua jornada. Vamos juntos alcançar seus objetivos!
            </p>
          </div>

          {/* container parte do formulário  */}
          <div className="w-full flex gap-3 flex-col">
            {/* Campo de Input Nome e Sobrenome */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="nome" className="font-[700] text-[1.1rem]">
                Nome
              </label>
              <input
                type="text"
                {...register("nome")}
                id="nome"
                placeholder="Digite seu nome e sobrenome"
                className="w-full bg-white rounded-[10px] p-3 text-[#333] text-[1rem] placeholder:text-[1rem] placeholder:font-medium outline-none focus:border-[3.5px] focus:border-verde-100 transition-all duration-500 ease-in-out focus:scale-105"
              />
              {errors && (
                <div className="flex w-full items-start justify-start">
                  <p className="text-[1rem] text-red-600">
                    {errors.nome?.message}
                  </p>
                </div>
              )}
            </div>

            {/* Campo de Input Email  */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="font-[700] text-[1.1rem]">
                Email
              </label>
              <input
                type="text"
                {...register("email")}
                id="email"
                placeholder="Informe seu email"
                className="w-full bg-white rounded-[10px] p-3 text-[#333] text-[1rem] placeholder:text-[1rem] placeholder:font-medium outline-none focus:border-[3.5px] focus:border-verde-100 transition-all duration-500 ease-in-out focus:scale-105"
              />
              {errors && (
                <div className="flex w-full items-start justify-start">
                  <p className="text-[1rem] text-red-600">
                    {errors.email?.message}
                  </p>
                </div>
              )}
            </div>

            {/* Campo de Contato Telefônico  */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="Telefone" className="font-[700] text-[1.1rem]">
                Contato Telefônico
              </label>
              <input
                type="tel"
                inputMode="numeric"
                id="telefone"
                value={telefone}
                maxLength={15}
                placeholder="(xx) xxxxx-xxxx"
                className="w-full bg-white rounded-[10px] p-3 text-[#333] text-[1rem] placeholder:text-[1rem] placeholder:font-medium outline-none focus:border-[3.5px] focus:border-verde-100 transition-all duration-500 ease-in-out focus:scale-105"
                {...register("telefone")}
                onChange={(e) => {
                  const valorDigitado = e.target.value;
                  const formatado = FormatarNumero(valorDigitado);
                  setTelefone(formatado);
                }}
              />
              {errors && (
                <div className="flex w-full items-start justify-start">
                  <p className="text-[1rem] text-red-600">
                    {errors.telefone?.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* botão de enviar informações  */}
          <div className="w-[100%] flex items-center justify-center max-md:w-full mt-4">
            <ComponentBotao
              text="ENVIAR INFORMAÇÕES"
              isSubmiting={isSubmiting}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
