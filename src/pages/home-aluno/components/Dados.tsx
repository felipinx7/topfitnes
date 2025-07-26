import type { DadosInicio } from "@/types/type-data-incio-component";


export function DadosComponent({titulo , icon , valor}: DadosInicio) {
  return (
    <div className={` ${valor == "" ? "bg-vermelho-200" : ""} w-full h-16 bg-verde-500 p-2 px-4 rounded-xl text-verde-200 font-Poppins-Semibold flex justify-between items-cente`}>
      <div className="flex flex-row items-center h-full ">
        <div className={`${valor == "" ? "text-vermelho-100 " : ""} h-9 w-9 mr-2 flex justify-center items-center`}>
             {icon}
        </div>
        <h1 className="text-base">{titulo}</h1>
      </div>
      <h1 className="font-Poppins-Semibold text-lg h-full flex items-center">{valor}</h1>
    </div>
  );
}
