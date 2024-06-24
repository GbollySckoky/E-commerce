import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
const initialState ={
    CartItems: localStorage.getItem("CartItems") 
    ? JSON.parse(localStorage.getItem("CartItems")) 
    : [],
    cartTotalQuantity:0,
    cartTotalAmount:0,
    // favourites:localStorage.getItem("favourites") 
    // ? JSON.parse(localStorage.getItem("favourites")) 
    // :[]
}

export const addCartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
        // logic to add ptoduct to cart
        const itemIndex = state.CartItems.findIndex((cart) => cart.id === action.payload.id)

        if (itemIndex >= 0) {
            // if ptoduct is greater than 0 add it the item to cart
            state.CartItems[itemIndex].cartQuantity += 1
            toast.info(`${state.CartItems[itemIndex].productName} product increased`,{
                position: "top-right"
            })
        }else{
            // if product is empty then update the cart
            const tempProduct = {...action.payload, cartQuantity: 1}
            state.CartItems.push(tempProduct);
            toast.success(`${action.payload.productName} product added`, {
                position: "top-right"
            })
        }
        // to store the cart items to local storage
        localStorage.setItem("CartItems", JSON.stringify(state.CartItems))
    },
    removeFromCart(state, action) {
        const nextCartItems = state.CartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id)
        state.CartItems = nextCartItems
        toast.error(`${action.payload.productName} product have been removed`, {
            position: "top-right"
        })
        localStorage.setItem("CartItems", JSON.stringify(state.CartItems))
    },
    deceraseProductCart (state, action) {
        const itemIndex = state.CartItems.findIndex(
        (CartItem) => CartItem.id === action.payload.id)

        if(state.CartItems[itemIndex].cartQuantity > 1){
            state.CartItems[itemIndex].cartQuantity -= 1

            toast.info(`Decreased ${action.payload.productName} shoppingbag quantity`, {
                position: "top-right"
            })
        }else if(state.CartItems[itemIndex].cartQuantity === 1){
            const nextCartItems = state.CartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id)
                state.CartItems = nextCartItems
                toast.error(`${action.payload.productName} product have been removed`, {
                    position: "top-right"
                })
        }
        localStorage.setItem("CartItems", JSON.stringify(state.CartItems))
    },
    increaseProductCart: (state, action) => {
        const existingItemIndex = state.CartItems.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex !== -1) {
          state.CartItems[existingItemIndex] = {
            ...state.CartItems[existingItemIndex],
            cartQuantity: state.CartItems[existingItemIndex].cartQuantity + 1
          };
          toast.success(`Increased ${action.payload.productName} shoppingbag quantity`)
        }
      },
    getTotals(state, action) {
        let total = 0;
        let quantity = 0;
    
        state.CartItems.forEach(cartItem => {
            const { productPrice, cartQuantity } = cartItem;
            const itemTotal = (cartItem.newPrice?.total || 0) * cartItem.cartQuantity;
    
            total += itemTotal;
            quantity += cartQuantity;
        });
    
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
        localStorage.setItem("CartItems", JSON.stringify(state.CartItems))
    }
    
    },
    
});

export const { addToCart, removeFromCart, deceraseProductCart, increaseProductCart, getTotals, cartTotalAmount, cartTotalQuantity } = addCartSlice.actions;
export default addCartSlice.reducer;
