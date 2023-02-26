import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./styles.module.css"
import { Button} from '@chakra-ui/react'
import {useAuth} from "../../contexts/AuthContext"
import { useBasket } from '../../contexts/BasketContext'


function Navbar() {

  const{loggedIn,user}=useAuth();
  const{ items }=useBasket();

 
 


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

      {items.length >=0 && user?.role!=="admin" && (

        <Link to="/basket"> <Button colorScheme="pink" variant="outline">Basket({items.length})</Button></Link>
      )}

      {
           user?.role==="admin" && (

         <Link to="/admin"> <Button colorScheme="pink" variant="ghost">Admin</Button></Link>


           )


      }


   <Link to="/profile"> <Button type='submit'>Profile</Button></Link>
   </>
    )
   }
    </div>
     
  </nav>
  )
}

export default Navbar