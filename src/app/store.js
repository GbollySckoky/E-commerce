import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/productsSlice'
import sliderSlice from '../features/sliderSlice'
import addCartSlice from '../features/addCartSlice'
import addFavouritesSlice from '../features/addFavouritesSlice'
import getProductsSlice from '../features/getProductsSlice'
export const store = configureStore({
  reducer: {
   slider: sliderSlice,
   products: productsSlice,
   Cart: addCartSlice,
  favourites: addFavouritesSlice,
  getProductsSlice: getProductsSlice
  },
})