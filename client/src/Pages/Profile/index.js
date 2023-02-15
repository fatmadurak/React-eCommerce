import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {Text,Button} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"

function Profile({history}) {

    const {user,logout}=useAuth();
    const navigate=useNavigate();

    const handleLogout=async()=>{

  
         logout(()=>{

          navigate("/")

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