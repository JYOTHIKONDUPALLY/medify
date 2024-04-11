import React from "react";
import "./Blogs.scss";
import detoxImage from "../../data/images/image 3.png";
import Doctor2 from "../../data/images/doctor2-80x80.jpg.png";

const Blogs = () => {
  const blogItems = Array.from({ length: 3 }, (_, index) => index);

  return (
    <div className="BlogContainer">
      <p style={{textAlign:"center", color:"#2AA8ff", padding:"10px", fontWeight:600, fontSize:"20px"}}>Blog & News</p>
      <h1 style={{textAlign:"center", color:"#1B3C74",padding:"10px", fontSize:"2.5rem"}}>Read Our Latest News</h1>
      <div className="blog-item">
        {blogItems.map((item, index) => (
          <div  key={index} className="blog-content">
                        
              <img src={detoxImage} alt="detoxImage" />
            
            <p>Medical | March 31, 2022</p>

            <p style={{color:"#1B3C74", fontWeight:"500"}}>6 Tips to protect Your Mental Health when You're Sick</p>
            <div > 
              <img className="avatar" src={Doctor2} alt="avatar" /> <span className="avatarname">Rebecca lee</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
