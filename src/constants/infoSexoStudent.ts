import { formatEnumList } from "@/utils/formartarEnumInArray";

export const infoSexoStudent = formatEnumList(["MASCULINO", "FEMININO", "PREFIRO_NAO_DIZER"])

export const infoFocoTreino = formatEnumList(["PERDER_PESO", "GANHAR_MASSA", "MANTER_A_FORMA"])

export const infoGrupoMuscularAlvo = formatEnumList(["PEITO", "BRACOS", "COSTAS", "GLUTEOS", "PERNAS"])

export const infoPlanoId = [
    {
        valueFront: "Mensal",
        valueBack: "af25b640-15e2-4bf6-85ec-85c9326130f8"
    },
    {
        valueFront: "Trimestral",
        valueBack: "5019bae2-bd6b-4cef-9506-48fb8f777463"
    },
    {
        valueFront: "Semestral",
        valueBack: "e29c95a1-99eb-4848-a906-4f5a3d81fe50"
    },
    {
        valueFront: "Anual",
        valueBack: "7000eaa1-c754-4c65-a2bb-bbcd8be7f770"
    }
]
