import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../../Api';
import {Formik} from "formik"
import { Text } from '@chakra-ui/react';

function ProductDetail() {

    const {product_id}=useParams();
    
    const{isLoading,isError,data,error}=useQuery(["admin:product",product_id],()=>fetchProduct(product_id))
  
    console.log(data)
    
    if (isLoading) {
        return <div>
            Loading...
        </div>
    }

    if (isError) {
        
        return <div>
            {error.message}
        </div>
    }

const handleSubmit=()=>{

    console.log("submit")


}

  return (
    <div>
 
  <Text fontSize="2xl">Edit</Text>

  <Formik
  initialValues={{

    title:data.title,
    description:data.description,
    price:data.price,
    images:data.images,
  }}

  onSubmit={handleSubmit}

  
  >








  </Formik>


    </div>
  )
}

export default ProductDetail