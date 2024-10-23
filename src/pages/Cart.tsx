import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import BinIcon from "../assets/frontend_assets/bin_icon.png";
import {
  updateCartQuantity,
  removeProduct,
  clearCart,
  loadCartFromLocalStorage,
} from "../store/shopSlice";
import { useState, useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.shop.cartItems);
  const deliveryFee = useSelector(
    (state: RootState) => state.shop.delivery_fee,
  );

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      dispatch(loadCartFromLocalStorage(JSON.parse(savedCartItems)));
    }
  }, [dispatch]);

  const handleClickBtnCheckout = () => {
    if (cartItems.length === 0) {
      return alert("You have an empty cart");
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch(clearCart());
    setIsModalOpen(true);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateCartQuantity({ id, quantity }));
  };

  const handleRemoveProduct = (id: string) => {
    dispatch(removeProduct(id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );
  const total = subtotal + deliveryFee;

  return (
    <section className="my-10">
      <h1 className="text-2xl font-medium">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="mt-5">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4 border-b border-t py-4 text-gray-700 sm:grid-cols-[4fr_2fr_0.5fr]"
            >
              <div className="flex items-start gap-6">
                <img
                  src={item.product.image[0]}
                  alt={item.product.name}
                  className="w-16 object-cover sm:w-20"
                />
                <div>
                  <p className="text-xs font-medium sm:text-lg">
                    {item.product.name}
                  </p>
                  <div className="mt-2 flex items-center gap-5">
                    <p>${item.product.price}</p>
                    <p className="border bg-slate-50 px-2 sm:px-3 sm:py-1">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                type="number"
                min={1}
                value={item.quantity}
                className="max-w-10 border px-1 py-1 sm:max-w-20 sm:px-2"
                onChange={(e) =>
                  handleQuantityChange(
                    item.product._id,
                    parseInt(e.target.value),
                  )
                }
              />
              <img
                src={BinIcon}
                alt="bin icon"
                className="mr-4 w-4 cursor-pointer sm:w-5"
                onClick={() => handleRemoveProduct(item.product._id)}
              />
            </div>
          ))}
          <div className="my-20 ml-auto flex w-full flex-col justify-end sm:w-[450px]">
            <div className="flex justify-between border-b py-2">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p>Shipping</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <button
              className="my-8 cursor-pointer bg-black px-8 py-3 text-sm text-white"
              onClick={handleClickBtnCheckout}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">
              Thanks for shopping!
            </h2>
            <p>Your order has been placed successfully.</p>
            <button
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
