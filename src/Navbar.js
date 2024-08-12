import React from 'react'
import { Link } from 'react-router-dom'
import '../src/App.css'

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li style={{backgroundColor:'red'}}>
          <Link to='/'>Home</Link>
          </li>
        <li>
          <Link to='/about'>About</Link>
          </li>
        <li>
          <Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
