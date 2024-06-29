"use client"

import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/outfit-1.png",
            title: "Best Deal",
            mainTitle: "",
            price: "$55",
        },
        // {
        //     id: 1,
        //     img: "/shoe.webp",
        //     title: "Trending Item",
        //     mainTitle: "Heading-2",
        //     price: "$55",
        // },
        {
            id: 2,
            img: "/watch-4.jpg",
            title: "15-7-2024",
            mainTitle: "Limited-Time",
            price: "12",
        },
    ];

    return (
        <div>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide key={item.id}
                            img={item.img}
                            title={item.title} mainTitle={item.mainTitle}
                            price={item.price} />
                    ))}
                </Slider>
            </div>
        </div>
    );

}

export default Hero;
