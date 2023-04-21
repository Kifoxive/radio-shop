import { IProductCard, SearchProductParams } from "../redux/products/types";
import database from "./database";

const radioComponents: { [index: string]: string } = {
  c: "capacitors",
  r: "resistors",
  i: "inductors",
  vr: "var-resistors",
};

const itemsPerPage = 8;

export default class Api {
  public get(
    fullPath: string,
    { productName, type = "all", sortBy, pageNumber }: SearchProductParams
  ) {
    return new Promise<{ data: IProductCard[]; itemsPerPage: number }>(
      (resolve, reject) => {
        const [, path, id] = fullPath.split("/");
        if (path !== "components") return;
        setTimeout(handleRoutes, 650);

        function handleRoutes() {
          if (path === "components" && id === "recommend") {
            getRecommend();
          } else if (path === "components" && id) {
            const componentName = radioComponents[id.split("-")[0]];
            getById(id, componentName);
          } else getProducts(productName, type);
        }

        // route functions

        function getProducts(productName: string, type: string) {
          const itemsObj: IProductCard[] = JSON.parse(database)[
            productName
          ].filter((item: IProductCard) =>
            type === "all" ? true : item.type === type
          );
          const itemsLength = itemsObj.length;

          const sorted = sort(itemsObj, sortBy);
          const paginatedPart = paginate(sorted);
          ok(paginatedPart, itemsLength);
        }

        function getById(id: string, componentName: string) {
          const itemsObj: IProductCard[] = JSON.parse(database)[componentName];
          const item = itemsObj.find((item: IProductCard) => item.id === id);

          return item ? ok([item]) : reject("Product did not found");
        }

        function getRecommend() {
          const allItemsObj: { [index: string]: IProductCard[] } =
            JSON.parse(database);

          const itemsObj: IProductCard[] = [
            allItemsObj["capacitors"][0],
            allItemsObj["resistors"][0],
            allItemsObj["var-resistors"][0],
            allItemsObj["inductors"][0],
          ];

          return ok(itemsObj);
        }

        // helper functions
        function paginate(itemsObj: IProductCard[]) {
          return itemsObj.splice(pageNumber * itemsPerPage, itemsPerPage);
        }
        function sort(
          itemsObj: IProductCard[],
          property?: string
        ): IProductCard[] {
          if (!property) return itemsObj;
          switch (property) {
            case "price":
              return itemsObj.sort((a, b) => b.price - a.price);

            case "-price":
              return itemsObj.sort((a, b) => a.price - b.price);

            case "rating":
              return itemsObj.sort((a, b) => b.rating - a.rating);

            case "-rating":
              return itemsObj.sort((a, b) => a.rating - b.rating);
          }

          return itemsObj;
        }

        function ok(data: IProductCard[], itemsLength?: number) {
          resolve({
            data,
            itemsPerPage: itemsLength
              ? Math.floor(itemsLength / itemsPerPage)
              : 0,
          });
        }

        function error(error: string) {
          reject({ error });
        }
      }
    );
  }
}
