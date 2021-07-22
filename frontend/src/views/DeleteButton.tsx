import { FC } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import "./DeleteButton.css";

interface DeleteButtonProp {
  id: number;
}

export const DeleteButton: FC<DeleteButtonProp> = ({ id }) => {
   const dispatch = useDispatch();

   const { deleteRepairEntry } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      {id !== undefined ? (
        <Nav.Link
          className="delete-link"
          onClick={() => deleteRepairEntry(id)}
        >Delete</Nav.Link>
      ) : null}
    </>
  );
};
