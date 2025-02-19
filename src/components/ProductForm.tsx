// src/components/ProductForm.tsx
import { useState } from "react";
import { ShoppingItemProps } from '../types'
import { mockProducts } from '../mock/mockProducts'
import './ProductForm.css'

type Props = {
  addProduct: (product: Omit<ShoppingItemProps, "id" | "checked">) => void;
};

const ProductForm: React.FC<Props> = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [suggestions, setSuggestions] = useState<Omit<ShoppingItemProps, "price" | "checked">[]>([]);

  // Filtra os produtos com base no valor do input
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    if (value) {
      const filteredProducts = mockProducts.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredProducts);
    } else {
      setSuggestions([]);
    }
  };

  // Seleciona um produto da lista de sugestões
  const handleSelectProduct = (product: Omit<ShoppingItemProps, "price" | "checked">) => {
    setName(product.name); // Preenche apenas o nome do produto
    setSuggestions([]); // Limpa a lista de sugestões
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || price <= 0) return;
    addProduct({
      name,
      price,
      category: "", // Adicione a categoria se necessário
    });
    setName("");
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Produto"
          value={name}
          onChange={handleNameChange}
          className="border p-2 mr-2 rounded-md"
        />
        {suggestions.length > 0 && (
          <ul className="absolute z-10 bg-white border border-gray-300 w-300 mt-1 rounded shadow-lg">
            {suggestions.map((product) => (
              <li
                key={product.id}
                onClick={() => handleSelectProduct(product)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {product.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="border p-2 mr-2 rounded-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Adicionar
      </button>
    </form>
  );
};

export default ProductForm;