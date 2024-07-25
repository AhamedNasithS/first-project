import React from 'react'
import logo from "../../../../../../images/whiteThemeLogo.svg";
import API from '../../../../../../utils/API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Desktop() {
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "SIGN_UP_TODOIST"
            }
        );
        if (response.data.statusCode === 200) {
            navigate('/signup')
        }
    };

    const handleLiginClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "LOG_IN_TODIST"
            }
        );
        if (response.data.statusCode === 200) {
            window.location.href = 'https://app.workfast.ai/';
        }
    };

    const handleBlog = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "BLOG_TODIST"
            }
        );
        if (response.data.statusCode === 200) {
            navigate('/blog')
        }
    };

    return (
        <div className='flex justify-between items-center h-[80px] w-full bg-[#FFF] px-[60px] pt-[23px]'>
            <div className='px-[12px] py-[8px] border border-[#CECEEA] rounded-[16px]' style={{boxShadow : '0px 4px 7px 0px #432E860A'}} onClick={() => {navigate('/')}}><img src={logo} alt='logo' /></div>
            <div className='flex px-[21px] py-[5px] rounded-[16px] border-[1px] border-[#CECEEA]' style={{boxShadow : '0px 4px 7px 0px #432E860A'}}>
                <div className='px-[14px] py-[8px]'><h3 className='text-[#24223E] font-normal text-[16px] cursor-pointer' onClick={(e) => { handleBlog(e) }}>Blog</h3></div>
                <div className='px-[14px] py-[8px]'><h3 className='text-[#24223E] font-normal text-[16px] cursor-pointer' onClick={() => { navigate('/pricing') }}>Pricing</h3></div>
                <div className='px-[14px] py-[8px]'><h3 className='text-[#24223E] font-normal text-[16px] cursor-pointer' onClick={(e) => { navigate('/investor') }}>Investor</h3></div>
            </div>
                <div className='p-[4px] rounded-[16px] flex gap-[10px] items-center bg-[#FFF] border border-[#CECEEA]'>
                    <button className='py-[10px] px-[14px] text-[#24223E] text-[16px] font-medium' onClick={(e) => { handleLiginClick(e) }}>Log in</button>
                    <button className='py-[10px] px-[14px] text-[#FFF] text-[16px] font-bold rounded-[10px] bg-gradient-to-r from-[#FF4E50]  to-[#F9D423]' onClick={(e) => { handleClick(e) }}>Sign up</button>
                </div>
        </div>
    )
}
