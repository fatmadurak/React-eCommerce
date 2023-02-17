import {createContext,useContext,useState,useEffect} from "react"


const BasketContext=createContext();


const BasketProvider=({children})=>{

const {items,setItems}=useState([])


const AddToBasket=(data,findItem)=>{

if(!findItem){

setItems((prev)=>[...prev,data])

}

const filtered=items.filter((item)=>item.id!=data.id)
setItems(filtered)

}


const values={

items,
setItems,

}

return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>



}

const useBasket=()=>useContext(BasketContext)


export{BasketProvider,useBasket}