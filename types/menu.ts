export interface MenuItemVariation {
  name: string;
  price: string | number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  subcategory?: string | null;
  description?: string | null;
  price: string | number | null;
  currency: "PKR";
  variations?: MenuItemVariation[];
  image?: string | null;
  sourceImage?: string;
  isRamadanSpecial: boolean;
  timing?: string | null;
  servingSize?: string | null;
  itemsIncluded?: string[];
  needsConfirmation?: boolean;
  featured?: boolean;
}

export interface RamadanCategoryGroup {
  name: string;
  items: string[];
}
