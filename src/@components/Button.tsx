import React from "react";
import styles from "../styles";

interface IButton {
  text: string;
  isSubmit?: boolean;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  text,
  isSubmit = false,
  disabled = false,
}) => {
  return (
    <div className={`w-full my-4 py-1 relative ${!disabled && "hover:top-1"}`}>
      <button
        className={`${styles.paragraph} w-full p-2 text-center rounded-[15px] border-[2px] border-[#ffffff] border-solid py-1 hover:bg-white hover:text-[#138958] transition ease-in-out disabled:opacity-[0.6] `}
        type={isSubmit ? "submit" : "button"}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
