"use client";

import { useEffect, useState } from "react";
import { Search } from "../components/search";
import { DataAluno } from "@/dto/data-aluno";
import { CardRelatorioAluno } from "../components/card-relatorio-aluno";
import { exercitandoalunohome } from "@/assets/image";
import { GetTodosClientes } from "@/services/routes/administrador/get/get-todos-clientes";

export function Relatorio() {
  // Estados Utilizados no componente
  const [valorInput, setValorInput] = useState("");
  const [alunos, setAlunos] = useState<DataAluno[]>([]);

  // Funções utilizadas no sistema
  const alunosFiltrados = alunos?.filter(
    (aluno) =>
      aluno.nome?.toLowerCase().includes(valorInput.toLowerCase()) ||
      aluno.email?.toLowerCase().includes(valorInput.toLowerCase())
  );

  async function fetchTodosAlunos() {
    const reponse = await GetTodosClientes();
    setAlunos(reponse);
  }

  useEffect(() => {
    fetchTodosAlunos();
  }, []);

  return (
    <div className="w-full h-full flex-col p-8 flex gap-6 items-start">
      {/* Componente de pesquisa */}
      <Search onChange={setValorInput} value={valorInput} />

      {/* containers informações principais */}
      <div className="flex flex-col gap-1 w-full">
        <h1 className="text-verde-100 font-Poppins-Medium text-[1.2rem]">
          Todos os alunos
        </h1>
        <hr className="bg-verde-100 border-[0.2px] w-full border-verde-100" />
      </div>

      {/* container visualização alunos */}
      <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-start gap-4">
        {alunosFiltrados && alunosFiltrados.length > 0 ? (
          alunosFiltrados?.map((card) => (
            <CardRelatorioAluno key={card.nome} {...card} />
          ))
        ) : (
          <div className="w-full flex-col flex items-center justify-center">
            <img
              src={exercitandoalunohome.src}
              width={300}
              className="max-md:w-[200px]"
              alt="Foto de um homem exercitando"
            />
            <h1 className="text-verde-100 text-2xl text-center max-md:text-[1.2rem] font-Poppins-Medium">
              Nenhum aluno encontrado
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
