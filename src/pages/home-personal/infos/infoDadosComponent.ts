import { IconeDadosPersonal } from "@/assets/icons/icone-dados-personal"
import { useState } from "react"



export function InfoDadosComponentAlunos(totalAlunos: number, AlunosAtrasados: number, alunosNovos: number) {
    const infoDadosComponentAluno = [
        {
            titulo: "Total de Alunos",
            icon: IconeDadosPersonal,
            value: totalAlunos
        },
        {
            titulo: "Planos Atrasados",
            icon: IconeDadosPersonal,
            value: AlunosAtrasados
        },
        {
            titulo: "Novos Alunos Deste Mês",
            icon: IconeDadosPersonal,
            value: alunosNovos
        },
    ]

    return infoDadosComponentAluno
}


export function InfoDadosComponentTreinos(treinosCadastrados: number) {
    const infoDadosComponentTreinos = [
        {
            titulo: "Total de Treinos Cadastrados",
            icon: IconeDadosPersonal,
            value: treinosCadastrados
        },
        {
            titulo: "Treinos Realizados por Alunos esse Mês",
            icon: IconeDadosPersonal,
            value: 3
        },
    ]

    return infoDadosComponentTreinos
}
