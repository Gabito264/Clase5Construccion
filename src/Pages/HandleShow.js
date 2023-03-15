
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Routes, Route, useNavigate} from 'react-router-dom';
function HandleShow() {
    const navigate = useNavigate();

    const navigateToAbout = () => {
      
      navigate('./About');
    };
    
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Completar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Solicitud creada!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Se le mandará a un administrador para su revisión. ¡Buen Trabajo!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={navigateToAbout}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HandleShow