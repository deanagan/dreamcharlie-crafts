
import styled from "styled-components";
import { ViewBox } from "../design-system/atoms/ViewBox";

export const Table = styled.table`
  /* position: absolute; */
  /* left: 0;
  right: 0; */
  /* width: 100%; */
 background-color: ${({ theme }) => theme.Colors.white};

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.Colors.grey};
  }
`;

export const RepairTable: React.FC = () => {
  return (
    <ViewBox>
      <Table className="repair-overview-table">
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
      </Table>
    </ViewBox>
  );
};
