'use client'

import { TreinoDTO } from "@/types/type-Treino";

import { IconePesquisar } from "@/assets/icons/icone-pesquisar";

import { Treino } from "../components/Treino";
import { ModalTreino } from "../components/TreinoModal";

import { useState } from "react";

export function Treinos() {
  const [openModal,setOpenModal] = useState(false);
  const [modalTreino,setModalTreino] = useState<TreinoDTO | undefined>()


  const treinos: TreinoDTO[] = [
    {
      name: "Treino de Peito e Tríceps",
      description: "Foco em hipertrofia para parte superior do corpo.",
      bodyPartsAfected: "Peito, Tríceps",
      exercises: [
        {
          name: "Supino Reto com Barra",
          reps: 10,
          series: 4,
          description:
            "Deite no banco e empurre a barra para cima com controle.",
        },
        {
          name: "Tríceps Testa",
          reps: 12,
          series: 3,
          description: "Use uma barra ou halteres para focar nos tríceps.",
        },
      ],
    },
    {
      name: "Treino de Pernas",
      description: "Foco em força e resistência para os membros inferiores.",
      bodyPartsAfected: "Pernas, Glúteos",
      exercises: [
        {
          name: "Agachamento Livre",
          reps: 8,
          series: 4,
          description: "Mantenha a postura reta e agache até 90 graus.",
        },
        {
          name: "Leg Press",
          reps: 10,
          series: 3,
          description: "Empurre a plataforma com os pés na largura dos ombros.",
        },
      ],
    },
    {
      name: "Treino de Costas e Bíceps",
      description: "Trabalho de puxada para parte posterior superior.",
      bodyPartsAfected: "Costas, Bíceps",
      exercises: [
        {
          name: "Puxada Frontal na Polia",
          reps: 12,
          series: 3,
          description: "Segure a barra com pegada aberta e puxe até o peito.",
        },
        {
          name: "Rosca Direta com Barra",
          reps: 10,
          series: 4,
          description: "Execute com controle para máxima ativação dos bíceps.",
        },
      ],
    },
  ];

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
        {treinos.map((treino: TreinoDTO) => (
          <Treino
            treino={treino}
            OpenModal={setOpenModal}
            SetTreino={setModalTreino}
          ></Treino>
        ))}
      </div>


      <ModalTreino treino={modalTreino} OpenModal={setOpenModal} open={openModal}></ModalTreino>
    </div>
  );
}
