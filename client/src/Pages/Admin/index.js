import React from 'react'
import {Link} from "react-router-dom"
import "./Styles.css"

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


    </div>
  )
}

export default Admin