import { CartSliceState, ICartItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS, calcTotal } from "../../utils/";

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      const findItem = state.items.find(
        (obj) =>
          obj.product.id === action.payload.product.id &&
          obj.selectedOption === action.payload.selectedOption
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          product: action.payload.product,
          selectedOption: action.payload.selectedOption,
          count: 1,
        });
      }

      const { totalPrice, totalProductsCount } = calcTotal(state.items);
      state.totalPrice = totalPrice;
      state.totalProductsCount = totalProductsCount;
    },

    minusItem(state, action: PayloadAction<ICartItem>) {
      const findItem = state.items.find(
        (obj) =>
          obj.product.id === action.payload.product.id &&
          obj.selectedOption === action.payload.selectedOption
      );

      if (findItem && findItem.count > 1) {
        findItem.count--;
      }

      const { totalPrice, totalProductsCount } = calcTotal(state.items);
      state.totalPrice = totalPrice;
      state.totalProductsCount = totalProductsCount;
    },

    removeItem(state, action: PayloadAction<ICartItem>) {
      state.items = state.items.filter(
        (obj) =>
          obj.product.id !== action.payload.product.id ||
          obj.selectedOption !== action.payload.selectedOption
      );

      const { totalPrice, totalProductsCount } = calcTotal(state.items);
      state.totalPrice = totalPrice;
      state.totalProductsCount = totalProductsCount;
    },

    setItemQuantity(state, action: PayloadAction<ICartItem>) {
      const findItem = state.items.find(
        (obj) =>
          obj.product.id === action.payload.product.id &&
          obj.selectedOption === action.payload.selectedOption
      );

      if (findItem && action.payload.count > 0) {
        findItem.count = action.payload.count;
      }
    },
  },
});

export const { addToCart, minusItem, removeItem, setItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
