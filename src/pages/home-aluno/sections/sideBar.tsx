import { IconeSidebarInicio } from "@/assets/icons/icone-sidebar-inicio";
import { IconeSidebarMeusAlunos } from "@/assets/icons/icone-sidebar-meus-alunos";
import { IconeSidebarPeso } from "@/assets/icons/icone-sidebar-peso";
import { IconeSino } from "@/assets/icons/icone-sino";
import { IconePesquisar } from "@/assets/icons/icone-pesquisar";
import { IconeSair } from "@/assets/icons/icone-sair";
import { IconeAlunoPreto } from "@/assets/icons/icone-aluno-preto";

import { IconeTriangulo } from "@/assets/icons/icon-triangulo";

import { SiderBarAluno } from "@/types/type-Sidebar";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { Logout } from "@/services/routes/login/logout";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SideBar({ id, setId, aluno }: SiderBarAluno) {
  const [Options, setOptions] = useState(false);

  const router = useRouter();

  const foto = BaseUrlFoto(aluno?.foto);

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
      nome: "Meu Personal",
      icon: <IconeSidebarMeusAlunos />,
      id: 3,
    },
    {
      nome: "Personais",
      icon: <IconePesquisar />,
      id: 4,
    },
  ];

  return (
    <div className="w-full max-md:absolute max-md:bottom-0 max-md:gap-4 max-md:justify-center max-md:items-center h-full flex max-md:flex-row max-md:min-w-0 max-md:w-full max-md:h-20 flex-col min-w-[350px] justify-between bg-neutras-300 px-8 shadow-2xl shadow-neutras-100/25 font-Poppins py-8">
      <div className="w-full flex max-md:w-12 max-md:h-10 relative">
        <div
          className="w-full flex flex-row cursor-pointer items-center"
          onClick={() => setOptions((prev) => !prev)}
        >
          <div className="w-full flex flex-row">
          <div
            style={{
              backgroundImage: `url(${foto ? foto : "#"})`,
              backgroundSize: "cover",
            }}
            className="h-14 w-14 max-md:w-10 max-md:h-10 rounded-full bg-verde-100"
          ></div>
          <div className="flex flex-col justify-center items-start ml-2">
            <h1 className="text-xl max-md:hidden font-Poppins-Bold text-verde-200">
              {aluno?.nome}
            </h1>
            <h1 className="text-base max-md:hidden font-Poppins text-neutras-100">
              Aluno
            </h1>
          </div>
          </div>

          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807613 21.0711 0.807613 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807613 1.97918 0.807613 2.92893 1.3934 3.51472L10.9393 13.0607ZM12 11L10.5 11L10.5 12L12 12L13.5 12L13.5 11L12 11Z"
              fill="#057333"
            />
          </svg>
        </div>

        <div
          className={`w-full h-fit  absolute z-120   duration-300 ${
            Options
              ? "visible opacity-100 translate-y-10"
              : "invisible opacity-0 -translate-y-0 "
          } `}
        >
          <div className="w-16 h-12 flex items-end z-120 justify-center translate-y-5   ">
            {" "}
            <IconeTriangulo></IconeTriangulo>
          </div>
          <div className="w-full p-2  h-14 bg-neutras-300 rounded-lg  shadow-lg shadow-neutras-100/15">
            <div
              onClick={() => setId(5)}
              className={`text-neutras-100 items-center hover:bg-neutras-200/10 ${
                id == 5 ? "bg-verde-500 text-verde-200" : ""
              }
                 duration-300 rounded-xl w-full h-full p-2 text-xl font-Poppins-Medium flex justify-start cursor-pointer `}
            >
              <div className="h-8 w-8">
                <IconeAlunoPreto></IconeAlunoPreto>
              </div>{" "}
              <h1 className="ml-2 max-md:hidden">Perfil</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-md:flex-row justify-center items-start gap-1">
        {Botoes.map((botao) => (
          <div
            key={botao.id}
            onClick={() => setId(botao.id)}
            className={`text-neutras-100 items-center  ${
              id == botao.id
                ? "text-verde-200 bg-verde-300"
                : "hover:bg-neutras-200/10"
            } duration-300 rounded-xl w-full p-2 text-xl font-Poppins-Medium flex justify-start cursor-pointer `}
          >
            <div className="h-8 w-8">{botao.icon}</div>{" "}
            <h1 className="ml-2 max-md:hidden">{botao.nome}</h1>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          Logout();
          router.push("/");
        }}
        className="text-verde-200 max-md:w-14 max-md:h-12 max-md:p-2 max-md:text-[0px] hover:bg-verde-100/60 duration-300 bg-verde-300 cursor-pointer shadow- shadow-neutras-100/50 rounded-xl flex items-center justify-center w-full p-1"
      >
        <div className="p-1 h-8 max-md:w-8 max-md:p-0 max-md:h-6">
          <IconeSair />{" "}
        </div>{" "}
        Sair
      </button>
    </div>
  );
}
