import { AlunoPersonalDTO } from "@/schemas/schema-aluno-personal"
import { AlunoComponent } from "./alunoComponent"


type infoAluno = {
    previewFoto: string,
    data: { dataAluno: AlunoPersonalDTO }
}



export function InfoAluno({ previewFoto, data }: infoAluno) {
    return (

        <div className="flex  flex-col space-y-2 w-1/4 p-2 rounded-bl-lg h-full">
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
            <div className="grid grid-cols-2 gap-4 w-full items-center mt-4 pl-3">
                <div className="w-full col-span-2 text-xl px-3 py-2 text-center font-poppins font-bold text-[#646464]
rounded-sm border border-black/20 ">
                    {data.dataAluno?.nome}
                </div>
          
                <div className="w-full  py-2 flex justify-center text-center items-center font-poppins font-bold text-[#646464] rounded-sm border border-black/20 ">
                    {data.dataAluno?.sexo === 'PREFIRO_NAO_DIZER' ? (
                        <h1>OUTRO</h1>
                    ) : (
                        <h1>{data.dataAluno?.sexo}</h1>
                    )}
                </div>
                <div className="w-full  py-2 text-center flex justify-center font-poppins font-bold text-[#646464] rounded-sm border border-black/20">
                    {data.dataAluno?.idade} Anos
                </div>
                <div className="w-full col-span-2">
                    <h1 className="text-[#646464] text-center mb-1" >Personal:</h1>
                    {data.dataAluno?.personal?.nome ? (
                        
                        <AlunoComponent nomeAluno={data.dataAluno?.personal?.nome} foto={data.dataAluno?.personal?.foto} isVisibleView={false}  />
                    ) : (
                        <div className="w-full col-span-2 text-xl px-3 py-2">
                            <h1 className="text-center flex items-center justify-center w-full text-lg col-span-2 font-Poppins-Medium text-[#646464]">Não Possui Personal Privado</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}