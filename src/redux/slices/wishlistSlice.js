import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        storeAddToWishlist: (state, action) => {
            state.push(action.payload)
        }
    }

})

export const { storeAddToWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer