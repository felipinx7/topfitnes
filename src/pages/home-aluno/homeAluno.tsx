"use client";

import { useState } from "react";

import { SideBar } from "./sections/sideBar";

import { Inicio } from "./sections/Inicio";
import { Treinos } from "./sections/Treinos";

export function HomeAluno() {
  const [section, setSection] = useState(1);

  function RenderSection(section: number) {
    switch (section) {
      case 1:
        return <Inicio />;
      case 2:
        return <Treinos />;
      case 3:
        return <div>Seção 3</div>;
      case 4:
        return <div>Seção 4</div>;
      case 5:
        return <div>Seção 5</div>;
    }
  }

  return (
    <main className="w-screen h-screen bg-neutras-300 flex overflow-hidden">
      <div className="w-1/5 min-w-[350px] h-full">
        {" "}
        <SideBar setId={setSection} id={section}></SideBar>
      </div>
      <div className="w-full h-full"> {RenderSection(section)}</div>
    </main>
  );
}
