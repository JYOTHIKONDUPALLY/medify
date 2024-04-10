import React, {useState} from 'react';
import "./Herosection.scss";
import DoctorsImage from "../../data/images/NicePng_doctor-png_336282 1.svg";
import SearchSection from '../SearchSection/SearchSection';
const HeroSection = () => {
const [searchSection, setSearchSection]=useState(false);

const handleSearchsection=()=>{
  setSearchSection(!searchSection)
}
  return (
    <>
        <div className='Container'>
    <div className='TextContainer' >
        <p className='HeroText'>Skip the Travel! Find Online<br></br> <span style={{fontWeight:"1000"}}>Medical</span><span style={{color:"#2AA8FF",fontWeight:"1000"}} > Centers</span></p>
        <p className='SubText'>Connect instantly with a 24*7 specialist or choose to video visit a particular doctor.</p>
        <button onClick={handleSearchsection}>Find Centers</button>
    </div>
  <img className='ImageContainer' src={DoctorsImage} alt="doctors"/>
    </div>
    {searchSection &&
    <SearchSection/>}
    </>

    
  )
}

export default HeroSection