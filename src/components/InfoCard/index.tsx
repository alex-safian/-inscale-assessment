import React from "react";

import { formatCurrency } from "../../utils";

type Props = {
  totalEmployee: number;
  highestSalary: number;
  recentEmployee: string;
};

const InfoCard: React.FC<Props> = (props) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4 justify-between text-xl">
      <span className="flex items-center shadow bg-white shadow-dashboard p-8 rounded-lg">
        <strong>Total: </strong> {props.totalEmployee}
      </span>
      <span className="col-span-2 flex flex-col shadow bg-white shadow-dashboard p-8 rounded-lg">
        <div>
          <strong>Highest earning employee:</strong>{" "}
          {formatCurrency(props.highestSalary, "RM")}
        </div>
        <div>
          <strong>Employee most recent joined: </strong>
          {new Date(props.recentEmployee).toLocaleDateString("en-US")}
        </div>
      </span>
    </div>
  );
};

export default InfoCard;
