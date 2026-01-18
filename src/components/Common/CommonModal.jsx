import React  from "react";
import { Modal } from "react-bootstrap";

const CommonModal = ({
    show,
    title,
    handleClose,
    footer,
    children
}) => {
  return (

    <>
      <Modal show={show} onHide={handleClose} onC>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {footer && <Modal.Footer>{footer}</Modal.Footer>}
      </Modal>
    </>
  );
};

export default CommonModal
