import { api } from "@/config/axios.config";
import { loginDTO } from "@/dto/loginDTO";

import { emailSchema } from "@/schemas/schema-Login";

import { FormatarNumero } from "@/utils/formatar-numero-telefone";


import { email } from "zod";

export async function Auth({ emailTel, password }: loginDTO) {


  let userLogin;

  if (emailSchema.safeParse(emailTel).success) {
    const telefone = FormatarNumero(emailTel.toString());

     userLogin = {
     telefone: telefone.toString(),
     senha: password.toString()
   } 
  }else{
     userLogin = {
     email: emailTel.toString(),
     senha: password.toString()
   } 
  }

  try{

  const json = JSON.stringify(userLogin)
  const res = await api.post('/login', json, { withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  });

  return res.data;

  }
  catch(error: any){
    throw error.response?.data || {message: "Erro ao logar"}
  }
}
