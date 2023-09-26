export interface ICountry {
  countryName: string;
  category: Categories;
  travelId: number;
}

export enum Categories {
  "WANT_TO_GO" = "WANT_TO_GO",
  "HAVE_BEEN" = "HAVE_BEEN",
  "LIKE" = "LIKE",
}