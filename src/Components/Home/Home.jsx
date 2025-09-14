import React from 'react'
import ProbsPractice from '../ProbsPractice/ProbsPractice'
import './Home.css'
const Home = () => {
  return (

    <div >
      <div className=''>
        <div className="w-full mt-18">
          <img src="https://static.vecteezy.com/system/resources/previews/049/855/259/non_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" alt="Banner" className="w-full h-[500px] object-cover" />
        </div>

        <div className='w-full h-screen p-10 flex bg-gradient-to-r from-purple-200 via-pink-100 to-purple-200'>
          <div>
            <div className='flex '>
              <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_j7y-1rwIsAgPFGFfkhbdVJKmDwhQZUGJyA&s" alt=""
                  className='rounded-full w-50px ' />
              </div>
              <div className='mt-5 items-center p-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aliquid?</p>
              </div>
            </div>

            <div className='flex '>
              <div className='mt-5 items-center p-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aliquid?</p>
              </div>
              <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrOQf0jtqBTw3ig0VObtMq1MVnEzWXjhfcQ&s" alt=""
                  className='rounded-full w-50px ' />
              </div>
            </div>

            <div className='flex '>
              <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rkkyPEptvrcveW-2N7u6mMCilwPStEcIUA&s" alt=""
                  className='rounded-full w-50px ' />
              </div>
              <div className='mt-5 items-center p-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aliquid?</p>
              </div>
            </div>

          </div>

          <div>

            <div className='h-100 border-s-black w-50 pl-10'>

              <div className="flex justify-center items-center min-h-screen ml-10 ">
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                  <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Customer Feedback Form</h2>
                  <form action="/submit-feedback" method="post" className="space-y-4">

                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="feedback" className="text-sm font-medium text-gray-700 mb-1">Feedback</label>
                      <textarea
                        id="feedback"
                        name="feedback"
                        rows={4}
                        required
                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none resize-none"
                      />
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition duration-200"
                      >
                        Submit Feedback
                      </button>
                    </div>
                  </form>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
      {/* <ProbsPractice name="home" /> */}
    </div >



  )
}

export default Home