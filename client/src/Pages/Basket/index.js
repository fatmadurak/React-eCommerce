import React, {useRef, useState} from 'react'
import {useBasket} from "../../contexts/BasketContext"
import {Alert,Button,Image,Box,Text,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,useDisclosure,FormControl,FormLabel,Textarea,  useToast,} from "@chakra-ui/react"
 
import {Link} from  "react-router-dom"
import { fetchMe } from '../../Api'
import { postOrder } from '../../Api'
function Basket() {

  const[address,setAddress]=useState("")
  const[email,setEmail]=useState("")

  console.log(address)


  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const toast = useToast();

  const {items,removeFromBasket,emptyBasket}=useBasket();
  
  const total = items.reduce((acc, obj) => {
    if (typeof obj.price === "number") {
      return acc + obj.price;
    } else if (typeof obj.price === "string") {
      return acc + Number(obj.price);
    } else {
      return acc;
    }
  }, 0);

  const handleSubmit=()=>{

   const item_id=items.map((item)=>item.id)

   const input={

    address,
    email,
    items:JSON.stringify(item_id)

   }
   postOrder(input)
   emptyBasket();
   onClose(
    toast({
      title: `Siparişiniz Alındı!`,
      description: "En kısa sürede kargoya verilecektir.",
      status: "success",
      duration: 6000,
      isClosable: true,
      position: "top",
    })
  );


  }


 

  return (
    <div>

     {items.length <1 && (

      <Alert status='warning'> You have not any items in your basket</Alert>



     )}

     {
       items.length >0 && (

         <>
         

            <ul>
            {
              items.map((item)=>(

                <li key={item.id}>

                  <Link to={`/product/${item.id}`}>{item.title}-{item.price} TL
                  <Image htmlWidth={300} htmlHeight={300} borderRadius={'2xl'}   src={item.images[0]} alt="basket item"/>
                  </Link>
                  <Button colorScheme="pink" size={'md'}   mt={3} onClick={()=>removeFromBasket(item.id)}> Remove from basket</Button>
                </li>
              ))
             

            }
            </ul>
         
        
         
         
         </>

       )
     }

      <Box mt={10}>
        
       <Text fontSize={22}> Total:{total}</Text>

      </Box>

      <Button mt={5} colorScheme="green"  onClick={onOpen}>Order</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Textarea ref={initialRef} placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Textarea ref={initialRef} placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default Basket