import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { getAllCartProducts } from "../../services/allAPI";

let value

// const fetchdata = (url) => {
//     const [data, setData] = useState(null)
//     useEffect(() => {
//         fetch(url).then(res => {
//             // console.log(res)
//             res.json().then(result => {
//                 // console.log(result)
//                 setData(result.products)
//             })
//         })
//     }, [url])
//     return data
// }

// fetchdata('https://dummyjson.com/carts')
// console.log(data);
 const fetchCartData = async () => {
    const {data} = await getAllCartProducts();
    // const data = await response.json();
    console.log(data);

    return data;
  };
  const cartproducts=fetchCartData().then(res=>{
    console.log(res)
  })
  
 console.log(cartproducts)
  

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
      },
    reducers: {
        storeAddToCart: (state, action) => {
            state.data.push(action.payload)
        }
    }
})

export const { storeAddToCart } = cartSlice.actions
export default cartSlice.reducer