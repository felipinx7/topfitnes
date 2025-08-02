export interface DataAlunoForm {
  nome: string;
  treino_dias_por_semana: number;
  sobrenome: string;
  sexo: string;
  foto?: File;
  foco_treino: string;
  peso: number;
  altura: number;
  idade: number;
  data_matricula?: string;
  email: string;
  senha: string;
  telefone: string;
  foco_corpo: string;
  plano_id: string;
}
