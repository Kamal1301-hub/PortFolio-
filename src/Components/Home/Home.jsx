import React from 'react'
import ProbsPractice from '../ProbsPractice/ProbsPractice'
import './Home.css'
const Home = () => {
  return (
   
<div>
  <div className="w-full mt-20">
    <img src="https://static.vecteezy.com/system/resources/previews/049/855/259/non_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" alt="Banner" className="w-full h-[500px] object-cover" />
    <p className='abc' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ad debitis et quas officia enim in, magnam ipsum sunt rerum!</p>
  </div>
    <ProbsPractice name="home" />
</div>



  )
}

export default Home