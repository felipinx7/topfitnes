interface ModalRelatorioProps {
  openModal: boolean;
  handleClosedModal: () => void;
}


export default function ModalRelatorio({ openModal, handleClosedModal }: ModalRelatorioProps) {
  return (
    <article
      className={`${openModal ? "visible" : "invisible"} absolute z-[9999] inset-0 top-0 bg-black/5`}
    ></article>
  );
}
