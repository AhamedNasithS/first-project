import React from 'react'
// import Slack from "../../../images/slack1.svg";
// import Jira from "../../../images/jira1.svg";
// import Asana from "../../../images/asana1.svg";
// import iconGroup from "../../../images/workfast.svg";
import icons from "../../../images/competitiveLogos.svg";
import { useNavigate } from 'react-router-dom';
import API from '../../../utils/API';
import axios from 'axios';



export default function Main() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "BOOK_DEMO_BUTTON"
            }
        );
        if (response.data.statusCode === 200) {
            navigate('/landingin/form')
        }
    };

    return (
        <div className='relative px-[20px] md:px-0 w-full md:w-11/12 mx-auto flex flex-col justify-center items-center gap-[30px] lg:gap-[60px] overflow-hidden'>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='shooting-stars1'></div>
            <div className='shooting-stars'></div>
            {/* <img src={iconGroup} alt='iconGroup' className='relative md:z-[30] mt-[30px] md:mt-[60px] lg:mt-[100px] w-[30%] md:w-auto' /> */}
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <h2 className='text-[#FFFFFF] sen-bold text-[22px] md:text-[28px] lg:text-[32px] xl:text-[50px] text-center mt-[30px] md:mt-[60px] lg:mt-[100px] relative z-[1]'>Are you paying for <span className='text-[#FDD220]'>Multiple Software tools</span> to</h2>
                <h2 className='text-[#FFFFFF] sen-bold text-[22px] md:text-[28px] lg:text-[32px] xl:text-[50px] text-center relative z-[1]'>Get your work done ? </h2>
            </div>
            {/* <h3 className='text-[#E1E1E1] text-[18px] md:text-[24px] lg:text-[26px] xl:text-[38px] font-normal md:w-8/12 text-center'>Spending too much on multiple software too that doesn't deliver value?</h3> */}
            {/* <div className='flex gap-[20px] items-center mb-[20px]'>
                <div className='w-[180px] sm:w-[250px] lg:w-[278px] h-[40px] lg:h-[54px] animate bg-[#3E3E3E] p-[1px] relative z-[1] rounded-[6px] lg:rounded-[8px]'>
                    <div className='w-full h-full bg-[#000] relative z-[5] rounded-[6px] lg:rounded-[8px]'>
                        <div className='w-full h-full bg-[#E2E8FF12] lg:py-[10px]'>
                            <input type='email' className='w-full text-[#E2E8FF] placeholder:text-[#E2E8FF] h-full text-[12px] lg:text-[18px] placeholder:text-[12px] lg:placeholder:text-[18px] bg-transparent focus:outline-none ml-[18px]' value={email} placeholder='Enter your work email' onChange={(e) => {setEmail(e?.target?.value)}} />
                        </div>
                    </div>
                </div>
                <div className='w-[100px] lg:w-[150px] h-[40px] lg:h-[54px]'>
                    <button className='w-full h-full rounded-[14px] bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B] border-[1px] border-[#995900] b1 relative' onClick={() =>{setIsForm(true)}}>
                        <span className='text text-[#2A2200] text-[12px] lg:text-[18px] inter-medium'>Book a Demo</span>
                        <span class="shimmer"></span>
                    </button>
                </div>
            </div> */}
            {/* <div className='flex gap-[22px] items-center'>
                <a href='https://pepul.workfast.ai/' target='_blank' rel='noreferrer'><button className='py-[8px] px-[12px] w-[150px] lg:w-[173px] h-[44px] lg:h-[54px] text-[#2A2200] text-[16px] lg:text-[18px] font-semibold rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] relative'>Sign up for free</button></a>
                <div className='w-[150px] lg:w-[173px] h-[44px] lg:h-[54px] rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] p-[0.5px] md:p-[1px] cursor-pointer' onClick={() => { setIsForm(true) }}>
                    <div className='w-full h-full rounded-[10px] bg-[#010306] flex justify-center'>
                        <h3 className='text-[#FFFFFF] text-[16px] lg:text-[18px] font-semibold my-auto'>Request Demo</h3>
                    </div>
                </div>
            </div> */}
            <img src={icons} alt='icons' className='md:w-[60%] xl:w-auto' />
            <div>
                <h3 className='text-[#FFFFFF] text-[22px] lg:text-[30px]  xl:text-[38px] sen-normal text-center'>If your answer is <span className='text-[#FDD220] text-[22px] md:text-[30px] xl:text-[38px] sen-bold'>Yes,</span> We are here to help you out </h3>
                <h2 className='text-[#FFFFFF] text-[22px] lg:text-[36px] xl:text-[42px] sen-bold mt-[12px] text-center'>With <span className='text-[#FDD220]'>Workfast.ai</span></h2>
            </div>
            <div className='flex gap-[20px] items-center mb-[20px]'>
                {/* <div className='w-[180px] sm:w-[250px] lg:w-[278px] h-[40px] lg:h-[54px] animate bg-[#3E3E3E] p-[1px] relative z-[1] rounded-[6px] lg:rounded-[8px]'>
                    <div className='w-full h-full bg-[#000] relative z-[5] rounded-[6px] lg:rounded-[8px]'>
                        <div className='w-full h-full bg-[#E2E8FF12] lg:py-[10px]'>
                            <input type='email' className='w-full text-[#E2E8FF] placeholder:text-[#E2E8FF] h-full text-[12px] lg:text-[18px] placeholder:text-[12px] lg:placeholder:text-[18px] bg-transparent focus:outline-none ml-[18px]' value={email} placeholder='Enter your work email' onChange={(e) => { setEmail(e?.target?.value) }} />
                        </div>
                    </div>
                </div> */}
                <div className='w-[100px] lg:w-[150px] h-[40px] lg:h-[54px]'>
                    <button className='w-full h-full rounded-[14px] bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B] border-[1px] border-[#995900] b1 relative' onClick={(e) => { handleSubmit(e) }}>
                        <span className='text text-[#2A2200] text-[12px] lg:text-[18px] sen-bold'>Free Trail</span>
                        <span class="shimmer"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
