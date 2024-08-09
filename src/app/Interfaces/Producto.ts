export interface Producto{
  id?: number;
  image: string;
  title: string;
  price: number;
  isEditing: boolean;
  description: string;
  available: boolean;
  code: string;
  category: string;
  isOnSale: boolean;
  isFeatured: boolean;
  isFavorite: boolean;
}

