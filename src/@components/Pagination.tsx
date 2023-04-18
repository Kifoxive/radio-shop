import React from "react";
import styles from "./pagination.module.scss";

import ReactPaginate from "react-paginate";

type PaginationProps = {
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      className={"pagination"}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={({ selected }) => {
        onPageChange(selected);
      }}
      pageRangeDisplayed={5}
      pageCount={itemsPerPage + 1}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
