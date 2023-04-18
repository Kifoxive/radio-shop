import { IProductCard } from "redux/products/types";

const getRecentFromLS = (): IProductCard[] => {
  const data = localStorage.getItem("recent");
  const items: IProductCard[] = data ? JSON.parse(data) : [];

  return items;
};

export default getRecentFromLS;
