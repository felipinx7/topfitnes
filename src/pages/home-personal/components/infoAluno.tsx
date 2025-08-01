import { AlunoPersonalDTO } from "@/schemas/schema-aluno-personal"


type infoAluno = {
    previewFoto: string,
    data: {dataAluno: AlunoPersonalDTO}
}

export function InfoAluno({previewFoto, data}: infoAluno ) {
    return (

        <div className="flex flex-col space-y-2 w-[40%] p-2 rounded-bl-lg h-full">
            {/* foto do aluno */}
            <div className="flex flex-col w-full space-y-2 items-center">
                <h1 className="font-Poppins-Medium text-xl text-neutras-100">Aluno</h1>
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
            <div className="grid grid-cols-2 gap-4 w-full items-center mt-4">
                <div className="w-full col-span-2 px-3 py-2 text-center font-poppins font-bold text-gray-500 rounded-sm border border-black/20 shadow shadow-black/20">
                    {data.dataAluno?.nome}
                </div>
                <div className="w-full px-3 py-2 text-center font-poppins font-bold text-gray-500 rounded-sm border border-black/20 shadow shadow-black/20">
                    {data.dataAluno?.sexo}
                </div>
                                <div className="w-full px-3 py-2 text-center font-poppins font-bold text-gray-500 rounded-sm border border-black/20 shadow shadow-black/20">
                    {data.dataAluno?.idade} Anos
                </div>
            </div>
        </div>
    )
}