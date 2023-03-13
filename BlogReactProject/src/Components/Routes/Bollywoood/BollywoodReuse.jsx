import React from 'react'

function BollywoodReuse({img,para}) {
  return (
    <div className='firstColumn'>
        <div><img src={img} alt="" /></div>
        <div>
        <span>Hello guys this our first Reusable Component
    {para}
</span></div>
    </div>
  )
}

export default BollywoodReuse