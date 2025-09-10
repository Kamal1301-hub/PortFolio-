import React from "react";

const About = () => {
  return (
   <section classname="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 flex items-center justify-center px-6">
  <div classname="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center md:justify-between gap-12">
    <div classname="flex-1 text-center md:text-left">
      <h1 classname="text-4xl md:text-5xl font-bold text-green-400 mb-6">
        Full-Stack <br /> Developer
      </h1>
      <p classname="text-gray-300 text-lg mb-4">
        Building digital experiences that merge creativity with technology.  
      </p>
      <p classname="text-gray-400 mb-6">
        Specializing in modern web development and cyber systems.  
      </p>
      <button classname="px-6 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition">
        Let’s Connect
      </button>
    </div>
    <div classname="flex-1 flex justify-center">
      <div classname="relative">
        <div classname="absolute inset-0 rounded-full bg-green-500 blur-3xl opacity-30 animate-pulse" />
        <img src="https://via.placeholder.com/300" alt="Profile" classname="relative w-64 h-64 rounded-full object-cover border-4 border-green-500 shadow-lg" />
      </div>
    </div>
  </div>
</section>

  );
};

export default About;
