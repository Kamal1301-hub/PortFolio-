import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-200 via-pink-100 to-purple-200 ">
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg" alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">1</h3>
              <p className="text-gray-600 mb-4">#</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">View Project →</a>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src="https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">2</h3>
              <p className="text-gray-600 mb-4">#</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">View Project →</a>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src="https://leadschool.in/wp-content/uploads/2022/04/shutterstock_1777292972.jpg" alt="Project 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">3</h3>
              <p className="text-gray-600 mb-4">#</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">View Project →</a>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src="https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/11/15-Facts-About-Coding-Every-Kid-Should-Know.png" alt="Project 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">4</h3>
              <p className="text-gray-600 mb-4">#</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">View Project →</a>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src="https://cdn.prod.website-files.com/61f7efd44d01cc87c88dc6f3/6318e2916ddc28d60d89d319_Coding%20Vs.%20Programming%2002.jpg" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">5</h3>
              <p className="text-gray-600 mb-4">#</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">View Project →</a>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src="https://i.pcmag.com/imagery/articles/00l8p1iqqfNP3HRG3TtTgXl-1.fit_lim.v1587974089.jpg" alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">6</h3>
              <p className="text-gray-600 mb-4">#</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">View Project →</a>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">About My Projects</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Each project reflects my learning journey — from frontend design to backend logic.
                I focus on writing clean, maintainable code and delivering real-world solutions.
              </p>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-6">Technologies I Use</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full">React</span>
                <span className="px-4 py-2 bg-yellow-200 text-yellow-800 rounded-full">JavaScript</span>
                <span className="px-4 py-2 bg-green-200 text-green-800 rounded-full">Node.js</span>
                <span className="px-4 py-2 bg-purple-200 text-purple-800 rounded-full">Tailwind CSS</span>
                <span className="px-4 py-2 bg-indigo-200 text-indigo-800 rounded-full">MySQL</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="text-3xl font-bold text-purple-600">10+</h4>
                <p className="text-gray-700">Projects Completed</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="text-3xl font-bold text-purple-600">500+</h4>
                <p className="text-gray-700">Hours of Coding</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="text-3xl font-bold text-purple-600">5+</h4>
                <p className="text-gray-700">Different Technologies Used</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Want to Work Together?</h3>
              <p className="text-gray-700 mb-6">I’m always open to new opportunities and collaborations.</p>
              <Link to='/Contact'
                href="#contact"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
              >  Contact Me
              </Link>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}
export default Projects