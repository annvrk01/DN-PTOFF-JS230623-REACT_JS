import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
function ConfirmDelete() {
  const { show, handleClose, handleSubmitConfirm } = "";
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có đồng ý xóa hay không !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Không
          </Button>
          <Button variant="primary" onClick={handleSubmitConfirm}>
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmDelete;
