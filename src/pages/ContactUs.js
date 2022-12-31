import React from 'react'

const ContactUs = () => {
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
        <div className='max-w-[320px] mx-auto py-16 '>
          <h1 className='text-5xl font-bold text-gray-300 my-4'>Contact Us</h1>
        
        <form className="mx-auto w-[450px] p-4 bg-[#1e1f22] opacity-80 rounded-md ">
        <label className="block font-bold mb-2 text-gray-100">
          Name:
          <input type="text" className="form-input border-none mt-1 block w-full rounded-md " />
        </label>
        <label className="block font-bold mb-2 text-gray-100">
          Email:
          <input type="email" className="form-input mt-1 border-none block w-full rounded-md " />
        </label>
        <label className="block font-bold mb-2 text-gray-100">
          Message:
          <textarea className="form-input mt-1 block w-full border-none rounded-md " />
        </label>
        <button className=" mt-4 bg-red-600 text-white font-bold rounded-full py-1 px-4">
          Send Message
        </button>
      </form>
      </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUs