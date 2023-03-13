import React, { useContext } from 'react'
import './Home.css'
import {BollywoodContext} from '../../../index'
function HomeReuse() {

  const data = useContext(BollywoodContext)
  console.log(data)
  return (
    <div className='ReuseBody'>
    <div className='firstColumn'>
        <div><img src={data.img} alt="" /></div>
        <div>
        <span>Hello guys this our first Reusable Component
  
</span></div>
    </div></div>
  )
}

export default HomeReuse