import { Box,Image,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import moment from "moment"

function Card({item}) {
  return <Box p="5px" overflow="hidden" borderRadius="lg" borderWidth="1px"  >

   <Link to="#/">

    <Image src={item.images[0]} alt='product' width={300} height={200}/>
    <Box p="5">
   
    <Box>
   
    {moment(item.createdAt).format("DD/MM/YYYY")}
    </Box>

    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">

    {item.title}

    </Box>

    <Box>{item.price}TL</Box>
    </Box>
   </Link>

   <Button colorScheme="pink">Add to basket</Button>

  </Box>
}

export default Card