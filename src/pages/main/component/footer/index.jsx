import React from 'react'

export default function Footer() {
    return (
        <div className='w-full  mt-[200px] '>
            <div className='grid grid-cols-2 gap-[60px] w-11/12 mx-auto borderFooter py-8'>
                <div className='flex justify-between items-start w-full mt-[30px]'>
                    <img src="https://dz1x1c630cl14.cloudfront.net/webassets/one_ai-Logo.svg" alt='logo' className='w-[110px]' />
                    <div className="flex flex-col gap-[10px]">
                        <h2 className='text-[#E2E8FFBF] text-[14px] font-medium'>Product</h2>
                        <h3 className='text-[#E2E8FF8C] text-[14px] font-normal mt-[10px]'>Changelog</h3>
                        <h3 className='text-[#E2E8FF8C] text-[14px] font-normal'>Documentation</h3>
                    </div>
                </div>
                <div className='flex gap-[100px] items-start w-full mt-[30px]'>
                    <div className="flex flex-col gap-[10px] ml-[40px]">
                        <h2 className='text-[#E2E8FFBF] text-[14px] font-medium'>Company</h2>
                        <h3 className='text-[#E2E8FF8C] text-[14px] font-normal mt-[10px]'>About</h3>
                        <h3 className='text-[#E2E8FF8C] text-[14px] font-normal'>Careers</h3>
                        <h3 className='text-[#E2E8FF8C] text-[14px] font-normal'>Blog</h3>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h2 className='text-[#E2E8FFBF] text-[14px] font-medium'>Contact</h2>
                        <h3 className='text-[#E2E8FF8C] text-[14px] font-normal mt-[10px]'>Discord</h3>
                        <h3 className='text-[#E2E8FF8C] text-[14px] font-normal'>Twitter</h3>
                        <h3 className='text-[#E2E8FF8C] text-[14px] font-normal'>Github</h3>
                        <h3 className='text-[#E2E8FF8C] text-[14px] font-normal'>Email</h3>
                    </div>
                </div>
            </div>
            <div className='mt-[100px] grid grid-cols-3 w-11/12 mx-auto pb-8'>
                <div className='col-span-2'>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal'>Copyright © 2023 Realm Software Inc. All rights reserved.</p>
                </div>
                <div className='flex items-center gap-[50px]'>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal'>Privacy Policy</p>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal'>Terms of Service</p>
                </div>
            </div>
        </div>
    )
}
