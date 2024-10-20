import { createSlice } from "@reduxjs/toolkit";
import { products } from "../assets/frontend_assets/assets.ts";
import { Product } from "../types/index.ts";

interface ShopState {
  products: Product[];
  delivery_fee: number;
  currency: string;
}

const initialState: ShopState = {
  products,
  delivery_fee: 10,
  currency: "$",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

export default shopSlice.reducer;
