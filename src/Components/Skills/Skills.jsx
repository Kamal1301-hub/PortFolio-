import React from 'react'
import ProbsPractice from '../ProbsPractice/ProbsPractice'

const Skills = () => {
  return (
    <div>
      <div className="py-20 bg-gradient-to-r from-purple-200 via-pink-100 to-purple-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center ">

            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src="https://rooman.net/wp-content/uploads/2020/12/full-stack-java-developer-1.jpg" alt="Card Image" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">FULL STACK</h3>
              </div>
            </div>

            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition ">
              <img src="https://www.khmer168.com/wp-content/uploads/2024/01/c-tutorial-for-beginners.png" alt="Card Image" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">C-LANGUAGE</h3>
              </div>
            </div>

            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFyEQ9FxotJhVjnyqErZ7DCjQlUmkDYO2Bw&s" alt="Card Image" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">C++</h3>
              </div>
            </div>

            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src="https://file.labex.io/namespace/df87b950-1f37-4316-bc07-6537a1f2c481/java/lab-your-first-java-lab/assets/java.svg" alt="Card Image" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">JAVA</h3>
              </div>
            </div>
          </div>

        </div>

        <div>
          <div className="p-5 mt-5">
            <h1 className="text-3xl font-bold mb-8 text-center">Important Skills</h1>

            <div className="flex p-5 justify-evenly items-center gap-x-6">
              <div>
                <iframe className='rounded-2xl' width={560} height={315} src="https://www.youtube.com/embed/RGKi6LSPDLU?si=UGOWuuM7i1FEAKS9" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
              <div>
                <h2 className="text-2xl font-bold">React Js</h2>
              </div>
            </div>

            <div className="flex p-5 justify-evenly items-center gap-x-6">
              <div>
                <h2 className="text-xl font-semibold">Functions</h2>
              </div>
              <div>
                <iframe className='rounded-2xl' width="560" height="315" src="https://www.youtube.com/embed/BBgSB2bLy60?si=Eq1yw3CGHHDHK4H3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>

            <div className="flex p-5 justify-evenly items-center gap-x-6">
              <div>
                <iframe className='rounded-2xl' width="560" height="315" src="https://www.youtube.com/embed/HnXPKtro4SM?si=Ax5Nf284UhixKRSH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Hooks</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* <ProbsPractice name="Skills" /> */}
    </div>
  )
}

export default Skills
