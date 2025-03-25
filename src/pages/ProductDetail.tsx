import CategoryProductMatch from "@/components/CategoryProductMatch";
import ProductDetailCard from "@/components/ProductDetailCard";
import { useOutletContext } from 'react-router-dom';


const ProductDetail = ( ) => {
  const { addTotheBasket } = useOutletContext<{ addTotheBasket: (productNumber: number) => void }>();

  return (
    <div>
      <ProductDetailCard addTotheBasket={addTotheBasket}  />
      <CategoryProductMatch />
    </div>
  );
};

export default ProductDetail;
