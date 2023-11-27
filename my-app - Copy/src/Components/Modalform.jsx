// Import necessary components from react-bootstrap
// import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ModalForm.css";
import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";

const MyPDF = ({ formData }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text>Name: {formData.name}</Text>
          <Text>Email: {formData.email}</Text>
          {/* Add more fields as needed */}
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// React functional component for the modal form
const MyModalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDownload = () => {
    const pdfBlob = URL.createObjectURL(
      new Blob([<MyPDF formData={formData} />], { type: "application/pdf" })
    );
    saveAs(pdfBlob, "example.pdf");
  };

  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>Modal Header</Modal.Title>
      </Modal.Header>

      <Modal.Body className="myModalbody boddy">
        <div>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            {/* Add more input fields as needed */}
          </form>

          <PDFViewer width="600" height="800">
            <MyPDF formData={formData} />
          </PDFViewer>

          {/* <button onClick={handleDownload}>Download PDF</button> */}
        </div>
      </Modal.Body>

      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button> */}
        <Button variant="primary" onClick={handleDownload}>
          Download Pdf
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModalForm;
