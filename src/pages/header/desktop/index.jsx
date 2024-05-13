import React from 'react'
import logo from "../../../images/one_ai-Logo1.svg";

export default function Desktop({ setIsForm }) {
    const handleFeatureClick = () => {
        const element = document.getElementById('features');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlePricingClick = () => {
        const element = document.getElementById('pricing');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='flex justify-between items-center h-[80px] w-full bg-gradient-to-t from-[#111830] to-[#13131300] p-[24px]'>
            <a href='/'><img src={logo} alt='logo' /></a>
            <div className='flex gap-8 px-8 py-4 rounded-[40px] border-[1px] border-[#E2E8FF1A]'>
                {/* <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer'>Product</h3> */}
                <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={() => { handleFeatureClick() }}>Features</h3>
                {/* <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={() => { handlePricingClick() }}>Pricing</h3> */}
                <a href='/blog'><h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer'>Blog</h3></a>
                <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer' onClick={() => { setIsForm(true) }}>Enterprise</h3>
            </div>
            <a href='https://pepul.workfast.ai/'><button className='py-[8px] px-[12px] text-[#1B1600] text-[14px] font-semibold rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B]'>Sign up for free</button></a>
        </div>
    )
}
