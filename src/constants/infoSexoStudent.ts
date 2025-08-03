import { formatEnumList } from "@/utils/formartarEnumInArray";

export const infoSexoStudent = formatEnumList(["MASCULINO", "FEMININO", "PREFIRO_NAO_DIZER"])

export const infoFocoTreino = formatEnumList(["PERDER_PESO", "GANHAR_MASSA", "MANTER_A_FORMA"])

export const infoGrupoMuscularAlvo = formatEnumList(["PEITO", "BRACOS", "COSTAS", "GLUTEOS", "PERNAS"])

export const infoPlanoId = [
    {
        valueFront: "Mensal",
        valueBack: "69621913-2577-4f02-976c-c705914df714"
    },
    {
        valueFront: "Trimestral",
        valueBack: "5befa264-9c62-4e87-95ec-e6d8e5886b6c"
    },
    {
        valueFront: "Semestral",
        valueBack: "01ba1832-9a3d-4585-a68b-7285e7949d65"
    },
    {
        valueFront: "Anual",
        valueBack: "ffb8e1b3-5fef-40ac-8cd4-23667e99811a"
    }
]
