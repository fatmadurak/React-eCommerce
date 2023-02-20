import React from 'react'
import {Link} from "react-router-dom"
import "./Styles.css"
import {Box } from"@chakra-ui/react"
import Home from './Home'

function Admin() {


 
  return (
    <div>

     <nav>
      <ul className='admin-menu'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/">Orders</Link>
        </li>
      </ul>
     </nav>

   <Box mt={10}>
   


     

   </Box>
    

    </div>
  )
}

export default Admin