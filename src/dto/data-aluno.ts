// enum sexo {
//   MASCULINO = "MASCULINO",
//   FEMININO = "FEMININO",
//   PREFIRO_NAO_DIZER = "PREFIRO_NAO_DIZER",
// }

// enum FocoTreino {
//   PERDER_PESO = "PERDER_PESO",
//   GANHAR_MASSA = "GANHAR_MASSA",
//   MANTER_A_FORMA = "MANTER_A_FORMA",
// }

// enum FocoCorpo {
//   PEITO = "PEITO",
//   BRACOS = "BRACOS",
//   COSTAS = "COSTAS",
//   GLUTEOS = "GLUTEOS",
//   PERNAS = "PERNAS",
// }

export interface DataAluno {
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
  plano?: string;
  dia_pagamento?: string;
  usuario_id: string
}
