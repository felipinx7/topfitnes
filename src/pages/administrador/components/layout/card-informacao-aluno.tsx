import { IconeLapis } from "@/assets/icons/icone-lapis";
import { IconeLiixeira } from "@/assets/icons/icone-lixeira";
import { DataAluno } from "@/dto/data-aluno";
import ModalFormularioCardCliente from "./modal-formulario-card-cliente";
import DeleteClienteAdministrador from "@/services/routes/administrador/delete/delete-cliente-administrador";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import ModalConfirmar from "./modal-confirmar";
import { useState } from "react";
import { GetUmAluno } from "@/services/routes/administrador/get/get-apenas-um-aluno";

export default function CardInformacaoAluno(props: DataAluno) {
  const foto = BaseUrlFoto(props.foto);

  const [informacoesUsuario, setInformacoesUsuario] =
    useState<DataAluno | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false);

  function handleVisibilityModal() {
    setOpenModal((prev) => !prev);
  }

  function handleVisibilityModalConfirmation() {
    setOpenModalConfirmation((prev) => !prev);
  }

  async function handleConfirmDelete() {
    if (!props.id) return;

    try {
      // Pega os dados atualizados do aluno antes de excluir
      const alunoCompletoResponse = await GetUmAluno(props.id);
      const alunoCompleto = alunoCompletoResponse?.data as DataAluno | undefined;
      setInformacoesUsuario(alunoCompleto ?? null);

      // Exclui o aluno
      await DeleteClienteAdministrador(props.id);
      console.log("Aluno excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir o aluno:", error);
    } finally {
      handleVisibilityModalConfirmation();
    }
  }

  return (
    <article
      className={`w-full ease-in-out h-auto rounded-2xl bg-[#d8ffe2] transition-all duration-500 p-4 flex flex-col gap-0 ${openModal ? "gap-4" : "gap-0"}`}
    >
      {/* Linha principal */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[69px] h-[60px] relative">
            <img
              src={foto}
              className="rounded-full"
              alt={`Foto do usuário ${props.nome}`}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-black font-Poppins-Semibold text-[1.2rem]">
              {props.nome} {props.sobrenome}
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
          <button
            onClick={handleVisibilityModalConfirmation}
            className="group cursor-pointer hover:bg-verde-100 transition-all duration-300 rounded-[5.97px] p-2 flex items-center justify-center"
          >
            <IconeLiixeira className="text-black group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Modal de edição */}
      <ModalFormularioCardCliente
        data={props}
        OpenModal={openModal}
        handleVisibilityModal={handleVisibilityModal}
      />

      {/* Modal de confirmação da exclusão */}
      <ModalConfirmar
        isOppen={openModalConfirmation}
        handleActionComponente={async () => {
          await handleConfirmDelete()
        }}
        handleCloseModal={handleVisibilityModalConfirmation}
        text={`Você realmente deseja excluir o aluno ${props.nome}?`}
      />
    </article>
  );  
}

