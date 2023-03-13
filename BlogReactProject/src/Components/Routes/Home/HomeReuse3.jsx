import React, { useContext } from 'react'
import './Home.css'
import {BollywoodContext} from '../../../index'
function HomeReuse3() {
  const data = useContext(BollywoodContext);
  return (
    <div className='ReuseBody'>
    <div className='fourthColumn'>
        <div><img src={data.img} alt="" /></div>
        <div className='texts'>
        </div>
    </div></div>
  )
}

export default HomeReuse3