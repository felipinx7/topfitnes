import { TreinoDTO } from "@/types/type-Treino";

export interface DataAlunoHome {
  id: string;
  nome?: string;
  sobrenome?: string;
  idade?: number | null;
  sexo?: string;
  email?: string;
  senha?: string;
  telefone?: string;
  foto?: string;
  peso?: number | null;
  altura?: number | null;
  treino_dias_por_semana?: number | null;
  foco_treino?: string | null;
  foco_corpo?: string | null;
  plano_id?: string;
  plano?: string;
  data_matricula?: string ;
  data_validade_plano?: string;
  dia_pagamento?: string;
  observacao?: string | null;
  criado_em?: string;
  personal_id?: string | null;
  usuario_id?: string;
  treinos_aluno?: AlunoTreino[]; 

}

export interface AlunoTreino {
  id: string;
  aluno_id: string;
  treino_id: string;
  concluido: boolean;
  treino: TreinoDTO;
  dias_semana: AlunoTreinoDiaSemana[];
}

export enum DiaSemana {
  DOMINGO = "DOMINGO",
  SEGUNDA = "SEGUNDA",
  TERCA = "TERCA",
  QUARTA = "QUARTA",
  QUINTA = "QUINTA",
  SEXTA = "SEXTA",
  SABADO = "SABADO",
}

export interface AlunoTreinoDiaSemana {
  id: string;
  alunoTreinoId: string;
  diaSemana: DiaSemana;
}

