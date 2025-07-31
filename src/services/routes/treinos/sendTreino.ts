import { api } from "@/config/axios.config";
import { headerMultipart } from "@/constants/headerMultipart";
import { studentTrainingDTO } from "@/schemas/schema-sendTreino";

export async function SendTreino(rawData: studentTrainingDTO) {
    try {
        const { data } = await api.post("/student-training/create", rawData, headerMultipart);
        return data;
    }catch (err) {
        console.log(err)
    }
}