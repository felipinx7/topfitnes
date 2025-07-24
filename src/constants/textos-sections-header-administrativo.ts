import { SectionType } from "@/types/type-section-header-administrativo";
import SectionPersonal from "@/pages/administrador/sections/section-personal";
import SectionCliente from "@/pages/administrador/sections/section-cliente";
import SectionNotificacao from "@/pages/administrador/sections/section-notificacao";
import { JSX } from "react";



export const sectionHeaderAdministrativo: Record<SectionType, JSX.Element> = {
    personal: <SectionPersonal >,
    clientes: <SectionCliente/>,
    notificacao: <SectionNotificacao />
}