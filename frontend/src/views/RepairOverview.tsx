import Table from "react-bootstrap/Table";
import { RepairState } from "../types";
import { FixSwitch } from "./FixSwitch";


export const RepairOverview: React.FC<RepairState> = ({repairs}) => {

  return (
    <Table striped hover bordered variant="light">
      <thead>
        <tr>
          <th>Name</th>
          <th>Detail</th>
          <th>Fixed</th>
          <th>Update</th>
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
          </tr>
        )}
      </tbody>
    </Table>
  );
};
