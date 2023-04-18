import React from "react";
import styles from "../styles";

import { Link } from "react-router-dom";

export interface ICategoryCard {
  text: string;
  link: string;
  imageUrl: string;
}

const CategoryCard: React.FC<ICategoryCard> = ({ text, link, imageUrl }) => {
  return (
    <Link
      to={link}
      className="basis-[700px] box-border m-[1rem] flex justify-between items-center sm:in2row lg:in3row xl:in4row px-8 py-4 bg-white shadow-md hover:text-sky-400 relative hover:top-1"
    >
      <p className={`${styles.paragraph} uppercase`}>{text}</p>
      <img className="object-contain h-[50px]" src={imageUrl} alt={text} />
    </Link>
  );
};

export default CategoryCard;
