import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductSliceState, Status, IProductCard } from "./types";
import { fetchProducts } from "../../redux/products/asyncActions";

const initialState: ProductSliceState = {
  items: [],
  status: Status.LOADING,
  itemsPerPage: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IProductCard[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload.data;
      state.itemsPerPage = action.payload.itemsPerPage;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
