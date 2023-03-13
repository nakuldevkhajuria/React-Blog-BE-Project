import React from 'react'
import '..'
function Reusable({img,heading,para}) {
  return (
    <>
   <div className='firstColumn'>
<img src={img}  />
<h1> Hello {heading} </h1>
<p>Hello guys this our first Reusable Component
    {para}
</p>
</div>
    </>
  )
}

export default Reusable