import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {Text,Button} from "@chakra-ui/react"

function Profile({history}) {

    const {user,logout}=useAuth();

    const handleLogout=async()=>{

  
         logout(()=>{

          history.push("/")

         });


    }

  return (
    <div>
  
    <code>

    <Text fontSize="22">Profile</Text>
    {JSON.stringify(user)}

     <br/>
     <br/>
     <br/>

    <Button colorScheme="pink" variant="solid" onClick={handleLogout}>Logout</Button>
    </code>


    </div>
  )
}

export default Profile