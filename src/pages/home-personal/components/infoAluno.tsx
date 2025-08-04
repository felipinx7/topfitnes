import { AlunoPersonalDTO } from "@/schemas/schema-aluno-personal"
import { AlunoComponent } from "./alunoComponent"


type infoAluno = {
    previewFoto: string,
    data: { dataAluno: AlunoPersonalDTO }
}



export function InfoAluno({ previewFoto, data }: infoAluno) {
    const dataSexo = (data?.dataAluno?.sexo || "").toLowerCase();
    const SexoFormat = dataSexo
        ? dataSexo[0].toUpperCase() + dataSexo.slice(1)
        : "Sem informação";

    return (

        <div className="flex  flex-col space-y-2 w-2/5 p-2 rounded-bl-lg h-full border-black/30 border-r">
            {/* foto do aluno */}
            <div className="flex flex-col w-full pl-3 space-y-2 items-center">
                <h1 className="font-Poppins-Medium text-xl text-[#646464]">Aluno</h1>
                <div
                    className="h-44 w-44 rounded-full bg-neutras-100"
                    style={{
                        backgroundImage: `url(${previewFoto})`,
                        backgroundSize: "cover",
                        backgroundPosition: 'center'
                    }}
                ></div>
            </div>

            {/* Nome, descricao e partes afetadas do treino */}
            <div className="flex-col flex justify-center items-center mt-4 w-full">
                <div className="w-4/5 col-span-2 text-lg px-3 py-2 text-center font-poppins font-bold text-[#646464]
rounded-sm border border-black/20 ">
                    {data.dataAluno?.nome}
                </div>

                <div className="w-4/5 flex flex-row mt-4 space-x-2 justify-center items-center">
                    <div className="w-1/2 text-sm px-1 py-1 text-center font-poppins font-bold text-[#646464] rounded-sm border border-black/20 ">{SexoFormat}</div>

                    <div className="w-1/2 text-sm px-1 py-1 text-center font-poppins font-bold text-[#646464] rounded-sm border border-black/20 ">{data.dataAluno.idade} Anos</div>
                </div>

                <div className="w-full mt-8 flex items-center flex-col">
                    <h1 className=" text-center mb-1 text-black font-poppins font-semibold" >Personal:</h1>
                    {data.dataAluno?.personal?.nome ? (<h1 className="text-[#646464] font-poppins font-semibold">{data.dataAluno?.personal.nome + ' ' + data.dataAluno?.personal.sobrenome}</h1>) : (
                        <div className="w-full col-span-2 text-xl px-3 py-2">
                            <h1 className="text-center flex items-center justify-center w-full text-lg col-span-2 font-Poppins-Medium text-[#646464]">Não Possui Personal Privado</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}