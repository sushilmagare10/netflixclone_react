import React from 'react'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import request from '../Api'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-[#16181E]'>
        <NavBar/>
        <Banner/>
        <Slider rowID='1' title='Weekly Trending' fetchURL={request.weeklyTrending} />
        <Slider rowID='2' title='Netflix Originals' fetchURL={request.netflixOriginals} />
        <Slider rowID='3' title='Top Rated' fetchURL={request.topRated} />
        <Slider rowID='4' title='Action' fetchURL={request.actionMovies} />
        <Slider rowID='5' title='Comedy' fetchURL={request.comedyMovies} />
        <Slider rowID='6' title='Horror' fetchURL={request.horrorMovies} />
        <Slider rowID='7' title='Romance' fetchURL={request.romanceMovies} />
        <Footer/>
    </div>
  )
}

export default Home