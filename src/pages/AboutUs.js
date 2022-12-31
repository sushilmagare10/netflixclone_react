import React from 'react'

const AboutUs = () => {
  return (
    <div>
    <div className='w-full h-screen'>
    <img
      className='hidden sm:block absolute w-full h-full object-cover blur-sm'
      src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
      alt='/'
    />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen '></div>
    <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-5xl font-bold text-gray-300'>About Us</h1>
        </div>
        <p className='text-gray-300 text-xl font-medium px-[20%] py-5'>
        A React JS Netflix clone is a web application that is built using the React JavaScript library and is designed to closely mimic the user interface and functionality of the Netflix streaming service.
        </p>
      </div>
    </div>
  </div>

  )
}

export default AboutUs