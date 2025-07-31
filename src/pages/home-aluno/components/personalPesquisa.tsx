import type { personalPesquisaDTO } from "@/dto/data-personal";

export function PersonalPesquisa(personal: personalPesquisaDTO) {

    const telefone = personal?.telefone?.replace(/\D/g, "");
    const mensagem = "Olá, tenho em interese em contrata-lo como meu personal na TOPFITNESS";

  return (
    <div
      className="w-full shadow-xl shadow-verde-200/5
     rounded-xl h-28 p-2 px-4 border border-neutras-200/20 bg-verde-600 flex flex-row items-center justify-between"
    >
      <div className=" flex flex-row gap-2">
        <div
          className="h-16 w-16 rounded-full bg-verde-100"
          style={{ backgroundImage: `url(#)` }}
        ></div>

        <div className="flex flex-col h-16 items-start justify-center">
 { /*       <h1 className="text-verde-200 text-xl font-Poppins-Bold w-full">
            {" "}
            R$ {personal.preco}
          </h1>*/}
          <h1 className="text-verde-200 text-xl font-Poppins-SemiBold w-full">
            {" "}
            {personal.nome} {personal.sobrenome}
          </h1>
          <h1 className=" text-verde-200 text-sm font-Poppins w-full mt-2">
            {" "}
            {personal.email}
          </h1>
          <h1 className=" text-verde-200 text-sm font-Poppins w-full">
            {" "}
            {personal.telefone}
          </h1>
        </div>
      </div>
      <div className="flex gap-4">

      <a
        href={`https://wa.me/${telefone}?text=${mensagem}`}
        className={`${personal.telefone ? "" : "cursor-default bg-neutras-200"}text-base shadow-xl text-neutras-100 bg-neutras-300 duration-300 hover:bg-verde-100/50 cursor-pointer font-Poppins-Semibold  p-2 px-4 rounded-[8px]`}
      >
        Contatar
      </a>
      <button
        className={`text-base shadow-xl text-neutras-300 bg-verde-100 duration-300 hover:bg-verde-200 cursor-pointer font-Poppins-Semibold  p-2 px-4 rounded-[8px]`}
      >
        Contratar
      </button>
      </div>   
       </div>
  );
}
