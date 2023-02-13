import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./styles.module.css"
import { Button} from '@chakra-ui/react'
import {useAuth} from "../../contexts/AuthContext"


function Navbar() {

  const{loggedIn}=useAuth();
  console.log(loggedIn) 


  return (
    <nav className={Styles.nav}>
    <div className={Styles.left}>
       
       <div className={Styles.logo}>
       <Link to="/">eCommerce</Link>
       </div>
      
     <div className={Styles.menu}>
     <ul><li><Link to="/">Products</Link></li></ul>
     </div>
     
    </div>
    <div className={Styles.right}>

   {
      !loggedIn && (<>  
      
      <Link to="/signin"> <Button colorScheme='pink'>Login</Button></Link>
      <Link to="signup"><Button colorScheme='pink'>Register</Button></Link></>)




   }

   {
    
    loggedIn && (

   <>
   <Link to="/profile"> <Button colorScheme='pink'>Profile</Button></Link>
   
   </>

    )


   }
    
   
    
    </div>
     
  </nav>
  )
}

export default Navbar