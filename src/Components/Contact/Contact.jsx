import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-purple-200 via-pink-100 to-purple-200 min-h-screen pt-32">
      <form className="max-w-md mx-auto relative bg-white p-6 rounded-lg shadow-md">
        
        <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="floating_email" id="floating_email" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
            border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " required 
          />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input type="password" name="floating_password" id="floating_password" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
            border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " required 
          />
          <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input type="password" name="repeat_password" id="floating_repeat_password" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
            border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " required 
          />
          <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_first_name" id="floating_first_name" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " required 
            />
            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
              transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_last_name" id="floating_last_name" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " required 
            />
            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
              transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " required 
            />
            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
              transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_company" id="floating_company" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " required 
            />
            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
              transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <span className="block text-sm font-medium text-gray-500 mb-2">Gender</span>
          <div className="flex items-center gap-6">
            <label className="flex items-center">
              <input type="radio" name="gender" value="male" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" 
                required 
              />
              <span className="ml-2 text-sm text-gray-700">Male</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="female" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" 
              />
              <span className="ml-2 text-sm text-gray-700">Female</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="other" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" 
              />
              <span className="ml-2 text-sm text-gray-700">Other</span>
            </label>
          </div>
        </div>

        <button type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
          text-center">
          Submit
        </button>
      </form>

      {/* Social Media Section */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-sky-500 hover:text-sky-700"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-pink-600 hover:text-pink-800"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-blue-700 hover:text-blue-900"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      <div className="mt-16 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <details className="border rounded-lg p-4 cursor-pointer">
            <summary className="font-medium text-gray-800">How long does it take to get a reply?</summary>
            <p className="mt-2 text-gray-600 text-sm">We usually respond within 24–48 hours on business days.</p>
          </details>
          <details className="border rounded-lg p-4 cursor-pointer">
            <summary className="font-medium text-gray-800">Can I update my details after submitting?</summary>
            <p className="mt-2 text-gray-600 text-sm">Yes, you can contact our support team to update your details.</p>
          </details>
          <details className="border rounded-lg p-4 cursor-pointer">
            <summary className="font-medium text-gray-800">Do you provide customer support on weekends?</summary>
            <p className="mt-2 text-gray-600 text-sm">Our team is available Monday–Friday. For urgent issues, drop us an email.</p>
          </details>
        </div>
      </div>
    </div>
  )
}

export default Contact
