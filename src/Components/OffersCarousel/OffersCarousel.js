import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "../../data/images/Group 10.png";
import Card2 from "../../data/images/Group 11.png";


const OffersCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <div className='slider-container' style={{backgroundColor:"white", padding:"50px"}}>
            <Slider {...settings}>
                <div><img src={Card1} alt="offer1"/></div>
                <div><img src={Card2} alt="offer2"/></div>
                <div><img src={Card1} alt="offer1"/></div>
                <div><img src={Card2} alt="offer2"/></div>
                <div><img src={Card1} alt="offer1"/></div>
                <div><img src={Card2} alt="offer2"/></div>
            </Slider>
        </div>
    );
}

export default OffersCarousel;
