import React from 'react'
import logo from "../../../../../images/one_ai-Logo1.svg";
import API from '../../../../../utils/API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Desktop({ setIsForm }) {
    const navigate = useNavigate();

    const handleFeatureClick = () => {
        const element = document.getElementById('features');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // const handlePricingClick = () => {
    //     const element = document.getElementById('pricing');
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
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

    const handleLiginClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "LOG_IN_FOR_FREE_MAIN"
            }
        );
        if (response.data.statusCode === 200) {
            window.location.href = 'https://app.workfast.ai/';
            // navigate('/signup')
        }
    };

    const handleBlog = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "BLOG_MAIN"
            }
        );
        if (response.data.statusCode === 200) {
            navigate('/blog')
        }
    };

    return (
        <div className='flex justify-between items-center h-[80px] w-full bg-gradient-to-t from-[#111830] to-[#13131300] p-[24px]'>
            <a href='/'><img src={logo} alt='logo' /></a>
            <div className='flex gap-8 px-8 py-4 rounded-[40px] border-[1px] border-[#E2E8FF1A]'>
                {/* <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer'>Product</h3> */}
                <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={() => { handleFeatureClick() }}>Features</h3>
                {/* <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={() => { handlePricingClick() }}>Pricing</h3> */}
                <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={(e) => { handleBlog(e) }}>Blog</h3>
                <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={(e) => { navigate('/investor') }}>Investor</h3>
                <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={() => { setIsForm(true) }}>Enterprise</h3>
            </div>
            {/* <button className='py-[8px] px-[12px] text-[#1B1600] text-[14px] font-semibold rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B]' onClick={(e) => { handleClick(e) }}>Sign up for free</button> */}
            <div className='p-[1px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[12px]'>
                <div className='p-[3px] lg:p-[6px] rounded-[12px] flex gap-[10px] items-center bg-[#111830]'>
                    <button className='py-[8px] px-[12px] text-[#FFFFFF] hover:text-[#000] text-[14px] font-semibold rounded-[8px] bg-transparent hover:bg-[#E2E8FFBF]' onClick={(e) => { handleLiginClick(e) }}>Log in</button>
                    <button className='py-[8px] px-[12px] text-[#1B1600] text-[14px] font-semibold rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B]' onClick={(e) => { handleClick(e) }}>Sign up</button>
                </div>
            </div>
        </div>
    )
}
