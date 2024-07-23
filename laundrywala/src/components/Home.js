import React from 'react'
import About from './About'
import ChooseUs from './ChooseUs'
import Homeslideshow from './Homeslideshow'
import Services from './Services'
import Offers from './Offers.js'
import OtherLaundryWebsites from './OtherLaundryWebsites';

const Home = () => {
  return (
  
    <>
    <Homeslideshow/>
    <OtherLaundryWebsites />
    <Services/>
    <Offers/>
    <ChooseUs/>
    <About/>
   
   

    
    </>
      
  )
}

export default Home