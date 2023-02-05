import React from 'react'
import Card from '../../components/Card'
import { Grid} from '@chakra-ui/react'
import {useQuery}from "react-query"
import {fetchProducts} from "../../Api"

function Products() {

  const { isLoading, error, data } = useQuery('products',fetchProducts)


if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message

console.log("data",data)
  return (
    <div>

    

    <Grid templateColumns="repeat(4,1fr)" gap={2}>
   
       {

             data.products.map((item,key) =>( <Card item={item} key={item.id}/>)
          
            )

       }

    </Grid>


    </div>
  )
}

export default Products