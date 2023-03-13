import React from 'react'
import HomeReuse from '../Routes/Home/HomeReuse'
import './BlogPrep.css'
const BlogPrep = () => {
  return (
    <>
    <div className='mainBlog' >
       <div className='blo' ><div className='rotate'>The</div> <span> Siren </span></div>
       <button className='butt'>geStarted</button>
   

    </div>
    <hr />
    <div className='textss'>
    <span style={{fontWeight:'600',fontSize:'30px'}}>5 Ways to animate a react App.</span>
    <div><img src="man.png" alt="" /></div>
    <div className='reactImage'></div>
    <p style={{textAlign:'center'}}>
    Animation in ReactJs app is a popular topic and there are many ways <br /> to create different types of animations.Many developers create animation <br /> exclusively using css and adding classes to HTML tags. This is a great <br /> way and you should use it. If you want to create complex animations <br /> you can pay attention to GreenSock. GreenSock is the most powerful <br /> animation platform. There are also a lot of libraries, components for <br />   creating animation in React. <br /> <br />  Let’s talk about them
    </p>
  <div className='blur'></div>
  <div>
    <span className='taskHeading'> The Latest</span>
    <hr style={{width:'75%',marginBottom:'3rem'}} />
    <div className='rowFlex'>
    <HomeReuse className='bollywoodColumn1' img='https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg' />

    <HomeReuse className='bollywoodColumn1' img='https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg' />

    <HomeReuse className='bollywoodColumn1' img='https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg' />

    </div>    <hr style={{width:'75%',marginBottom:'3rem'}} />
  </div>
    </div>
    </>
  )
}

export default BlogPrep