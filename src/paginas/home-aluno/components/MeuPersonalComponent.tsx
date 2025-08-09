import type { personalPesquisaDTO } from "@/dto/data-personal";
import { BaseUrlFoto } from "@/utils/base-url-foto";

export function MeuPersonalComponent(personal: personalPesquisaDTO) {

    const telefone = personal?.telefone?.replace(/\D/g, "");
    const mensagem = "Olá, tenho em interese em contrata-lo como meu personal na TOPFITNESS";

    console.log(BaseUrlFoto(personal.foto))

  return (
    <div
      className="w-64 shadow-xl shadow-verde-200/5
     rounded-xl h-84 p-2 px-4 border items-center justify-center border-neutras-200/20 bg-verde-600  flex flex-row"
    >
      <div className=" flex flex-col justify-center items-center gap-2">
        <div
          className="h-32 min-w-32 min-h-32 max-md:w-32 max-md:h-32 w-32 rounded-full bg-verde-100"
          style={{ backgroundImage: `url(${BaseUrlFoto(personal.foto)})`, backgroundSize: "cover" }}
        ></div>

        <div className="flex flex-col h-16 items-center justify-center">
 { /*       <h1 className="text-verde-200 text-xl font-Poppins-Bold w-full">
            {" "}
            R$ {personal.preco}
          </h1>*/}
          <h1 className="text-verde-200 items-center flex justify-center text-center text-xl mt-4 max-md:text-base font-Poppins-Bold ">
            {" "}
            {personal.nome} {personal.sobrenome}
          </h1>
          <h1 className=" text-verde-200 items-center flex justify-center text-center text-sm max-md:text-xs font-Poppins  mt-2">
            {" "}
            {personal.email}
          </h1>
          <h1 className=" text-verde-200 items-center flex justify-center text-center text-sm max-md:text-xs font-Poppins ">
            {" "}
            {personal.telefone}
          </h1>
          
        </div>
      </div>
 
       </div>
  );
}
