import React from "react";
import styles from "../styles";

const Footer: React.FC = () => {
  return (
    <footer className="flex w-full justify-center bg-[#2b2b2b]">
      <div className="max-w-[1600px] py-8">
        <p className={`${styles.paragraph} text-center text-white`}>
          Copyright 2023 ©Kifoxive
        </p>
      </div>
    </footer>
  );
};

export default Footer;
