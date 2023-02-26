import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { fetchProduct,updateProduct } from '../../../Api';
import {Formik,FieldArray} from "formik"
import { Text,Box, FormControl,FormLabel,Input,Textarea,Button} from '@chakra-ui/react';
import validationSchema from './Validations';
import { message } from 'antd';

function NewProduct() {

  
const handleSubmit=async(values,bag)=>{


  


}

  return (
    <div>
 
  <Text fontSize="2xl">New Product</Text>

  <Formik
  initialValues={{

    title:"",
    description:"",
    price:"",
    images:[],
  }}

  validationSchema={validationSchema}

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
        <Input name="title" onChange={handleChange} onBlur={handleBlur} value={values.title} disabled={isSubmitting} isInvalid={touched.title && errors.title}/>
      </FormControl>
    

    
      <FormControl mt={4}>

        <FormLabel>Description </FormLabel>
        <Textarea name="description" onChange={handleChange} onBlur={handleBlur} value={values.description} disabled={isSubmitting} isInvalid={touched.description && errors.description}/>
      </FormControl>
      


      <FormControl mt={4}>

        <FormLabel>Price </FormLabel>
        <Input name="price" onChange={handleChange} onBlur={handleBlur} value={values.price} disabled={isSubmitting} isInvalid={touched.price && errors.price}/>
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


     <Button mt={4} width="full" type='submit' isLoading={isSubmitting}> Update</Button>

     </form>



    </Box>




  </Box>

  
  
  
  
  </>


}





  </Formik>


    </div>
  )
}

export default NewProduct