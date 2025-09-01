import { api } from "@/config/axios.config";

export async function autoLogin() {
    const { data } = await api.get('/auto-login')
    return data
}