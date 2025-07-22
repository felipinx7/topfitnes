import { IconeCardeno } from "@/assets/icons/icone-cardeno";
import { IconeContrato } from "@/assets/icons/icone-contrato";
import { IconeGrafico } from "@/assets/icons/icone-grafico";
import { IconeOk } from "@/assets/icons/icone-ok";
import { IconePeso } from "@/assets/icons/icone-peso";
import { IconeRelogio } from "@/assets/icons/icone-relogio";
import { IconeResultado } from "@/assets/icons/icone-resultado";
import { DataCardsLadingPage } from "@/dto/data-cards-lading-page";

export const TextosCardBeneficios: DataCardsLadingPage[] = [
  {
    icone: IconeRelogio,
    titulo: "TREINAR NO TEU",
    span: "PRÓPIO HORÁRIO",
    descricao: "Estás pronto  para começar a ver resultados reais no treino?",
  },
  {
    icone: IconePeso,
    titulo: "FLEXIBILIDADE DE",
    span: "HORÁRIO",
    descricao:
      "Flexibilidade de horários facilita a rotina, evita faltas e garante consistência nos treinos.",
  },
  {
    icone: IconeContrato,
    titulo: "SEM FIDELIZAÇÃO",
    span: "E CONTRATOS",
    descricao:
      "Serviços sem fidelização e contrato oferecem liberdade, transparência e flexibilidade para o cliente.",
  },
];

export const TextCardIdeal: DataCardsLadingPage[] = [
  {
    icone: IconeOk,
    titulo: "TREINE COMO QUISER, COM QUEM QUISER.",
  },
  {
    icone: IconeOk,
    titulo: "SEJA VOCÊ NO TREINO, SUPERE SEUS LIMITES!",
  },
  {
    icone: IconeOk,
    titulo: "AQUI VOCÊ TREINA NO SEU RITMO!",
  },
  {
    icone: IconeOk,
    titulo: "SUA LIBERDADE, SEU TREINO, SUA EVOLUÇÃO",
  },
  {
    icone: IconeOk,
    titulo: "TREINE COMO QUISER, COM QUEM QUISER.",
  },
  {
    icone: IconeOk,
    titulo: "SEJA VOCÊ NO TREINO, SUPERE SEUS LIMITES!",
  },
];

export const TextosCardPassos: DataCardsLadingPage[] = [
  {
    icone: IconeCardeno,
    subtitulo: "1° PASSO",
    titulo: "INSCRIÇÃO",
    listaDescricao: [
      { text: "ABRA O SITE OFICIAL" },
      { text: "PREENCHA O FORMULÁRIO" },
      { text: "ENVIE SEUS DADOS" },
    ],
  },
  {
    icone: IconeGrafico,
    subtitulo: "2° PASSO",
    titulo: "AVALIAÇÃO",
    listaDescricao: [
      { text: "ESCOLHA UM PLANO" },
      { text: "VERIFIQUE SEUS DADOS" },
      { text: "CONFIRME E CONCLUA TUDO" },
      { text: "AGUARDE SER ANALISADO" },
    ],
  },
  {
    icone: IconeResultado,
    subtitulo: "3° PASSO",
    titulo: "RESULTADO",
    listaDescricao: [
      { text: "MAIS FORÇA MUSCULAR" },
      { text: "MAIS RESISTÊNCIA FÍSICA" },
      { text: "DEFINIÇÃO CORPORAL" },
      { text: "BEM ESTAR GARANTIDO" },
    ],
  },
];

export const TextosCardPlanos: DataCardsLadingPage[] = [
  {
    icone: IconeCardeno,
    subtitulo: "MENSALIDADE MENSAL",
    titulo: "R$65,00",
    listaDescricao: [
      { text: "AMBIENTE MOTIVADOR" },
      { text: "RESULTADOS RÁPIDOS" },
      { text: "PREÇO ACESSÍVEL" },
    ],
  },
  {
    icone: IconeCardeno,
    subtitulo: "MENSALIDADE SEMESTRAL",
    titulo: "R$335,00",
    listaDescricao: [
      { text: "AMBIENTE MOTIVADOR" },
      { text: "RESULTADOS RÁPIDOS" },
      { text: "PREÇO ACESSÍVEL" },
    ],
  },
  {
    icone: IconeCardeno,
    subtitulo: "MENSALIDADE ANUAL",
    titulo: "R$660,00",
    listaDescricao: [
      { text: "AMBIENTE MOTIVADOR" },
      { text: "RESULTADOS RÁPIDOS" },
      { text: "PREÇO ACESSÍVEL" },
    ],
  },
];
