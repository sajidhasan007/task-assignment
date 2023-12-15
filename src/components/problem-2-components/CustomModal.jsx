import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function CustomModal({ children, showModal, hideModal, title }) {
  return (
    <Modal show={showModal} onHide={() => hideModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-3xl font-semibold">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
