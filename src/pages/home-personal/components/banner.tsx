import Logo from "../../../assets/image/logo-topfitens.svg";
import Running from "../../../assets/image/Homen-Correndo.png";
import Aparelho from "../../../assets/image/Aparelho.png";

export function Banner(){
    return (
              <div className="w-full h-50 flex flex-row rounded-2xl overflow-hidden">
                <div className="w-2/5 p-4 flex justify-center flex-col h-full bg-verde-500">
                  <h1 className="text-sm text-verde-200 font-Poppins-Medium">
                    TOP FITNESS
                  </h1>
                  <h1 className="text-3xl max-md:text-lg text-verde-200 font-Poppins-Bold">
                    Ola, Bem Vindo(a)!
                  </h1>
                  <h1 className="text-lg text-verde-200 max-md:text-sm font-Poppins-Semibold mt-2">
                    AO SISTEMA ONLINE DA TOPFITNESS!
                  </h1>
                </div>
        
                <div className="w-1/5 max-md:w-1/4 h-full bg-gradient-to-br from-50% to-50% from-verde-500 to-neutras-200/10 flex justify-center items-center">
                  <div
                    className="h-32 w-32  max-md:h-20 max-md:w-20 rounded-full border-8"
                    style={{
                      backgroundImage: `url(${Logo.src})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
        
                <div className="w-2/5 h-full bg-neutras-200/10 p-4 pr-8 flex flex-row gap-8 justify-end">
                  <img src={Running.src} alt="Homem Correndo" className="h-full" />
                  <img src={Aparelho.src} alt=" Aparelho" className="h-full" />
                </div>
              </div>
    )
}