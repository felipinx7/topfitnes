'use client'
import { useEffect, useState } from "react"
import { Search } from "../components/search"
import { TreinoComponent } from "../components/treinoComponent"
import { ModalCreateTreino } from "../modals/treinos/modalCreateTreino"
import { ModalUpdateTreino } from "../modals/treinos/modalUpdateTreino"
import { TrainingSchemaDTO } from "@/schemas/schema-treino"
import { ModalDeleteTreino } from "../modals/treinos/modalDeleteTreino"
import { ModalSendTreino } from "../modals/treinos/modalSendTreino"
import { ModalSeeTreino } from "../modals/treinos/modalSeeTreino"
import { getAllTreino } from "@/services/routes/treinos/getAllTreino"


export function Treinos({ personal }: any) {
    // visialização dos modals
    const [visibleModalCreate, setVisibleModalCreate] = useState(false)
    const [visibleModalUpdate, setVisibleModalUpdate] = useState(false)
    const [visibleModalDelete, setVisibleModalDelete] = useState(false)
    const [visibleModalSendTraining, setVisibleModalSendTraining] = useState(false)
    const [visibleModalSeeTraining, setVisibleModalSeeTraining] = useState(false)

    // Array dos trainings
    const [trainings, setTrainings] = useState<TrainingSchemaDTO[]>([]);
    const [trainingToEdit, setTrainingToEdit] = useState<TrainingSchemaDTO | null>(null);

    // SearchTerm
    const [searchTerm, setSearchTerm] = useState("");
    const filteredTranings = trainings.filter(t => t.nome.toLowerCase().includes(searchTerm.toLowerCase()))

    function createTraining(newTraining: TrainingSchemaDTO) {
        setTrainings((prev: TrainingSchemaDTO[]) => [...prev, newTraining])
    }

    function updateTraining(updateTraining: TrainingSchemaDTO) {
        setTrainings(prev => prev.map(t => t.id === trainingToEdit?.id ? updateTraining : t))
    }

    function deleteTraining() {
        setTrainings(prev => prev.filter(t => t.id !== trainingToEdit?.id))
    }

    useEffect(() => {
        async function getAllTraining() {
            const trainings = await getAllTreino();
            setTrainings(trainings)
        }

        getAllTraining();
    }, []);

    return (
        <div className="w-full h-full flex-col p-8 flex items-center">
            <Search onChange={setSearchTerm} value={searchTerm} />
            <div className="flex w-full h-fit justify-between mt-4 border-b-2 border-b-gray-200">
                <h1 className="text-verde-200 font-Poppins text-xl mt-1.5"> Treinos Criados </h1>
                <button
                    onClick={() => setVisibleModalCreate(prev => !prev)}
                    className="rounded-xl flex items-center justify-center bg-verde-100 text-white hover:bg-verde-200 font-Poppins-Bold py-1 px-2 text-md duration-500 cursor-pointer mb-1.5">
                    + Novo Treino
                </button>
            </div>
            <div className="flex w-full flex-col space-y-3 mt-3 overflow-y-auto">
                {filteredTranings.map((item, idx) => (
                    <TreinoComponent
                        key={item.id ? item.id.toString() : idx}
                        update={() => {
                            setTrainingToEdit(item)
                            setVisibleModalUpdate(prev => !prev)
                        }}
                        delete={() => {
                            setTrainingToEdit(item)
                            setVisibleModalDelete(prev => !prev)
                        }}
                        send={() => {
                            setTrainingToEdit(item)
                            setVisibleModalSendTraining(prev => !prev)
                        }}
                        see={() => {
                            setTrainingToEdit(item)
                            setVisibleModalSeeTraining(prev => !prev)
                        }}
                        nomeTreino={item.nome}
                        descricaoTreino={item.descricao}
                        foto={item.foto} />
                ))}
            </div>

            <ModalCreateTreino
                open={visibleModalCreate}
                close={() => setVisibleModalCreate(prev => !prev)}
                create={createTraining}
                personal={personal}
            />
            <ModalUpdateTreino
                open={visibleModalUpdate}
                close={() => setVisibleModalUpdate(prev => !prev)}
                trainingToEdit={trainingToEdit}
                updateTreino={updateTraining}
            />

            <ModalDeleteTreino
                open={visibleModalDelete}
                close={() => setVisibleModalDelete(prev => !prev)}
                onDelete={deleteTraining}
                texto="treino"
                training={trainingToEdit}
                isPersonal={true}
            />

            <ModalSendTreino
                open={visibleModalSendTraining}
                close={() => setVisibleModalSendTraining(prev => !prev)}
            />

            <ModalSeeTreino
                open={visibleModalSeeTraining}
                close={() => setVisibleModalSeeTraining(prev => !prev)}
                dataTraining={trainingToEdit}
            />
        </div>
    )
}