import React from 'react'
import { Logo } from '../header/SVG'

export default function Footer({ handleFeatureClick }) {
    return (
        <div className='w-full'>
            <div className='flex justify-between gap-[20px] lg:gap-[60px] lg:w-11/12 mx-auto borderFooter py-8 px-[20px]'>
                <a title='Workfast' href='/'>
                    <div className='py-[6px] border border-[#0A7CFF] rounded-[16px]' style={{ boxShadow: '0px 4px 7px 0px #432E860A' }}>
                        <Logo width="100" height="26" />
                    </div>
                </a>
                <div className="flex flex-col gap-[10px] lg:ml-[40px] w-[110px] sm:w-auto">
                    <h2 className='text-[#E2E8FFBF] text-[14px] font-medium'>Company</h2>
                    <h3 className='text-[#E2E8FF8C] text-[14px] font-normal cursor-pointer' onClick={() => handleFeatureClick()}>Privacy Policy</h3>
                    <h3 className='text-[#E2E8FF8C] text-[14px] font-normal cursor-pointer' onClick={() => handleFeatureClick()}>Terms And Condition</h3>
                    <h3 className='text-[#E2E8FF8C] text-[14px] font-normal cursor-pointer' onClick={() => handleFeatureClick()}>About us</h3>
                    <h3 className='text-[#E2E8FF8C] text-[14px] font-normal cursor-pointer' onClick={() => handleFeatureClick()}>Contact us</h3>
                </div>
            </div>
            <div className='mt-[100px] w-11/12 mx-auto pb-8'>
                <div className='col-span-2'>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal'>Copyright © 2024, Pepul Tech Privated Limited. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
