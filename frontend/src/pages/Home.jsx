import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import ToDoctors from '../components/ToDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
     <Header/>
     <SpecialityMenu/>
     <ToDoctors/>
     <Banner/>
    </div>
  )
}

export default Home