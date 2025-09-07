import { IconeLapis } from "@/assets/icons/icone-lapis";
import { IconeLiixeira } from "@/assets/icons/icone-lixeira";
import { DataAluno } from "@/dto/data-aluno";
import ModalFormularioCardCliente from "./modal-formulario-card-cliente";
import DeleteClienteAdministrador from "@/services/routes/administrador/delete/delete-cliente-administrador";
import { BaseUrlFoto } from "@/utils/base-url-foto";
import ModalConfirmar from "./modal-confirmar";
import { useState } from "react";
import { GetUmAluno } from "@/services/routes/administrador/get/get-apenas-um-aluno";
import PutClientPlainADD from "@/services/routes/administrador/put/put-cliente-administrador-plainAdd";
import { formatarDataISO } from "@/utils/formatar-data";

export default function CardInformacaoAluno(props: DataAluno) {
  const [informacoesUsuario, setInformacoesUsuario] =
    useState<DataAluno | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
  const [openModalConfirmation1M, setOpenModalConfirmation1M] = useState(false);
  const [openModalConfirmation3M, setOpenModalConfirmation3M] = useState(false);
  const [openModalConfirmation6M, setOpenModalConfirmation6M] = useState(false);
  const [openModalConfirmation1Y, setOpenModalConfirmation1Y] = useState(false);

  const foto = BaseUrlFoto(props.foto || "");

  function handleVisibilityModal() {
    setOpenModal((prev) => !prev);
  }

  function handleVisibilityModalConfirmation() {
    setOpenModalConfirmation((prev) => !prev);
  }

  function handleVisibilityModalConfirmation1M() {
    setOpenModalConfirmation1M((prev) => !prev);
  }

  function handleVisibilityModalConfirmation3M() {
    setOpenModalConfirmation3M((prev) => !prev);
  }

  function handleVisibilityModalConfirmation6M() {
    setOpenModalConfirmation6M((prev) => !prev);
  }

  function handleVisibilityModalConfirmation1Y() {
    setOpenModalConfirmation1Y((prev) => !prev);
  }

  async function handleConfirmDelete() {
    if (!props.id) return;

    try {
      // Pega os dados atualizados do aluno antes de excluir
      const alunoCompletoResponse = await GetUmAluno(props.id);
      const alunoCompleto = alunoCompletoResponse?.data as
        | DataAluno
        | undefined;
      setInformacoesUsuario(alunoCompleto ?? null);

      // Exclui o aluno
      await DeleteClienteAdministrador(props.usuario_id);
      console.log("Aluno excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir o aluno:", error);
    } finally {
      handleVisibilityModalConfirmation();
    }
  }

  async function handleConfirmPlainAddition(days: number) {
    if (!props.id) return;

    try {
      await PutClientPlainADD(props.id, days, props.data_validade_plano);
      console.log(`Aluno tem mais ${days} dias de academia!`);
    } catch (error) {
      console.error("Erro ao acrescentar dias ao aluno:", error);
    } finally {
      if (days === 30) handleVisibilityModalConfirmation1M();
      if (days === 90) handleVisibilityModalConfirmation3M();
      if (days === 180) handleVisibilityModalConfirmation6M();
      if (days === 365) handleVisibilityModalConfirmation1Y();
      //
    }
  }

  function planoVencido() {
    if (!props.data_validade_plano) return false;

    const data_vecimento_plano = new Date(
      props.data_validade_plano
    ).toISOString();
    const dataHoje = new Date().toISOString();

    return dataHoje >= data_vecimento_plano;
  }

  const validadePlano = planoVencido();
  console.log("Plano vencido?", validadePlano);

  return (
    <article
      className={`w-full ease-in-out h-auto rounded-2xl ${
        validadePlano ? "bg-[#f5b7b7]" : "bg-[#d8ffe2]"
      } z-0 transition-all duration-500 p-4 flex flex-col gap-0 ${
        openModal ? "gap-4" : "gap-0"
      }`}
    >
      {/* Cointeúdo principal */}
      <div className="w-full flex max-sm:flex-col max-sm:space-y-8 max-sm:items-baseline items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[69px] overflow-hidden rounded-full h-[69px] relative">
            <img
              src={foto}
              className="rounded-full w-full  h-full object-cover"
              alt={`Foto do usuário ${props.nome}`}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-black font-Poppins-Semibold text-[1.2rem]">
              {props.nome} {props.sobrenome}
            </h4>
            <p className="text-black max-sm:text-[0.7rem]">{props.email}</p>
            <p className="text-black text-sm max-sm:text-[1rem]">Vencimento do Plano: {formatarDataISO( props.data_validade_plano)}</p>

          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="pr-3">
            <article
              className={`${
                validadePlano ? "bg-[rgba(255,76,70,0.39)]" : "bg-verde-500"
              } font-Poppins-Bold p-2 px-5 rounded-2xl text-[1rem]`}
            >
              {validadePlano ? "Inativo" : "Ativo"}
            </article>
          </div>
          {validadePlano ? (
            <div className="flex gap-2 max-lg:px-2 max-lg:hidden">
              <button
                onClick={() => handleVisibilityModalConfirmation1M()}
                className="px-3 py-2 rounded-2xl max-lg:w-full text-sm font-Poppins-Medium bg-verde-200 text-white hover:bg-verde-400"
              >
                Liberar 1 mês
              </button>
              <button
                onClick={() => handleVisibilityModalConfirmation3M()}
                className="px-3 py-2 rounded-2xl max-lg:w-full text-sm font-Poppins-Medium bg-verde-200 text-white hover:bg-verde-400"
              >
                Liberar 3 mês
              </button>
              <button
                onClick={() => handleVisibilityModalConfirmation6M()}
                className="px-3 py-2 rounded-2xl max-lg:w-full text-sm font-Poppins-Medium bg-verde-200 text-white hover:bg-verde-400"
              >
                Liberar 6 mês
              </button>
              <button
                onClick={() => handleVisibilityModalConfirmation1Y()}
                className="px-3 py-2 rounded-2xl max-lg:w-full text-sm font-Poppins-Medium bg-verde-200 text-white hover:bg-verde-400"
              >
                Liberar 1 ano
              </button>
            </div>
          ) : (
            ""
          )}

          <button
            onClick={handleVisibilityModal}
            className={`group cursor-pointer ${
              validadePlano
                ? "hover:bg-[rgba(255,76,70,0.39)]"
                : "hover:bg-verde-100"
            } transition-all duration-300 rounded-[5.97px] p-2 flex items-center justify-center`}
          >
            <IconeLapis className="text-black group-hover:text-white" />
          </button>
          <button
            onClick={handleVisibilityModalConfirmation}
            className={`group cursor-pointer ${
              validadePlano
                ? "hover:bg-[rgba(255,76,70,0.39)]"
                : "hover:bg-verde-100"
            } transition-all duration-300 rounded-[5.97px] p-2 flex items-center justify-center`}
          >
            <IconeLiixeira className="text-black group-hover:text-white" />
          </button>
        </div>

                  {validadePlano ? (
            <div className="grid grid-cols-2 gap-2 max-lg:px-2 lg:hidden ">
              <button
                onClick={() => handleVisibilityModalConfirmation1M()}
                className="px-3 py-2 rounded-2xl max-lg:w-full text-sm font-Poppins-Medium bg-verde-200 text-white hover:bg-verde-400"
              >
                Liberar 1 mês
              </button>
              <button
                onClick={() => handleVisibilityModalConfirmation3M()}
                className="px-3 py-2 rounded-2xl max-lg:w-full text-sm font-Poppins-Medium bg-verde-200 text-white hover:bg-verde-400"
              >
                Liberar 3 mês
              </button>
              <button
                onClick={() => handleVisibilityModalConfirmation6M()}
                className="px-3 py-2 rounded-2xl max-lg:w-full text-sm font-Poppins-Medium bg-verde-200 text-white hover:bg-verde-400"
              >
                Liberar 6 mês
              </button>
              <button
                onClick={() => handleVisibilityModalConfirmation1Y()}
                className="px-3 py-2 rounded-2xl max-lg:w-full text-sm font-Poppins-Medium bg-verde-200 text-white hover:bg-verde-400"
              >
                Liberar 1 ano
              </button>
            </div>
          ) : (
            ""
          )}
      </div>

      {/* Modal de edição */}
      <ModalFormularioCardCliente
        data={props}
        OpenModal={openModal}
        handleVisibilityModal={handleVisibilityModal}
      />

      <ModalConfirmar
        isOppen={openModalConfirmation1M}
        handleActionComponente={async () => {
          await handleConfirmPlainAddition(30);
        }}
        handleCloseModal={handleVisibilityModalConfirmation1M}
        text={`Você realmente deseja liberar a 1 mês de academia para o aluno ${props.nome}?`}
      />

      <ModalConfirmar
        isOppen={openModalConfirmation3M}
        handleActionComponente={async () => {
          await handleConfirmPlainAddition(90);
        }}
        handleCloseModal={handleVisibilityModalConfirmation3M}
        text={`Você realmente deseja liberar a 3 mêses de academia para o aluno ${props.nome}?`}
      />

      <ModalConfirmar
        isOppen={openModalConfirmation6M}
        handleActionComponente={async () => {
          await handleConfirmPlainAddition(180);
        }}
        handleCloseModal={handleVisibilityModalConfirmation6M}
        text={`Você realmente deseja liberar a 6 mêses de academia para o aluno ${props.nome}?`}
      />

      <ModalConfirmar
        isOppen={openModalConfirmation1Y}
        handleActionComponente={async () => {
          await handleConfirmPlainAddition(365);
        }}
        handleCloseModal={handleVisibilityModalConfirmation1Y}
        text={`Você realmente deseja liberar 1 ano de academia para o aluno ${props.nome}?`}
      />

      {/* Modal de confirmação da exclusão */}
      <ModalConfirmar
        isOppen={openModalConfirmation}
        handleActionComponente={async () => {
          await handleConfirmDelete();
        }}
        handleCloseModal={handleVisibilityModalConfirmation}
        text={`Você realmente deseja excluir o aluno ${props.nome}?`}
      />
    </article>
  );
}
