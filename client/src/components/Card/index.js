import { Box,Image,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Card({item}) {
  return <Box p="5px" overflow="hidden" borderRadius="lg" borderWidth="1px"  >

   <Link to="#/">

    <Image src={item.images[0]} alt='product' width={300} height={200}/>
    <Box p="5">
   
    <Box>
   
    02/02/2023
    </Box>

    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">

    {item.title}

    </Box>

    <Box>{item.price}</Box>
    </Box>
   </Link>

   <Button colorScheme="pink">Add to basket</Button>

  </Box>
}

export default Card