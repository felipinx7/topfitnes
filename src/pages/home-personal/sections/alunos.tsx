'use client'
import { useEffect, useState } from "react"
import { Search } from "../components/search"
import { getAlunos } from "@/services/routes/personal/getAlunos"
import { AlunoComponent } from "../components/alunoComponent"
import { AlunoPersonalDTO } from "@/schemas/schema-aluno-personal"
import { ModalSeeAluno } from "../modals/alunos/modalSeeAluno"


export function Alunos({ personal }: any) {
    // Array dos alunos
    const [alunos, setAlunos] = useState<AlunoPersonalDTO[]>([]);
    const [alunoToEdit, setAlunoToEdit] = useState<AlunoPersonalDTO | null>(null);
    const [visibleModalSeeAluno, setVisibleModalSeeAluno] = useState(false)

    // SearchTerm
    const [searchTerm, setSearchTerm] = useState("");
    const filteredAlunos = alunos?.filter(t => t.nome?.toLowerCase().includes(searchTerm.toLowerCase()))


    useEffect(() => {
        async function getAllAlunos() {
            const alunos = await getAlunos();
            setAlunos(alunos)
        }

        getAllAlunos();
    }, []);

    return (
        <div className="w-full h-full flex-col p-8 flex items-center">
            <Search onChange={setSearchTerm} value={searchTerm} />

            <div className="flex w-full flex-col space-y-3 mt-3 overflow-y-auto">
                {filteredAlunos?.map((item, idx) => (
                    <AlunoComponent
                        see={() => {
                            setAlunoToEdit(item)
                            setVisibleModalSeeAluno(prev => !prev)
                        }}

                        key={item.id ? item.id.toString() : idx}
                        nomeAluno={item.nome}
                        foto={item.foto} />
                ))}
            </div>


            <ModalSeeAluno
                open={visibleModalSeeAluno}
                close={() => setVisibleModalSeeAluno(prev => !prev)}
                dataAluno={alunoToEdit}
            />
        </div>
    )
}