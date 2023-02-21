export interface Product {
  id: string;
  name: string;
  manufacturer: string;
  shortDescription: string;
  description: string;
  price: number;
  pricingRule: unknown;
  attributes: any[];
  attributesMap: unknown;
  subsidyTypes: string[];
  heatingSettings: unknown;
  category: Category;
  subCategory: Category;
  childProducts: unknown[];
  imageSet: ImageSet[];
  isDigital: boolean;
  taxRate: unknown;
  quantity: number;
}

export interface Category {
  color: string;
  createdAt: string;
  description: string;
  id: string;
  name: string;
  priority: number;
  type: number;
  updatedAt: string;
}
export interface ImageSet {
  fileName: string;
  id: string;
  imageHeight: number;
  imageType: number;
  imageWidth: number;
  targetDevices: number[];
  title: string;
  url: string;
}
