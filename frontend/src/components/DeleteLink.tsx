import { FC } from "react";
import styled from "styled-components";

interface DeleteButtonProp {
  deleteFn(): any;
}

const ActionLink = styled.div`
  color: red;
  text-decoration: underline;
  cursor: pointer;
  width: 50%;
  margin: auto;

  &:hover {
    text-decoration: none;
  }
`;

export const DeleteLink: FC<DeleteButtonProp> = ({ deleteFn }) => {
  return (
    <>
      <ActionLink onClick={() => deleteFn()}>Delete</ActionLink>
    </>
  );
};
