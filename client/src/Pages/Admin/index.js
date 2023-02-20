import React from 'react'
import {NavLink, Routes,Route} from "react-router-dom"
import "./Styles.css"
import {Box,Button} from"@chakra-ui/react"
import Home from './Home'

function Admin() {


 
  return (
    <div>

     <nav>
      <ul className='admin-menu'>
        <li>
          <NavLink to="home"><Button color="white" backgroundColor="#c0b9">Home</Button></NavLink>
        </li>
        <li>
         <NavLink to="/admin/home"><Button color="white" backgroundColor="#c0b9">Products</Button></NavLink>
        </li>
        <li>
        <NavLink to="/admin/home"><Button color="white" backgroundColor="#c0b9">Orders</Button></NavLink>
        </li>
      </ul>
     </nav>

     <Box mt="20">
            <Routes>
                <Route  path="admin/home" exact element={<Home/>} />
               
            </Routes>
        </Box>
    

    </div>
  )
}

export default Admin