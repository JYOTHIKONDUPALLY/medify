import React, {useState} from 'react';
import "./SearchSection.scss";
import DoctorIcon from "../../data/images/Doctor.png";
import LabIcon from "../../data/images/Drugstore.png";
import HospitalIcon from "../../data/images/Hospital.png";
import MedicalStoreIcon from "../../data/images/Capsule.png";
import AmbulanceIcon from "../../data/images/Ambulance.png";
import { GoSearch } from "react-icons/go";

const SearchSection = () => {
const [state, SetState]=useState("");
const [city, setCity]=useState("");
const handleStateChange=(e)=>{
SetState(e.target.value);
}
const handleCityChange=(e)=>{
    setCity(e.target.value);
}
  return (
    <div className='SearchContainer'>
        <div className='SearchSection'>
            <div className='search-bar'>
            <GoSearch/><input type='text' placeholder='State' value={state} onChnage={handleStateChange}/>
            </div>
        <div className='search-bar'>
        <GoSearch/><input type='text' placeholder='City'  value={city} onChange={handleCityChange}/>
        </div>
       
        <button className='button'><GoSearch fontSize={"16px"}/>   Search</button>
        </div>
        <p style={{padding:"30px 0px", fontSize:"20px", textAlign:"center"}}>You may be looking for</p>
        <div className='IconContainer'>
            <div className='Icon'><img src={DoctorIcon} alt="DoctorIcon" width={"60px"} height={"60px"}/><p className='fontStyle'>Doctor</p></div>
            <div  className='Icon'><img src={LabIcon} alt="LabIcon"  width={"60px"} height={"60px"}/><p className='fontStyle'>Labs</p></div>
            <div  className='Icon'><img src={HospitalIcon} alt="HospitalIcon" width={"60px"} height={"60px"} /><p className='fontStyle'>Hospital</p></div>
            <div  className='Icon'><img src={MedicalStoreIcon} alt="MedicalStoreIcon" width={"60px"} height={"60px"} /><p className='fontStyle'>Medical Store</p></div>
            <div  className='Icon'><img src={AmbulanceIcon} alt="AmbulanceIcon" width={"60px"} height={"60px"} /><p className='fontStyle'>Ambulance</p></div>
            </div>
    </div>
  )
}

export default SearchSection