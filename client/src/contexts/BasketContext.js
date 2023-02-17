import {createContext,useContext,useState,useEffect} from "react"


const BasketContext = createContext();


const BasketProvider=({children})=>{
    
const [items,setItems]=useState([]);



const AddToBasket=(data,findItem)=>{

    if (!findItem) {
    
        return setItems((items)=>[data,...items])
      

    }
    
   const filtered= items.filter((item)=>item.id!==findItem.id)
    setItems(filtered)
    }

const values={items,
    setItems,
    AddToBasket,}





return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>}

const useBasket = () => useContext(BasketContext)


export{BasketProvider,useBasket}