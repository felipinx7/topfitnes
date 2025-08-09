"use client";

import { IconePersonal } from "@/assets/icons/icone-personal";
import BarraDeNavegacaoAdministrador from "../components/layout/barra-de-navegacao-administrador";
import { useEffect, useState } from "react";
import BarraDeNavagacaoAdministradorMobile from "../components/layout/barra-de-navegacao-administrador-mobile";
import { DataCadastroPersonal } from "@/dto/data-cadastro-personal";
import { GetTodosPersonais } from "@/services/routes/administrador/get/get-todos-personais";
import CardInformacaoPersonal from "../components/layout/card-informacao-personal";

export default function SectionPersonal() {
  // Etados Utilizado no componente
  const [openModalFormularioPersonal, setOpenModalFormularioPersonal] =
    useState(false);
  const [personal, setPersonal] = useState<DataCadastroPersonal[] | null>(null);

  // Funções utilizadas no componente
  function handleVisibilityModalFormularioPersonal() {
    setOpenModalFormularioPersonal((prev) => !prev);
  }

  async function FetchPersonais() {
    const response = await GetTodosPersonais();
    setPersonal(response?.data);
  }

  useEffect(() => {
    FetchPersonais();
  }, []);
  return (
    <section className="bg-white w-full min-h-[calc(100vh-187.29px)]">
      {/* Barra de navegação desktop e mobile */}
      <BarraDeNavegacaoAdministrador
        Icone={IconePersonal}
        nomeSection="Personal"
        handleVisibilityModalFormularioPersonal={
          handleVisibilityModalFormularioPersonal
        }
        openModalFormularioPersonal={openModalFormularioPersonal}
      />
      <BarraDeNavagacaoAdministradorMobile
        SectionName="personal"
        openModalFormularioPersonal={openModalFormularioPersonal}
        handleVisibilityModalFormularioPersonal={
          handleVisibilityModalFormularioPersonal
        }
      />

      {/* container cards global */}
      <div className="w-full ease-in-out duration-500 transition-all flex flex-col p-8 items-center justify-center">
        {/* container cards dos clientes  */}
        <div className="max-w-[1280px] w-[100%] m-0 flex gap-[0.5rem] flex-col  overflow-y-auto">
          {/* container linha  */}
          <div className="w-full gap-4">
            <div className="w-full flex text-[#575757] font-Poppins-Medium items-center justify-between">
              <p>Informações</p>
              <p>Edição</p>
            </div>
            <hr className="w-full border-1 border-[#575757]" />
          </div>
          {personal?.map((personal) => (
            <CardInformacaoPersonal key={personal.id} {...personal} />
          ))}
        </div>
      </div>
    </section>
  );
}
