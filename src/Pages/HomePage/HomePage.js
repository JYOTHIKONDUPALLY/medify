import React from 'react';
import "./HomePage.scss";
import Banner from '../../Components/Banner';
import Header from '../../Components/Header/Header';
import HeroSection from '../../Components/HeroSection/HeroSection';
import OffersCarousel from '../../Components/OffersCarousel/OffersCarousel';
import SpecialisationSection from '../../Components/SpecialisationSection/SpecialisationSection';
const HomePage = () => {
  return (
    <div className='HomePageContainer'>
      <Banner/>
        <Header/>
        <HeroSection/>
        <OffersCarousel/>
        <SpecialisationSection/>
    </div>
  )
}

export default HomePage