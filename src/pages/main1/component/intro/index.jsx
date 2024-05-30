import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import API from '../../../../utils/API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

export default function Intro({ setIsForm, email, setEmail }) {
    const navigate = useNavigate();
    // const [email, setEmail] = React.useState('');

    // const handleEmail = (e) => {
    //     const email = e.target.value;
    //     setEmail(email);
    // };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await axios.post(API.BUTTON,
    //         {
    //             "eventName": "REQUEST_DEMO_MAIN"
    //         }
    //     );
    //     if (response.data.statusCode === 200) {
    //         setIsForm(true)
    //     }
    // };

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "SIGN_UP_FOR_FREE_MAIN"
            }
        );
        if (response.data.statusCode === 200) {
            // window.location.href = 'https://app.workfast.ai/';
            navigate('/signup')
        }
    };

    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="bg-cover bg-center h-full w-full flex flex-col items-center relative mb-[20px] lg:mb-[60px] xl:mb-[100px] overflow-hidden"
        // style={{ backgroundImage: `url(https://dz1x1c630cl14.cloudfront.net/webassets/background.svg)` }}
        >
            <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div
                // data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500" 
                className='text-center'>
                <h2 className='text-[24px] sm:text-[40px] xl:text-[70px] text-[#FFFFFF] inter-bold mt-[40px]'>One intelligent Platform</h2>
                <h2 className='text-[24px]  sm:text-[40px] xl:text-[70px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent inter-bold'>for your team to work faster</h2>
            </div>
            {/* <div className='flex gap-[20px] items-center mt-[20px] lg:mt-[30px] xl:mt-[40px]'
            data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500"
            >
                <div className='w-[180px] sm:w-[250px] lg:w-[278px] h-[40px] lg:h-[44px] animate bg-[#3E3E3E] p-[1px] relative z-[1] rounded-[6px] lg:rounded-[8px]'>
                    <div className='w-full h-full bg-[#000] relative z-[5] rounded-[6px] lg:rounded-[8px]'>
                        <div className='w-full h-full bg-[#E2E8FF12] lg:py-[10px]'>
                            <input type='email' className='w-full text-[#E2E8FF] placeholder:text-[#E2E8FF] h-full text-[12px] lg:text-[16px] placeholder:text-[12px] lg:placeholder:text-[16px] bg-transparent focus:outline-none ml-[18px]' value={email} placeholder='Enter your work email' onChange={handleEmail} />
                        </div>
                    </div>
                </div>
                <div className='w-[100px] lg:w-[140px] h-[44px]'>
                    <div className='w-full h-full animate bg-transparent p-[1px] relative z-[1] border-[#3E3E3E] border-[1px] rounded-[6px] lg:rounded-[8px]'>
                        <div className='w-full h-full p-[2px] lg:p-[6px] bg-[#000] relative z-[5] rounded-[6px] lg:rounded-[8px]'>
                    <button className='w-full h-full rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] border-[1px] border-[#995900] b1 relative' onClick={() => { setIsForm(true) }}>
                        <span className='text text-[#2A2200] text-[12px] lg:text-[14px] inter-medium'>Book a Demo</span>
                        <span class="shimmer"></span>
                    </button>
                    </div>
                    </div>
                </div>
            </div> */}
            <div className='flex gap-[22px] items-center mt-[50px]'>
                <button className='py-[8px] px-[12px] w-[220px] lg:w-[253px] h-[44px] lg:h-[54px] rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B] border-[1px] border-[#995900] b1 relative' onClick={(e) => {handleClick(e)}}>
                    <span className='text text-[#2A2200] text-[16px] lg:text-[18px] font-semibold flex gap-[10px] items-center justify-center'>Get Started. Free Trial <FaArrowRightLong/></span>
                    <span class="shimmer"></span>
                </button>
                {/* <button className='py-[8px] px-[12px] w-[150px] lg:w-[173px] h-[44px] lg:h-[54px] text-[#2A2200] text-[16px] lg:text-[18px] font-semibold rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] relative cursor-pointer' onClick={(e) => {handleClick(e)}}>Sign up for free</button> */}
                {/* <div className='w-[150px] lg:w-[173px] h-[44px] lg:h-[54px] rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] p-[0.5px] md:p-[1px] cursor-pointer' onClick={(e) => { handleSubmit(e) }}>
                    <div className='w-full h-full rounded-[10px] bg-[#010306] flex justify-center'>
                        <h3 className='text-[#FFFFFF] text-[16px] lg:text-[18px] font-semibold my-auto'>Request Demo</h3>
                    </div>
                </div> */}
            </div>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/Mainscreen.webp' alt='intro'
                // data-aos="zoom-in-up" data-aos-duration="1500" 
                className='mt-[15px] lg:mt-[25px] xl:mt-[50px] w-[80%] relative' />
        </div>
    )
}
