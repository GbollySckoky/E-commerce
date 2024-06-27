import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    favourites: localStorage.getItem("favourites") 
    ? JSON.parse(localStorage.getItem("favourites")) 
    : [],
};

export const addFavouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addToFavourites(state, action) {
            const isFavourite = state.favourites.some((favourite) => favourite.id === action.payload.id);

            if (!isFavourite) {
                state.favourites.push(action.payload);
                toast.success(`${action.payload.productName} product added`, {
                    position: "top-right"
                });
                localStorage.setItem("favourites", JSON.stringify(state.favourites));
            }
        },
        removeFromFavourites(state, action) {
            const nextFavourites = state.favourites.filter(
                (favourite) => favourite.id !== action.payload.id
            );

            state.favourites = nextFavourites;
            toast.error(`${action.payload.productName} product has been removed`, {
                position: "top-right"
            });
            localStorage.setItem("favourites", JSON.stringify(state.favourites));
        }
    },
});

export const { addToFavourites, removeFromFavourites } = addFavouritesSlice.actions;
export default addFavouritesSlice.reducer;
