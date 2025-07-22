import Fundo from "../../assets/image/Textura-quadrados.png";
import ImgLateral from  "../../assets/image/MulherPosando-Login.svg"

import { IconeCadeado } from "@/assets/icons/icone-cadeado";
import { IconeEmail } from "@/assets/icons/icone-email";
import { IconeOlhoAberto } from "@/assets/icons/icone-olho-aberto";

export function Login() {
  return (
    <main className="w-screen h-screen flex flex-row max-md:flex-col-reverse">
      {/*Principal */}

      <div className="w-2/5 max-md:shadow-2xl max-md:shadow-white/90 h-full md:min-w-xl max-md:w-full max-md:absolute max-md:bottom-0 z-100 max-md:h-3/5 max-md:rounded-t-[60px] overflow-hidden bg-neutras-400 relative">
      {/* Tetura do fundo */}
        <div
          style={{
            backgroundImage: `url(${Fundo.src})`,
            backgroundSize: "cover",
          }}
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        >
          <div className="bg-gradient-to-tl  from-verde-100/20 absolute bottom-0 right-0 to-transparent to-50% w-2/3 h-2/3"></div>
        </div>
        
        {" "}
          <form action="" method="POST" className="w-full h-full flex-col flex items-center max-md:justify-start pt-4 justify-center ">
            <div className="w-full h-fit max-md:text-2xl text-4xl flex justify-center flex-col items-center">
             <h1 className="font-Poppins  text-white z-20">Boas Vindas a</h1>
             <h1 className="font-GoldMan-Bold  text-verde-100 max-md:text-2xl  text-5xl flex relative items-center justify-center z-20">FITWAVE <div className="blur-3xl bg-verde-100/40 z-10 absolute w-full h-full"></div>
             </h1>

             <h1 className="font-Poppins text-lg max-md:text-base text-white max-md:mt-1 mt-8">Adicione seus dados abaixo</h1>

             <div className="w-full px-20 max-md:px-10 text-lg max-md:mt-6 mt-16 font-Poppins-Medium z-40 ">
              <label className="text-base flex mb-4 max-md:mb-2 flex-col relative" htmlFor="Email">E-mail <div className="absolute bottom-1 left-1"><IconeEmail></IconeEmail> </div><input type="text" className="w-full h-10 pl-10 bg-white rounded text-neutras-100 text-base"/></label>
              <label className="text-base flex flex-col relative" htmlFor="Senha">Senha <div className="absolute bottom-1 left-1"><IconeCadeado></IconeCadeado> </div> <input type="password" className="w-full h-10 pl-10 bg-white rounded text-neutras-100 text-base"/></label>

             <button type="submit" className="w-full bg mt-20 max-md:mt-12 p-1 rounded-lg cursor-pointer text-xl text-white bg-verde-100 shadow-xl shadow-verde-100/50 hover:shadow-verde-100/90 duration-300">Acessar</button>
             <h1 className="w-full text-xs text-white z-90 mt-2 relative"><h1>Ainda não tem uma conta?<strong className="text-verde-100 cursor-pointer hover:text-verde-400 duration-500">Entrar em Contato</strong> </h1></h1>
             </div>

             </div>
          </form>
      </div>

      {/*Imagem do Fundo */}
      <div className="w-3/5 h-full  max-md:w-full max-md:h-[45%] max-md:absolute max-md:top-0" style={{backgroundImage: `url(${ImgLateral.src})`, backgroundSize: "cover"}}>

      </div>
    </main>
  );
}
