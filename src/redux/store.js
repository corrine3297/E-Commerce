import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import wishlistSlice from './slices/wishlistSlice';

const store = configureStore({
    reducer: {
        cartReducer: cartSlice,
        wishlistReducer: wishlistSlice
    }
})

export default store;