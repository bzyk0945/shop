import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../types/index.ts";
import Title from "./Title";
import { RootState } from "../store";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const [bestsellerProducts, setBestsellerProducts] = useState<Product[]>([]);
  const products = useSelector((state: RootState) => state.shop.products);

  useEffect(() => {
    const bestsellerProducts = products.filter((product) => product.bestseller === true)
    setBestsellerProducts(
        bestsellerProducts.slice(0, 5)
    );
  }, [products]);
  return (
    <section className="my-10">
      <Title text1="best" text2="sellers" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestsellerProducts.map((product) => (
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

export default BestSeller;
