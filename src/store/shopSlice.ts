import { createSlice } from "@reduxjs/toolkit";
import { products } from "../assets/frontend_assets/assets.ts";
import { Product } from "../types/index.ts";
import { PayloadAction } from "@reduxjs/toolkit";
interface ShopState {
  products: Product[];
  delivery_fee: number;
  currency: string;
  search: string;
  showSearch: boolean;
}

const initialState: ShopState = {
  products,
  delivery_fee: 10,
  currency: "$",
  search: "",
  showSearch: true,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setShowSearch: (state, action: PayloadAction<boolean>) => {
      state.showSearch = action.payload
    }
  },
});

export const {setSearch, setShowSearch} = shopSlice.actions

export default shopSlice.reducer;
