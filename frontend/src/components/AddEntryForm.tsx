import { useState } from "react";
import styled from "styled-components";

export const FormGroup = styled.div`
	color: palevioletred;
    display: block;
	width: 90%;
	margin: 10px;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
  max-width: 100%;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;


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

            {/* <Form.Group>
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
            </Form.Group> */}

            <FormGroup>
      <Label htmlFor="name">Name</Label>
      <Input
        placeholder="Enter name of repair request"
        value={name}
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      <Message>This is the validation message</Message>
    </FormGroup>
    <FormGroup>
      <Label htmlFor="detail">Details</Label>
      <Input
       type="text"
       as="textarea"
       placeholder="Details"
       value={detail}
       id="detail"
       onChange={(e) => setDetail(e.target.value)}
      />
      <Message>This is the validation message</Message>
    </FormGroup>
    </>
  );
};
