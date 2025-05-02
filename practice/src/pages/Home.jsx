import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white">
      <h1 className="text-5xl font-bold text-center mt-5 sm:text-3xl text-shadow-md">
        SUSHAN TAMANG
      </h1>
      <p className="lg:px-6 lg:text-2xl font-medium text-gray-200 mt-5 sm:text-lg sm:text-center">
        SUSHAN is a passionate web developer with a strong foundation in HTML, CSS, and JavaScript.
      </p>
      <a 
        href="/contact "
        className="inline-block bg-blue-600 mt-8 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg"
      >
        Get in Touch
      </a>
    </div>
  );
}

export default Home;
