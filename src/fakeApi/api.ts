import Api from "./server";
import { IProductCard, SearchProductParams } from "../redux/products/types";

const instance = new Api();

export const itemsApi = {
  getAll(parameters: SearchProductParams) {
    return instance.get("/components", parameters);
  },
  getOne(id: string) {
    return instance.get(`/components/${id}`, {} as SearchProductParams);
  },
  getRecommend() {
    return instance.get(`/components/recommend`, {} as SearchProductParams);
  },
};
