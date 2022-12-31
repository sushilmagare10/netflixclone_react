import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'



const Row = ({item}) => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },1100)      
  },[])


  return (
    <>
    { isLoading ? 
      <SkeletonTheme color='#16181E' highlightColor='#444'>
        <Skeleton height={175} duration={1.4}/>
      </SkeletonTheme> :
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3 shadow-2xl'>
      <img
        className='w-full h-[160px] block rounded-lg shadow-2xl'
        src={`https://image.tmdb.org/t/p/original/${item?.poster_path || item?.backdrop_path }`}
          alt={item?.title || item?.original_title || item?.name || item?.original_name}
      />
        <p className=' text-xs md:text-sm font-semibold justify-center items-center text-center text-white '>
        {item?.title || item?.original_title || item?.name || item?.original_name}
        </p>
    </div>
    }
    </>
  )
}

export default Row