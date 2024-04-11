import React from 'react'
import "./DoctorsCarousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Doctor1 from "../../data/images/kindpng_1018785 1.png";
import Doctor2 from "../../data/images/toppng 1.png";
import Doctor3 from "../../data/images/PngItem_1939059 1.png";
const DoctorsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
  return (
    <div className='carouselContainer'>
        <h1>Our Medical Specialist</h1>
        <div className='slider-container'>
            <Slider {...settings}>
                <div className='slide'><div><img src={Doctor1} alt="Doctor1"/></div><p className='font1'>Dr.Ahmad Khan</p><p className='font2'>Neurologist</p></div>
                <div className='slide'><div><img src={Doctor2} alt="Doctor2"/></div><p className='font1'>Dr.Heena Sachdeva</p><p className='font2'>Orthopadics</p></div>
                <div className='slide'><div><img src={Doctor3} alt="Doctor3"/></div><p className='font1'>Dr.Ankur Sharma</p><p className='font2'>Medicine</p></div>
                <div className='slide'><div><img src={Doctor1} alt="Doctor1"/></div><p className='font1'>Dr.Ahmad Khan</p><p className='font2'>Neurologist</p></div>
                <div className='slide'><div><img src={Doctor2} alt="Doctor2"/></div><p className='font1'>Dr.Heena Sachdeva</p><p className='font2'>Orthopadics</p></div>
                <div className='slide'><div><img src={Doctor3} alt="Doctor3"/></div><p className='font1'>Dr.Ankur Sharma</p><p className='font2'>Medicine</p></div>
            </Slider>
        </div>
    </div>
  )
}

export default DoctorsCarousel