'use client'
import { useState } from "react"
import { Search } from "../components/search"
import { TreinoComponent } from "../components/treinoComponent"
import { ModalCreateTreino } from "../modals/modalCreateTreino"
import { ModalUpdateTreino } from "../modals/modalUpdateTreino"
import { TrainingSchemaDTO } from "@/schemas/schema-treino"
import { ModalDeleteTreino } from "../modals/modalDeleteTreino"

export function Treinos() {
    const [visibleModalCreate, setVisibleModalCreate] = useState(false)
    const [visibleModalUpdate, setVisibleModalUpdate] = useState(false)
    const [visibleModalDelete, setVisibleModalDelete] = useState(false)

    return (
        <div className="w-full h-full flex-col p-8 flex items-center">
            <Search />
            <div className="flex w-full h-fit justify-between mt-4 border-b-2 border-b-gray-200">
                <h1 className="text-verde-200 font-Poppins text-xl mt-1.5"> Treinos Criados </h1>
                <button
                    onClick={() => setVisibleModalCreate(prev => !prev)}
                    className="rounded-xl flex items-center justify-center bg-verde-100 text-white hover:bg-verde-200 font-Poppins-Bold py-1 px-2 text-md duration-500 cursor-pointer mb-1.5">
                    + Novo Treino
                </button>
            </div>
            <div className="flex w-full flex-col space-y-3 mt-3">
                <TreinoComponent 
                    update={() => setVisibleModalUpdate(prev => !prev)}
                    delete={() => setVisibleModalDelete(prev => !prev)} />
            </div>

            <ModalCreateTreino open={visibleModalCreate} close={() => setVisibleModalCreate(prev => !prev)} />
            <ModalUpdateTreino open={visibleModalUpdate} close={() => setVisibleModalUpdate(prev => !prev)} />
            <ModalDeleteTreino open={visibleModalDelete} close={() => setVisibleModalDelete(prev => !prev)} />
        </div>
    )
}