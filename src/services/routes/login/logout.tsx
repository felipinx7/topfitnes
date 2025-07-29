import { api } from "@/config/axios.config";

export async function Logout(){
    try{
    const res = await api.delete("/logout");
    return res;
    }catch{
        console.log("erro ao sair")
    }
}