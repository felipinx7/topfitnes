import { avatarneutroanimado, imagefotoinput, logo } from "@/assets/image";
import { DataCardNotificao } from "@/dto/data-card-notificacao-DTO";
import Image from "next/image";

export default function CardSectionNotificacao(props: DataCardNotificao) {
  return (
    // container card section Notificação
    <article className="w-full flex items-center justify-between bg-[#D8FFE2] p-3 rounded-[0.4rem]">
      {/* container informações foto e email  */}
      <div className="flex items-start justify-start gap-4">
        {/* container Foto  */}
        <div className="w-[69px] relative h-[60px]">
          <Image
            fill
            src={avatarneutroanimado}
            className="w-[69px] h-[60px] rounded-ful"
            alt={`Foto do usuário $ {}`}
          />
        </div>
        {/* container nome e email */}
        <div className="flex flex-col items-start justify-center">
          <h4 className="text-black font-Poppins-Semibold text-[1.2rem]">
            {props.nome}
          </h4>
          <p className="text-black">{props.email}</p>
        </div>
      </div>

      {/* container botão chamar no zap  */}
      <div className="">
        <button
          type="button"
          className="bg-verde-100 cursor-pointer hover:bg-verde-400 ease-in-out duration-500 transition-all hover:scale-105  p-2 text-white font-Poppins-Semibold rounded-[10px]"
        >
          <a
            href={`https://wa.me/${props.telefone}?text=Ol%C3%A1%21%20Aqui%20%C3%A9%20o%20Jailson%20da%20academia.%20Vi%20que%20voc%C3%AA%20teve%20interesse%20em%20treinar%20na%20nossa%20academia%20pelo%20site%20e%20quero%20te%20dar%20as%20boas-vindas.%20Se%20quiser%20mais%20informa%C3%A7%C3%B5es%20sobre%2C%20pode%20perguntar%20%E2%80%94%20fico%20%C3%A0%20disposi%C3%A7%C3%A3o%21%20%F0%9F%92%AA`}
          >
            conversar
          </a>
        </button>
      </div>
    </article>
  );
}
