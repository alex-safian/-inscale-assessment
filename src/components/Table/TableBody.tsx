import React from "react";
import { formatCurrency } from "../../utils";

type item = {
  fullName: string;
  dateJoined: Date;
  salary: number;
};

type Props = {
  content: Array<item>;
};

const TableHeader: React.FC<Props> = ({ content }) => {
  return (
    <tbody className="bg-white">
      {content.map((item, index) => {
        const { fullName, dateJoined, salary } = item;
        return (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              {fullName}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              {dateJoined.toLocaleDateString("en-US")}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              {formatCurrency(salary, "RM")}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableHeader;
