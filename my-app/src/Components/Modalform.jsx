// Import necessary components from react-bootstrap
import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalForm.css';

// React functional component for the modal form
const MyModalForm = ({ showModal, handleClose }) => {
  // You can add your form state and logic here

  const handleSave = () => {
    // Add logic to save the form data
    // You can access form data using state if you have a form state
    // For example: console.log(formData);
    handleClose(); // Close the modal after saving
  };

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

  // const handlePdf = ()=>{
  //     window.print()
  // }

  const localPageContent = `

  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Local HTML Page</title>
    </head>
    <body>
      <h1>Hello, this is a locally generated HTML page!</h1>
    </body>
    </html>
  `;

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Header</Modal.Title>
      </Modal.Header>

      <Modal.Body className="myModalbody boddy">
      <div ref={pdfRef}>
      <iframe
        
        title="Embedded Local HTML Page"
        srcDoc={localPageContent}  // Update the path to your local HTML file
        width="400"
        height="400"
      ></iframe>
      </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="primary" onClick={generatePdf}>
          Download Pdf
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModalForm;


