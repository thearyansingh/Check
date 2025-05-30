import React from 'react'
import HeroBanner from '../Components/HeroBanner'
import MultipleBaner from '../Components/Navbar/MultipleBaner'
import NewCollection from '../Components/NewCollection'
import MidBanner from '../Components/MidBanner'
import TopSeller from '../Components/TopSeller'
import Features from '../Components/Features'

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <MultipleBaner/>
      <NewCollection/>
      <MidBanner/>
      <TopSeller/>
      <Features/>
    </div>
  )
}

export default Home