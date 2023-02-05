import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./styles.module.css"
import { Button} from '@chakra-ui/react'


function Navbar() {
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

   <Link to="/signin"> <Button colorScheme='pink'>Login</Button></Link>
   <Link to="signup"><Button colorScheme='pink'>Register</Button></Link>
    
   
    
    </div>
     
  </nav>
  )
}

export default Navbar