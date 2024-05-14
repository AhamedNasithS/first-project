import React from 'react'
import logo from "../../../images/one_ai-Logo1.svg"

export default function Footer() {
    return (
        <div className='w-full mt-[30px] lg:mt-[60px] xl:mt-[100px]'>
            <div className='flex justify-between gap-[20px] lg:gap-[60px] lg:w-11/12 mx-auto borderFooter py-8 px-[20px]'>
            <img src={logo} alt='logo' className='w-[110px]' />
            <div className="flex flex-col gap-[10px] lg:ml-[40px] w-[110px] sm:w-auto">
                        <h2 className='text-[#E2E8FFBF] text-[14px] font-medium'>Company</h2>
                        {/* <h3 className='text-[#E2E8FF8C] text-[14px] font-normal mt-[10px]'>About Us</h3> */}
                        <a href='/privacy'><h3 className='text-[#E2E8FF8C] text-[14px] font-normal cursor-pointer'>Privacy Policy</h3></a>
                        <a href='/terms'><h3 className='text-[#E2E8FF8C] text-[14px] font-normal cursor-pointer'>Terms And Condition</h3></a>
                        <a href='/refund'><h3 className='text-[#E2E8FF8C] text-[14px] font-normal cursor-pointer'>Refund Policy</h3></a>
                        {/* <a href='/refund'><h3 className='text-[#E2E8FF8C] text-[14px] font-normal cursor-pointer'>Refund Policy</h3></a> */}
                    </div>
            </div>
            <div className='mt-[100px] w-11/12 mx-auto pb-8'>
                <div className='col-span-2'>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal'>Copyright © 2024. All rights reserved.</p>
                </div>
                {/* <div className='flex items-center gap-[50px]'>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal'>Privacy Policy</p>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal'>Terms of Service</p>
                </div> */}
            </div>
            {/* <div className='mt-[20px] grid lg:hidden w-11/12 mx-auto pb-8'>
                <div className='flex flex-col'>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal'>Privacy Policy</p>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal mt-[20px]'>Terms of Service</p>
                </div>
                <div className='col-span-2'>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal mt-[20px]'>Copyright © 2023 Realm Software Inc. All rights reserved.</p>
                </div>
            </div> */}
        </div>
    )
}
