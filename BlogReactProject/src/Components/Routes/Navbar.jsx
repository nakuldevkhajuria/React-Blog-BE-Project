import React from 'react'
import { NavLink } from 'react-router-dom'
// import Routing from '../Routing'
import '../BlogPrep/BlogPrep.css'

function Home() {
  return (
    <div className='navbarApp'>
    <div  >
       <div style={{fontWeight:'800',fontSize:'30px',marginBottom:'1.3rem'}}><div className='rotate'>The</div> <span> Siren </span></div>
      <div className='navbar'>
   <NavLink to='/' style={{color:'black'}}> <span> Home</span></NavLink>
      <NavLink to='/bollywood'  style={{color:'black'}}>Bollywood</NavLink>
      <NavLink to='/technology' style={{color:'black'}}>Technology</NavLink>
      <NavLink to='/hollywood' style={{color:'black'}}>Hollywood</NavLink>
      <NavLink to='/fitness' style={{color:'black'}}>Fitness</NavLink>
      <NavLink to='/food' style={{color:'black'}}>Food</NavLink>
      </div>
      <hr />
      
      {/* <div className='downBack'>

      </div> */}
   
    </div>
 
    </div>
  )
}

export default Home