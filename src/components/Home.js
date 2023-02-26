import React from 'react'
import Features from './Features'
import Hero from './Hero'
import PopularPlace from './PopularPlace'

const Home = () => {
  return (
    <div className='container mx-auto'>
        <Hero />
        <Features />
        <PopularPlace />
    </div>
  )
}

export default Home