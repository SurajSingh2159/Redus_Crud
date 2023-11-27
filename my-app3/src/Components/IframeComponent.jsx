import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

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
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      new Blob([<MyPDF formData={formData} />], { type: 'application/pdf' })
    );
    saveAs(pdfBlob, 'example.pdf');
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        {/* Add more input fields as needed */}
      </form>

      <PDFViewer width="600" height="800">
        <MyPDF formData={formData} />
      </PDFViewer>

      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default MyForm;
