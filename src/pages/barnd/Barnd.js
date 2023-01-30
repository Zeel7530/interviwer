import React from 'react'
import './Barnd.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import barnd1 from '../../assets/images/watson1.png';
import barnd2 from '../../assets/images/watson2.png';
import barnd3 from '../../assets/images/watson3.png';
import barnd4 from '../../assets/images/watson4.png';
import barnd5 from '../../assets/images/watson5.png';
import barnd6 from '../../assets/images/watson6.png';
import barnd7 from '../../assets/images/watson7.png';
import barnd8 from '../../assets/images/watson8.png';

const Barnd = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };


    return (
        <>
            <section class="barndwatson bg-[#F5F5F5]">
                <div className="container mx-auto">
                    <Slider {...settings}>
                        <div className='items'>
                            <a href="#"><img src={barnd1} alt="d" /></a>
                        </div>
                        <div className='items'>
                            <a href="#"> <img src={barnd2} alt="d" /></a>
                        </div>
                        <div className='items'>
                            <a href="#"><img src={barnd3} alt="d" /></a>
                        </div>
                        <div className='items'>
                            <a href="#"><img src={barnd4} alt="d" /></a>
                        </div>
                        <div className='items'>
                            <a href="#"><img src={barnd5} alt="d" /></a>
                        </div>
                        <div className='items'>
                            <a href="#"><img src={barnd6} alt="d" /></a>
                        </div>
                        <div className='items'>
                            <a href="#"><img src={barnd7} alt="d" /></a>
                        </div>
                        <div className='items'>
                            <a href="#"><img src={barnd8} alt="d" /></a>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Barnd