import jsPDF from "jspdf";

import ibudget_logo_pdf from "../assets/img/ibudget_logo_pdf.png";
import qrcode from "../assets/img/qrcode.png";

export interface IGeneratePdfProps {
  projectName: string;
  projectId: string | number;
  budget: number;
  projectTime: string | number | undefined;
}

export const generatePdf = ({
  projectName,
  projectId,
  budget,
  projectTime,
}: IGeneratePdfProps) => {
  const brlFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const doc = new jsPDF({
    unit: "cm",
  });

  doc.addImage(ibudget_logo_pdf, "PNG", 2, 1, 17, 3.5);

  doc.setFontSize(20);
  doc.setFont("courier", "normal");
  doc.text("Informações gerais", 7, 6);

  doc.line(2, 6.5, 19, 6.5);

  doc.setFontSize(16);
  doc.text(
    [
      `Nome do projeto: ${projectName}`,
      `N° do projeto: ${projectId}`,
      `Orçamento: ${brlFormated.format(budget)}`,
      projectTime === "1" || projectTime === 1
        ? `Conclusão em: ${projectTime} dia`
        : `Conclusão em: ${projectTime} dias`,
    ],
    2,
    8
  );

  doc.line(2, 11, 19, 11);

  doc.setFontSize(20);
  doc.text("QR code para PIX", 6.8, 13);

  doc.addImage(qrcode, "PNG", 5.4, 14, 10, 10);

  doc.save("iBudget.pdf");
};
