import { PropsWithChildren } from "react";
import styled from "styled-components";
import { ViewBox } from "../design-system/atoms/ViewBox";

export const TableWrapper = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid black;
  th, td {
    text-align: left;
    padding: 16px;
  }
  th {
    background-color: ${({ theme }) => theme.Colors.grey300};
  }
  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.Colors.tableStripe};
  }

`;

interface TableProp<T> {
  columnLabels: string[];
  rowData: T[];
}
export function Table<T>(
  props: PropsWithChildren<TableProp<T>>
) {
  console.log(props);
  return (
    <ViewBox>
      <TableWrapper>
        <thead>
          <tr>
            {props.columnLabels.map((label, index) => <th key={index}>{label}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            props.rowData.map((singleRow) => {
              return (
                <tr>
                  {Object.values(singleRow).map((colData, index) => <td key={index}>{colData}</td>)}
                </tr>
              )
            }
            )
          }
        </tbody>
      </TableWrapper>
    </ViewBox>
  );
}
