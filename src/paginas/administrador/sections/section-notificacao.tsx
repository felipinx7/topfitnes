"use client";

import { useEffect, useState } from "react";
import CardSectionNotificacao from "../components/layout/card-section-notificacao";
import GetNotificacaoAdministrador from "@/services/routes/administrador/get/get-notificacao-administrador";
import { DataFormularioLadingPage } from "@/dto/data-formulario-lading-page-DTO";

export default function SectionNotificacao() {
  // estados utilizados no componente
  const [notificacao, setNotificacao] = useState<
    DataFormularioLadingPage[] | null
  >(null);

  async function fecthNotificacaoAdministrador() {
    try {
      const response  = await GetNotificacaoAdministrador();
      setNotificacao(response);
      console.log("Notificações Disponivel", response);
      return response;
    } catch (error) {
      console.log("Error ao Pegar notificação");
    }
  }

  useEffect(() => {
    fecthNotificacaoAdministrador();
  }, []);

  return (
    <section className="bg-white w-full flex flex-col items-center px-4 py-8 min-h-[calc(100vh-187.29px)]">
      <div className="max-w-[1280px] w-[100%] gap-3 flex flex-col m-0 items-start">
        <h1 className="text-[#575757] font-Poppins-Bold text-3xl">
          Aréa de Notificações
        </h1>

        {/* container linha  */}
        <div className="w-full gap-3">
          <div className="w-full flex text-[#575757] font-Poppins-Medium items-center justify-between">
            <p>Informações</p>
            <p>Contato</p>
          </div>
          <hr className="w-full border-1 border-[#575757]" />
        </div>

        {/* container Notificações  */}
        <div className="max-h-[600px] flex gap-4 w-full flex-col overflow-y-auto">
          {notificacao?.map((card) => <CardSectionNotificacao key={card.nome} {...card} />)}
        </div>
      </div>
    </section>
  );
}
