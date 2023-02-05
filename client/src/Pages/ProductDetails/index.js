import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import {fetchProduct} from "../../Api"

function ProductDetails() {
    const {product_id}=useParams();
    const { isLoading, error, data } = useQuery(["products",product_id], () =>fetchProduct(product_id))
    if (isLoading) return 'Loading...'
 
    if (error) return 'An error has occurred: ' + error.message
    
  return (
    <div>ProductDetails {product_id} </div>
  )
}

export default ProductDetails