"use client";

import CardSectionNotificacao from "../components/layout/card-section-notificacao";

export default function SectionNotificacao() {

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
            <hr className="w-full border-1 border-[#575757]"/>
        </div>

        {/* container Notificações  */}
        <div className="max-h-[600px] w-full flex-col overflow-y-auto">
            <CardSectionNotificacao />
        </div>
      </div>
    </section>
  );
}
