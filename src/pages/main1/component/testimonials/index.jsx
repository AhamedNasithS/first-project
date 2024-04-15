import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../../../../images/rightArrow.svg"

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
        prevArrow: <img src={Arrow} alt='arrow'/>,
        nextArrow: <img src={Arrow} alt='arrow'/>,
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
        { image: "https://dz1x1c630cl14.cloudfront.net/webassets/testimonial1.svg" },
        { image: "https://dz1x1c630cl14.cloudfront.net/webassets/testimonial2.svg" },
        { image: "https://dz1x1c630cl14.cloudfront.net/webassets/testimonial3.svg" },
    ];

    return (
        <div className="flex flex-col relative items-center lg:items-start w-full lg:w-11/12 lg:ml-auto my-[20px] lg:my-[100px]">
            <div className='absolute bg-gradient-to-br from-[#10192C29] via-[#101B2E8F] to-[#29457B00] w-[200px] lg:w-[300px] xl:w-[600px] h-[200px] lg:h-[300px] xl:h-[400px] rounded-l-[20px] border-[#1F44C5CC] border-l-[1px] border-t-[1px] border-b-[1px] right-0 top-[69%] lg:top-[68%] -translate-y-[50%] z-0'></div>
            <h3 className='text-[24px] sm:text-[35px] lg:text-[45px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Whats Clients Says</h3>
            <h4 className='text-[12px] sm:text-[16px] lg:text-[18px] text-center lg:text-start font-normal text-[#FFFBEC] mt-[10px] w-full lg:w-8/12 xl:w-4/12 px-[20px] lg:px-0'>Harmony of Happiness: Cherished Tales from Our Valued Customers</h4>

            <Slider {...settings} className='w-full relative testimonialSlider mt-[30px] lg:mt-[50px] px-[20px] lg:px-0'>
                {Testimonials.map((item, index) => (
                    <div key={index} className='focus:outline-none relative pr-[10px]'>
                        <img src={item.image} alt='profile' />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
