"use client";

import { useEffect, useState } from "react";
import BarraDeNavegacaoAdministrador from "../components/layout/barra-de-navegacao-administrador";
import { IconeAlunos } from "@/assets/icons/icone-alunos";
import BarraDeNavagacaoAdministradorMobile from "../components/layout/barra-de-navegacao-administrador-mobile";
import CardInformacaoAluno from "../components/layout/card-informacao-aluno";
import { DataAluno } from "@/dto/data-aluno";
import { GetTodosClientes } from "@/services/routes/administrador/get/get-todos-clientes";

export default function SectionCliente() {
  // Etados Utilizado no componente
  const [openModalFormularioCliente, setOpenModalFormularioCliente] =
    useState(false);
  const [clientes, setClientes] = useState<DataAluno[] | null>(null);

  // Funções utilizadas no componente
  function handleVisibilityModalFormularioCliente() {
    setOpenModalFormularioCliente((prev) => !prev);
  }
  async function fecthTodoAlunos() {
    const response = await GetTodosClientes();
    setClientes(response);
    console.log(response);
  }

  useEffect(() => {
    fecthTodoAlunos();
  }, []);

  return (
    <section className="bg-white w-full min-h-[calc(100vh-187.29px)]">
      {/* container Barra de Navegação Desktop - Mobile  */}
      <BarraDeNavegacaoAdministrador
        handleVisibilityModalFormularioCliente={
          handleVisibilityModalFormularioCliente
        }
        openModalFormularioCliente={openModalFormularioCliente}
        Icone={IconeAlunos}
        nomeSection="Cliente"
      />
      <BarraDeNavagacaoAdministradorMobile
        handleVisibilityModalFormularioCliente={
          handleVisibilityModalFormularioCliente
        }
        openModalFormularioCliente={openModalFormularioCliente}
        SectionName="clientes"
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
          {clientes?.map((aluno) => <CardInformacaoAluno key={aluno.id} {...aluno} />)}
        </div>
      </div>
    </section>
  );
}
