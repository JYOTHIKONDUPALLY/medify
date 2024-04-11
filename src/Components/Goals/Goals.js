import React from "react";
import "./Goals.scss";
import DoctorImage1 from "../../data/images/image-01-1.png.png";
import DoctorImage2 from "../../data/images/image-02-1.png.png";
import callIcon from "../../data/images/Frame.png";
import listIcon from "../../data/images/svg.h2d-208731fd.png";
const Goals = () => {
  return (
    <div className="GoalContainer">
      <div className="ImageContainer">
        <div className="callcontainer"><img src={callIcon} width="30px" alt="icon"/> <span style={{fontWeight:700, color:" rgba(27, 60, 116, 1)"}}
        >Free Consultation</span>
        <p style={{ fontSize:"15px"}}>Consultation with the best</p></div>
        <img  className="img1"src={DoctorImage1} alt="DoctorImage"/>
        <img className="img2" src={DoctorImage2} alt="DoctorImage"/>
      </div>
      <div className="textContainer">
        <p style={{color:"#2AA7FF",fontWeight:"600"}}>HELPING PATIENTS FROM AROUND THE GOBLE!!</p>
        <h1 style={{color:"#2AA7FF", fontSize:"2.5rem", fontWeight:"600"}}><span style={{color:" #1B3C74"}}>Patient</span> Caring</h1>
        <p style={{fontSize:"17px"}}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
        <ul>
            <li>Stay Upadted About Your Health</li>
            <li>Check Your Results Online</li>
            <li>Manage Your Appoinments</li>
        </ul>
      </div>
    </div>
  );
};

export default Goals;
