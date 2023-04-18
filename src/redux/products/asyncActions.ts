import { createAsyncThunk } from "@reduxjs/toolkit";
import { itemsApi } from "../../fakeApi/api";
import { IProductCard, SearchProductParams } from "./types";

export const fetchProducts = createAsyncThunk<
  { data: IProductCard[]; itemsPerPage: number },
  SearchProductParams
>("products/fetchProducts", async (parameters: SearchProductParams) => {
  const result = await itemsApi.getAll(parameters);
  return result;
});
