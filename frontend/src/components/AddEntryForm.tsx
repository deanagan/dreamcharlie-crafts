import { useState } from "react";
import { Form } from "react-bootstrap";

export const AddEntryForm = () => {
  // const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");

  // const handleClose = () => {
  //   setName("");
  //   setDetail("");
  //   setShow(false);
  // };

  // const handleShow = () => setShow(true);

  // const dispatch = useDispatch();

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   dispatch(
  //     actionCreators.addRepair({ name: name, detail: detail, fixed: false })
  //   );
  //   handleClose();
  // };

  return (
    <>
            <Form.Group>
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
    </>
  );
};
