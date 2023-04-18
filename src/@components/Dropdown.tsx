import React, { useEffect } from "react";
import styles from "../styles";

import { list_arrow } from "../assets";
import { useOutsideClick } from "../utils";

interface IFilterItem {
  property: string;
  options: { text: string; value: number }[];
  onValueChange: Function;
}

const Dropdown: React.FC<IFilterItem> = ({
  property,
  options,
  onValueChange,
}) => {
  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<number>(0);

  useEffect(() => {
    onValueChange(property, options[value].value);
  }, []);

  const onChangeType = (idx: number) => {
    setShowFilter(false);
    setValue(idx);
    onValueChange(property, options[idx].value);
  };

  const sortRef = useOutsideClick(() => {
    setShowFilter(false);
  });

  return (
    <div ref={sortRef}>
      <div
        onClick={() => setShowFilter((prev) => !prev)}
        className="flex justify-between p-6 relative bg-white cursor-pointer hover:bg-sky-100"
      >
        <p className={`${styles.paragraph}`}>{options[value].text}</p>
        <img
          src={list_arrow}
          alt="arrow"
          className={`absolute right-5 w-[16px] ${!showFilter && "rotate-180"}`}
        />
      </div>
      <div className="relative z-10">
        <ul
          className={`${
            showFilter ? "flex" : "hidden"
          } absolute flex flex-col w-full top-0 right-0`}
        >
          {options.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => onChangeType(index)}
                className={`${index === value ? "bg-sky-100" : "bg-white"} ${
                  styles.paragraph
                } p-6 w-full text-start shadow-lg hover:bg-sky-100`}
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

export default Dropdown;
