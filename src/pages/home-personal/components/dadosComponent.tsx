type DadosComponentProps = {
  titulo: string;
  icon: React.ReactNode;
  valor: number
};

export function DadosComponent({ titulo, icon, valor }: DadosComponentProps) {
  return (
    <div className={`w-full h-16 bg-verde-500 p-2 px-4 rounded-xl text-verde-200 font-Poppins-Semibold flex justify-between items-center`}>
      <div className="flex flex-row items-center h-full ">
        <div className={`h-9 w-9 mr-2 flex justify-center items-center`}>
             {icon}
        </div>
        <h1 className="text-base">{titulo}</h1>
      </div>
      <h1 className="font-Poppins-Semibold text-lg h-full flex items-center">{valor}</h1>
    </div>
  );
}
