import React from 'react';
import "./HomePage.scss";
import Banner from '../../Components/Banner';
import Header from '../../Components/Header/Header';
import HeroSection from '../../Components/HeroSection/HeroSection';
import OffersCarousel from '../../Components/OffersCarousel/OffersCarousel';
import SpecialisationSection from '../../Components/SpecialisationSection/SpecialisationSection';
import DoctorsCarousel from "../../Components/DoctorsCarousel/DoctorsCarousel";
import Goals from '../../Components/Goals/Goals';
import Blogs from '../../Components/Blogs/Blogs';
const HomePage = () => {
  return (
    <div className='HomePageContainer'>
      <Banner/>
        <Header/>
        <HeroSection/>
        <OffersCarousel/>
        <SpecialisationSection/>
        <DoctorsCarousel/>
        <Goals/>
        <Blogs/>
    </div>
  )
}

export default HomePage