
import axios from "axios"




export const fetchProducts=async()=>{

const {data}= await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products`)

return data;



}

export const fetchProduct=async(id)=>{

    const {data}= await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}products/${id}`)
    
    return data;
    
    
    }


    export const fetchRegister=async(input)=>{

        const {data}= await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/users`,input)
        
        return data;
        
        
 }


 export const fetchMe=async()=>{

 const {data}=await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/users`)

 return data;

 }



