import { IProductCard } from "redux/products/types";

export interface CartSliceState {
  items: ICartItem[];
  totalPrice: number;
  totalProductsCount: number;
}

export interface ICartItem {
  product: IProductCard;
  selectedOption: string | null;
  count: number;
}
