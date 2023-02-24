import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../../Api';
import {Formik,FieldArray} from "formik"
import { Text,Box, FormControl,FormLabel,Input,Textarea,Button} from '@chakra-ui/react';


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


{

  ({handleSubmit,errors,touched,handleChange,handleBlur,values,isSubmitting})=>
  <>
  
  <Box>

    <Box my={5} textAlign="left">

     <form onSubmit={handleSubmit}>
 
  
      <FormControl>

        <FormLabel>Title </FormLabel>
        <Input name="title" onChange={handleChange} onBlur={handleBlur} value={values.title} disabled={isSubmitting}/>
      </FormControl>
    

    
      <FormControl mt={4}>

        <FormLabel>Description </FormLabel>
        <Textarea name="description" onChange={handleChange} onBlur={handleBlur} value={values.description} disabled={isSubmitting}/>
      </FormControl>
      


      <FormControl mt={4}>

        <FormLabel>Price </FormLabel>
        <Input name="price" onChange={handleChange} onBlur={handleBlur} value={values.price} disabled={isSubmitting}/>
      </FormControl>


      <FormControl mt={4}>

      <FormLabel>images </FormLabel>
      <FieldArray
      
      name="images"
      render={(arrayHelpers)=>
    
         <div>
            {

                values.images && values.images.map((image,index)=>
                
                 <div key={index}>
                    <Input  name={`images.${index}`}
                     value={image}
                     disabled={isSubmitting}
                     onChange={handleChange}
                     width="3xl"
                    
                    
                    />

                    <Button ml="4" type='button' colorScheme="red" onClick={()=>arrayHelpers.remove(index)}>Remove</Button>
                 </div>
                
                )
            }



   
        <Button mt={5} onClick={()=>arrayHelpers.push("")}> Add a image</Button>



         </div>
    
    
    }
      
      />

      </FormControl>


     </form>



    </Box>




  </Box>

  
  
  
  
  </>


}





  </Formik>


    </div>
  )
}

export default ProductDetail