import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from "../../../../../images/whiteThemeLogo.svg"

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
        <div className='flex justify-between items-center h-[80px] w-full bg-[#FFFFFF] py-[18px] px-[24px] relative z-[1] border-b border-[#FDD01F]'>
            <a href='/'><img src={Logo} alt='logo' /></a>
            <div className='w-[152px] h-[43px] bg-gradient-to-l from-[#FDD01F33] via-[#FDD32033] to-[#F8861B33] rounded-[12px] p-[1px]'>
                <div className='w-full h-full bg-white rounded-[12px] flex justify-between items-center p-[6px]'>
                    <div className='text-[14px] font-semibold text-[#000] px-[12px] py-[6px] cursor-pointer'>Log in</div>
                    <div className='px-[12px] py-[6px] bg-gradient-to-l from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[8px] cursor-pointer text-[#1B1600] font-semibold text-[14px]'>Sign up</div>
                </div>
            </div>
        </div>
    )
}
