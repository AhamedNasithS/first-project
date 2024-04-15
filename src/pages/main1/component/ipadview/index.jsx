import React from 'react'


export default function IpadView() {

    return (
        <div className="flex flex-col items-center relative px-[20px] lg:px-0 lg:w-10/12 mx-auto my-[20px] lg:my-[100px]">
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/ipadView.svg' alt='ipad' />
            <h3 className='mt-[20px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent font-semibold text-[22px] lg:text-[45px] lg:w-11/12 text-center'>When you can manage complex task easily with 1.ai, why would you still prefer  multiple tools to run your business?</h3>
            <div className='w-full sm:w-10/12 mt-[20px] lg:mt-[80px] mx-auto bg-[#0F162F80] border-[1px] border-[#E2E8FF1A] rounded-[4px] lg:rounded-[10px] p-4'>
                <h2 className='font-normal text-[22px] lg:text-[50px] text-[#FEF9F1] text-center'>No More <span className='text-[#FDD220]'>Excel Sheets</span></h2>
            </div>
        </div>
    )
}

