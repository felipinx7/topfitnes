"use client";

import { useState } from "react";
import { SideBar } from "./sections/sideBar";
import { Inicio } from "./sections/inicio";
import { Treinos } from "./sections/treinos";

export function HomePersonal() {
    const [render, setRender] = useState(1);

    function renderSection(render: number) {
        switch (render) {
            case 1:
                return <Inicio />
            case 2:
                return <Treinos open={true} close={false}/>
            case 3:
                return <div> isso ai 3</div>
            case 4:
                return <div> isso ai 4</div>
            case 5:
                return <div> isso ai 5</div>
        }
    }

    return (
        <main className="w-screen h-screen bg-neutras-300 relative flex overflow-hidden">
            <div className="w-1/5 min-w-[350px] h-full">
                {" "}
                <SideBar setId={setRender} id={render}></SideBar>
            </div>
            <div className="w-full h-full"> {renderSection(render)}</div>
        </main>
    )
}