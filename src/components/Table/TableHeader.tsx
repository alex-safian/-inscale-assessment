import React from "react";
import cx from "classnames";

import { HeaderType, SortByType } from "./index";
import { ReactComponent as DownChevron } from "../../assets/img/down-chevron.svg";
import { ReactComponent as UpChevron } from "../../assets/img/up-chevron.svg";

type Props = {
  headers: HeaderType[];
  sortBy: SortByType;
  onSort: (
    sortBy: "fullName" | "salary" | "dateJoined",
    orderBy: boolean
  ) => void;
};

const TableHeader: React.FC<Props> = ({ headers, onSort, sortBy }) => {
  const handleSort = (key: SortByType, isAsc: boolean) => {
    onSort(key, !isAsc);
  };

  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th
            className={cx(
              "px-10 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider cursor-pointer",
              {
                "bg-gray-100": header.key === sortBy,
              }
            )}
            key={header.key}
            onClick={() => handleSort(header.key, header.isAsc)}
          >
            <div className="flex">
              <span className="mr-2">{header.text}</span>
              {header.key === sortBy ? (
                header.isAsc ? (
                  <DownChevron />
                ) : (
                  <UpChevron />
                )
              ) : null}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
