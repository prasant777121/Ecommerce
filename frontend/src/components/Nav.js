import React from 'react'
import {Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul className='Navbar'>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/add'>Add product</Link> </li>
            <li><Link to='/update'>Update</Link> </li>
            <li><Link to='/logout'>Logout</Link> </li>
            <li><Link to='/profile'>profile</Link> </li>
        </ul>
      
    </div>
  )
}

export default Nav
