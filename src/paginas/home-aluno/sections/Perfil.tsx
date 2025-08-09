"use client";

import { DataAlunoHome } from "@/dto/data-aluno-Home";

import { useState } from "react";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import { UpdateAluno } from "@/services/routes/aluno/updateAluno";

type props = {
  aluno: DataAlunoHome | undefined;
};

export function PerfilSection({ aluno }: props) {
  const [frontFoto, setFrontFoto] = useState(BaseUrlFoto(aluno?.foto));
 // const [foto, setFoto] = useState<File>()

 /* function FilePicker(e: any) {
    let file: File = e.target.files[0];
    if (!file) return;
    let foto = URL.createObjectURL(file);
    setFoto(file)
    setFrontFoto(foto);
    console.log(foto);
  }*/

 /*   function Submitando(e:any , id: any){
        e.preventDefault();

      UpdateAluno(e, id, foto)

    }*/

    
  return (
    <div className="w-full h-full flex flex-col  overflow-x-hidden ">
      <form
      // onSubmit={(e)=> Submitando(e, aluno?.id)}
        className="w-full max-lg:mb-20 h-full flex flex-col gap-8 overflow-y-scroll  text-xl p-8 px-12 text-neutras-100"
        method="POST"
      >
        <h1 className="font-Poppins-Bold">Meu perfil</h1>

        {/*Amostral Info */}

        <div className="w-full max-md:px-12 max-md:h-fit max-md:flex-col max-md:items-center p-4 h-36 bg-white shadow-2xl flex flex-row gap-4 shadow-neutras-100/10  rounded-2xl border-2 border-neutras-100/10">
          <div
            className=" h-28 w-28 aspect-square rounded-full bg-neutras-200/20"
            style={{
              backgroundImage: `url(${frontFoto})`,
              backgroundSize: "cover",
            }}
          >
            {" "}
            {/*<input
              onChange={(e) => FilePicker(e)}
              name="foto"
              className="w-full cursor-pointer rounded-full h-full opacity-0"
              type="file"
            />*/}
          </div>
          <div className="h-30 w-30 flex flex-col justify-center items-start text-xl max-md:items-center  text-verde-200">
            <h1 className="text-xl font-Poppins-Semibold wrap-normal whitespace-nowrap max-md:text-center">
              {aluno?.nome} {aluno?.sobrenome}
            </h1>
            <h1 className="text-sm font-Poppins mb-4 max-md:text-center">Aluno</h1>

            <h1 className="text-sm font-Poppins max-md:text-center">{aluno?.email}</h1>
            <h1 className="text-sm font-Poppins max-md:text-center">{aluno?.telefone}</h1>
          </div>
        </div>

        {/*Pessoal Info */}

        <h1 className="font-Poppins-Bold">Informações Pessoais</h1>

        <div className="w-full p-4 bg-white shadow-2xl text-neutras-200 grid grid-cols-2 max-lg:grid-cols-1 gap-4 shadow-neutras-100/10  rounded-2xl border-2 border-neutras-100/10">
          <label
            htmlFor="email"
            className="w-full wrap-normal whitespace-nowrap border-2 h-10 rounded-lg col-span-2 text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            E-mail
            <input
              placeholder={aluno?.email}
              type="text"
              readOnly
              name="email"
              className="w-full px-2 flex items-end h-full text-base outline-0"
            />
          </label>

          <label
            htmlFor="telefone"
            className="w-full wrap-normal whitespace-nowrap border-2 max-lg:col-span-2  h-10 rounded-lg col-span-2 text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Telefone:
            <input
            readOnly
              placeholder={aluno?.telefone}
              type="tel"
              pattern="\(\d{2}\)\s?\d{5}-\d{4}"
              name="telefone"
              className="w-full px-2 flex items-end h-full text-base outline-0"
            />
          </label>

          <label
            htmlFor="nome"
            className="w-full wrap-normal whitespace-nowrap border-2 h-10 max-lg:col-span-2 rounded-lg col-span-1w text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Nome:
            <input
            readOnly
              placeholder={aluno?.nome}
              type="tel"
              pattern="\(\d{2}\)\s?\d{5}-\d{4}"
              name="nome"
              className="w-full px-2 flex items-end h-full text-base outline-0"
            />
          </label>

          <label
            htmlFor="sobrenome"
            className="w-full wrap-normal whitespace-nowrap border-2 max-lg:col-span-2 h-10 rounded-lg col-span-1w text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Sobrenome:
            <input
            readOnly
              placeholder={aluno?.sobrenome}
              type="tel"
              pattern="\(\d{2}\)\s?\d{5}-\d{4}"
              name="sobrenome"
              className="w-full px-2 flex items-end h-full text-base outline-0"
            />
          </label>

          <label
            htmlFor="idade"
            className="w-full wrap-normal whitespace-nowrap border-2 h-10 max-lg:col-span-2 rounded-lg col-span-1 text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Idade:
            <input
            readOnly
              placeholder={aluno?.idade?.toString()}
              type="number"
              name="idade"
              className="w-full px-2 flex items-end h-full text-base outline-0"
            />
          </label>

          <label
            htmlFor="sexo"
            className="w-full wrap-normal whitespace-nowrap border-2 max-lg:col-span-2 h-10 rounded-lg col-span-1w text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Sexo:
            <select
            disabled
              name="sexo"
              className="w-full relative px-2 flex items-start appearance-none text-neutras-200 h-full text-base outline-0 border-0 rounded-2xl bg-white"
              defaultValue={aluno?.sexo || ""}
            >
              <option
                className="border-1 border-neutras-100/30  rounded-t-xl appearance-none"
                value="MASCULINO"
              >
                Masculino
              </option>
              <option
                className="border-1 border-neutras-100/30 rounded-xl appearance-none"
                value="FEMININO"
              >
                Feminino
              </option>
              <option
                className="border-1 border-neutras-100/30 rounded-t-xl appearance-none"
                value="PREFIRO_NAO_DIZER"
              >
                Prefiro não dizer
              </option>
            </select>
            
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutras-300">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="20"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </label>
        </div>

        {/*Tecnicas Info */}

        <h1 className="font-Poppins-Bold">
          Informações Fisicas e sobre Treino
        </h1>

        <div className="w-full p-4 bg-white shadow-2xl text-neutras-200 grid grid-cols-2 gap-4 shadow-neutras-100/10  rounded-2xl border-2 border-neutras-100/10">
          <label
            htmlFor="foco_corpo"
            className="w-full wrap-normal  whitespace-nowrap border-2 h-10 rounded-lg col-span-2 text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Grupo Muscular Alvo:
            <select
            disabled
              name="foco_corpo"
              className="w-full relative px-2 flex items-start max-lg:col-span-2 appearance-none text-neutras-200 h-full text-base outline-0 border-0 rounded-2xl bg-white"
              defaultValue={aluno?.foco_corpo}
            >
              <option
                className="border-1 border-neutras-100/30  rounded-t-xl appearance-none"
                value="PEITO"
              >
                Peito
              </option>
              <option
                className="border-1 border-neutras-100/30 rounded-xl appearance-none"
                value="BRACOS"
              >
                Braços
              </option>
              <option
                className="border-1 border-neutras-100/30 rounded-t-xl appearance-none"
                value="COSTAS"
              >
                Costas
              </option>
              <option
                className="border-1 border-neutras-100/30 rounded-t-xl appearance-none"
                value="PERNAS"
              >
                Pernas
              </option>
              <option
                className="border-1 border-neutras-100/30 rounded-t-xl appearance-none"
                value="GLUTEOS"
              >
                Gluteos
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutras-300">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="20"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </label>





          <label
            htmlFor="altura"
            className="w-full wrap-normal whitespace-nowrap max-lg:col-span-2 border-2 h-10 rounded-lg col-span-1w text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Altura(cm):
            <input
            readOnly
              placeholder={aluno?.altura?.toString()}
              type="number"
              name="altura"
              className="w-full px-2 flex items-end h-full text-base outline-0"
            />
          </label>

          <label
            htmlFor="peso"
            className="w-full wrap-normal whitespace-nowrap  max-lg:col-span-2 border-2 h-10 rounded-lg col-span-1w text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Peso(kg):
            <input
            readOnly
              placeholder={aluno?.peso?.toString() + "kg"}
              type="number"
              name="peso"
              className="w-full px-2 flex items-end h-full text-base outline-0"
            />
          </label>

          <label
            htmlFor="foco_treino"
            className="w-full wrap-normal whitespace-nowrap max-lg:col-span-2 border-2 h-10 rounded-lg col-span-1 text-base flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Foco do Treino:
            <select
            disabled
              name="foco_treino"
              className="w-full relative px-2 flex items-start appearance-none text-neutras-200 h-full text-base outline-0 border-0 rounded-2xl bg-white"
              defaultValue={aluno?.foco_treino }
            >

              <option value="PERDER_PESO">Perder peso</option>
              <option value="GANHAR_MASSA">Ganhar massa</option>
              <option value="MANTER_A_FORMA">Manter a forma</option>
            </select>
          </label>

                    <label
            htmlFor="treino_dias_por_semana"
            className="w-full wrap-normal whitespace-nowrap border-2 max-lg:col-span-2 h-10 rounded-lg col-span-1w text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Meta Semanal:
            <input
            readOnly
              placeholder={aluno?.treino_dias_por_semana?.toString() + "Dias"}
              type="number"
              name="treino_dias_por_semana"
              className="w-full px-2 flex items-end h-full text-base outline-0"
            />
          </label>

                            <label
            htmlFor="observacao"
            className="w-full wrap-normal whitespace-nowrap col-span-2 border-2 h-30 rounded-lg col-span-1w text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Observações:
            <textarea
            readOnly
              placeholder={aluno?.observacao}
              name="observacao"
              className="w-full px-2 flex items-end h-full text-base outline-0"
            />
          </label>
        </div>
 {/*     <div className="w-full items-center justify-center flex">
                  <button type="submit" className="p-2 px-8 rounded-xl bg-verde-100 h-12 text-xl text-white font-Poppins-Semibold min-w-fit">Salvar Alterações</button>

        </div>*/}



      </form>
    </div>
  );
}
