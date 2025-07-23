'use client'

import { useState } from "react"
import { SideBar } from "./sections/sideBar"

export function HomeAluno(){
    const [section,setSection] = useState(1);
    

    return(
        <main className="w-screen h-screen bg-neutras-300 flex">
           <div className="w-1/5 h-full"> <SideBar setId={setSection} id={section} ></SideBar></div>       
        </main>
    )
}