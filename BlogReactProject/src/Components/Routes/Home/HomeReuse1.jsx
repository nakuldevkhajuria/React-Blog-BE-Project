import React, { useContext } from 'react'
import './Home.css'
import {BollywoodContext} from '../../../index'

function HomeReuse1() {
 
  const data = useContext(BollywoodContext);
  return (
    <div className='ReuseBody'>
    <div className='secondColumn'>
        <div><img src={data.img} alt="" /></div>
        <div>
        <span>Hello guys this our second Reusable Component
    
</span></div>
    </div></div>
  )
}

export default HomeReuse1