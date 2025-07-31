'use client'

import { TreinoDTO } from "@/types/type-Treino";

import { IconePesquisar } from "@/assets/icons/icone-pesquisar";

import { Treino } from "../components/Treino";
import { ModalTreino } from "../components/TreinoModal";

import { useState } from "react";
import { AlunoTreino } from "@/dto/data-aluno-Home";

type props ={
  treinos?: AlunoTreino[]
}


export function Treinos({treinos} : props) {
  const [openModal,setOpenModal] = useState(false);
  const [modalTreino,setModalTreino] = useState<TreinoDTO | undefined>()

  console.log(treinos)
  return (
    <div className="w-full h-full p-8">
      {/* Área de pesquisa*/}

      <div className="w-full flex flex-col gap-4">
        <div className="w-full relative flex items-center">
          <div className="h-7 aspect-square text-verde-200 absolute  left-3 ">
            <IconePesquisar></IconePesquisar>
          </div>
          <input
            className="w-full bg-verde-500 text-base p-3 pl-12 outline-0 text-verde-200 rounded-full placeholder:text-verde-200/70"
            placeholder="Pesquisar por nome..."
            type="text"
          />
        </div>

        <div className="w-full flex justify-between border-neutras-100/10 px-2 pb-2 border-b-2">
          <h1 className="text-lg text-verde-200 font-Poppins-Medium">
            Treinos Propostos{" "}
          </h1>
        </div>
      </div>
      {/*Treinos */}
      <div className="w-full h-full grid overflow-auto grid-cols-1 gap-4 place-content-start pt-4 place-items-center">
        {treinos?.map((treino: AlunoTreino) => (
          <Treino
            treino={treino.treino}
            OpenModal={setOpenModal}
            SetTreino={setModalTreino}
          ></Treino>
        ))}
      </div>


      <ModalTreino treino={modalTreino} OpenModal={setOpenModal} open={openModal}></ModalTreino>
    </div>
  );
}
