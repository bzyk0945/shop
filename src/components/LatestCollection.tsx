import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Product } from "../types/index.ts";


const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState<Product[]>([])
  const products = useSelector((state: RootState) => state.shop.products);
  
  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [products])
  return (
    <section className="my-10">
      <Title text1="latest" text2="collection" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            img={product.image[0]}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
