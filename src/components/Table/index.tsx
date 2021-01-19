import React, { useState } from "react";
import cx from "classnames";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export type SortByType = "fullName" | "salary" | "dateJoined";

type StateType = {
  data: TransferDataType[];
  sortBy: SortByType;
  headers: HeaderType[];
};

type DataType = {
  id: number;
  firstname: string;
  lastname: string;
  dateJoined: string;
  salary: number;
};

type TransferDataType = {
  id: number;
  fullName: string;
  dateJoined: Date;
  salary: number;
};

export type HeaderType = {
  text: string;
  key: SortByType;
  isAsc: boolean;
};

type Props = {
  data: DataType[];
  headers: HeaderType[];
};

const Table: React.FC<Props> = (props) => {
  const transferData = () =>
    props.data.map((item: DataType) => {
      return {
        id: item.id,
        fullName: `${item.firstname} ${item.lastname}`,
        dateJoined: new Date(item.dateJoined),
        salary: item.salary,
      };
    });

  const [tableData, setTableData] = useState<StateType>({
    data: transferData(),
    sortBy: "dateJoined",
    headers: [...props.headers],
  });

  const handleSort = (sortBy: SortByType, isAsc: boolean) => {
    const temp = [...tableData.data];
    const headers = [...tableData.headers];

    headers.map((header) => {
      header.isAsc = header.key === sortBy ? !header.isAsc : false;
    });

    temp.sort(function (prev, next) {
      let first = prev[sortBy],
        second = next[sortBy];

      if (sortBy === "dateJoined") {
        first = new Date(first);
        second = new Date(second);
      }

      if (isAsc) {
        if (first > second) return -1;
        if (first < second) return 1;

        return 0;
      }

      if (first < second) return -1;
      if (first > second) return 1;

      return 0;
    });

    setTableData({ data: temp, sortBy, headers });
  };

  return (
    <div
      className={cx(
        "align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard rounded-lg mb-4"
      )}
    >
      <table className="table-fixed w-full">
        <TableHeader
          headers={tableData.headers}
          sortBy={tableData.sortBy}
          onSort={(sortBy, orderBy) => handleSort(sortBy, orderBy)}
        />
        <TableBody content={tableData.data} />
      </table>
    </div>
  );
};

export default Table;
