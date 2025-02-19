import { Product } from "../../types"

interface CategoryCardProps {
category: string;
products: Omit<Product, 'price'>[];
onSelectCategory: (category: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    category,
    products,
    onSelectCategory,
  }) => {
    return (
      <div
        className=" w-40 h-40 text-center border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-50"
        onClick={() => onSelectCategory(category)}
      >
        <h3 className="font-bold text-lg">{category}</h3>
        <p>{products.length} produtos</p>
      </div>
    );
  };
  
export default CategoryCard