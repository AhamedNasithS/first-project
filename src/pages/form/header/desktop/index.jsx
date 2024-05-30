import React from 'react'
import logo from "../../../../images/one_ai-Logo1.svg";
import { useNavigate } from 'react-router-dom';

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
    return (
        <div className='flex justify-between items-center h-[80px] w-full bg-gradient-to-t from-[#111830] to-[#13131300] p-[24px]'>
            <a href='/'><img src={logo} alt='logo' /></a>
            {/* <div className='flex gap-8 px-8 py-4 rounded-[40px] border-[1px] border-[#E2E8FF1A]'>
                <a href='/blog'><h3 className='text-[#E2E8FFBF] sen-bold text-[14px] cursor-pointer'>Blog</h3></a>
                <h3 className='text-[#E2E8FFBF] sen-bold text-[14px] cursor-pointer' onClick={() => { setIsForm(true) }}>Enterprise</h3>
            </div>
            <div className='flex gap-[14px]'>
                <button className='py-[8px] px-[12px] w-[128px] h-[38px] lg:w-auto lg:h-auto text-[#1B1600] text-[14px] sen-bold rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B]'>Book a demo</button>
            </div> */}
        </div>
    )
}
