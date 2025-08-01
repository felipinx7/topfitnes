'use client'

import { TreinoDTO } from "@/types/type-Treino";

import { IconePesquisar } from "@/assets/icons/icone-pesquisar";

import { PersonalPesquisa } from "../components/personalPesquisa";
import { useState } from "react";
import { personalPesquisaDTO } from "@/dto/data-personal";

import treinando from "../../../assets/image/exercitando-aluno-home.png"

type props ={
  personal: personalPesquisaDTO | undefined,
  setId: (id: number) => void;

}


export function MeuPersonal({personal,setId}: props) {



  return (
    <div className="w-full h-full p-8">
      {/* Área de pesquisa*/}

      <div className="w-full flex flex-col gap-4">


        <div className="w-full flex justify-between border-neutras-100/10 px-2 pb-2 border-b-2">
          <h1 className="text-lg text-verde-200 font-Poppins-Medium">
            Meu Personal{" "}
          </h1>
        </div>
      </div>
      {/*Treinos */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden grid pb-40 grid-cols-1 gap-4 relative place-content-start pt-4 place-items-center">
         {personal ?( <PersonalPesquisa
               {...personal}
          ></PersonalPesquisa>) 
          : (
            <div className="w-full h-full items-center flex justify-center flex-col">
              <img className="h-2/3" src={treinando.src} alt="" />
              <h1 className="text-xl text-verde-200 font-Poppins-Medium text-center mb-3">Você ainda não contratou um personal</h1>
              <button onClick={()=> setId(4)} className="p-1 rounded-lg duration-300 cursor-pointer px-8 bg-verde-100 text-white text-xl font-Poppins-Bold hover:bg-verde-400">Contratar</button>
            </div>
            
          )
         }

      </div>

    </div>
  );
}
