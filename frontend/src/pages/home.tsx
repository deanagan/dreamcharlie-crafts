import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { DeleteConfirmationModal } from "../components/DeleteConfirmationModal";
import { DeleteLink } from "../components/DeleteLink";
import { ViewBox } from "../design-system/atoms";
import { actionCreators, State } from "../store";
import { FixSwitch } from "../components/FixSwitch";

const Wrapper = styled(ViewBox)`
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.grey300};
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
      <table className="repair-overview-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Detail</th>
            <th>Fixed</th>
            <th>Update</th>
            <th>Remove Request</th>
          </tr>
        </thead>
        <tbody>
          {repairs.map((repair) => (
            <tr key={repair.id}>
              <td>{repair.name}</td>
              <td>{repair.detail}</td>
              <td>{repair.fixed ? "True" : "False"}</td>
              <td>
                <FixSwitch
                  switchId={repair.id as number}
                  fixed={repair.fixed}
                />
              </td>
              <td>
                <div>
                  <DeleteConfirmationModal
                    title="Confirm Delete"
                    onCancel={() => {
                      setModalState(false);
                    }}
                    onDelete={() => deleteRepairEntry(repair.id as number)}
                    show={showDeleteModal}
                  >
                    Are you sure you want to delete this item?
                  </DeleteConfirmationModal>
                  <DeleteLink deleteFn={() => setShowDeleteModal(true)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};
