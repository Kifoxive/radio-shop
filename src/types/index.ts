export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

export type SortItem = {
  text: string;
  value: SortPropertyEnum;
};
