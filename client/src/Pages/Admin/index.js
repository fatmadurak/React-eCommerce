import React from 'react'
import {NavLink, Routes,Route} from "react-router-dom"
import "./Styles.css"
import {Box,Button} from"@chakra-ui/react"
import Home from './Home'
import Products from './Products'
import Orders from './Orders'

function Admin() {


 
  return (
    <div>

     <nav>
      <ul className='admin-menu'>
        <li>
          <NavLink to="/admin"><Button color="white" backgroundColor="#c0b9">Home</Button></NavLink>
        </li>
        <li>
         <NavLink to="/admin/products"><Button color="white" backgroundColor="#c0b9">Products</Button></NavLink>
        </li>
        <li>
        <NavLink to="/admin/orders"><Button color="white" backgroundColor="#c0b9">Orders</Button></NavLink>
        </li>
      </ul>
     </nav>

     <Box mt="50">
            <Routes>
                <Route  path="/" exact element={<Home/>} />
                <Route path='products' element={<Products/>}/>
                <Route path='orders' element={<Orders/>}/>
               
            </Routes>
        </Box>
    

    </div>
  )
}

export default Admin