import type { personalPesquisaDTO } from "@/dto/data-personal";

export function PersonalPesquisa(personal: personalPesquisaDTO) {
  return (
    <div
      className="w-full shadow-xl shadow-verde-200/5
     rounded-xl h-32 p-2 px-4 border border-neutras-200/20 bg-verde-600 flex flex-row items-center justify-between"
    >
      <div className=" flex flex-row gap-2">
        <div
          className="h-16 w-16 rounded-full bg-verde-100"
          style={{ backgroundImage: `url(#)` }}
        ></div>

        <div className="flex flex-col h-16 items-start justify-center">
          <h1 className="text-verde-200 text-xl font-Poppins-Bold w-full">
            {" "}
            R$ {personal.preco}
          </h1>
          <h1 className="text-verde-200 text-base font-Poppins-SemiBold w-full">
            {" "}
            {personal.nome}
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

      <button

        className="text-base shadow-xl text-white duration-300 hover:bg-neutras-200/30 cursor-pointer font-Poppins-Semibold bg-verde-100 p-2 px-4 rounded-[8px]"
      >
        Contatar
      </button>
    </div>
  );
}
