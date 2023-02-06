
import axios from "axios"
export const fetchProducts=async()=>{

const {data}= await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}`)

return data;



}

export const fetchProduct=async(id)=>{

    const {data}= await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/${id}`)
    
    return data;
    
    
    
    }




