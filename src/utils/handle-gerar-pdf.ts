import jsPDF from "jspdf";
import { DataAlunoRelatorio } from "@/dto/data-aluno-relatorio";

export function handleGerarPDF(data: DataAlunoRelatorio, observacao: string) {
  const doc = new jsPDF();
  const marginX = 20;
  let posY = 20;

  doc.setFontSize(18);
  doc.setTextColor("#057333");
  doc.text("Relatório do Aluno", marginX, posY);

  posY += 10;

  doc.setFontSize(12);
  doc.setTextColor(0);
  doc.text(`Nome: ${data.nome ?? "-"}`, marginX, posY);
  posY += 7;
  doc.text(`E-mail: ${data.email ?? "-"}`, marginX, posY);
  posY += 7;
  doc.text(
    `Data do relatório: ${new Date().toLocaleDateString()}`,
    marginX,
    posY
  );

  posY += 15;

  doc.setFontSize(14);
  doc.setTextColor("#057333");
  doc.text("Histórico de Treinos", marginX, posY);

  posY += 10;

  doc.setFillColor(0, 217, 57);
  doc.setTextColor(255);
  doc.rect(marginX, posY - 6, 170, 8, "F");
  doc.text("Tipo de Treino", marginX + 2, posY);
  doc.text("Exercício", marginX + 90, posY);

  posY += 6;
  doc.setTextColor(0);

  data.treinos?.forEach((treino) => {
    if (posY > 270) {
      doc.addPage();
      posY = 20;
    }

    doc.text(treino.tipo_treino ?? "-", marginX + 2, posY);
    doc.text(treino.nome_exercicio ?? "-", marginX + 90, posY);
    posY += 7;
  });

  posY += 10;

  doc.setFontSize(12);
  doc.setTextColor("#057333");
  doc.text("Observações do Personal:", marginX, posY);
  posY += 8;

  doc.setTextColor(0);
  doc.setDrawColor("");
  doc.setLineWidth(0.5);
  doc.rect(marginX, posY, 170, 30);
  const linhasObservacao = doc.splitTextToSize(observacao || "-", 165);
  doc.text(linhasObservacao, marginX + 2, posY + 6);

  posY += 40;

  doc.setFontSize(10);
  doc.setTextColor(150);
  doc.text("________________________", marginX, posY);
  doc.text("Assinatura do Personal", marginX + 5, posY + 5);

  doc.save(`relatorio-${data.nome ?? "aluno"}.pdf`);
}
