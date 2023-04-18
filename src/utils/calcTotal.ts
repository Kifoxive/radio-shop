import { ICartItem } from "redux/cart/types";

const calcTotal = (items: ICartItem[]) => {
  const { totalPrice, totalProductsCount } = items.reduce(
    (sum, obj): { totalPrice: number; totalProductsCount: number } => {
      return {
        totalPrice: obj.product.price * 100 * obj.count + sum.totalPrice,
        totalProductsCount: obj.count + sum.totalProductsCount,
      };
    },
    { totalPrice: 0, totalProductsCount: 0 }
  );

  return { totalPrice: totalPrice / 100, totalProductsCount };
};

export default calcTotal;
