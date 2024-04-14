import { createSlice } from "@reduxjs/toolkit";


const WishlistSlice=createSlice({
    name:"wish",
    initialState:{
        wishlist:JSON.parse(localStorage.getItem("wishlist")) || []
    },
    reducers:{
        addWishlist:(state,action)=>{
            const existingIndex=state.wishlist.findIndex(item=>item.id===action.payload.id)
            if (existingIndex<0) {
                state.wishlist.push(action.payload)
                localStorage.setItem("wishlist",JSON.stringify(state.wishlist))
            }         
        },
        removeWishlist:(state,action)=>{
            state.wishlist=state.wishlist.filter(product=>product.id!==action.payload)
            localStorage.setItem("wishlist",JSON.stringify(state.wishlist))
        },
        addBasketfromWish:(state,action)=>{
            const basket=JSON.parse(localStorage.getItem("basket")) || []
            const existingIndex=basket.findIndex(item=>item.id===action.payload.id)
            if(existingIndex<0){
                basket.push(action.payload);
                localStorage.setItem("basket", JSON.stringify(basket));
                state.wishlist=state.wishlist.filter(product=>product.id!==action.payload.id)
                localStorage.setItem("wishlist",JSON.stringify(state.wishlist))
            }
        }
    }
})
export const {addWishlist,addBasketfromWish,removeWishlist}=WishlistSlice.actions
export default WishlistSlice.reducer