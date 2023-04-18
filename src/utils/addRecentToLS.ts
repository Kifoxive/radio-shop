import { IProductCard } from "redux/products/types";
import getRecentFromLS from "./getRecentFromLS";

const addRecentToLS = (item: IProductCard) => {
  const recent = getRecentFromLS();

  const alreadyExist: boolean =
    recent.filter((product) => product.id === item.id).length > 0;

  if (!alreadyExist) {
    if (recent.length > 3) recent.shift();
    recent.push(item);
    localStorage.setItem("recent", JSON.stringify(recent));
  }
};

export default addRecentToLS;
