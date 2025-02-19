import { useState } from "react";
import {ShoppingItemProps} from '../types'

export const useShoppingList = () => {
const [shoppingList, setShoppingList] = useState<ShoppingItemProps[]>([]);

const addProduct = (product: Omit<ShoppingItemProps, "id" | "checked">) => {
  
const newProduct = {...product, id: Date.now(), checked: false};
setShoppingList( (prevList) => [...prevList, newProduct] );
};

const removeProduct = (id: number) => {
    setShoppingList((prevList) => prevList.filter((product) => product.id !== id));
  }

  const toggleChecked = (id: number) => {
    setShoppingList((prevList) => 
        prevList.map((product) => 
            product.id === id ? {...product, checked: !product.checked} : product))
  }

  const incrementProduct = (id: number) => {
    setShoppingList((prevList) =>
      prevList.map((product) =>
        product.id === id
          ? { ...product, quantity: (product.quantity || 1) + 1 }
          : product
      )
    );
  };

  const totalPrice = shoppingList.reduce((total, product) => total + product.price, 0);

return {
    shoppingList,
    addProduct,
    removeProduct,
    toggleChecked,
    totalPrice,
    incrementProduct
}}