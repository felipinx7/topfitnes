import { Icon } from "@/types/type-icon";

export interface DataCardsLadingPage {
  titulo: string;
  subtitulo?: string;
  descricao?: string;
  icone: Icon;
  listaDescricao?: {text: string}[]
  span?: string
}
