import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { DeleteConfirmationModal } from "../components/DeleteConfirmationModal";
import { DeleteLink } from "../components/DeleteLink";
import { ViewBox } from "../design-system/atoms";
import { actionCreators, State } from "../store";
import { SwitchCheckbox } from "../components/SwitchCheckbox";
import { Table } from "../components/Table";

const Wrapper = styled(ViewBox)`
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.white};
  margin-top: 55px;
`;

export const Home = () => {
  const dispatch = useDispatch();
  const { repairs } = useSelector((state: State) => state.repair);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { deleteRepairEntry } = bindActionCreators(actionCreators, dispatch);

  const setModalState =(value: boolean)=> {
    setShowDeleteModal(value);
  };


  useEffect(() => {
    dispatch(actionCreators.getRepairEntries());
  }, [dispatch]);

  return (
    <Wrapper w={600} h={600}>
      <Table
        rowData={repairs.map((repair) => (
            {
                name: repair.name,
                detail: repair.detail,
                fixed: repair.fixed ? "True" : "False",
                switch: (<SwitchCheckbox switchId={repair.id as number} fixed={repair.fixed}/>),
                deleter: "world",
            }
          ))}
        columnLabels={['Name', 'Detail', 'Completed', 'Update', 'Remove Request']}
      />
    </Wrapper>
  );
};
