import { Product } from "../types"

type Props = {
    product: Product;
    removeProduct: (id: number) => void;
};

const ProductItem: React.FC <Props> = ({ product }) => {
  return (
    <li className="flex justify-between border p-2 mb-2">
      <span>{product.name} - R$ {product.price.toFixed(2)}</span>
    </li>
  )
}

export default ProductItem