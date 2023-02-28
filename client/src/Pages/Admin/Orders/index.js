import React from 'react'
import {useQuery} from "react-query"
import {fetchOrder} from "../../../Api"
import {Table,Thead,Tr,Tbody,Th,Td,TableCaption,Text, Center} from "@chakra-ui/react"

function Orders() {

  const {isLoading,isError,data,error}=useQuery("admin:orders",fetchOrder);

    if (isLoading) {
      
      return <div>
        Loading...
      </div>
    }

    if (isError) {
      
      return <div>
        Error {error.message}
      </div>
    }

    
  return (
    <div>

    <Text p={5} fontSize="2xl" > Orders</Text>


    <Table variant='simple'>
    <TableCaption paddingRight={100}>Güncel Siparişlerin Yeraldığı Tablo...</TableCaption>
    <Thead>
      <Tr>
        <Th>User</Th>
        <Th>Address</Th>
        <Th >Items</Th>
      </Tr>
    </Thead>
    <Tbody>
     {
     
      data.map((item)=>(

        <Tr key={item.id}>
        <Td>{item.email}</Td>
        <Td>{item.address}</Td>
        <Td>{item.items.length}</Td>

      
      </Tr>
      ))

     }
      
    </Tbody>
    
  </Table>

    </div>
  )
}

export default Orders