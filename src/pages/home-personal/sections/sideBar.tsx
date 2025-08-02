"use client"
import { IconeSidebarInicio } from "@/assets/icons/icone-sidebar-inicio";
import { IconeSidebarMeusAlunos } from "@/assets/icons/icone-sidebar-meus-alunos";
import { IconeSidebarPeso } from "@/assets/icons/icone-sidebar-peso";
import { IconeAlunoPreto } from "@/assets/icons/icone-aluno-preto";
import { IconeSair } from "@/assets/icons/icone-sair";
import { IconeSidebarRelatorio } from "@/assets/icons/icone-sidebar-relatorio";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { useEffect } from "react";
import { sideBarPersonal } from "@/types/type-sideBar-personal";
import { Logout } from "@/services/routes/login/logout";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function SideBar({ id, setId, personal }: sideBarPersonal) {
    const router = useRouter()
    const Botoes = [
        {
            nome: "Início",
            icon: <IconeSidebarInicio />,
            id: 1,
        },
        {
            nome: "Treinos",
            icon: <IconeSidebarPeso />,
            id: 2,
        },

        {
            nome: "Alunos",
            icon: <IconeAlunoPreto />,
            id: 3,
        },
        {
            nome: "Meus Alunos",
            icon: <IconeSidebarMeusAlunos />,
            id: 4,
        },
        {
            nome: "Relatório",
            icon: <IconeSidebarRelatorio />,
            id: 5
        }
    ];

    useEffect(() => {
        if (personal) {
            personal
        }
    }, [personal]);

    const photo = BaseUrlFoto(personal.foto)
    return (
        <div className={`w-full h-full flex flex-col min-w-[350px] justify-between bg-neutras-300 px-8 shadow-2xl shadow-neutras-100/25 font-Poppins py-8 max-lg:items-center max-lg:flex-row max-lg:min-w-0 max-lg:w-full max-md:h-20 max-md:justify-center`}>
            <div
            onClick={() => setId(6)} 
            className={`w-full flex max-lg:w-12 max-lg:h-14 max-md:w-12 max-md:h-10 duration-500 cursor-pointer ${id === 6 ? "text-verde-200 lg:bg-verde-300 lg:px-2 lg:py-1 rounded-xl" : ""}`}>
                <div
                    style={{ backgroundImage: `url(${photo})`, backgroundSize: "cover", backgroundPosition: 'center' }}
                    className={`h-14 w-14 max-lg:h-14 max-md:w-12 max-md:h-10 max-lg:aspect-square rounded-full bg-verde-100 max-lg:pb-1${id === 6 ? "max-lg:border-verde-200 max-lg:border-2 duration-500" : ""} `}
                ></div>
                <div className="flex flex-col justify-center items-start ml-2">
                    <h1 className="text-xl max-lg:hidden font-Poppins-Bold text-verde-200">
                        {personal.nome}
                    </h1>
                    <h1 className="text-base font-Poppins max-lg:hidden text-neutras-100">Personal</h1>
                </div>
            </div>

            <div className="flex flex-col max-lg:flex-row justify-center items-start gap-1">
                {Botoes.map((botao) => (
                    <div
                        key={botao.id}
                        onClick={() => setId(botao.id)}
                        className={`text-neutras-100  ${id == botao.id
                            ? "text-verde-200 bg-verde-300"
                            : "hover:bg-neutras-200/10"
                            } duration-300 rounded-xl w-full p-2 text-xl font-Poppins-Medium flex justify-start cursor-pointer `}
                    >
                        <div className="h-8 w-8">{botao.icon}</div>{" "}
                        <h1 className="ml-2 max-lg:hidden">{botao.nome}</h1>
                    </div>
                ))}
            </div>

            <button
                onClick={async () => {
                    router.push("/");
                    await Logout();
                }}
                className="text-verde-200 max-lg:w-14 max-lg:h-12 max-lg:p-2 max-lg:text-[0px] hover:bg-verde-100/60 duration-300 bg-verde-300 cursor-pointer shadow- shadow-neutras-100/50 rounded-xl flex items-center justify-center w-full p-1">
                <div className="p-1 h-8  max-lg:w-8 max-lg:p-0 max-lg:h-6">
                    <IconeSair />{" "}
                </div>{" "}
                Sair
            </button>
        </div>
    );
}
