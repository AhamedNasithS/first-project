import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Testimonial_1 from "../../../../images/testimonial1.svg";
import Testimonial_2 from "../../../../images/testimonial2.svg";
import Testimonial_3 from "../../../../images/testimonial3.svg";

export default function Testimonial() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        swipe: true,
        arrows: true,
        centerMode: false,
        prevArrow: <div className='bg-gradient-to-br from-[#FDD220] to-[#FFFFFF] w-[41px] h-[41px] rounded-full p-[2px]'></div>,
        nextArrow: <div className='bg-gradient-to-br from-[#FDD220] to-[#FFFFFF] w-[41px] h-[41px] rounded-full p-[2px]'></div>,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    };

    const Testimonials = [
        { image: `${Testimonial_1}` },
        { image: `${Testimonial_2}` },
        { image: `${Testimonial_3}` },
    ];

    return (
        <div className="flex flex-col relative items-start w-11/12 ml-auto mt-[100px]">
            <div className='absolute bg-gradient-to-br from-[#10192C29] via-[#101B2E8F] to-[#29457B00] w-[600px] h-[300px] rounded-l-[20px] border-[#1F44C5CC] border-l-[1px] border-t-[1px] border-b-[1px] right-0 z-0'></div>
            <h3 className='text-[45px] font-medium bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Whats Clients Says</h3>
            <h4 className='text-[18px] font-normal text-[#FFFBEC] mt-[10px] w-4/12'>Harmony of Happiness: Cherished Tales from Our Valued Customers</h4>

            <Slider {...settings} className='w-full relative testimonialSlider mt-[50px]'>
                {Testimonials.map((item, index) => (
                    <div key={index} className='focus:outline-none relative pr-[10px]'>
                        <img src={item.image} alt='profile' />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
