import { infoDadosComponentAluno, infoDadosComponentTreinos } from "../infos/infoDadosComponent";
import { DadosComponent } from "../components/dadosComponent";
import { Banner } from "../components/banner";

export function Inicio() {
  return (
    <div className="w-full h-full flex-col p-8 pt-4 overflow-y-auto">
      <Banner />
      
      <div className="w-full p-2 pt-2.5 mt-8 flex flex-col overflow-hidden">
            <h1 className="pl-2 w-full text-xl text-verde-200 font-Poppins-Semibold px-1"> Resumo Geral dos Alunos </h1>

            <div className="flex flex-col items-center w-full space-y-2 justify-center border-verde-100 border-2 rounded-md p-3 mt-2">
              { infoDadosComponentAluno.map((valor, index) => (
                <DadosComponent key={index} titulo={valor.titulo} icon={valor.icon()} valor={valor.value} />
              ))}
            </div>
      </div>

      <div className="w-full p-2 pt-2.5 mt-8 flex flex-col overflow-hidden">
            <h1 className="pl-2 w-full text-xl text-verde-200 font-Poppins-Semibold px-1"> Resumo Geral dos Treinos </h1>

            <div className="flex flex-col items-center w-full space-y-2 justify-center border-verde-100 border-2 rounded-md p-3 mt-2">
              { infoDadosComponentTreinos.map((valor, index) => (
                <DadosComponent key={index} titulo={valor.titulo} icon={valor.icon()} valor={valor.value} />
              ))}
            </div>
      </div>
    </div>
  )
}