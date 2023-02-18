import React from 'react'
import {useBasket} from "../../contexts/BasketContext"
import {Alert,Button,Image,Box} from "@chakra-ui/react"
import {Link} from  "react-router-dom"
function Basket() {

  const {items}=useBasket();
  const total=items.reduce((acc,obj)=>acc+obj.price,0)
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

                  <Link to={`/product/${item.id}`}>{item.title}-{item.price} TL
                  <Image htmlWidth={300} borderRadius={'2xl'}   src={item.images[0]} alt="basket item"/>
                  </Link>
                  <Button colorScheme="pink" size={'md'}   mt={3}> Remove from basket</Button>
                </li>
              ))
             

            }
            </ul>
         
         
         
         </>

       )
     }

      <Box mt={10}>
        
        Total:{total}

      </Box>


    </div>
  )
}

export default Basket