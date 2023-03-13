import React, { useContext } from 'react'
import './Home.css'
import {BollywoodContext} from '../../../index'

function HomeReuse2() {
  const data = useContext(BollywoodContext);
  return (
    <div className='ReuseBody'>
    <div className='thirdColumn'>
        <div><img src={data.img} alt="" /></div>
        <div className='texts'>
        <span>Catch waves with <br /> adventure guide
    
</span></div>
    </div></div>
  )
}

export default HomeReuse2