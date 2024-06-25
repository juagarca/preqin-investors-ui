import { ICommitmentInfo } from "../../types";

import "./styles.css";

interface CommitmentInfoTableProps {
  commitmentInfoList: ICommitmentInfo[];
}

const CommitmentInfoTable = ({
  commitmentInfoList,
}: CommitmentInfoTableProps) => {
  return (
    <table className="commitment-info-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Currency</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {commitmentInfoList.map((commitmentInfo) => (
          <TableRow key={commitmentInfo.id} commitmentInfo={commitmentInfo} />
        ))}
      </tbody>
    </table>
  );
};

const TableRow = ({ commitmentInfo }: { commitmentInfo: ICommitmentInfo }) => {
  return (
    <tr>
      <td>{commitmentInfo.id}</td>
      <td>{commitmentInfo.currency}</td>
      <td>{commitmentInfo.amount}</td>
    </tr>
  );
};

export default CommitmentInfoTable;
