import { createSlice } from "@reduxjs/toolkit";
// import { toast } from 'react-toastify'
const initialState ={
    datas:localStorage.getItem("datas") ?
    JSON.parse(localStorage.getItem("datas")):
    [],
    error:null,
    isLoading:true,
    filteredProductss:[],
    data:{}
}
export const getProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  getProducts (state, action) {
    const newState = {
      ...state,
      datas: action.payload,
      isError: null,
      isLoading: false,
    }
    localStorage.setItem("datas", JSON.stringify(state.datas))
    return newState;
  },
  isError: function(state, action) {
    
    return{
      ...state,
      error: action.payload,
      isLoading: false
    } 
    },
    getProduct(state, action) {
      const newData = {
        ...state,
        data: action.payload,
        isError: null,
        isLoading: false,
      }
      localStorage.setItem("datas", JSON.stringify(state.datas))
    return newData;
    }
  //   filteredProducts(state, action) {
  //     const { payload: category } = action;
  //       state.filteredProductss = state.datas.filter(product => product.category === category);
  // }
  } 
});

export const { getProducts, isError, filteredProducts, getProduct } = getProductsSlice.actions;
export default getProductsSlice.reducer;
