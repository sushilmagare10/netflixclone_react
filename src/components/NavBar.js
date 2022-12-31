import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <Link to={`/`}>
            <h1 className='text-red-600 text-2xl md:text-4xl font-bold cursor-pointer'>
                Netflix
            </h1>
        </Link>
        <div className='flex'>
          <Link to='/login'>
            <button className='text-white mr-1 pr-3 py-2 md:pr-4 md:mr-3'>SignIn</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-2 py-2 md:px-4 md:py-2 rounded cursor-pointer text-white'>
              SignUp
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Navigation