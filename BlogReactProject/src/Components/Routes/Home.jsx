


import './Home/Home.css'
import HomeReuse from './Home/HomeReuse'
import HomeReuse1 from './Home/HomeReuse1'
import HomeReuse2 from './Home/HomeReuse2'
import HomeReuse3 from './Home/HomeReuse3'
// import HomeReuse4 from './Home/HomeReuse4'
import Home from './Navbar'
import axios from 'axios'


function Home1() {

  // data = {
  //   img:'https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000'
  // }
  axios.get("http://localhost:8080/")
  // .then(res => res.json())
  .then(data => console.log(data))

  return (
  <>
     <Home />
  <div className='firsts'>
    <div className='firstImage'>
      Title of vertical gallerty
    </div>
    <div className='second'>
      <div className='secondImage'>The sound cloud you loved</div>
      <div className='secondImage'>The sound cloud you loved</div>
    </div>
  </div>
  <div>
    <span className='taskHeading'> The Latest</span>
    <hr style={{width:'75%',marginBottom:'3rem'}} />
    <div className='rowFlex'>
  
    <HomeReuse className='bollywoodColumn1'  />
   
    <HomeReuse className='bollywoodColumn1'  />
    
    <HomeReuse className='bollywoodColumn1'  />
      </div>
  </div>
  
  <div>
    <span className='taskHeading'> Latest Articles</span>
    <hr style={{width:'75%',marginBottom:'3rem'}} />
    <div className='secondArticle'>
    <div className='columnFlex'>
     
    <HomeReuse className='bollywoodColumn1'  />

    <HomeReuse className='bollywoodColumn1'  />

    <HomeReuse className='bollywoodColumn1'   />
    <HomeReuse3   />
    
    </div>
    <div className='in'>
    <div className='advertise'>Advertisement</div>
    <br /><br />
    <span className='taskHead'>Top Posts</span>
    <HomeReuse1   />
    {/* <HomeReuse2  img='https://img.freepik.com/free-vector/realistic-sign-bollywood-cinema-night_52683-35347.jpg?w=2000' /> */}
    <HomeReuse2   />
    <HomeReuse2  />
    <HomeReuse2   />
    <HomeReuse2   />
    
   
    
    </div>
    </div>
  </div>
  <hr style={{width:'75%'}} />
  <div>
    <span className='taskHeading'> Latest Stories</span>
    <div className='rowFlex'>
    <HomeReuse className='bollywoodColumn1'  />

    <HomeReuse className='bollywoodColumn1'  />

    <HomeReuse className='bollywoodColumn1'  />
    </div>
  </div>
  <hr style={{width:'75%'}} />
  <div>

  </div>
  </>
  )
}

export default Home1