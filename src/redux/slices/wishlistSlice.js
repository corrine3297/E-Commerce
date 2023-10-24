import { createSlice } from "@reduxjs/toolkit";
import { getAllWishlistProducts,deleteWishlistProduct } from "../../services/allAPI";

const fetchWishlistProduct=async ()=>{
    const {data}= await getAllWishlistProducts();
    return data;
}

const wishlistProducts= await fetchWishlistProduct()

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [...wishlistProducts],
    reducers: {
        storeAddToWishlist: (state, action) => {
            state.push(action.payload)
        },
        storeDeleteFromWishlist:(state,action)=>{
            const deleteSingleProduct = async () => {
            const response = await deleteWishlistProduct(action.payload)}
        
            deleteSingleProduct()
            fetchWishlistProduct()
        }
    }

})
export const { storeAddToWishlist,storeDeleteFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer