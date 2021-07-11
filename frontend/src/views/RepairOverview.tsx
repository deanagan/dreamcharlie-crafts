import Table from "react-bootstrap/Table";
import { RepairState } from "../types";


export const RepairOverview: React.FC<RepairState> = ({repairs}) => {

  return (
    <Table striped hover bordered variant="light">
      <thead>
        <tr>
          <th>Name</th>
          <th>Detail</th>
          <th>Fixed</th>
        </tr>
      </thead>
      <tbody>
        {
         repairs.map(repair =>
          <tr key={repair.id}>
            <td>{repair.name}</td>
            <td>{repair.detail}</td>
            <td>{repair.fixed ? "True" : "False"}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
