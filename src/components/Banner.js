import axios from 'axios';
import React, { useEffect, useState } from 'react'
import request from '../Api'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const Banner = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const movie = movies[Math.floor(Math.random() * movies.length)];
  
    useEffect(() => {
      axios.get(request.weeklyTrending).then((response) => {
        setMovies(response.data.results);
      });
    }, []);
    
    useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(false)
      },1200)      
    },[])

  return (
    <div> 
    {
      isLoading ? 
      
        <SkeletonTheme color='#16181E' highlightColor='#444'>
          <Skeleton height={650} duration={1.5}/>
        </SkeletonTheme>
      :
        <div className='w-full h-[650px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[650px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-[650px] object-fill'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title || movie?.original_title || movie?.name || movie?.original_name}
        />
        <div className='absolute w-full top-[30%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title || movie?.original_title || movie?.name || movie?.original_name}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded-xl'>
              Play
            </button>
            <button className='border text-white border-gray-300 py-2 px-5 ml-4 rounded-xl'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {movie?.overview.slice(0,150)}
          </p>
        </div>
      </div>
    </div>
    
    }
    </div>
    
  )
}

export default Banner