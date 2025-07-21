import Fundo from "../../assets/image/Textura-quadrados.png";

export function Login() {
  return (
    <main className="w-screen h-screen flex flex-row">

      <div className="w-1/3 h-full bg-neutras-400 relative">
      {/* Tetura do fundo */}
        <div
          style={{
            backgroundImage: `url(${Fundo.src})`,
            backgroundSize: "cover",
          }}
          className="absolute inset-0 bg-cover bg-center z-0"
        >
          <div className="bg-gradient-to-tl  from-verde-100/20 absolute bottom-0 right-0 to-transparent to-50% w-2/3 h-2/3"></div>
        </div>
        
        {" "}
          <form action="" method="POST" className="w-full h-full flex-col flex items-center justify-center">

          </form>
      </div>
    </main>
  );
}
