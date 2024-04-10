import React from 'react';
import "./SpecialisationSection.scss";
import DrugStore from "../../data/images/Drugstore.png";
import Stethscope from "../../data/images/Stethoscope.png";
import HeartRate from "../../data/images/Heart Rate.png"
import HearRateMonitor from "../../data/images/Heart Rate Monitor.png";
import BloodSample from "../../data/images/ab.png";
import Immune from "../../data/images/q.png";
import Xray from "../../data/images/X-Ray.png";
const SpecialisationSection = () => {
  return (
    <div className='specialisationContainer'>
        <h1 style={{textAlign:"center", fontSize:"2.5rem", padding:"20px"}}>Find by specialisation</h1>
        <div className='specialisationSection'>
            <div><img src={DrugStore} alt="Dentistry" /><p className='font'>Dentistry</p></div>
            <div><img src={Stethscope} alt="Dentistry"/><p className='font'>Dentistry</p></div>
            <div><img src={HeartRate} alt="Dentistry"/><p className='font'>Dentistry</p></div>
            <div><img src={HearRateMonitor} alt="Dentistry"/><p className='font'>Dentistry</p></div>
            <div><img src={BloodSample} alt="Dentistry"/><p className='font'>Dentistry</p></div>
            <div><img src={Immune} alt="Dentistry"/><p className='font'>Dentistry</p></div>
            <div><img src={DrugStore} alt="Dentistry"/><p className='font'>Dentistry</p></div>
            <div><img src={Xray} alt="Dentistry"/><p className='font'>Dentistry</p></div>
        </div>
        <button className='button'>View All</button>
    </div>
  )
}

export default SpecialisationSection