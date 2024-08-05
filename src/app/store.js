import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/productSlice'
import sliderSlice from '../features/sliderSlice'
import addCartSlice from '../features/addCartSlice'
import getProductsSlice from '../features/getProductsSlice'
export const store = configureStore({
  reducer: {
   slider: sliderSlice,
   products: productsSlice,
   Cart: addCartSlice,
  getProductsSlice: getProductsSlice
  },
})