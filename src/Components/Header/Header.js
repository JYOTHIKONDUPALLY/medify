import React from "react";
import "./Header.scss";
import Logo from "../../data/images/Group 8.svg";
import { FiMenu } from "react-icons/fi";
const Header = () => {
  return (
    <div className="container">
      <div className="logoContainer">
        <span className="toggleButton">
          <FiMenu color="#2AA8FF" fontSize={"30px"} />
        </span>
        <img src={Logo} alt="Logo" width={100} />
      </div>
      <ul className="navbar-laptop">
        <li>Find Doctors</li>
        <li>Hospitals</li>
        <li>Medicines</li>
        <li>Surgeries</li>
        <li>Software for Provider</li>
        <li>Facilities</li>
      </ul>
      <button className="button">By Bookings</button>
    </div>
  );
};

export default Header;
