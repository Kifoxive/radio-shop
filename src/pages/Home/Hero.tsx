import React from "react";
import styles from "../../styles";

import { transistor } from "../../assets";

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full px-2 md:px-20 h-[30vh] md:h-[60vh]">
      <div className="flex-1 text-center">
        <h1 className={`${styles.heading1}`}>Radio shop</h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src={transistor}
          alt="transistor"
          className="h-[100px] md:h-[200px]"
        />
      </div>
    </div>
  );
};

export default Hero;
