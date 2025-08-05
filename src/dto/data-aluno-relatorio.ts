export interface DataAlunoRelatorio {
  id: string;
  nome?: string;
  treino_dias_por_semana?: number;
  sobrenome?: string;
  foto?: string;
  sexo?: string;
  foco_treino?: string;
  peso?: number;
  altura?: number;
  idade?: number;
  data_matricula?: string;
  email?: string;
  senha?: string;
  telefone?: string;
  foco_corpo?: string;
  plano_id?: string;
  dia_pagamento?: string;
  usuario_id: string;
  data_validade_plano?: string;
  treinos?: {
    data: string;
    tipo_treino: string;
    nome_exercicio: string;
  }[];
}
