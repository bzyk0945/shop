import { products } from "./../assets/frontend_assets/assets";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/index.ts";
import { PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../types/index.ts";
interface ShopState {
  products: Product[];
  delivery_fee: number;
  currency: string;
  search: string;
  showSearch: boolean;
  cartItems: CartItem[];
}

const initialState: ShopState = {
  products,
  delivery_fee: 10,
  currency: "$",
  search: "",
  showSearch: false,
  cartItems: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setShowSearch: (state, action: PayloadAction<boolean>) => {
      state.showSearch = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIsExist = state.cartItems.find(
        (item) => item.product._id === action.payload.product._id,
      );
      if (itemIsExist) {
        itemIsExist.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => item.product._id !== action.payload)
    },
    updateCartQuantity: (state, action: PayloadAction<{id: string, quantity: number}>) => {
      const product = state.cartItems.find((item) => item.product._id === action.payload.id)
      if(product) {
        product.quantity = action.payload.quantity
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
    loadCartFromLocalStorage(state, action: PayloadAction<CartItem[]>) {
      state.cartItems = action.payload;
    },
  },
});

export const { setSearch, setShowSearch, addToCart, updateCartQuantity, removeProduct, clearCart, loadCartFromLocalStorage } = shopSlice.actions;

export default shopSlice.reducer;
