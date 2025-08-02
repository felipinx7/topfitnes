"use client";

import { useEffect, useState } from "react";

import { SideBar } from "./sections/sideBar";

import { Inicio } from "./sections/Inicio";
import { Treinos } from "./sections/Treinos";
import { PesquisaPersonais } from "./sections/Pesquisa";
import { MeuPersonal } from "./sections/MeuPersonal";
import { api } from "@/config/axios.config";
import { DataAlunoHome } from "@/dto/data-aluno-Home";

import { GetTodosPersonais } from "@/services/routes/administrador/get/get-todos-personais";

import Cookies from "js-cookie";
import { personalPesquisaDTO } from "@/dto/data-personal";
import { PerfilSection } from "./sections/Perfil";

export function HomeAluno() {
  const [section, setSection] = useState(1);
  const token = Cookies.get("token");
  const [aluno, setAluno] = useState<DataAlunoHome | undefined>();
  const [personal, setPersonal] = useState<personalPesquisaDTO | undefined>();
  const [personais, setPersonais] = useState<personalPesquisaDTO[] | undefined>();

  function RenderSection(section: number) {
    switch (section) {
      case 1:
        return <Inicio date={aluno?.data_validade_plano} />;
      case 2:
        return <Treinos treinos={aluno?.treinos_aluno} />;
      case 3:
        return <MeuPersonal personal={personal} setId={setSection}/>;
      case 4:
        return <PesquisaPersonais personais={personais} />;
      case 5: 
        return <PerfilSection aluno={aluno}/>
    }
  }

  async function GetMe() {
    const res = await api.get("/student/", { withCredentials: true });
    setAluno(res.data.aluno);
    setPersonal(res.data.personal);
    console.log(res);
  }

  async function getPersonais() {
    const res = await GetTodosPersonais();
    setPersonais(res?.data);
  }

  useEffect(() => {
    GetMe();
    getPersonais();
  }, [token]);

  return (
    <main className="w-screen h-screen bg-neutras-300 relative flex max-md:flex-col-reverse overflow-hidden">
      <div className="w-1/5 min-w-[350px] h-full max-md:absolute max-md:w-full max-md:h-20 z-100 max-md:bottom-0 ">
        {" "}
        <SideBar setId={setSection} id={section} aluno={aluno}></SideBar>
      </div>
      <div className="w-full h-full"> {RenderSection(section)}</div>
    </main>
  );
}
