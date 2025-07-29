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

  const json = JSON.stringify(userLogin)
  console.log("JSON",json)
  const res = await api.post('/login', json, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  console.log(res);


  return res.data;
}
