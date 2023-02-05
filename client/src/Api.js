
import axios from "axios"
export const fetchProducts=async()=>{

const {data}= await axios.get("https://dummyjson.com/products")

return data;



}

export const fetchProduct=async(id)=>{

    const {data}= await axios.get(`https://dummyjson.com/products/${id}`)
    
    return data;
    
    
    
    }




