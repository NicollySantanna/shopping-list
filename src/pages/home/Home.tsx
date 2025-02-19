import { useState } from "react";
import { mockProducts } from "../../mock/mockProducts";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import ProductForm from "../../components/productForm/ProductForm";
import ShoppingItem from "../../components/shoppingItem/ShoppingItem";
import { useShoppingList } from "../../hooks/useShoppingList";
import './Home.css'
import TotalPrice from "../../components/totalPrice/TotalPrice";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { shoppingList, addProduct, toggleChecked, incrementProduct, removeProduct } =
    useShoppingList();

  // Agrupa os produtos por categoria
  const productsByCategory = mockProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, (typeof mockProducts)[0][]>);

  return (
    <div className="container-main">
      <div className="container-form ">
        <ProductForm addProduct={addProduct} />
      <h2 className="text-xl font-bold mt-4">Lista de Compras</h2>
      {shoppingList.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onToggleChecked={toggleChecked}
          onIncrementProduct={incrementProduct}
          removeProduct={removeProduct}
        />
      ))}
      <TotalPrice products={shoppingList}/>
      </div>
      <div className="container-categorias">
  {Object.entries(productsByCategory).map(([category, products]) => {
    const isCategorySelected = selectedCategory === category;
    const filteredProducts = isCategorySelected
      ? mockProducts.filter((product) => product.category === category)
      : [];

    return (
      <div key={category} className="relative mb-10">
        <CategoryCard
          category={category}
          products={products}
          onSelectCategory={() =>
            setSelectedCategory((prev) => (prev === category ? null : category))
          }
        />
        {isCategorySelected && ( // Renderiza condicionalmente
          <ul className={`absolute top-full left-0 mt-2 w-full border rounded-md p-2 bg-white z-10 transition-all duration-300 ${
                isCategorySelected ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}>
            {filteredProducts.map((product) => (
              <li key={product.id} className="p-1">
                {product.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  })}
</div>
    </div>
    
  );
};

export default Home;
