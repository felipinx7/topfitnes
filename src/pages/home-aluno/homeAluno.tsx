"use client";

import { useState } from "react";

import { SideBar } from "./sections/sideBar";

import { Inicio } from "./sections/Inicio";
import { Treinos } from "./sections/Treinos";
import { PesquisaPersonais } from "./sections/Pesquisa";
import { MeuPersonal } from "./sections/MeuPersonal";

export function HomeAluno() {
  const [section, setSection] = useState(1);

  function RenderSection(section: number) {
    switch (section) {
      case 1:
        return <Inicio />;
      case 2:
        return <Treinos />;
      case 3:
        return <MeuPersonal/>;
      case 4:
        return <PesquisaPersonais/>;

    }
  }

  return (
    <main className="w-screen h-screen bg-neutras-300 relative flex overflow-hidden">
      <div className="w-1/5 min-w-[350px] h-full">
        {" "}
        <SideBar setId={setSection} id={section}></SideBar>
      </div>
      <div className="w-full h-full"> {RenderSection(section)}</div>
    </main>
  );
}
