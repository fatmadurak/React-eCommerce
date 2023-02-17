import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import {fetchProduct} from "../../Api"
import { Button, Text,Box} from '@chakra-ui/react'
import moment from 'moment'
import ImageGallery from 'react-image-gallery';
import { useBasket } from '../../contexts/BasketContext'


function ProductDetails() {
    const {product_id}=useParams();
    console.log(product_id)
    const{items,AddToBasket}=useBasket();

    
   

    const { isLoading, error, data } = useQuery(["products",product_id], () =>fetchProduct(product_id))
    if (isLoading) return 'Loading...'
 
    if (error) return 'An error has occurred: ' + error.message

    const findItem=items.find((item)=>item._id===product_id)
    const images =data.images.map((url)=>({original:url}))
    
  return (
   
    <div>
      
        <Button colorScheme={findItem ? "green":"pink"} onClick={()=>AddToBasket(data,findItem)}>
          {findItem ? "Remove from basket":"Add to basket"}
          
        </Button>


        <Text mt={3}>{data.title}</Text>
       <Text> {moment(data.createdAt).format("DD/MM/YYYY")}</Text>
        <p>{data.description}</p>

       <Box mt={10} height={1000} width={1000}>

       <ImageGallery items={images}/>

       </Box>
    </div>
    
    
    
  )
}

export default ProductDetails