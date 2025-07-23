
import { IconeSidebarInicio } from "@/assets/icons/icone-sidebar-inicio";
import { IconeSidebarMeusAlunos } from "@/assets/icons/icone-sidebar-meus-alunos";
import { IconeSidebarPeso } from "@/assets/icons/icone-sidebar-peso";
import { IconeSino } from "@/assets/icons/icone-sino";
import { IconePesquisar } from "@/assets/icons/icone-pesquisar";
import { IconeSair } from "@/assets/icons/icone-sair";

import { SiderBar } from "@/types/type-Sidebar";

export function SideBar({id, setId}: SiderBar){

const Botoes = [
    {
        nome: "Início",
        icon: <IconeSidebarInicio/>,
        id: 1,
    },
    {
        nome: "Treinos",
        icon: <IconeSidebarPeso/>,
        id: 2,
    },

    {
        nome: "Notificações",
        icon: <IconeSino/>,
        id: 3,
    },
    {
        nome: "Meu Personal",
        icon: <IconeSidebarMeusAlunos/>,
        id: 4,
    },
    {
        nome: "Personais",
        icon: <IconePesquisar/>,
        id: 5,
    }
];


    return(
        <div className="w-full h-full flex flex-col min-w-[350px] justify-between bg-neutras-300 px-8 shadow-2xl shadow-neutras-100/25 font-Poppins py-8">
          <div className="w-full flex">

            <div style={{backgroundImage: `url(#)`, backgroundSize: "cover"}} className="h-14 w-14 rounded-full bg-verde-100"></div>
            <div className="flex flex-col justify-center items-start ml-2">
                <h1 className="text-xl font-Poppins-Bold text-verde-200">Piroco Limeiston</h1>
                <h1 className="text-base font-Poppins text-neutras-100" >Aluno</h1>
                
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-1">
           
            {Botoes.map((botao) => (
               <div onClick={() => setId(botao.id)} className={`text-neutras-100  ${id == botao.id ? "text-verde-200 bg-verde-300" : "hover:bg-neutras-200/10"} duration-300 rounded-xl w-full p-2 text-xl font-Poppins-Medium flex justify-start cursor-pointer `}>
                 <div className="h-8 w-8">{botao.icon}</div> <h1 className="ml-2">{botao.nome}</h1>
               </div>
            ))

            }

          </div>

          <button className="text-verde-200 hover:bg-verde-100/60 duration-300 bg-verde-300 cursor-pointer shadow- shadow-neutras-100/50 rounded-xl flex items-center justify-center w-full p-1">
          <div className="p-1 h-8"><IconeSair/>  </div>   Sair
          </button>

        </div>
    )
}