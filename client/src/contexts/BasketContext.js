import {createContext,useContext,useState,useEffect} from "react"


const BasketContext=createContext();


const BasketProvider=({children})=>{

const {items,setItems}=useState([])

const values={

items,
setItems,

}

return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>



}

const useBasket=()=>useContext(BasketContext)


export{BasketProvider,useBasket}