import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { DeleteConfirmationModal } from "../components/DeleteConfirmationModal";
import { ActionLink } from "../components/ActionLink";
import { ViewBox } from "../design-system/atoms";
import { actionCreators, State } from "../store";
import { ToggleSwitch } from "../components/ToggleSwitch";
import { Table } from "../components/Table";
import { Modal } from "../components/Modal";

const Wrapper = styled(ViewBox)`
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.white};
  margin-top: 55px;
`;

export const Home = () => {
  const dispatch = useDispatch();
  const { repairs } = useSelector((state: State) => state.repair);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idForDeletion, setIdForDeletion] = useState<number | null>(null);
  const { deleteRepairEntry } = bindActionCreators(actionCreators, dispatch);


  const deleteEntry = (id: number) => {
    setIdForDeletion(id);
    setShowDeleteModal(true);
  }

  const cancelDeletion = () => {
    setIdForDeletion(null);
    setShowDeleteModal(false);
  }


  useEffect(() => {
    dispatch(actionCreators.getRepairEntries());
  }, [dispatch]);

  return (
    <Wrapper w={600} h={600}>
      <Table
        rowData={repairs.map((repair) => (
            {
                id: repair.id as number,
                name: repair.name,
                detail: repair.detail,
                fixed: repair.fixed ? "True" : "False",
                switch: (<ToggleSwitch switchId={repair.id as number} fixed={repair.fixed}/>),
                deleter: (<ActionLink color='red' message='delete' deleteFn={() => deleteEntry(repair.id as number)}/>)
            }
          ))}
        columnLabels={['Name', 'Detail', 'Completed', 'Update', 'Remove Request']}
        rowFields={['name', 'detail', 'fixed', 'switch', 'deleter']}
      />

      <button onClick={() => setShowAddModal(true)}>Add</button>
      <Modal
        onCancel={() => setShowAddModal(false)}
        onOk={() => setShowAddModal(false)}
        show={showAddModal}
        title="Add New Request"
        okText="Ok"
        cancelText="Cancel"
        children={<h1>I will be a form someday</h1>}
       />
       <Modal
        onCancel={() => cancelDeletion()}
        onOk={() => idForDeletion !== null && deleteRepairEntry(idForDeletion)}
        show={showDeleteModal}
        title="Delete Request"
        okText="Ok"
        cancelText="Cancel"
        children={<h4>Are you sure you want to delete this request?</h4>}
       />
    </Wrapper>
  );
};
