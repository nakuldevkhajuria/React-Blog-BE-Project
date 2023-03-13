import React from 'react'
import './Home.css'
function HomeReuse4({img,para}) {
  return (
    <div className='ReuseBody'>
    <div className='fifthColumn'>
        <div><img src={img} alt="" /></div>
        <div className='texts'>
        <span>Catch waves with <br /> adventure guide
    {para}
</span></div>
    </div></div>
  )
}

export default HomeReuse4