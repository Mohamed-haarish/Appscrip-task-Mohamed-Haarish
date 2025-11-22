export interface Product {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  price: number;
  currency: string;
  inStock: boolean;
  customizable: boolean;
  material: string[];
  color: string;
  season: string[];
  pattern: string[];
  size: string[];
  dealFor: string;
}

export interface FilterState {
  customizable: boolean;
  dealFor: string;
  materials: string[];
  colors: string[];
  seasons: string[];
  patterns: string[];
  sizes: string[];
  inStock: boolean;
}

export type SortOption = 'recommended' | 'price-low' | 'price-high' | 'name-asc' | 'name-desc';

