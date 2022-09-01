import jsPDF from "jspdf";

import ibudget_logo_pdf from "../assets/img/ibudget_logo_pdf.png";
import qrcode from "../assets/img/qrcode.png";

interface IGeneratePdfProps {
  projectName: string;
  projectId: string | number;
  budget: string | number;
  conclusionDays: string | number;
}

export const generatePdf = ({
  projectName,
  projectId,
  budget,
  conclusionDays,
}: IGeneratePdfProps) => {
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
      `Orçamento: RS ${budget}`,
      `Conclusão em: ${conclusionDays} dias`,
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
