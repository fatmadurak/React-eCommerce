import { Box,Image,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import moment from "moment"
import { useBasket } from '../../contexts/BasketContext'

function Card({itemCard}) {

  const{items,AddToBasket}=useBasket();
  const findItem=items.find((item)=>item.id===itemCard.id)
  
  
  return <Box p="5px" overflow="hidden" borderRadius="lg" borderWidth="1px"  >

   <Link to={`product/${itemCard.id}`}>

    <Image src={itemCard.images[0]} alt='product' width={300} height={200}/>
    <Box p="5">
   
    <Box>
   
    {moment(itemCard.createdAt).format("DD/MM/YYYY")}
    </Box>

    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">

    {itemCard.title}

    </Box>

    <Box>{itemCard.price}TL</Box>
    </Box>
   </Link>

   <Button colorScheme={findItem ? "green":"pink"} onClick={()=>AddToBasket(itemCard,findItem)}>{findItem ? "Remove from basket":"Add to basket"}</Button>

  </Box>
}

export default Card