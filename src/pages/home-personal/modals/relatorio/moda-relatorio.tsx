import { IconeFechar } from "@/assets/icons/icone-fechar";
import { logo } from "@/assets/image";
import { DataAlunoRelatorio } from "@/dto/data-aluno-relatorio";
import { BaseUrlFoto } from "@/utils/base-url-foto";

interface ModalRelatorioProps {
  openModal: boolean;
  handleClosedModal: () => void;
  data: DataAlunoRelatorio;
}

export default function ModalRelatorio({
  openModal,
  handleClosedModal,
  data,
}: ModalRelatorioProps) {
  // variaveis e estados utilizados no componente
  //   const fotoAluno = BaseUrlFoto(data.foto);
  return (
    <section
      className={`${openModal ? "visible" : "invisible"} absolute z-[9999] flex items-center justify-center inset-0 top-0 bg-black/40`}
    >
      {/* Modal  */}
      <div
        className={`w-[60%] p-8 ${openModal ? "opacity-100 scale-100" : "opacity-0 scale-125"} ease-in-out duration-500 transition-all h-[80%] bg-white rounded-2xl`}
      >
        {/* header do modal */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[#057333] text-[1.3rem] font-Poppins-Medium">
            Dados do Aluno
          </h1>
          <div onClick={handleClosedModal}>
            <IconeFechar className="w-[40px] hover:text-verde-100 ease-in-out duration-100 cursor-pointer" />
          </div>
        </div>

        {/* container informações do usuário */}
        <div className="w-full border-1 border-[#999] p-2 rounded-[5.97px]">
          <div className="flex items-center justify-center">
            {/* container foto de perfil */}
            <div className="h-[43px] w-[43px] rounded-full">
              <img src={logo} width={200} alt={`Foto do aluno $`} />
            </div>
            {/* container informações nome e email  */}
            <div>
                <h1>Felipe Lima</h1>
                <p>femkn@@gmail.com</p>
            </div>
          </div>
        </div>

        container informações treinos
        <div></div>
      </div>
    </section>
  );
}
