import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModalForm from './Components/Modalform'; // Replace with the correct path
import './Components/ModalForm.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* <div>
        <iframe src={`./Components/suraj.html`}  width="600" height="400" frameBorder="0"></iframe>
        </div> */}
      <Button variant="primary" onClick={handleOpenModal}>
        Open Modal
      </Button>

      <MyModalForm showModal={showModal} handleClose={handleCloseModal} className="myModal" />
    </div>
  );
};

export default App;
