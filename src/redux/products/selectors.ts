import { RootState } from "redux/store";

export const selectProducts = (state: RootState) => state.products.items;
export const getProductsStatus = (state: RootState) => state.products.status;
export const getItemsPerPage = (state: RootState) =>
  state.products.itemsPerPage;
