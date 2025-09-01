"use client";

import { logo } from "@/assets/image";
import { linksHeader } from "@/constants/links-header";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { autoLogin } from "@/services/routes/auto-login/autoLogin";

export default function Header() {
  const router = useRouter();

  async function handleAutoLogin() {
    try {
      const response: any = await autoLogin();
      if (!response) router.push('/login')

      const { role } = response.user
      const routes: Record<string, string> = {
        ADMINISTRADOR: '/administrador',
        PERSONAL: '/home-personal',
        ALUNO: '/home-aluno',
      }

      const route = routes[role]
      router.push(route)
    } catch (err) {
      router.push('/login')
    }
  }

  return (
    <header className="w-full cursor-pointer p-4 z-20 h-[80px] flex items-center   justify-between mt-4 max-lg:hidden">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={70} />
      </Link>
      {/* Rederização dos Links */}
      {linksHeader.map((link) => (
        <a
          key={link.titulo}
          href={link.id}
          className="relative text-white text-[1.1rem] font-[600] hover:text-verde-100 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--color-verde-100)] after:transition-all after:duration-300 hover:after:w-full"
        >
          {link.titulo}
        </a>
      ))}
      {/* Botões de Ação */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleAutoLogin()}
          aria-label="Botão de Acessar o sistema"
          className="border-1 p-2 cursor-pointer w-auto rounded-[0.5rem] text-[1rem] ease-in duration-[0.3s] hover:bg-[var(--color-verde-100)] font-[600] px-8 border-[var(--color-verde-100)]"
        >
          ACESSAR
        </button>
        <button
          aria-label="Entrar em Contato com a Academia"
          className="cursor-pointer bg-[var(--color-verde-100)] p-2 rounded-[.5rem] text-[1rem] font-[600] hover:bg-[var(--color-verde-400)] transition-colors duration-500"
        >
          <a target="_blank" href="https://wa.me/5588994287754?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20academia%20e%20tenho%20interesse%20em%20fazer%20parte%20dela.">
            ENTRAR EM CONTATO
          </a>
        </button>
      </div>
    </header>
  );
}
