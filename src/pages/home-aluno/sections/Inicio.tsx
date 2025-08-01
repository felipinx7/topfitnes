import Logo from "../../../assets/image/logo-topfitens.svg";
import Running from "../../../assets/image/Homen-Correndo.png";
import Aparelho from "../../../assets/image/Aparelho.png";

import { IconeCalendario } from "@/assets/icons/icone-calendario";
import { IconePerigo } from "@/assets/icons/icone-perigo";

import { DadosComponent } from "../components/Dados";
import { formatarDataISO } from "@/utils/formatar-data";


type props = {
  date?: string
}

export function Inicio( {date}: props) {

  const vencimento = formatarDataISO(date)

  const hojeString = new Date().toISOString();

  const data = date ? new Date(date) : new Date()
  const hoje = new Date(hojeString)

  const faltamDias = Math.ceil(data.getTime() - hoje.getTime() / (1000 * 60 * 60 * 24))


  return (
    <div className="w-full h-full flex-col p-8">
      {/*Banner */}
      <div className="w-full h-50 mt-8 flex flex-row rounded-2xl overflow-hidden">
        <div className="w-2/5 p-4 flex justify-center flex-col h-full bg-verde-500">
          <h1 className="text-sm max-md:text-xs text-verde-200 font-Poppins-Medium">
            TOP FITNESS
          </h1>
          <h1 className="text-3xl text-verde-200 font-Poppins-Bold max-lg:text-xl">
            Ola, Bem Vindo(a)!
          </h1>
          <h1 className="text-lg max-md:text-sm text-verde-200 font-Poppins-Semibold mt-2">
            AO SISTEMA ONLINE DA TOPFITNESS!
          </h1>
        </div>

        <div className="w-1/5 h-full bg-gradient-to-br from-50% to-50% from-verde-500 to-neutras-200/10 flex justify-center items-center">
          <div
            className="h-32 w-32 max-lg:h-16 max-lg:w-16 rounded-full border-8"
            style={{
              backgroundImage: `url(${Logo.src})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div className="w-2/5 h-full bg-neutras-200/10 p-4 pr-8 flex flex-row gap-8 items-center justify-end">
          <img src={Running.src} alt="Homem Correndo" className="h-full max-xl:h-2/3 max-lg:h-2/3 aspect-square " />
          <img src={Aparelho.src} alt=" Aparelho" className="h-full max-xl:h-2/3  max-lg:hidden max-md:h-2/3" />
        </div>
      </div>

      {/* Dados Gerais*/}
      <div className="w-full flex-col flex mt-12">
        <h1 className="w-full text-xl text-verde-200 font-Poppins-Medium px-1">
          Dados Gerais
        </h1>
        <div className="w-full p-3 border-2 border-verde-500 rounded-xl flex gap-2 flex-col">
          <DadosComponent
            titulo="Vencimento de seu plano"
            icon={<IconeCalendario />}
            valor={vencimento}
          ></DadosComponent>

         { faltamDias < 8 ?( <DadosComponent
          icon={<IconePerigo/>}
          titulo={`Faltam ${faltamDias}} dias para seu plano expirar`}
          valor="">

          </DadosComponent>) : ""
          }
        </div>
      </div>
    </div>
  );
}
