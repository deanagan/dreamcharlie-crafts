import Table from "react-bootstrap/Table";
import { Repair } from "../state/types";


interface Props {
  repairs: Repair[];
}


export const RepairOverview: React.FC<Props> = ({repairs}) => {

  return (
    <Table striped hover bordered variant="light">
      <thead>
        <tr>
          <th>Guid</th>
          <th>Name</th>
          <th>Detail</th>
          <th>Fixed</th>
        </tr>
      </thead>
      <tbody>
        {
         repairs.map(repair =>
          <tr>
            <td>{repair.guid}</td>
            <td>{repair.name}</td>
            <td>{repair.detail}</td>
            <td>{repair.fixed ? "True" : "False"}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
