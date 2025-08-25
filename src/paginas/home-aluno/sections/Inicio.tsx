import Logo from "../../../assets/image/logo-topfitens.svg";
import Running from "../../../assets/image/Homen-Correndo.png";
import Aparelho from "../../../assets/image/Aparelho.png";

import { IconeCalendario } from "@/assets/icons/icone-calendario";
import { IconePerigo } from "@/assets/icons/icone-perigo";

import { DadosComponent } from "../components/Dados";
import { formatarDataISO } from "@/utils/formatar-data";

import { format } from "date-fns";
import { ptBR, te } from "date-fns/locale";
import Image from "next/image";
import { qrcode } from "@/assets/image";
import { IconCopyFalse } from "@/assets/icons/icon-copy-false";
import { IconCopyTrue } from "@/assets/icons/icon-copy-true";
import { useState } from "react";
import { toast } from "react-toastify";

type props = {
  date?: string;
};

export function Inicio({ date }: props) {
  const data = date ? new Date(date) : new Date();
  const hoje = new Date();
  const [copy, setCopy] = useState(false);

  // Formata a data para o padrão brasileiro
  const vencimento = format(data, "dd/MM/yyyy", { locale: ptBR });

  // Corrige o cálculo da diferença em dias
  const diffEmMs = data.getTime() - hoje.getTime();
  const faltamDias = Math.ceil(diffEmMs / (1000 * 60 * 60 * 24));

  // Funções utilizadas no componente
  function copyText() {
    const text = document.getElementById("texto-pix")?.textContent || ""

    console.log(text);
    

    navigator.clipboard.writeText(text).then(() => {
      setCopy(true)
      toast.success("Pix copiado com sucesso")
    }).catch(() => {
      setCopy(false)
      toast.error("Error ao copiar o texto")
    })

    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }

  console.log(`Vencimento: ${vencimento}`);
  console.log(`Faltam ${faltamDias} dias`);

  return (
    <div className="w-full h-full overflow-y-auto flex-col p-8">
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
          <img
            src={Running.src}
            alt="Homem Correndo"
            className="h-full max-xl:h-2/3 max-lg:h-2/3 aspect-square "
          />
          <img
            src={Aparelho.src}
            alt=" Aparelho"
            className="h-full max-xl:h-2/3  max-lg:hidden max-md:h-2/3"
          />
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

          {faltamDias < 8 ? (
            <DadosComponent
              icon={<IconePerigo />}
              titulo={`Faltam ${faltamDias} dias para seu plano expirar`}
              valor=""
            ></DadosComponent>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex flex-col pb-10 mt-4 gap-3">
        <h1 className="w-full text-xl text-verde-200 font-Poppins-Medium px-1">
          Qrcode para o pagamento do seu plano
        </h1>
        <Image src={qrcode} width={150} alt="qrcode de pagameto" />
        <div className="border w-[30%] max-lg:w-full mb-10 border-verde-100 h-10 flex items-center px-2 justify-between rounded-sm">
          <h3 className="text-verde-400 text-[0.9rem] font-Poppins-Medium">
            PIX: <span id="texto-pix" className="text-pix">39743243801</span>
          </h3>
          <div
            className="cursor-pointer transition-all ease-in-out duration-50"
            onClick={copyText}
          >
            {copy ? (
              <IconCopyTrue className="text-verde-100" />
            ) : (
              <IconCopyFalse className="text-verde-100" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
