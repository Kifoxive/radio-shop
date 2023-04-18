import React from "react";
import styles from "styles";

import FilterItem from "./FilterItem";

interface IFilter {
  filters: {
    text: string;
    property: string;
    options: { text: string; value: string }[];
  }[];
  onFilterChange: Function;
}

const Filter: React.FC<IFilter> = ({ filters, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-8 justify-end">
      {filters.map((elem, index) => (
        <FilterItem {...elem} onFilterChange={onFilterChange} key={index} />
      ))}
    </div>
  );
};

export default Filter;
