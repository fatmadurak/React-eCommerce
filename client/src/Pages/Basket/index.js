import React from 'react'
import {useBasket} from "../../contexts/BasketContext"
import {Alert,Button,Image} from "@chakra-ui/react"
import {Link} from  "react-router-dom"
function Basket() {

  const {items}=useBasket();
  return (
    <div>

     {items.length <1 && (

      <Alert status='warning'> You have not any items in your basket</Alert>



     )}

     {
       items.length >0 && (

         <>
         

            <ul>
            {
              items.map((item)=>(

                <li key={item.id}>

                  <Link to={`/product/${item.id}`}>{item.title}-{item.price} TL</Link>
                  <Image htmlWidth={300} borderRadius={'2xl'}   src={item.images[0]} alt="basket item"/>
                  <Button colorScheme="pink" mt={3}> Remove from basket</Button>
                </li>
              ))
             

            }
            </ul>
         
         
         
         </>

       )
     }




    </div>
  )
}

export default Basket