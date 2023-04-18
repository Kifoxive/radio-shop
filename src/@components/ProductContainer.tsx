import React, { useState } from "react";
import styles from "../styles";

import { Status } from "../redux/products/types";
import ProductCard, { CardItemSkeleton } from "./ProductCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProducts } from "../redux/products/asyncActions";
import {
  getProductsStatus,
  selectProducts,
  getItemsPerPage,
} from "../redux/products/selectors";
import { Filter } from "../@components";
import Pagination from "./Pagination";

export interface IProductContainer {
  title: string;
  productName: string;
  filters: {
    text: string;
    property: string;
    options: { text: string; value: string }[];
  }[];
}

const ProductContainer: React.FC<IProductContainer> = ({
  title,
  productName,
  filters,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectProducts);
  const itemsPerPage = useAppSelector(getItemsPerPage);
  const isLoading = useAppSelector(getProductsStatus) === Status.LOADING;
  const [selectedFilters, setSelectedFilters] = useState<{
    [index: string]: string;
  }>({
    type: "all",
    sortBy: "rating",
  });

  // when page changes, the options are the same
  React.useEffect(() => {
    try {
      dispatch(
        fetchProducts({
          productName,
          ...selectedFilters,
          pageNumber: currentPage,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [currentPage]);

  // when optiones changes, the page is always first
  React.useEffect(() => {
    try {
      dispatch(
        fetchProducts({
          productName,
          ...selectedFilters,
          pageNumber: 0,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [selectedFilters]);

  const onFilterChange = (filterName: string, value: string) => {
    setSelectedFilters({ ...selectedFilters, [filterName]: value });
  };

  const skeletons = [...new Array(12)].map((_, index) => (
    <CardItemSkeleton key={index} />
  ));

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between flex-wrap p-8">
        <h3 className={`${styles.heading3} text-black sm:text-start mb-4`}>
          {title}
        </h3>
        <Filter filters={filters} onFilterChange={onFilterChange} />
      </div>

      <div className="flex flex-1 flex-wrap p-4">
        {isLoading
          ? [...skeletons]
          : items?.map((item) => <ProductCard key={item.id} {...item} />)}
      </div>

      <Pagination
        currentPage={currentPage + 1}
        itemsPerPage={itemsPerPage}
        onPageChange={(page: number) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
};

export default ProductContainer;
