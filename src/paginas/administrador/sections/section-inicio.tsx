import { DadosComponent } from "@/paginas/home-aluno/components/Dados";
import {
  InfoDadosComponentAlunos,
  InfoDadosComponentTreinos,
} from "@/paginas/home-personal/infos/infoDadosComponent";
import { GetTodosClientes } from "@/services/routes/administrador/get/get-todos-clientes";
import { GetAlunosAtrasados } from "@/services/routes/personal/getAlunoAtrasados";
import { getAlunosNovosDesteMes } from "@/services/routes/personal/getAlunosDesteMes";
import { useEffect, useState } from "react";

export default function SectionInicio({ data }: any) {
  const [alunos, setAlunos] = useState([]);
  const [alunosAtrasados, setAlunosAtrasados] = useState([]);
  const [alunosNovosDesteMes, setAlunosNovosDesteMes] = useState([]);
  const [treinos, setTreinos] = useState([]);

  async function getPersonal(dataPersonal: any) {
    if (!dataPersonal || !dataPersonal.usuario_id) return;
    const alunos = await GetTodosClientes();
    setAlunos(alunos);

    setTreinos(dataPersonal.treinos_criados);

    const dataAlunosAtrasados = await GetAlunosAtrasados();
    if (dataAlunosAtrasados) setAlunosAtrasados(dataAlunosAtrasados);

    const dataAlunosNovosDesteMes = await getAlunosNovosDesteMes();
    if (dataAlunosNovosDesteMes)
      setAlunosNovosDesteMes(dataAlunosNovosDesteMes);
  }

  useEffect(() => {
    if (data.usuario_id) {
      getPersonal(data);
    }
  }, [data.usuario_id]);

  const infoDadosComponentAluno = InfoDadosComponentAlunos(
    alunos.length,
    alunosAtrasados.length,
    alunosNovosDesteMes.length
  );
  const infoDadosComponentTreinos = InfoDadosComponentTreinos(treinos.length);
  return (
    <section className="bg-white w-full flex flex-col items-center px-4 py-8 min-h-[calc(100vh-187.29px)]">
      <div className="max-w-[1280px] w-[100%] gap-3 flex flex-col m-0 items-start">
        <h1 className="text-[rgb(87,87,87)] font-Poppins-Bold text-3xl">
          Área do Administrador
        </h1>

        {/* container linha  */}
        <div className="w-full gap-3">
          <div className="w-full flex text-[#575757] font-Poppins-Medium items-center justify-between">
            <div className="w-full p-2 pt-2.5 mt-8 flex flex-col overflow-hidden">
              <h1 className="pl-2 w-full text-xl text-verde-200 font-Poppins-Semibold px-1">
                {" "}
                Resumo Geral dos Alunos{" "}
              </h1>

              <div className="flex flex-col items-center w-full space-y-2 justify-center border-verde-100 border-2 rounded-md p-3 mt-2">
                {infoDadosComponentAluno.map((valor, index) => (
                  <DadosComponent
                    key={index}
                    titulo={valor.titulo}
                    icon={valor.icon()}
                    valor={String(valor.value)}
                  />
                ))}
              </div>
            </div>

            <div className="w-full p-2 pt-2.5 mt-8 flex flex-col overflow-hidden">
              <h1 className="pl-2 w-full text-xl text-verde-200 font-Poppins-Semibold px-1">
                {" "}
                Resumo Geral dos Treinos{" "}
              </h1>

              <div className="flex flex-col items-center w-full space-y-2 justify-center border-verde-100 border-2 rounded-md p-3 mt-2">
                {infoDadosComponentTreinos.map((valor, index) => (
                  <DadosComponent
                    key={index}
                    titulo={valor.titulo}
                    icon={valor.icon()}
                    valor={String(valor.value)}
                  />
                ))}
              </div>
            </div>
          </div>
          <hr className="w-full border-1 border-[#575757]" />
        </div>
      </div>
    </section>
  );
}
