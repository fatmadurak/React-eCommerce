
import axios from "axios"




export const fetchProducts=async()=>{

const {data}= await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products`)

return data;



}

export const fetchProduct=async(id)=>{

    const {data}= await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products/${id}`)
    
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


 export const fetchLogout=async()=>{

const {data}= await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/users`)

return data;

 }

 

export const getAllUsers = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/users`);

    return data;
}

export const controllerUserMail = async (mail) => {
 
    const allUser = await getAllUsers();

 
    return allUser.find(user => user.email === mail);

};


export const fetchLogin = async (email) => {
    const allUser = await getAllUsers();
    const user = allUser.find((item) => item.email === email);
    
    return user;
}

export const controllerUserPassword = async (password) => {
    const allUser = await getAllUsers();

    return allUser.find(user => user.password === password);
}



export const postOrder=async(input)=>{


const data= await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/orders`,input)

return data;

}