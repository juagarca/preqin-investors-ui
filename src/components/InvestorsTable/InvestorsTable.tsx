import { MouseEventHandler } from "react";

import { IInvestor } from "../../types";
import { capitalize, formatDate } from "../../utils/helpers";

import "./styles.css";

interface InvestorsTableProps {
  investors: IInvestor[];
  handleRowClick: MouseEventHandler<HTMLTableRowElement>;
}

const InvestorsTable = ({ investors, handleRowClick }: InvestorsTableProps) => (
  <table className="inverstors-table">
    <thead>
      <tr>
        <th>Firm ID</th>
        <th>Firm Name</th>
        <th>Type</th>
        <th>Date added</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {investors.map((investor: IInvestor) => (
        <TableRow
          key={investor.firm_id}
          investor={investor}
          handleRowClick={handleRowClick}
        />
      ))}
    </tbody>
  </table>
);

interface TableRowProps {
  investor: IInvestor;
  handleRowClick: MouseEventHandler<HTMLTableRowElement>;
}

const TableRow = ({ investor, handleRowClick }: TableRowProps) => {
  const {
    firm_id: id,
    firm_name: name,
    firm_type: type,
    date_added: date,
    address,
  } = investor;

  return (
    <tr onClick={handleRowClick} dataset-firm-id={id} dataset-firm-name={name}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{capitalize(type)}</td>
      <td>{formatDate(date)}</td>
      <td>{address}</td>
    </tr>
  );
};

export default InvestorsTable;
