import React from 'react'
import ProbsPractice from '../ProbsPractice/ProbsPractice'

const Skills = () => {
  return (
    <div>
      <div className="py-16 bg-gray-100 h-auto">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center ">

            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src="https://rooman.net/wp-content/uploads/2020/12/full-stack-java-developer-1.jpg" alt="Card Image" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">FULL STACK</h3>
                <p className="text-gray-600"></p>
              </div>
            </div>

            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
              <img src="https://www.khmer168.com/wp-content/uploads/2024/01/c-tutorial-for-beginners.png" alt="Card Image" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">C-LANGUAGE</h3>
                <p className="text-gray-600"></p>
              </div>
            </div>

            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFyEQ9FxotJhVjnyqErZ7DCjQlUmkDYO2Bw&s" alt="Card Image" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">C++</h3>
                <p className="text-gray-600"></p>
              </div>
            </div>

            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src="https://file.labex.io/namespace/df87b950-1f37-4316-bc07-6537a1f2c481/java/lab-your-first-java-lab/assets/java.svg" alt="Card Image" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">JAVA</h3>
                <p className="text-gray-600"></p>
              </div>
            </div>
          </div>

        </div>
        <div className="flex p-5 justify-evenly ">
           <iframe  className='p-5' width="560" height="315" src="https://www.youtube.com/embed/BbwEa-sGE-4?si=aPxJE0jRh0KSpeWT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

           <iframe className='p-5'  width="560" height="315" src="https://www.youtube.com/embed/BbwEa-sGE-4?si=aPxJE0jRh0KSpeWT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

           <iframe className='p-5'  width="560" height="315" src="https://www.youtube.com/embed/BbwEa-sGE-4?si=aPxJE0jRh0KSpeWT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <ProbsPractice name="Skills" />
    </div>
  )
}

export default Skills
