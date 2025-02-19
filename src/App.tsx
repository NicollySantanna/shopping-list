import { useState } from "react";

import ProductItem from "./components/ProductItem";
import { Product } from "./types";
import Home from "./pages/Home";

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
    <Home/>
      <div className="container mx-auto p-4">
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} removeProduct={removeProduct} />
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
