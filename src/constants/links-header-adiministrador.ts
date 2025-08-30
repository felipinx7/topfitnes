import { IconeCliente } from "@/assets/icons/icone-cliente";
import { IconeHomenManobra } from "@/assets/icons/icone-homen-manobra";
import { IconInicio } from "@/assets/icons/icone-inicio";
import { IconeRauioPreto } from "@/assets/icons/icone-raio-preto";
import { IconeSair } from "@/assets/icons/icone-sair";
import { IconeSino } from "@/assets/icons/icone-sino";

export const linksHeaderAdministrador = [
  {
    id: "inicio",
    nome: "Início",
    Icone: IconInicio,
  },
  {
    id: "personal",
    nome: "Personal",
    Icone: IconeRauioPreto,
  },
  {
    id: "clientes",
    nome: "Clientes",
    Icone: IconeCliente,
  },
  {
    id: "notificacao",
    nome: "Notificações",
    Icone: IconeSino,
  },
];
