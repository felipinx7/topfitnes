'use client'

import { DadosComponent } from "../components/dadosComponent";
import { Banner } from "../components/banner";
import { useEffect, useState } from "react";
import { InfoDadosComponentAlunos, InfoDadosComponentTreinos } from "../infos/infoDadosComponent";
import { GetAlunosAtrasadosPorPersonal } from "@/services/routes/personal/getAlunosAtrasadosPorPersonal";
import { GetAlunosNovosDesteMes } from "@/services/routes/personal/getAlunosDesteMes";


export function Inicio({ data }: any) {
  const [alunos, setAlunos] = useState([])
  const [alunosAtrasados, setAlunosAtrasados] = useState([])
  const [alunosNovosDesteMes, setAlunosNovosDesteMes] = useState([])
  const [treinos, setTreinos] = useState([])

  async function getPersonal(dataPersonal: any) {
    if (!dataPersonal || !dataPersonal.usuario_id) return;
    setAlunos(dataPersonal.alunos);
    setTreinos(dataPersonal.treinos_criados);

    const dataAlunosAtrasados = await GetAlunosAtrasadosPorPersonal(dataPersonal.usuario_id);
    if (dataAlunosAtrasados) setAlunosAtrasados(dataAlunosAtrasados);

    const dataAlunosNovosDesteMes = await GetAlunosNovosDesteMes(dataPersonal.usuario_id);
    if (dataAlunosNovosDesteMes) setAlunosNovosDesteMes(dataAlunosNovosDesteMes);
  }

  useEffect(() => {
    if (data.usuario_id) {
      getPersonal(data);
    }
  }, [data.usuario_id]);


  const infoDadosComponentAluno = InfoDadosComponentAlunos(alunos.length, alunosAtrasados.length, alunosNovosDesteMes.length)
  const infoDadosComponentTreinos = InfoDadosComponentTreinos(treinos.length)

  return (
    <div className="w-full h-full flex-col p-8 pt-4 overflow-y-auto">
      <Banner />

      <div className="w-full p-2 pt-2.5 mt-8 flex flex-col overflow-hidden">
        <h1 className="pl-2 w-full text-xl text-verde-200 font-Poppins-Semibold px-1"> Resumo Geral dos Alunos </h1>

        <div className="flex flex-col items-center w-full space-y-2 justify-center border-verde-100 border-2 rounded-md p-3 mt-2">
          {infoDadosComponentAluno.map((valor, index) => (
            <DadosComponent key={index} titulo={valor.titulo} icon={valor.icon()} valor={valor.value} />
          ))}
        </div>
      </div>

      <div className="w-full p-2 pt-2.5 mt-8 flex flex-col overflow-hidden">
        <h1 className="pl-2 w-full text-xl text-verde-200 font-Poppins-Semibold px-1"> Resumo Geral dos Treinos </h1>

        <div className="flex flex-col items-center w-full space-y-2 justify-center border-verde-100 border-2 rounded-md p-3 mt-2">
          {infoDadosComponentTreinos.map((valor, index) => (
            <DadosComponent key={index} titulo={valor.titulo} icon={valor.icon()} valor={valor.value} />
          ))}
        </div>
      </div>
      <div className="h-20 md:hidden max-h-20 w-full"></div>
    </div>
  )
}