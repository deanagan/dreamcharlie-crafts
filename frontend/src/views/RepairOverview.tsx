import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { RepairState } from "../types";
import { DeleteLink } from "../components/DeleteLink";
import { FixSwitch } from "./FixSwitch";
import "./RepairOverview.css";

export const RepairOverview: React.FC<RepairState> = ({repairs}) => {
  const dispatch = useDispatch();

  const { deleteRepairEntry } = bindActionCreators(actionCreators, dispatch);

  return (
    <Table className="repair-overview-table" striped hover bordered variant="light">
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
        {
         repairs.map(repair =>
          <tr key={repair.id}>
            <td>{repair.name}</td>
            <td>{repair.detail}</td>
            <td>{repair.fixed ? "True" : "False"}</td>
            <td><FixSwitch switchId={repair.id as number} fixed={repair.fixed}/></td>
            <td><DeleteLink deleteFn={() => deleteRepairEntry(repair.id as number)}/></td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
