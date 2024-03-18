import React from "react";
import jsPDF from "jspdf";

const GeneratePDFButton = () => {
  const generatePDF = () => {
    // Instantiate jsPDF
    const doc = new jsPDF();

    // Add text to the PDF
    doc.text("Hello world!", 10, 10);
    doc.setFont("PTSans"); //set the font
    doc.setFontSize(52);
    doc.text("Hello wwwwwworld!", 30, 30);

    // Save the PDF with a filename
    doc.save('ShakepeersAnswers.pdf');
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default GeneratePDFButton;
