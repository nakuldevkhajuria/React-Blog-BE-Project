import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'

import Bollywood from './Routes/Bollywood'
import Technology from './Routes/Technology'
import Hollywood from './Routes/Hollywood'
import Fitness from './Routes/Fitness'
import Food from './Routes/Food'
import BlogPrep from './BlogPrep/BlogPrep'
// import Home1 from './Routes/Home'
function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/bollywood' element={<Bollywood />}></Route>
            <Route path='/technology' element={<Technology />}></Route>
            <Route path='/hollywood' element={<Hollywood />}></Route>
            <Route path='/fitness' element={<Fitness />}></Route>
            <Route path='/food' element={<Food />}></Route>
            <Route path='/react' element={<BlogPrep />}></Route>
           
            
        </Routes>
    </div>
  )
}

export default Routing