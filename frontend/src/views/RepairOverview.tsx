import Table from "react-bootstrap/Table";
import { Repair } from "../state/types";

export const RepairOverview: React.FC<Repair[]> = (data) => {

  return (
    <Table striped hover bordered variant="light">
      <div>{JSON.stringify(data)}</div>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
};
