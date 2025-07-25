import { IconeLapis } from "@/assets/icons/icone-lapis";
import { IconeLiixeira } from "@/assets/icons/icone-lixeira";
import { avatarneutroanimado } from "@/assets/image";
import { DataAluno } from "@/dto/data-aluno";
import Image from "next/image";
import { useState } from "react";
import ModalFormularioCardCliente from "./modal-formulario-card-cliente";
import DeleteClienteAdministrador from "@/services/routes/administrador/delete/delete-cliente-administrador";

export default function CardInformacaoAluno(props: DataAluno) {
  // Estado utilizados no componente
  const [informacoesUsuario, setInformacoesUsuario] =
    useState<DataAluno | null>(null);
  const [openModal, setOpenModal] = useState(true);

  // Funções utilizadas no componente
  function handleVisibilityModal() {
    setOpenModal((prev) => !prev);
  }

  async function deletarUsuário(id: string) {
    const response = DeleteClienteAdministrador(id);
    console.log("Excluido", response);
    return response;
  }
  return (
    // container card
    <article
      className={`w-full ease-in-out h-auto rounded-2xl bg-[#d8ffe2] transition-all duration-500 p-4 flex flex-col gap-0 ${openModal ? "gap-4" : "gap-0"}`}
    >
      {/* Linha principal: foto + nome + botões */}
      <div className="w-full ease-in-out duration-500 transition-all flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[69px] h-[60px] relative">
            <Image
              fill
              src={props.foto}
              className="rounded-full"
              alt={`Foto do usuário ${props.nome}`}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-black font-Poppins-Semibold text-[1.2rem]">
              {props.nome}
            </h4>
            <p className="text-black">{props.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleVisibilityModal}
            className="group cursor-pointer hover:bg-verde-100 transition-all duration-300 rounded-[5.97px] p-2 flex items-center justify-center"
          >
            <IconeLapis className="text-black group-hover:text-white" />
          </button>
          <button onClick={() => deletarUsuário(props.id)} className="group cursor-pointer hover:bg-verde-100 transition-all duration-300 rounded-[5.97px] p-2 flex items-center justify-center">
            <IconeLiixeira className="text-black group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Modal aparece abaixo quando ativado */}
      <ModalFormularioCardCliente
        OpenModal={openModal}
        handleVisibilityModal={handleVisibilityModal}
      />
    </article>
  );
}
