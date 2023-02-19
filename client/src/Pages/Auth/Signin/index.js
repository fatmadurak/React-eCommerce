import React from 'react'
import { Flex,Box,Heading,FormControl,FormLabel,Input,Button,Alert } from '@chakra-ui/react'
import {useFormik} from "formik"
import validationSchema from './validations'

import {useAuth} from "../../../contexts/AuthContext"

import { useNavigate } from 'react-router-dom'

import { controllerUserMail } from '../../../Api'

import { fetchLogin } from '../../../Api'
import { controllerUserPassword } from '../../../Api'


function Signin() {

  const navigate=useNavigate();

  const{login}=useAuth()

   const formik=useFormik({

    initialValues:{

    email:"",
    password:"",

       

    },
   

    validationSchema,
   
    onSubmit: async (values , bag) => {
     
      const checkUserMail = await controllerUserMail(values.email);
      const checkUserPassword = await controllerUserPassword(values.password);

      if(checkUserMail === undefined){
        bag.setErrors({email: 'E-mail adresi bulunamadı'});
      } else if(checkUserPassword === undefined){
        bag.setErrors({password :"E-mail veya parola hatalı"});
      } else {
        const loginResponse = await fetchLogin(values.email);                     
            
            login(loginResponse);
            navigate("/profile");                  
    }   
  },  
  });

  return (
    <div>

    <Flex align="center" justifyContent="center" width="full">

    <Box pt={10}>
   
     <Box textAlign="center">
      <Heading>Sign In</Heading>

     </Box>
     <Box my={5}>
 
  {  formik.errors.general && (<Alert status='error'> {formik.errors.general}</Alert>)}

     </Box>

     <Box my={5} textAlign="left">

     <form onSubmit={formik.handleSubmit}>

     <FormControl>

    <FormLabel>E-mail</FormLabel>

    <Input name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} isInvalid={formik.touched.email && formik.errors.email}/>
     </FormControl>
 

    
     <FormControl mt={4}>

    <FormLabel>Password</FormLabel>

    <Input name='password' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} isInvalid={formik.touched.password && formik.errors.password}/>
     </FormControl>

     
  

     <Button mt="4"width="full" type='submit'>Signin</Button>
     

     </form>


     </Box>
    

    </Box>


    </Flex>



    </div>
  )
}

export default Signin