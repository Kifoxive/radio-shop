import React from "react";

import { loading } from "../assets";

const Preload: React.FC = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center spin bg-slate-700 opacity-80 z-50">
      <div>
        <img className="w-[10vw] animate-spin" src={loading} alt="preloader" />
      </div>
    </div>
  );
};

export default Preload;
