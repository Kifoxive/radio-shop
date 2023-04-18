export interface IProductCard {
  title: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  optionName?: string;
  options?: string[];
  type: string;
  componentName: string;
  id: string;
}

export type SearchProductParams = {
  productName: string;
  type?: string;
  sortBy?: string;
  pageNumber: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ProductSliceState {
  items: IProductCard[];
  status: Status;
  itemsPerPage: number;
}
