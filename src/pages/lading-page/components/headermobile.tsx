"use client";

import { IconeBarras } from "@/assets/icons/icone-barras";
import { IconeFecharBarras } from "@/assets/icons/icone-fechar-barras";
import { logo } from "@/assets/image";
import { linksHeader } from "@/constants/links-header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeaderMobile() {
  // Estado para controlar o menu toggle
  const [isMenuOpen, setisMenuOpen] = useState(false);

  //   função responsavel para alternar o menu
  const handleToggleMenu = () => {
    setisMenuOpen((prev) => !prev);
  };
  return (
    <header className="lg:hidden w-full p-4 px-6 z-100 h-[80px] flex items-center justify-between mt-4">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={70} />
      </Link>

      {/* Botão do Menu */}
      <button
        onClick={handleToggleMenu}
        aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        className="transition-all ease-in-out z-50 duration-75"
      >
        {isMenuOpen ? (
          <IconeFecharBarras className="w-10 h-10" />
        ) : (
          <IconeBarras className="w-10 h-10" />
        )}
      </button>

      {/* conteudo do menu */}
      <div
        className={`fixed w-[90%] min-h-[100vh] bg-[#0d0d0d] top-0 right-0 py-40 px-4 text-white flex flex-col items-end gap-4 z-20 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center gap-8 mb-8">
          {linksHeader.map((link) => (
            <Link
              key={link.titulo}
              href="#"
              className="relative text-white text-[1.3rem] font-[600] hover:text-[var(--verde-primario)] transition-colors"
            >
              {link.titulo}
            </Link>
          ))}
        </div>
        {/* Botões de Ação */}
        <div className="flex flex-col w-[70%] max-sm:w-full items-center gap-4">
          <button
            aria-label="Botão de Acessar o sistema"
            className="border p-4 cursor-pointer w-full rounded-[0.5rem] text-[1rem] ease-in duration-[0.3s] hover:bg-[var(--verde-primario)] font-[600] px-8 border-[var(--verde-primario)]"
          >
            ACESSAR
          </button>
          <button
            aria-label="Entrar em Contato com a Academia"
            className="cursor-pointer w-full bg-[var(--verde-primario)] p-4 rounded-[.5rem] text-[1rem] font-[600] hover:bg-[var(--hover-verde-primario)] transition-colors duration-75"
          >
            ENTRAR EM CONTATO
          </button>
        </div>
      </div>
    </header>
  );
}
