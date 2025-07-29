import { text } from "stream/consumers";

interface ModalSairProps {
  isOppen: boolean;
  handleCloseModal?: () => void
  handleActionComponente?: () => void | Promise<void>
  text: string
}

export default function ModalConfirmar({ isOppen, text, handleCloseModal, handleActionComponente }: ModalSairProps) {
  return (
    <div
      className={`${isOppen ? "flex" : "hidden"} ${isOppen ?'opacity-100 visible' : 'opacity-0 invisible'} bg-[rgba(0,0,0,0.5)] shadow-lg px-8 backdrop-blur-sm fixed top-0 left-0 transition-all duration-300 ease-in-out right-0 bottom-0 z-50 justify-center items-start py-[6rem]`}
    >
      {/* modal de sair  */}
      <article className="bg-verde-100 w-[400px] text-center h-[200px] p-4 rounded-3xl flex-col flex items-center justify-center">
          <h1 className="text-white font-Poppins-Bold leading-6 mb-4 text-[1.5rem]">
           {text}
          </h1>
          <div className="flex items-center justify-center gap-6">
            <button onClick={handleActionComponente} className="bg-verde-400 hover:scale-105 hover:shadow-md text-white p-2 px-8 rounded-2xl font-Poppins-Bold hover:bg-verde-500 transition-all duration-300 ease-in-out">
              Sim
            </button>
            <button onClick={handleCloseModal} className="bg-verde-400 hover:scale-105 hover:shadow-md text-white p-2 px-8 rounded-2xl font-Poppins-Bold transition-all duration-300 ease-in-out">
              Não
            </button>
          </div>
      </article>
    </div>
  );
}
