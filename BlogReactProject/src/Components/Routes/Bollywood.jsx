

import axios from 'axios'
import './Bollywoood/Bollywood.css'

import HomeReuse from './Home/HomeReuse'
import HomeReuse1 from './Home/HomeReuse1'
import HomeReuse2 from './Home/HomeReuse2'
import HomeReuse3 from './Home/HomeReuse3'
import Home from './Navbar'



function Bollywood() {

  axios.get("http://localhost:8080/bollywood")
  // .then(res => res.json())
  .then(data => console.log(data))
// console.log(data)

  return (
   
    <div className=''>
         <Home />
<div>
    <span className='taskHeading'> Bollywood</span>

    <div className='secondArticle'>
    <div className='columnFlex'>
    {/* <NavLink to='/react'>  */}
    <HomeReuse className='bollywoodColumn1'/>
    {/* </NavLink> */}
    {/* <NavLink to='/react'>  */}
    <HomeReuse className='bollywoodColumn1' />
    {/* </NavLink> */}
    {/* <NavLink to='/react'>  */}
    <HomeReuse className='bollywoodColumn1' />
    {/* </NavLink> */}
        <HomeReuse3 />
    
    </div>
    <div>
    
    <span className='taskHead'>Top Posts</span>
    <HomeReuse1  />
    {/* <HomeReuse2  img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' /> */}
    <HomeReuse2 />
    <HomeReuse2   />
    <HomeReuse2   />
    <HomeReuse2   />
    
   
    <div className='advertise'>Advertisement</div>
    </div>
    </div>
  </div> 
  <hr style={{width:'75%',marginTop:'3rem',marginBottom:'3rem'}} />
  </div>
 

  )
}

export default Bollywood
