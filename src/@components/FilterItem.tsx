import React from "react";
import styles from "../styles";

import { useOutsideClick } from "../utils";

interface IFilterItem {
  text: string;
  property: string;
  options: { text: string; value: string }[];
  onFilterChange: Function;
}

const FilterItem: React.FC<IFilterItem> = ({
  text,
  property,
  options,
  onFilterChange,
}) => {
  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<number>(0);

  const onChangeType = (idx: number) => {
    setShowFilter(false);
    setValue(idx);
    onFilterChange(property, options[idx].value);
  };

  const sortRef = useOutsideClick(() => {
    setShowFilter(false);
  });

  return (
    <div ref={sortRef}>
      <div
        onClick={() => setShowFilter((prev) => !prev)}
        className="flex w-[200px] justify-between p-4 md:p-6 bg-sky-300 hover:bg-sky-400 transition-colors cursor-pointer"
      >
        <span className={`${styles.cap1} mr-3`}>{text}:</span>
        <p className={`${styles.cap1}`}>{options[value].text}</p>
      </div>
      <div className="relative">
        <ul
          className={`${
            showFilter ? "flex" : "hidden"
          } absolute flex flex-col w-full top-0 right-0`}
        >
          {options.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => onChangeType(index)}
                className={`${
                  index === value ? "bg-sky-100 text-sky-400" : "bg-white"
                } ${
                  styles.cap1
                } p-4 md:p-6 w-full text-end shadow-lg hover:bg-sky-100`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterItem;
