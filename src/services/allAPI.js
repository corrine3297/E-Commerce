import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";



export const getAllProducts = async ()=>{
    // call get http request to http://localhost:4000/products to get videos from json server return response to View component
    return await commonAPI("GET",`${serverURL}/products`,"")
}