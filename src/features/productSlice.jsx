import { createSlice } from "@reduxjs/toolkit";
import Products from '../components/reusable/Datas';

export const sliderSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts: []
  },
  reducers: {
    filteredProduct(state, action) {
        const { payload: category } = action;
        // Filter Products based on category and update filteredProduct array
        state.filteredProducts = Products.filter(product => product.category === category);
    }
  },
});

export const { filteredProduct } = sliderSlice.actions;
export default sliderSlice.reducer;
