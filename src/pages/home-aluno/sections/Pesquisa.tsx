'use client'

import { TreinoDTO } from "@/types/type-Treino";

import { IconePesquisar } from "@/assets/icons/icone-pesquisar";

import { PersonalPesquisa } from "../components/personalPesquisa";
import { useState } from "react";
import { personalPesquisaDTO } from "@/dto/data-personal";

export function PesquisaPersonais() {

const personais = [
  {
    nome: "Ana Souza",
    preco: 120,
    email: "ana.souza@example.com",
    telefone: "(11) 91234-5678",
  },
  {
    nome: "Carlos Silva",
    preco: 150,
    email: "carlos.silva@example.com",
    telefone: "(21) 99876-5432",
  },
    {
    nome: "Carlos Silva",
    preco: 150,
    email: "carlos.silva@example.com",
    telefone: "(21) 99876-5432",
  },
    {
    nome: "Carlos Silva",
    preco: 150,
    email: "carlos.silva@example.com",
    telefone: "(21) 99876-5432",
  },
    {
    nome: "Carlos Silva",
    preco: 150,
    email: "carlos.silva@example.com",
    telefone: "(21) 99876-5432",
  },
    {
    nome: "Carlos Silva",
    preco: 150,
    email: "carlos.silva@example.com",
    telefone: "(21) 99876-5432",
  },
  {
    nome: "Fernanda Lima",
    preco: 100,
    email: "fernanda.lima@example.com",
    telefone: "(31) 98765-4321",
  },
  {
    nome: "João Pereira",
    preco: 130,
    email: "joao.pereira@example.com",
    telefone: "(41) 97654-3210",
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
            Personais disponíveis{" "}
          </h1>
        </div>
      </div>
      {/*Treinos */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden grid pb-40 grid-cols-1 gap-4 relative place-content-start pt-4 place-items-center">
        {personais.map((personal : personalPesquisaDTO) => (
          <PersonalPesquisa
               {...personal}
          ></PersonalPesquisa>
        ))}


      </div>
              <div className="w-full h-24 bg-gradient-to-t from-white from-40% to-transparent absolute bottom-0"></div>

    </div>
  );
}
