import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';

const PdfGenerator = () => {
  const pdfRef = useRef();

  const generatePdf = () => {
    const pdf = new jsPDF();
    const pdfContent = pdfRef.current;

    // Set the font size and color
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0); // RGB color, black in this case

    // Get the HTML content as text
    const contentText = pdfContent.innerText;

    // Add the text to the PDF
    pdf.text(contentText, 10, 10);

    pdf.save('generated.pdf');
  };

  return (
    <div>
      <button onClick={generatePdf}>Generate PDF</button>
      <div ref={pdfRef}>
        {/* Your HTML content goes here */}
        <h2>Content inside the Iframe</h2>
        <p>This is content from another HTML file.</p>
      </div>
    </div>
  );
};

export default PdfGenerator;
