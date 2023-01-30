import React from "react";
import "./Customer.css";
import jamman1 from "../../assets/images/jamman1.png";
import jamman2 from "../../assets/images/jamman2.png";
import jamman3 from "../../assets/images/jamman3.png";
import jamman4 from "../../assets/images/jamman4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Customer = () => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="stories">
                <div className="container">
                    <div className="storiestext font-[Sofia Pro]">
                        <h2 className="text-center text-[#16182F]">Customer Stories</h2>
                        <p className="text-center text-[#616771]">
                            At the heart of our hiring software is a deep understanding of
                            what you need. We value your feedback and constantly strive to
                            finding you the best hiring shortlists in the shortest possible
                            time.
                        </p>
                    </div>
                    <div className="carditems relative">
                        <Slider {...settings}>
                            <div className="pakker">
                                <div className="jamesman flex">
                                    <img src={jamman1} alt="" />
                                    <div className="jamestext ">
                                        <h5 className="text-[#1C2640] font-[Sofia Pro]">
                                            James Pakker
                                        </h5>
                                        <p className="text-[#7989B1] font-[Sofia Pro]">
                                            Lead Recruiter, Tutlo, Poland
                                        </p>
                                    </div>
                                </div>
                                <p className="pakkerlorem  font-[Sofia Pro]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio, volutpat sit amet scelerisque vitae, sodales eget nulla.
                                    Phasellus sed nibh consectetur, tristique felis vitae,
                                    imperdiet urna. Nam condimentum magna eu velit commodo
                                    bibendum. Aliquam dictum metus nulla.
                                </p>

                                <p className="pakkerlorem1  font-[Sofia Pro]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio, volutpat sit amet scelerisque vitae.
                                </p>
                                <div className="sepdate flex ">
                                    <p className="text-[#7A91AB] font-[Sofia Pro]">
                                        Sep 28, 2021
                                    </p>
                                    <span class="messageboxs ml-auto">
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.20703 13.3851H9.59426V11.0112H7.20703V13.3851ZM14.7456 13.3851H17.1329V11.0112H14.7456V13.3851Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.7292 3.51507H0.923828V20.8816H6.32649L7.95986 17.883H3.93927V6.63854L13.8651 6.5136L16.8805 0.391602L11.7292 3.51507Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M18.0117 3.51562L16.2527 6.51416H20.2733V17.7586L10.3475 18.0085L7.33203 24.1305L12.4834 20.8821H23.4144V3.51562H18.0117Z"
                                                fill="#6196FE"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="pakker">
                                <div className="jamesman flex">
                                    <img src={jamman2} alt="" />
                                    <div className="jamestext ">
                                        <h5 className="text-[#1C2640] font-[Sofia Pro]">
                                            James Willam
                                        </h5>
                                        <p className="text-[#7989B1] font-[Sofia Pro]">
                                            CEO, The Growth Works, UK
                                        </p>
                                    </div>
                                </div>
                                <p className="pakkerlorem  font-[Sofia Pro]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio, volutpat sit amet scelerisque vitae, sodales eget nulla.
                                    Phasellus sed nibh consectetur, tristique felis vitae,
                                    imperdiet urna. Nam condimentum magna eu velit commodo
                                    bibendum. Aliquam dictum metus nulla.
                                </p>

                                <p className="pakkerlorem1 pakkerlorem2   font-[Sofia Pro]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus.{" "}

                                </p>
                                <div className="sepdate flex ">
                                    <p className="text-[#7A91AB] font-[Sofia Pro]">
                                        Sep 28, 2021
                                    </p>
                                    <span class="messageboxs ml-auto">
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.20703 13.3851H9.59426V11.0112H7.20703V13.3851ZM14.7456 13.3851H17.1329V11.0112H14.7456V13.3851Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.7292 3.51507H0.923828V20.8816H6.32649L7.95986 17.883H3.93927V6.63854L13.8651 6.5136L16.8805 0.391602L11.7292 3.51507Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M18.0117 3.51562L16.2527 6.51416H20.2733V17.7586L10.3475 18.0085L7.33203 24.1305L12.4834 20.8821H23.4144V3.51562H18.0117Z"
                                                fill="#6196FE"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="pakker">
                                <div className="jamesman flex">
                                    <img src={jamman3} alt="" />
                                    <div className="jamestext ">
                                        <h5 className="text-[#1C2640] font-[Sofia Pro]">
                                            Julia Devidson
                                        </h5>
                                        <p className="text-[#7989B1] font-[Sofia Pro]">
                                            Assistant Director, NTU, Singapore
                                        </p>
                                    </div>
                                </div>
                                <p className="pakkerlorem  pakkerlorem3 font-[Sofia Pro]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio, volutpat sit amet scelerisque vitae, sodales eget nulla.
                                    Phasellus sed nibh consectetur, tristique felis vitae,
                                    imperdiet urna. Nam condimentum magna eu velit commodo
                                    bibendum. Aliquam dictum metus nulla.
                                </p>

                                <div className="sepdate flex ">
                                    <p className="text-[#7A91AB] font-[Sofia Pro]">
                                        Sep 28, 2021
                                    </p>
                                    <span class="messageboxs ml-auto">
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.20703 13.3851H9.59426V11.0112H7.20703V13.3851ZM14.7456 13.3851H17.1329V11.0112H14.7456V13.3851Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.7292 3.51507H0.923828V20.8816H6.32649L7.95986 17.883H3.93927V6.63854L13.8651 6.5136L16.8805 0.391602L11.7292 3.51507Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M18.0117 3.51562L16.2527 6.51416H20.2733V17.7586L10.3475 18.0085L7.33203 24.1305L12.4834 20.8821H23.4144V3.51562H18.0117Z"
                                                fill="#6196FE"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="pakker ">
                                <div className="jamesman flex">
                                    <img src={jamman4} alt="" />
                                    <div className="jamestext ">
                                        <h5 className="text-[#1C2640] font-[Sofia Pro]">
                                            James Pakker
                                        </h5>
                                        <p className="text-[#7989B1] font-[Sofia Pro]">
                                            Lead Recruiter, Tutlo, Poland
                                        </p>
                                    </div>
                                </div>
                                <p className="pakkerlorem  font-[Sofia Pro]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio, volutpat sit amet scelerisque vitae, sodales eget nulla.
                                    Phasellus sed nibh consectetur, tristique felis vitae,
                                    imperdiet urna. Nam condimentum magna eu velit commodo
                                    bibendum. Aliquam dictum metus nulla.
                                </p>

                                <p className="pakkerlorem1 pakkerlorem4 font-[Sofia Pro]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio.{" "}

                                </p>
                                <div className="sepdate flex ">
                                    <p className="text-[#7A91AB] font-[Sofia Pro]">
                                        Sep 28, 2021
                                    </p>
                                    <span class="messageboxs ml-auto">
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.20703 13.3851H9.59426V11.0112H7.20703V13.3851ZM14.7456 13.3851H17.1329V11.0112H14.7456V13.3851Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.7292 3.51507H0.923828V20.8816H6.32649L7.95986 17.883H3.93927V6.63854L13.8651 6.5136L16.8805 0.391602L11.7292 3.51507Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M18.0117 3.51562L16.2527 6.51416H20.2733V17.7586L10.3475 18.0085L7.33203 24.1305L12.4834 20.8821H23.4144V3.51562H18.0117Z"
                                                fill="#6196FE"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="pakker">
                                <div className="jamesman flex">
                                    <img src={jamman1} alt="" />
                                    <div className="jamestext ">
                                        <h5 className="text-[#1C2640] font-[Sofia Pro]">
                                            James Pakker
                                        </h5>
                                        <p className="text-[#7989B1] font-[Sofia Pro]">
                                            Lead Recruiter, Tutlo, Poland
                                        </p>
                                    </div>
                                </div>
                                <p className="pakkerlorem  font-[Sofia Pro]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio, volutpat sit amet scelerisque vitae, sodales eget nulla.
                                    Phasellus sed nibh consectetur, tristique felis vitae,
                                    imperdiet urna. Nam condimentum magna eu velit commodo
                                    bibendum. Aliquam dictum metus nulla.
                                </p>

                                <p className="pakkerlorem1  font-[Sofia Pro]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio, volutpat sit amet scelerisque vitae.
                                </p>
                                <div className="sepdate flex ">
                                    <p className="text-[#7A91AB] font-[Sofia Pro]">
                                        Sep 28, 2021
                                    </p>
                                    <span class="messageboxs ml-auto">
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.20703 13.3851H9.59426V11.0112H7.20703V13.3851ZM14.7456 13.3851H17.1329V11.0112H14.7456V13.3851Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.7292 3.51507H0.923828V20.8816H6.32649L7.95986 17.883H3.93927V6.63854L13.8651 6.5136L16.8805 0.391602L11.7292 3.51507Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M18.0117 3.51562L16.2527 6.51416H20.2733V17.7586L10.3475 18.0085L7.33203 24.1305L12.4834 20.8821H23.4144V3.51562H18.0117Z"
                                                fill="#6196FE"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="pakker">
                                <div className="jamesman flex">
                                    <img src={jamman2} alt="" />
                                    <div className="jamestext ">
                                        <h5 className="text-[#1C2640] font-[Sofia Pro]">
                                            James Willam
                                        </h5>
                                        <p className="text-[#7989B1] font-[Sofia Pro]">
                                            CEO, The Growth Works, UK
                                        </p>
                                    </div>
                                </div>
                                <p className="pakkerlorem  font-[Sofia Pro]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio, volutpat sit amet scelerisque vitae, sodales eget nulla.
                                    Phasellus sed nibh consectetur, tristique felis vitae,
                                    imperdiet urna. Nam condimentum magna eu velit commodo
                                    bibendum. Aliquam dictum metus nulla.
                                </p>

                                <p className="pakkerlorem1 pakkerlorem2   font-[Sofia Pro]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus.{" "}

                                </p>
                                <div className="sepdate flex ">
                                    <p className="text-[#7A91AB] font-[Sofia Pro]">
                                        Sep 28, 2021
                                    </p>
                                    <span class="messageboxs ml-auto">
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.20703 13.3851H9.59426V11.0112H7.20703V13.3851ZM14.7456 13.3851H17.1329V11.0112H14.7456V13.3851Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.7292 3.51507H0.923828V20.8816H6.32649L7.95986 17.883H3.93927V6.63854L13.8651 6.5136L16.8805 0.391602L11.7292 3.51507Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M18.0117 3.51562L16.2527 6.51416H20.2733V17.7586L10.3475 18.0085L7.33203 24.1305L12.4834 20.8821H23.4144V3.51562H18.0117Z"
                                                fill="#6196FE"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="pakker">
                                <div className="jamesman flex">
                                    <img src={jamman3} alt="" />
                                    <div className="jamestext ">
                                        <h5 className="text-[#1C2640] font-[Sofia Pro]">
                                            Julia Devidson
                                        </h5>
                                        <p className="text-[#7989B1] font-[Sofia Pro]">
                                            Assistant Director, NTU, Singapore
                                        </p>
                                    </div>
                                </div>
                                <p className="pakkerlorem  pakkerlorem3 font-[Sofia Pro]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio, volutpat sit amet scelerisque vitae, sodales eget nulla.
                                    Phasellus sed nibh consectetur, tristique felis vitae,
                                    imperdiet urna. Nam condimentum magna eu velit commodo
                                    bibendum. Aliquam dictum metus nulla.
                                </p>

                                <div className="sepdate flex ">
                                    <p className="text-[#7A91AB] font-[Sofia Pro]">
                                        Sep 28, 2021
                                    </p>
                                    <span class="messageboxs ml-auto">
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.20703 13.3851H9.59426V11.0112H7.20703V13.3851ZM14.7456 13.3851H17.1329V11.0112H14.7456V13.3851Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.7292 3.51507H0.923828V20.8816H6.32649L7.95986 17.883H3.93927V6.63854L13.8651 6.5136L16.8805 0.391602L11.7292 3.51507Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M18.0117 3.51562L16.2527 6.51416H20.2733V17.7586L10.3475 18.0085L7.33203 24.1305L12.4834 20.8821H23.4144V3.51562H18.0117Z"
                                                fill="#6196FE"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="pakker ">
                                <div className="jamesman flex">
                                    <img src={jamman4} alt="" />
                                    <div className="jamestext ">
                                        <h5 className="text-[#1C2640] font-[Sofia Pro]">
                                            James Pakker
                                        </h5>
                                        <p className="text-[#7989B1] font-[Sofia Pro]">
                                            Lead Recruiter, Tutlo, Poland
                                        </p>
                                    </div>
                                </div>
                                <p className="pakkerlorem  font-[Sofia Pro]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio, volutpat sit amet scelerisque vitae, sodales eget nulla.
                                    Phasellus sed nibh consectetur, tristique felis vitae,
                                    imperdiet urna. Nam condimentum magna eu velit commodo
                                    bibendum. Aliquam dictum metus nulla.
                                </p>

                                <p className="pakkerlorem1 pakkerlorem4 font-[Sofia Pro]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                                    ipsum eu quam laoreet feugiat quis ut risus. Aenean felis
                                    odio.{" "}

                                </p>
                                <div className="sepdate flex ">
                                    <p className="text-[#7A91AB] font-[Sofia Pro]">
                                        Sep 28, 2021
                                    </p>
                                    <span class="messageboxs ml-auto">
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.20703 13.3851H9.59426V11.0112H7.20703V13.3851ZM14.7456 13.3851H17.1329V11.0112H14.7456V13.3851Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11.7292 3.51507H0.923828V20.8816H6.32649L7.95986 17.883H3.93927V6.63854L13.8651 6.5136L16.8805 0.391602L11.7292 3.51507Z"
                                                fill="#6196FE"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M18.0117 3.51562L16.2527 6.51416H20.2733V17.7586L10.3475 18.0085L7.33203 24.1305L12.4834 20.8821H23.4144V3.51562H18.0117Z"
                                                fill="#6196FE"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>


                        </Slider>
                    </div>

                    <div className="viewbtn flex justify-center">
                        <Link to="/"
                            className="viewmorebtn text-[#457CE8] font-[Sofia Pro] flex justify-center items-center"
                        >
                            <span> View More Testimonials</span>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.61872 0.256282C7.27701 -0.0854272 6.72299 -0.0854272 6.38128 0.256282C6.03957 0.59799 6.03957 1.15201 6.38128 1.49372L11.0126 6.125H0.875C0.391751 6.125 0 6.51675 0 7C0 7.48325 0.391751 7.875 0.875 7.875H11.0126L6.38128 12.5063C6.03957 12.848 6.03957 13.402 6.38128 13.7437C6.72299 14.0854 7.27701 14.0854 7.61872 13.7437L13.7431 7.61934C13.7452 7.61723 13.7473 7.61511 13.7494 7.61298C13.9038 7.45569 13.9993 7.2403 14 7.00262C14 7.00175 14 7.00088 14 7C14 6.99913 14 6.99825 14 6.99738C13.9997 6.87969 13.9761 6.76747 13.9336 6.66506C13.8919 6.56421 13.8305 6.46957 13.7494 6.38702C13.7473 6.38492 13.7453 6.38283 13.7432 6.38074M7.61872 0.256282L13.7432 6.38074L7.61872 0.256282Z"
                                    fill="#457CE8"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Customer;
