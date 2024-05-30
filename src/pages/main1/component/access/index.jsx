import React from 'react'
import API from '../../../../utils/API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Access({ setIsForm }) {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(API.BUTTON,
      {
        "eventName": "REQUEST_DEMO_MAIN"
      }
    );
    if (response.data.statusCode === 200) {
      setIsForm(true)
    }
  };

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
  return (
    <div className='w-full relative flex flex-col gap-[10px] lg:gap-[30px] items-center mt-[50px] sm:mt-[100px] lg:mt-[150px] my-[20px] lg:my-[100px] px-[20px] lg:px-0'>
      <h2 className='text-[24px] sm:text-[40px] lg:text-[50px] xl:text-[70px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Exclusive Early Access</h2>
      <h3 className='text-[14px] sm:text-[22px] lg:text-[30px] xl:text-[55px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Dive into Our AI-Powered Productivity Platform</h3>
      {/* <button className='w-full sm:w-7/12 lg:w-[570px] mx-auto bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] h-[40px] lg:h-[70px] mt-[10px] lg:mt-[20px] rounded-[6px] lg:rounded-[20px] relative  b2' onClick={() => {setIsForm(true)}}><span className='text-[#2A2200] text-[16px] lg:text-[28px] font-medium'>Apply for early access 👋🏻</span><span class="shimmer1"></span></button> */}
      <div className='flex gap-[22px] items-center'>
        {/* <button className='py-[8px] px-[12px] w-[150px] lg:w-[173px] h-[44px] lg:h-[54px] text-[#2A2200] text-[16px] lg:text-[18px] font-semibold rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] relative' onClick={(e) => {handleClick(e)}}><span>Sign up for free</span><span class="shimmer"></span></button> */}
        <button className='py-[8px] px-[12px] w-[150px] lg:w-[173px] h-[44px] lg:h-[54px] rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B] border-[1px] border-[#995900] b1 relative' onClick={(e) => { handleClick(e) }}>
          <span className='text text-[#2A2200] text-[16px] lg:text-[18px] font-semibold'>Free Trail</span>
          <span class="shimmer"></span>
        </button>
        {/* <div className='w-[150px] lg:w-[173px] h-[44px] lg:h-[54px] rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] p-[0.5px] md:p-[1px] cursor-pointer' onClick={(e) => { handleSubmit(e) }}>
          <div className='w-full h-full rounded-[10px] bg-[#010306] flex justify-center'>
            <h3 className='text-[#FFFFFF] text-[16px] lg:text-[18px] font-semibold my-auto'>Request Demo</h3>
          </div>
        </div> */}
      </div>
    </div>
  )
}
