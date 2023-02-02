import { Box,Image,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return <Box p="5px" overflow="hidden" borderRadius="lg" borderWidth="1px"  >

   <Link to="#/">

    <Image src='https://picsum.photos/id/237/600/400' alt='product'/>
    <Box p="5">
   
    <Box>
   
    02/02/2023
    </Box>

    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">

    Macbook Pro

    </Box>

    <Box>100 TL</Box>
    </Box>
   </Link>

   <Button colorScheme="pink">Add to basket</Button>

  </Box>
}

export default Card