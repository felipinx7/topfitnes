import { FocoCorpo, focoTreino, sexo } from "@/types/type-data-cliente";

export interface DataAluno {
  id: string;
  nome: string;
  treino_dias_por_semana: number;
  sobrenome: string;
  foto: string;
  sexo: sexo;
  foco_treino: focoTreino;
  peso: number;
  altura: number;
  idade: number;
  data_matricula: string;
  email: string;
  senha: string;
  telefone: string;
  foco_corpo: FocoCorpo;
  plano: string;
  data_vencimento_plano: string
}


