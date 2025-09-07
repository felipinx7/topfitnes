"use client";
import { useEffect, useState } from "react";
import { Search } from "../components/search";
import { AlunoPersonalDTO } from "@/schemas/schema-aluno-personal";
import { ModalSeeAluno } from "../modals/alunos/modalSeeAluno";
import { ModalUpdateAluno } from "../modals/alunos/modalUpdateAluno";
import { ModalDeleteAluno } from "../modals/alunos/modalDeleteAluno";
import { MeusAlunosComponent } from "../components/alunoMeusTreinosComponent";
import { ModalDisconnectTreinoAluno } from "../modals/alunos/modalDisconnectAluno";
import { ModalMenuMeuAluno } from "../modals/alunos/modalMenuMeuAluno";
import { GetPersonal } from "@/services/routes/personal/getPersonal";

export function MeusAlunos(personal: any) {
  // Array dos alunos
  const [alunos, setAlunos] = useState<AlunoPersonalDTO[]>();
  const [alunoToEdit, setAlunoToEdit] = useState<AlunoPersonalDTO | null>(null);

  const [visibleModalSeeAluno, setVisibleModalSeeAluno] = useState(false);
  const [visibleModalUpdate, setVisibleModalUpdate] = useState(false)
  const [visibleModalDisconnect, setVisibleModalDisconnect] = useState(false)
  const [visibleModalMenu, setVisibleModalMenu] = useState(false)

  // SearchTerm
  const [searchTerm, setSearchTerm] = useState("");
  const filteredAlunos = alunos?.filter((t) =>
    t.nome?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function updateStudent(updateStudent: any) {
    setAlunos(prev =>
      prev?.map(t =>
        t.id === alunoToEdit?.id
          ? { ...t, ...updateStudent }
          : t
      )
    );
  }


  function deleteStudent() {
    setAlunos(prev => prev?.filter(t => t.usuario_id !== alunoToEdit?.usuario_id))
  }

  useEffect(() => {
    async function getPersonal() {
      const data = await GetPersonal();
      if (data) setAlunos(data.alunos);
    }
    getPersonal();
  }, []);

  return (
    // Container main
    <div className="w-full h-full flex-col p-8 flex items-center">
      <Search onChange={setSearchTerm} value={searchTerm} />
      {/* container of renderization cards */}
      <div className="flex w-full flex-col space-y-3 mt-3 overflow-y-auto">
        {filteredAlunos && filteredAlunos.length > 0 ? (
          filteredAlunos.map((item, idx) => (
            <MeusAlunosComponent
              key={item.id ? item.id.toString() : idx}
              see={() => {
                setAlunoToEdit(item);
                setVisibleModalSeeAluno((prev) => !prev);
              }}
              disconnect={() => {
                setAlunoToEdit(item);
                setVisibleModalDisconnect(prev => !prev);
              }}
              update={() => {
                setAlunoToEdit(item);
                setVisibleModalUpdate(prev => !prev);
              }}
              menuTraining={() => {
                setAlunoToEdit(item);
                setVisibleModalMenu(prev => !prev);
              }}
              emailAluno={item.email}
              telefoneAluno={item.telefone}
              sexoAluno={item.sexo || ""}
              nomeAluno={item.nome || ""}
              foto={item.foto}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 font-Poppins mt-4">
            Você ainda não possui alunos vinculados.
          </p>
        )}
      </div>

      <div className="h-32 w-full lg:hidden"></div>
      {/* Modal information of alunos  */}
      <ModalSeeAluno
        open={visibleModalSeeAluno}
        close={() => setVisibleModalSeeAluno((prev) => !prev)}
        dataAluno={alunoToEdit}
      />

      <ModalUpdateAluno
        open={visibleModalUpdate}
        close={() => setVisibleModalUpdate(prev => !prev)}
        update={updateStudent}
        aluno={alunoToEdit}
      />

      <ModalDisconnectTreinoAluno
        open={visibleModalDisconnect}
        close={() => setVisibleModalDisconnect(prev => !prev)}
        aluno={alunoToEdit}
        disconnect={deleteStudent}
      />

      <ModalMenuMeuAluno
        open={visibleModalMenu}
        close={() => setVisibleModalMenu(prev => !prev)}
        setAlunoEdit={setAlunoToEdit}
        dataAluno={alunoToEdit}
        setVisibleModalDesconectarAluno={() => setVisibleModalDisconnect(prev => !prev)}
        setVisibleModalSeeAluno={() => setVisibleModalSeeAluno((prev) => !prev)}
        setVisibleModalUpdateAluno={() => setVisibleModalUpdate(prev => !prev)}
      />
      <div className="bg-neutral-50 h-20 w-20 max-md:h-12 max-md:w-12 max-xl:hidden"></div>
    </div>
  );
}
