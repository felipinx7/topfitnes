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
}
