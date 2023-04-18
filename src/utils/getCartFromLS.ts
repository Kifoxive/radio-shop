import { CartSliceState } from "../redux/cart/types";
import calcTotal from "./calcTotal";

const getCartFromLS = (): CartSliceState => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const { totalPrice, totalProductsCount } = calcTotal(items);

  return {
    items,
    totalPrice: totalPrice,
    totalProductsCount,
  };
};

export default getCartFromLS;
