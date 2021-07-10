import Table from "react-bootstrap/Table";
import { Repair } from "../state/types";

export const RepairOverview: React.FC<Repair[]> = (data) => {

  return (
    <Table striped hover bordered variant="light">
      <div>{typeof(data.map)}</div>
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
         Object.entries(data).map(value =>
          <tr>
            <td>{value[1].guid}</td>
            <td>{value[1].name}</td>
            <td>{value[1].detail}</td>
            <td>{value[1].fixed ? "True" : "False"}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
