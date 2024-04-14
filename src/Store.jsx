import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./Slice/BasketSlice";
import WishlistSlice from "./Slice/WishlistSlice";


export const Store=configureStore({
    reducer:{
        basket:BasketSlice,
        wishlist:WishlistSlice
    }
})