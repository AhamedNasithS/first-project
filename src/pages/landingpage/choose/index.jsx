import React from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../../../utils/API';
import axios from 'axios';

export default function Choose({ setIsForm, setEmail, email }) {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName":"REQUEST_DEMO"
            }
        );
        if(response.data.statusCode === 200) {
            navigate('/calendly')
        }  
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName":"SIGN_UP_FOR_FREE"
            }
        );
        if(response.data.statusCode === 200) {
            navigate('/signup')
        }  
    };

    return (
        <div className='  relative px-[20px] md:px-0 w-full md:w-11/12 mx-auto flex flex-col justify-center items-center gap-[20px] lg:gap-[45px] overflow-hidden mt-[30px] md:mt-[60px] lg:mt-[100px]'>
            <div className='bg-[#0F162F80] border-[1px] border-[#E2E8FF66] rounded-[10px] md:rounded-[20px] lg:rounded-[30px] px-[30px] py-[18px]'>
                <h3 className='text-[#FEF9F1] text-[14px] md:text-[20px] lg:text-[26px] xl:text-[32px] sen-normal text-center'>Choose <a href='https://workfast.ai'><span class="sen-bold text-[#FFDD09] ">workfast.ai</span></a> with just <span className='text-[#FFDD09] sen-bold'>$7</span> and increase your productivity</h3>
            </div>
            <div className='flex gap-[20px] items-center mb-[20px]'>
                <div className='flex gap-[22px] items-center'>
                    <button className='py-[8px] px-[12px] w-[150px] lg:w-[173px] h-[44px] lg:h-[54px] text-[#2A2200] text-[16px] lg:text-[18px] font-semibold rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] relative' onClick={(e) => {handleClick(e)}}>Sign up for free</button>
                    <div className='w-[150px] lg:w-[173px] h-[44px] lg:h-[54px] rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] p-[0.5px] md:p-[1px] cursor-pointer' onClick={(e) => { handleSubmit(e) }}>
                        <div className='w-full h-full rounded-[10px] bg-[#010306] flex justify-center'>
                            <h3 className='text-[#FFFFFF] text-[16px] lg:text-[18px] font-semibold my-auto'>Request Demo</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
