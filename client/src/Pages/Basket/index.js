import React, {useRef, useState} from 'react'
import {useBasket} from "../../contexts/BasketContext"
import {Alert,Button,Image,Box,Text,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,useDisclosure,FormControl,FormLabel,Textarea} from "@chakra-ui/react"
import {Link} from  "react-router-dom"
function Basket() {

  const[address,setAddress]=useState("")

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const {items}=useBasket();
  const total=items.reduce((acc,obj)=>acc+obj.price,0)
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
                  <Button colorScheme="pink" size={'md'}   mt={3}> Remove from basket</Button>
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
              <Textarea ref={initialRef} placeholder='Address' />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
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