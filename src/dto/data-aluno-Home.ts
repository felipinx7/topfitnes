import { TreinoDTO } from "@/types/type-Treino";

export interface DataAlunoHome {
  id: string;
  nome?: string;
  sobrenome?: string;
  idade?: number ;
  sexo?: string;
  email?: string;
  senha?: string;
  telefone?: string;
  foto?: string;
  peso?: number ;
  altura?: number ;
  treino_dias_por_semana?: number;
  foco_treino?: string;
  foco_corpo?: string ;
  plano_id?: string;
  plano?: string;
  data_matricula?: string ;
  data_validade_plano?: string;
  dia_pagamento?: string;
  observacao?: string;
  criado_em?: string;
  personal_id?: string;
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

