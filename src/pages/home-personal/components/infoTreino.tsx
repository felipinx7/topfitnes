import { TrainingSchemaDTO } from "@/schemas/schema-treino";

type infoTreino = {
    previewFoto: string,
    data: {dataTraining: TrainingSchemaDTO}
}

export function InfoTreino({previewFoto, data}: infoTreino ) {
    return (

        <div className="flex flex-col space-y-2 w-[40%] p-2 rounded-bl-lg h-full">
            {/* foto treino */}
            <div className="flex flex-col w-full space-y-2 items-center">
                <h1 className="font-Poppins-Medium text-xl text-neutras-100">Treino</h1>
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
            <div className="flex flex-col space-y-4 w-full items-center mt-4">
                <div className="w-4/5 px-3 py-2 text-center font-poppins font-bold text-gray-500 rounded-sm border border-black/20 shadow shadow-black/20">
                    {data.dataTraining?.nome}
                </div>

                <div className="flex flex-col space-y-2 w-4/5 font-poppins font-bold text-black/90 text-sm">
                    <h1>Partes afetadas:</h1>
                    <div className="w-full px-3 py-1 text-center font-poppins font-bold text-gray-500 rounded-sm border border-black/20 shadow shadow-black/20 text-sm">
                        {data.dataTraining?.foco_corpo}
                    </div>
                </div>

                <div className="flex flex-col space-y-2 w-4/5 font-poppins font-bold text-black/90 text-sm">
                    <h1>Descrição:</h1>
                    <div className="w-full h-20 px-3 py-1 text-center font-poppins font-bold text-gray-500 rounded-sm border border-black/20 shadow shadow-black/20 text-sm break-words">
                        {data.dataTraining?.descricao.length > 50 ? data.dataTraining.descricao.slice(0,50) + '...' : data.dataTraining.descricao}
                    </div>
                </div>
            </div>
        </div>
    )
}