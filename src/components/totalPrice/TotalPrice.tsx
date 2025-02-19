import { ShoppingItemProps } from "../../types"

type Props = {
    products: ShoppingItemProps[];
};

const TotalPrice: React.FC<Props> = ({ products }) => {
    const total = products.reduce((sum, product) => sum + product.price * (product.quantity || 1), 0);
    return <h2 className="text-xl font-bold mt-4">Total: R$ {total.toFixed(2)}</h2>;
  };
  

export default TotalPrice