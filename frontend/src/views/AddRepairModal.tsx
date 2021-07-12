import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store";

export const AddRepairModal = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");

  const handleClose = () => {
    setName("");
    setDetail("");
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      actionCreators.addRepair({ name: name, detail: detail, fixed: false })
    );
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Repair Request
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Repair Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name of repair request"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label>Detail</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="Details"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
              <Form.Text className="text">
                A short description of the repair request
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
