import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return <Box p="5px" overflow="hidden" borderRadius="lg" borderWidth="1px" >

   <Link to="#/">

    <Image src='https://picsum.photos/id/237/350/200' alt='product'/>
    <Box p="6">
   
    <Box>
   
    02/02/2023
    </Box>

    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">

    Macbook Pro

    </Box>
    </Box>
   </Link>

  </Box>
}

export default Card