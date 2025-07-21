import { logo } from "@/assets/image";
import { linksHeader } from "@/constants/links-header";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-4 z-20 h-[80px] flex items-center   justify-between mt-4 max-lg:hidden">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={70} />
      </Link>
      {/* Rederização dos Links */}
      {linksHeader.map((link) => (
        <a
          key={link.titulo}
          href="#"
          className="relative text-white text-[1.1rem] font-[600] hover:text-verde-100 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--color-verde-100)] after:transition-all after:duration-300 hover:after:w-full"
        >
          {link.titulo}
        </a>
      ))}
      {/* Botões de Ação */}
      <div className="flex items-center gap-4">
        <button aria-label="Botão de Acessar o sistema" className="border-1 p-2 cursor-pointer w-auto rounded-[0.5rem] text-[1rem] ease-in duration-[0.3s] hover:bg-[var(--color-verde-100)] font-[600] px-8 border-[var(--color-verde-100)]">
          ACESSAR
        </button>
        <button aria-label="Entrar em Contato com a Academia" className="cursor-pointer bg-[var(--color-verde-100)] p-2 rounded-[.5rem] text-[1rem] font-[600] hover:bg-[var(--color-verde-400)] transition-colors duration-500">
          ENTRAR EM CONTATO
        </button>
      </div>
    </header>
  );
}
