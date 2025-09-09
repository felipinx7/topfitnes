"use client";
import { useEffect, useState } from "react";
import { Search } from "../components/search";
import { getAlunos } from "@/services/routes/personal/getAlunos";
import { AlunoComponent } from "../components/alunoComponent";
import { AlunoPersonalDTO } from "@/schemas/schema-aluno-personal";
import { ModalSeeAluno } from "../modals/alunos/modalSeeAluno";
import { ModalCreateAluno } from "../modals/alunos/modalCreateAluno";
import { ModalUpdateAluno } from "../modals/alunos/modalUpdateAluno";
import { ModalDeleteAluno } from "../modals/alunos/modalDeleteAluno";
import { ModalConnectTreinoAluno } from "../modals/alunos/modalConnectAluno";
import { ModalMenuAluno } from "../modals/alunos/modalMenuAluno";

export function Alunos() {
  // Array dos alunos
  const [alunos, setAlunos] = useState<AlunoPersonalDTO[]>([]);
  const [alunoToEdit, setAlunoToEdit] = useState<AlunoPersonalDTO | null>(null);

  const [visibleModalSeeAluno, setVisibleModalSeeAluno] = useState(false);
  const [visibleModalCreate, setVisibleModalCreate] = useState(false)
  const [visibleModalUpdate, setVisibleModalUpdate] = useState(false)
  const [visibleModalDelete, setVisibleModalDelete] = useState(false)
  const [visibleModalConnect, setVisibleModalConnect] = useState(false)
  const [visibleModalMenu, setVisibleModalMenu] = useState(false)

  // SearchTerm
  const [searchTerm, setSearchTerm] = useState("");
  const filteredAlunos = alunos?.filter((t) =>
    t.nome?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function createStudent(newStudent: any) {
    setAlunos((prev: any[]) => [...prev, newStudent])
  }

  function updateStudent(updateStudent: any) {
    setAlunos(prev =>
      prev.map(t =>
        t.id === alunoToEdit?.id
          ? { ...t, ...updateStudent }
          : t
      )
    );
  }


  function deleteStudent() {
    setAlunos(prev => prev.filter(t => t.usuario_id !== alunoToEdit?.usuario_id))
    setAlunoToEdit(null)
  }

  useEffect(() => {
    async function getAllAlunos() {
      const alunos = await getAlunos();
      setAlunos(alunos);
    }
    getAllAlunos();
  }, []);

  return (
    // Container main
    <div className="w-full h-full flex-col p-8 flex items-center">
      <Search onChange={setSearchTerm} value={searchTerm} />
      <div className="flex w-full h-fit justify-between mt-4 border-b-2 border-b-gray-200">
        <h1 className="text-verde-200 font-Poppins text-xl mt-1.5"> Alunos </h1>
        <button
          onClick={() => {
            setVisibleModalCreate(prev => !prev)
          }}
          className="rounded-xl flex items-center justify-center bg-verde-100 text-white hover:bg-verde-200 font-Poppins-Bold py-1 px-2 text-md duration-500 cursor-pointer mb-1.5">
          + Novo Alunos
        </button>
      </div>
      {/* container of renderization cards */}
      <div className="flex w-full flex-col space-y-3 mt-3 overflow-y-auto">
        {filteredAlunos?.map((item, idx) => (
          // Card aluno
          <AlunoComponent
            see={() => {
              setAlunoToEdit(item);
              setVisibleModalSeeAluno((prev) => !prev);
            }}
            delete={() => {
              setAlunoToEdit(item)
              setVisibleModalDelete(prev => !prev)
            }}
            update={() => {
              setAlunoToEdit(item);
              setVisibleModalUpdate(prev => !prev)
            }}
            menuTraining={() => {
              setAlunoToEdit(item);
              setVisibleModalMenu(prev => !prev)
            }}
            connect={() => {
              setAlunoToEdit(item);
              setVisibleModalConnect(prev => !prev)
            }}
            emailAluno={item.email}
            telefoneAluno={item.telefone}
            sexoAluno={item.sexo || ""}
            key={item.id ? item.id.toString() : idx}
            nomeAluno={item.nome || ""}
            foto={item.foto ?? ""}
          />
        ))}
      </div>
      <div className="h-32 w-full lg:hidden"></div>
      {/* Modal information of alunos  */}
      <ModalSeeAluno
        open={visibleModalSeeAluno}
        close={() => setVisibleModalSeeAluno((prev) => !prev)}
        dataAluno={alunoToEdit}
      />

      <ModalCreateAluno
        open={visibleModalCreate}
        close={() => setVisibleModalCreate(prev => !prev)}
        create={createStudent}
      />

      <ModalUpdateAluno
        open={visibleModalUpdate}
        close={() => setVisibleModalUpdate(prev => !prev)}
        update={updateStudent}
        aluno={alunoToEdit}
      />

      <ModalDeleteAluno
        open={visibleModalDelete}
        close={() => setVisibleModalDelete(prev => !prev)}
        onDelete={deleteStudent}
        aluno={alunoToEdit}
      />

      <ModalConnectTreinoAluno
        open={visibleModalConnect}
        close={() => setVisibleModalConnect(prev => !prev)}
        aluno={alunoToEdit}
      />

      <ModalMenuAluno 
        open={visibleModalMenu}
        close={() => setVisibleModalMenu(prev => !prev)}
        setAlunoEdit={setAlunoToEdit}
        dataAluno={alunoToEdit}
        setVisibleModalConectarAluno={() => setVisibleModalConnect(prev => !prev)}
        setVisibleModalDelete={() => setVisibleModalDelete(prev => !prev)}
        setVisibleModalSeeAluno={() => setVisibleModalSeeAluno((prev) => !prev)}
        setVisibleModalUpdateAluno={() => setVisibleModalUpdate(prev => !prev)}
      />
     <div className="bg-neutral-50 h-20 w-20 max-md:h-12 max-md:w-12 max-xl:hidden"></div>
    </div>
  );
}
