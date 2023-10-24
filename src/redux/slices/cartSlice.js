import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCartProducts } from "../../services/allAPI";

const fetchCartData = async () => {
    const { data } = await getAllCartProducts();
    return data;
};

const cartproducts = await fetchCartData()

const cartSlice = createSlice({
    name: 'cart',
    initialState: [...cartproducts],
    reducers: {
        storeAddToCart: (state, action) => {
            state.push(action.payload)
        },
        storeDeleteToCart: (state, action) => {
            state.pop()
        }
    }
})

export const { storeAddToCart, storeDeleteToCart } = cartSlice.actions
export default cartSlice.reducer