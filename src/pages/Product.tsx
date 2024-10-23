import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import StarIcon from "../assets/frontend_assets/star_icon.png";
import StarDullIcon from "../assets/frontend_assets/star_dull_icon.png";
import { CartItem } from "../types";
import { addToCart } from "../store/shopSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const products = useSelector((state: RootState) => state.shop.products);

  const handleImageClick = (img: string) => {
    setCurrentImage(img);
  };
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    if (product) {
      const cartItem: CartItem = {
        product,
        quantity: 1,
        size: selectedSize,
      };
      dispatch(addToCart(cartItem));
    }
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    const fetchProduct = async () => {
      products.map((product) => {
        if (product._id === id) {
          setProduct(product);
        }
      });
    };
    fetchProduct();
  }, [id, products]);

  return (
    <section className="my-10">
      <div className="flex flex-col gap-12 sm:flex-row">
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex w-full gap-4 sm:w-[18.7%] sm:flex-col sm:justify-between">
            {product?.image.map((img, index) => (
              <img
                src={img}
                key={index}
                alt={product?.name}
                onClick={() => handleImageClick(img)}
                className="w-[24%] flex-shrink-0 cursor-pointer sm:mb-3 sm:w-full"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={currentImage ? currentImage : product?.image[0]}
              alt={product?.name}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-medium">{product?.name}</h1>
          <div className="mt-2 flex items-center gap-1">
            <img src={StarIcon} alt="star icon" className="w-4" />
            <img src={StarIcon} alt="star icon" className="w-4" />
            <img src={StarIcon} alt="star icon" className="w-4" />
            <img src={StarIcon} alt="star icon" className="w-4" />
            <img src={StarDullIcon} alt="star dull icon" className="w-4" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">${product?.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{product?.description}</p>
          <div className="my-8 flex flex-col gap-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              <button
                className={`border bg-gray-100 px-4 py-2 ${selectedSize === "S" && "border-orange-500"}`}
                onClick={() => handleSizeClick("S")}
              >
                S
              </button>
              <button
                className={`border bg-gray-100 px-4 py-2 ${selectedSize === "M" && "border-orange-500"}`}
                onClick={() => handleSizeClick("M")}
              >
                M
              </button>
              <button
                className={`border bg-gray-100 px-4 py-2 ${selectedSize === "L" && "border-orange-500"}`}
                onClick={() => handleSizeClick("L")}
              >
                L
              </button>
              <button
                className={`border bg-gray-100 px-4 py-2 ${selectedSize === "XL" && "border-orange-500"}`}
                onClick={() => handleSizeClick("XL")}
              >
                XL
              </button>
              <button
                className={`border bg-gray-100 px-4 py-2 ${selectedSize === "XXL" && "border-orange-500"}`}
                onClick={() => handleSizeClick("XXL")}
              >
                XXL
              </button>
            </div>
          </div>
          <button
            className="bg-black px-8 py-3 text-sm uppercase text-white active:bg-gray-700"
            onClick={handleAddToCart}
          >
            add to cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="mt-5 flex flex-col gap-1 text-sm text-gray-500">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
