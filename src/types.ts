export type Product = {
    id: number,
    name: string,
    price: number
}

export interface ShoppingItemProps {
    id: number;
    name: string;
    price: number;
    category: string;
    checked?: boolean;
    quantity?: number
  }