import { IconeInstagram } from "@/assets/icons/icone-instagram";
import { IconeLocalizacao } from "@/assets/icons/icone-localizacao";
import { IconeWhatsapp } from "@/assets/icons/icone-whatsapp";
import { logo } from "@/assets/image";
import Image from "next/image";
import Link from "next/link";

export default function SectionFooter() {
  return (
    <footer className="bg-[#141313] w-full px-6 py-12">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between max-md:flex-col gap-4 max-md:items-start text-white">
        {/* Sobre a Academia */}
        <div className="w-[33.33%]  max-md:w-full flex flex-col gap-4">
          <Image src={logo} width={70} alt="Logo da TopFitness" />
          <p className="font-GoldMan text-[0.7rem] leading-relaxed text-left">
            A TOPFITNES É A ACADEMIA PARA QUEM BUSCA RESULTADO MAIS RÁPIDO E
            EFICIENTE. COM UMA ESTRUTURA MODERNA E COMPLETA, OFERECE OS MELHORES
            APARELHOS TREINOS PERSONALIZADOS PARA ATENDER ÀS SUAS NECESSIDADES.
          </p>

          {/* Redes sociais */}
          <div className="flex items-center gap-4 mt-2">
            <Link
              href="https://wa.me/5588994287754?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20academia%20e%20tenho%20interesse%20em%20fazer%20parte%20dela."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:scale-110 transition-transform duration-300"
            >
              <IconeWhatsapp />
            </Link>
            <Link
              href="https://www.instagram.com/topfitnesacademiaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform duration-300"
            >
              <IconeInstagram />
            </Link>
            <Link
              href="https://www.google.com/maps/place/R.+Jos%C3%A9+Estev%C3%A3o+Vasconcelos,+386+-+Ipagua%C3%A7u,+Santana+do+Acara%C3%BA+-+CE,+62150-000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Localização"
              className="hover:scale-110 transition-transform duration-300"
            >
              <IconeLocalizacao />
            </Link>
          </div>
        </div>

        {/* Horários */}
        <div className="w-[33.33%]  max-md:w-full flex flex-col gap-2 font-GoldMan">
          <h2 className="text-lg font-bold mb-2">HORÁRIOS</h2>
          <p>Segunda à Sexta: 05:30 às 20:00</p>
          <p>Sábados: 05:30 às 20:00</p>
        </div>

        {/* Localização */}
        <div className="w-auto flex max-md:w-full  flex-col gap-2 font-GoldMan">
          <h2 className="text-lg font-bold mb-2">LOCALIZAÇÃO</h2>
          <div className="flex items-center gap-2">
            <IconeLocalizacao />
            <span>Ipaguaçu Mirim</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
