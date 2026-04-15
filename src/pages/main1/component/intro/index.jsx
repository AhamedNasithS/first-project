import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRightLong } from "react-icons/fa6";
import banner from "../../../../images/main/banner.png"


export default function Intro({ handleFeatureClick }) {
    const [email, setEmail] = React.useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="bg-cover bg-center h-full w-full flex flex-col items-center relative mb-[20px] lg:mb-[60px] xl:mb-[100px] overflow-hidden"
        >
            <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='shooting-stars1'></div>
            <div className='shooting-stars'></div>
            <div
                data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500"
                className='text-center relative z-[10]'>
                <h2 className='text-[24px] sm:text-[40px] xl:text-[70px] text-[#FFFFFF] font-bold mt-[40px]'>
                    A smarter way to collaborate
                </h2>
                <h2 className='text-[24px] sm:text-[40px] xl:text-[70px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent font-bold'>
                    built for high-performing teams
                </h2>
            </div>
            <div className='flex gap-[20px] items-center mt-[20px] lg:mt-[30px] xl:mt-[40px]'
                data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500"
            >
                <div className='w-[180px] sm:w-[250px] lg:w-[378px] h-[40px] lg:h-[54px] animate bg-[#3E3E3E] p-[1px] relative z-[1] rounded-[6px] lg:rounded-[8px]'>
                    <div className='w-full h-full bg-[#000] relative z-[5] rounded-[6px] lg:rounded-[8px]'>
                        <div className='w-full h-full bg-[#E2E8FF12] lg:py-[10px]'>
                            <input type='email' className='w-full text-[#E2E8FF] placeholder:text-[#E2E8FF] h-full text-[12px] lg:text-[16px] placeholder:text-[12px] lg:placeholder:text-[16px] bg-transparent focus:outline-none ml-[18px]' value={email} placeholder='Enter your work email' onChange={handleEmail} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-[22px] items-center mt-[20px]'>
                <button className='py-[8px] px-[12px] w-[220px] lg:w-[253px] h-[44px] lg:h-[54px] rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B] border-[1px] border-[#995900] b1 relative z-[10]' onClick={(e) => { handleFeatureClick() }}>
                    <span className='text text-[#2A2200] text-[16px] lg:text-[18px] font-semibold flex gap-[10px] items-center justify-center'>Get Started. Free Trial <FaArrowRightLong /></span>
                    <span class="shimmer"></span>
                </button>
            </div>
            <img src={banner} alt='intro'
                data-aos="zoom-in-up" data-aos-duration="1500"
                className='mt-[15px] lg:mt-[25px] xl:mt-[40px] w-[80%] relative z-[10] rounded-[10px] max-w-[800px]' />
        </div>
    )
}
