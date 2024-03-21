import React from 'react'
import circle1 from "../../../../images/circle_1.svg";
import circle2 from "../../../../images/circle_2.svg";
import circle3 from "../../../../images/circle_3.svg";
import circle4 from "../../../../images/circle_4.svg";
import circle5 from "../../../../images/circle_5.svg";
import logo from "../../../../images/icon.svg";


export default function Migration() {

    return (
        <div className="flex flex-col items-center relative w-10/12 mx-auto mt-[100px]">
            <h3 className='text-center text-[60px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Integration & Migration</h3>
            <h4 className='mt-[10px] text-[#E4E8EB] font-medium text-[34px]'>Your Data from any software in one click</h4>
            <div className='relative w-full'>
                <div className='relative scale1'>
                    <img src={circle1} alt="circle" className='mx-auto' />
                    <img src={circle2} alt="circle" className='absolute left-[49.5%] -translate-x-[50%] top-[49%] -translate-y-[50%]' />
                    <img src={circle3} alt="circle" className='absolute left-[49.5%] -translate-x-[50%] top-[49%] -translate-y-[50%]' />
                    <img src={circle4} alt="circle" className='absolute left-[49.5%] -translate-x-[50%] top-[49%] -translate-y-[50%]' />
                    <img src={circle5} alt="circle" className='absolute left-[49%] -translate-x-[50%] top-[49%] -translate-y-[50%]' />
                </div>
                <img src={logo} alt='logo' className='absolute left-[49%] -translate-x-[50%] top-[49%] -translate-y-[50%] scale2' />
            </div>
        </div>
    )
}
