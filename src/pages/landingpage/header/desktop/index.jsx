import React from 'react'
import logo from "../../../../images/one_ai-Logo1.svg";
import { useNavigate } from 'react-router-dom';
import API from '../../../../utils/API';
import axios from 'axios';

export default function Desktop({ setIsForm }) {
    const navigate = useNavigate();
    // const handleFeatureClick = () => {
    //     const element = document.getElementById('features');
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    // const handlePricingClick = () => {
    //     const element = document.getElementById('pricing');
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };
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

    const handleBlog = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName":"BLOG"
            }
        );
        if(response.data.statusCode === 200) {
            navigate('/blog')
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
        <div className='flex justify-between items-center h-[80px] w-full bg-gradient-to-t from-[#111830] to-[#13131300] p-[24px]'>
            <a href='/'><img src={logo} alt='logo' /></a>
            <div className='flex gap-8 px-8 py-4 rounded-[40px] border-[1px] border-[#E2E8FF1A] lg:ml-[140px] xl:ml-[190px]'>
                {/* <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer'>Product</h3> */}
                {/* <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={() => { handleFeatureClick() }}>Features</h3> */}
                {/* <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={() => { handlePricingClick() }}>Pricing</h3> */}
                {/* <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={(e) => {handleBlog(e)}}>Blog</h3>
                <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={() => { setIsForm(true) }}>Enterprise</h3> */}
            </div>
            <div className='flex gap-[14px]'>
                <button className='py-[8px] px-[12px] w-[128px] h-[38px] lg:w-auto lg:h-auto text-[#1B1600] text-[14px] font-semibold rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B]' onClick={(e) =>{handleClick(e)}}>Sign up for free</button>
                <div className='w-[128px] h-[38px] rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] p-[0.5px] md:p-[1px] cursor-pointer' onClick={(e) =>{handleSubmit(e)}}>
                    <div className='w-full h-full rounded-[10px] bg-[#010306] flex justify-center'>
                        <h3 className='text-[#FFFFFF] text-[14px] font-semibold my-auto'>Request Demo</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
