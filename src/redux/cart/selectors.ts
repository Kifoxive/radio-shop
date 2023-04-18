import { RootState } from "redux/store";

export const getCartItems = (state: RootState) => state.cart.items;
export const getTotalPrice = (state: RootState) => state.cart.totalPrice;
export const getTotalProductsCount = (state: RootState) =>
  state.cart.totalProductsCount;
