"use client";

import { useEffect, useState } from "react";
import { SideBar } from "./sections/sideBar";
import { Inicio } from "./sections/inicio";
import { Treinos } from "./sections/treinos";
import { GetPersonal } from "@/services/routes/personal/getPersonal";

export function HomePersonal() {
    const [render, setRender] = useState(1);
    const [personal, setPersonal] = useState({});

    useEffect(() => {
        async function getPersonal() {
            const data = await GetPersonal();
            if (data) setPersonal(data);
        }

        getPersonal();
    }, []);

    function renderSection(render: number) {
        if (!personal) return <div>Carregando dados do personal...</div>;
        
        switch (render) {
            case 1:
                return <Inicio data={personal} />
            case 2:
                return <Treinos/>
            case 3:
                return <div> isso ai 3</div>
            case 4:
                return <div> isso ai 4</div>
            case 5:
                return <div> isso ai 5</div>
        }
    }

    return (
        <main className="w-screen h-screen max-lg:h-[100dvh] bg-neutras-300 relative flex overflow-hidden max-md:flex-col-reverse ">
            <div className="w-1/5 min-w-[350px] h-full max-lg:absolute max-lg:w-full max-lg:h-28 max-md:h-20 z-20 max-lg:bottom-0">
                {" "}
                <SideBar setId={setRender} id={render} personal={personal}></SideBar>
            </div>
            <div className="w-full h-full"> {renderSection(render)}</div>
        </main>
    )
}