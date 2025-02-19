// src/components/ShoppingItem.tsx
import { ShoppingItemProps } from '../../types'

interface ShoppingItemComponentProps {
  item: ShoppingItemProps;
  onToggleChecked: (id: number) => void;
  onIncrementProduct: (id: number) => void;
  removeProduct: (id: number) => void
}

const ShoppingItem: React.FC<ShoppingItemComponentProps> = ({
  item,
  onToggleChecked,
  onIncrementProduct,
  removeProduct,
}) => {

  return (
    <div 
    className={`flex items-center justify-between border rounded-md p-2 mb-2 cursor-pointer input-items ${item.checked ? 'line-through opacity-50' : ''}`}
    onClick={() => onToggleChecked(item.id)}>
      <div>
        <span>{item.name}</span>
        <span className="ml-2">R$ {item.price.toFixed(2)}</span>
        <span className="ml-2">Quantidade: {item.quantity || 1}</span>
      </div>
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onIncrementProduct(item.id)
          }}
          className="bg-blue-500 text-white inline-flex items-center w-8 h-8 p-3 mx-1 transition ease-in-out delay-75 hover:bg-blue-600 text-sm font-medium rounded-sm hover:-translate-y-1 hover:scale-11"
        >
          +1
        </button>
        <button
        onClick={(e) => {
          e.stopPropagation()
          removeProduct(item.id)
        }}
         className='inline-flex items-center w-8 h-8 p-3 mx-1 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-sm hover:-translate-y-1 hover:scale-11'>
            x
        </button>
      </div>
    </div>
  );
};

export default ShoppingItem;