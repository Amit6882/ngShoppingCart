export interface Products {
    name: string;
    subCategory: SubCategory[];
  }

export interface SubCategory {
  name: string;
  price: number;
  num?: number;
}