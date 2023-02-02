import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./styles.module.css"

function Navbar() {
  return (
    <nav className={Styles.nav}>
    <div className={Styles.left}>
       <div className='logo'>
        <Link to="/">eCommerce</Link>
       </div>
     <div>
     <ul><li><Link to="/">Products</Link></li></ul>
     </div>
     
    </div>
    <div className='right'>
        right
    </div>
     
  </nav>
  )
}

export default Navbar