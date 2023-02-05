import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import {fetchProduct} from "../../Api"
import { Button, Text } from '@chakra-ui/react'
import moment from 'moment'
function ProductDetails() {
    const {product_id}=useParams();
    const { isLoading, error, data } = useQuery(["products",product_id], () =>fetchProduct(product_id))
    if (isLoading) return 'Loading...'
 
    if (error) return 'An error has occurred: ' + error.message

  return (
   
    <div>
        <Button colorScheme="pink">Add to basket</Button>
        <Text mt={3}>{data.title}</Text>
       <Text> {moment(data.createdAt).format("DD/MM/YYYY")}</Text>
        <p>{data.description}</p>
    </div>
    
    
    
  )
}

export default ProductDetails