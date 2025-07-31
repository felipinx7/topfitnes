"use client";

import { useEffect, useState } from "react";

import { SideBar } from "./sections/sideBar";

import { Inicio } from "./sections/Inicio";
import { Treinos } from "./sections/Treinos";
import { PesquisaPersonais } from "./sections/Pesquisa";
import { MeuPersonal } from "./sections/MeuPersonal";
import { api } from "@/config/axios.config";
import { DataAlunoHome } from "@/dto/data-aluno-Home";


import Cookies from 'js-cookie';

export function HomeAluno() {
  const [section, setSection] = useState(1);
   const token = Cookies.get('token');
   const [aluno, setAluno] = useState<DataAlunoHome | undefined>();
   


  function RenderSection(section: number) {
    switch (section) {
      case 1:
        return <Inicio date={aluno?.data_validade_plano}/>;
      case 2:
        return <Treinos treinos={aluno?.treinos_aluno} />;
      case 3:
        return <MeuPersonal/>;
      case 4:
        return <PesquisaPersonais/>;

    }
  }

 async function GetMe(){
       const res = await api.get("/student/", { withCredentials: true })
       setAluno(res.data.aluno)
       console.log(res)
  }

  useEffect(() =>{
    GetMe () 
}, [token])
  return (
    <main className="w-screen h-screen bg-neutras-300 relative flex overflow-hidden">
      <div className="w-1/5 min-w-[350px] h-full">
        {" "}
        <SideBar setId={setSection} id={section} aluno={aluno}></SideBar>
      </div>
      <div className="w-full h-full"> {RenderSection(section)}</div>
    </main>
  );
}
