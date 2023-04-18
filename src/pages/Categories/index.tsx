import React from "react";
import styles from "../../styles";

import { Routes, Route } from "react-router";

import ProductContainer from "../../@components/ProductContainer";
import { pagesData } from "../../constants";

const Categories = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route
          path="/capacitors"
          element={<ProductContainer {...pagesData.capacitors} />}
        />
        <Route
          path="/resistors"
          element={<ProductContainer {...pagesData.resistors} />}
        />
        <Route
          path="/var-resistors"
          element={<ProductContainer {...pagesData.var_resistors} />}
        />

        <Route
          path="/inductors"
          element={<ProductContainer {...pagesData.inductors} />}
        />
      </Routes>
    </div>
  );
};

export default Categories;
