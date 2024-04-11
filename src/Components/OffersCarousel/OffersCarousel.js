import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "../../data/images/Group 10.png";
import Card2 from "../../data/images/Group 11.png";
import "./OfferCarousel.scss"

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
        <div className='slider-container'>
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
