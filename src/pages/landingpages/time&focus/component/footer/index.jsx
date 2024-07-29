import React from 'react'
import logo from "../../../../../images/whiteThemeLogo.svg";

export default function Footer() {
    return (
        <div className='px-[40px] lg:px-[60px] py-[13px] flex flex-col sm:flex-row sm:justify-between gap-[30px] sm:gap-0 sm:items-center bg-gradient-to-t from-[#F8F8FC] to-[#F8F8FC] w-full'>
            <img src={logo} alt='logo' className='w-[50%] sm:w-[15%] lg:w-auto'/>
            <div className='flex flex-col sm:flex-row  gap-[20px] sm:items-center'>
                <p className='text-[#514B81] sm:text-[8px] lg:text-[12px] font-normal hidden sm:flex'>Copyright © 2024, Pepul Tech Privated Limited. All rights reserved.</p>
                <a href='/privacy'><h3 className='text-[#514B81] text-[12px] sm:text-[8px] lg:text-[12px] font-normal cursor-pointer'>Privacy Policy</h3></a>
                <a href='/terms'><h3 className='text-[#514B81] text-[12px] sm:text-[8px] lg:text-[12px] font-normal cursor-pointer'>Terms And Condition</h3></a>
                <a href='/about'><h3 className='text-[#514B81] text-[12px] sm:text-[8px] lg:text-[12px] font-normal cursor-pointer'>About us </h3></a>
                <p className='text-[#514B81] text-[12px] font-normal flex sm:hidden'>Copyright © 2024, Pepul Tech Privated Limited. All rights reserved.</p>
            </div>
        </div>
    )
}
