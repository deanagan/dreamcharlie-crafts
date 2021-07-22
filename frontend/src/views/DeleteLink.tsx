import { FC } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import styled from "styled-components";

interface DeleteButtonProp {
  id: number;
}

const ActionLink = styled.div`
  color: red;
  text-decoration: underline;
  cursor: pointer;
  width: 50%;
  margin: auto;
`


export const DeleteLink: FC<DeleteButtonProp> = ({ id }) => {
   const dispatch = useDispatch();

   const { deleteRepairEntry } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      {id !== undefined ? (
        <ActionLink
          onClick={() => deleteRepairEntry(id)}
        >Delete</ActionLink>
      ) : null}
    </>
  );
};
