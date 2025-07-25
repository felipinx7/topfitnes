import { avatarneutroanimado, imagefotoinput, logo } from "@/assets/image";
import { DataCardNotificao } from "@/dto/data-card-notificacao-DTO";
import Image from "next/image";

export default function CardSectionNotificacao(props: DataCardNotificao) {
  // Tratamento do numero
  const telefone = props.telefone.replace(/\D/g, "");
  const mensagem =
    "Olá! Aqui é o Jailson da academia. Vi que você teve interesse em treinar na nossa academia pelo site e quero te dar as boas-vindas. Se quiser mais informações sobre, pode perguntar — fico à disposição!";

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
          <a target="_blank" href={`https://wa.me/${telefone}?text=${mensagem}`}>conversar</a>
        </button>
      </div>
    </article>
  );
}
