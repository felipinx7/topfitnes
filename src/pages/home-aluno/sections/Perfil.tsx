"use client";

import { DataAlunoHome } from "@/dto/data-aluno-Home";
import InputMask from 'react-input-mask';

import { useState } from "react";

type props = {
  aluno: DataAlunoHome | undefined;
};

export function PerfilSection({ aluno }: props) {
  const [frontFoto, setFrontFoto] = useState(aluno?.foto);

  function FilePicker(e: any) {
    let file: File = e.target.files[0];
    if (!file) return;
    let foto = URL.createObjectURL(file);
    setFrontFoto(foto);
    console.log(foto);
  }

  return (
    <div className="w-full h-full flex flex-col  overflow-x-hidden ">
      <form
        className="w-full h-full flex flex-col gap-8 overflow-y-scroll  text-xl p-8 px-12 text-neutras-100"
        method="POST"
      >
        <h1 className="font-Poppins-Bold">Meu perfil</h1>

        <div className="w-full max-md:h-fit max-md:flex-col p-4 h-36 bg-white shadow-2xl flex flex-row gap-4 shadow-neutras-100/10  rounded-2xl border-2 border-neutras-100/10">
          <div
            className="h-full aspect-square rounded-full bg-neutras-200/20"
            style={{
              backgroundImage: `url(${frontFoto})`,
              backgroundSize: "cover",
            }}
          >
            {" "}
            <input
              onChange={(e) => FilePicker(e)}
              className="w-full cursor-pointer rounded-full h-full opacity-0"
              type="file"
            />
          </div>
          <div className="h-30 w-30 flex flex-col justify-center items-start text-xl max-md:items-center  text-verde-200">
            <h1 className="text-xl font-Poppins-Semibold">
              {aluno?.nome} {aluno?.sobrenome}
            </h1>
            <h1 className="text-sm font-Poppins mb-4">Aluno</h1>

            <h1 className="text-sm font-Poppins w-full">{aluno?.email}</h1>
            <h1 className="text-sm font-Poppins w-full">{aluno?.telefone}</h1>
          </div>
        </div>

        <h1 className="font-Poppins-Bold">Informações Pessoais</h1>

        <div className="w-full p-4 bg-white shadow-2xl text-neutras-200 grid grid-cols-2 gap-4 shadow-neutras-100/10  rounded-2xl border-2 border-neutras-100/10">
          <label
            htmlFor="email"
            className="w-full wrap-normal whitespace-nowrap border-2 h-10 rounded-lg col-span-2 text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            E-mail
            <input
              placeholder={aluno?.email}
              type="text"
              name="email"
              className="w-full px-2 flex items-end h-full text-base outline-0"
            />
          </label>

          <label
            htmlFor="telefone"
            className="w-full wrap-normal whitespace-nowrap border-2 h-10 rounded-lg col-span-2 text-base  flex flex-row font-Poppins-Medium p-2 border-neutras-200/20"
          >
            Telefone:
            <input
              placeholder={aluno?.telefone}
              type="tel"
            pattern="\(\d{2}\)\s?\d{5}-\d{4}"

              name="telefone"
              className="w-full px-2 flex items-end h-full text-base outline-0"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
