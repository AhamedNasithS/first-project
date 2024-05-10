import React from 'react'
import Pricing from "../../../images/pricingicons.svg";
import oneAi from "../../../images/oneaipricing.svg";


export default function Price() {
    return (
        <div className='relative w-11/12 mx-auto flex flex-col justify-center items-center mt-[100px] overflow-hidden'>
            <img src={Pricing} alt='price' />
            <h3 className='text-[#E1E1E1] text-[38px] font-normal text-center'>Average Spending by compaines on communication, Project, Task management & Collaboration software </h3>
            <div className='mt-[32px] border-[1px] border-[#18599F] rounded-[42px] px-[80px] py-[50px] flex gap-[190px]'>
                <div className='flex flex-col gap-[37px] items-center'>
                    <h3 className='text-[32px] text-[#FDD220] font-medium'>Monthly / <span className='text-[24px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[26px] text-[#FFFFFF] font-semibold'>$53</h3>
                    <h3 className='text-[26px] text-[#FFFFFF] font-semibold'>₹4,425</h3>
                </div>
                <div className='flex flex-col gap-[37px] items-center'>
                    <h3 className='text-[32px] text-[#FDD220] font-medium'>Yearly / <span className='text-[24px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[26px] text-[#FFFFFF] font-semibold'>$636</h3>
                    <h3 className='text-[26px] text-[#FFFFFF] font-semibold'>₹1,36,627</h3>
                </div>
            </div>
            <img src={oneAi} alt='oneAi' className='mt-[100px]'/>
            <h3 className='bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] to-[#71717A] font-bold text-[42px] mt-[60px]'>Introducing Our All-in-One Intelligent Platform Workfast.ai </h3>
            <h4 className='bg-clip-text text-transparent bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] font-medium text-[36px] mt-[22px]'>Simplify Your Workflow with One Price.</h4>
            <h5 className='text-[#FFFFFF] text-[26px] font-normal mt-[42px]'>Gives you the same experience and 2X value with just </h5>
            <div className='mt-[32px] border-[1px] border-[#18599F] rounded-[42px] px-[80px] py-[50px] flex gap-[190px]'>
                <div className='flex flex-col gap-[37px] items-center'>
                    <h3 className='text-[32px] text-[#FDD220] font-medium'>Monthly / <span className='text-[24px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[26px] text-[#FFFFFF] font-semibold'>$7</h3>
                    <h3 className='text-[26px] text-[#FFFFFF] font-semibold'>₹584</h3>
                </div>
                <div className='flex flex-col gap-[37px] items-center'>
                    <h3 className='text-[32px] text-[#FDD220] font-medium'>Yearly / <span className='text-[24px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[26px] text-[#FFFFFF] font-semibold'>$54</h3>
                    <h3 className='text-[26px] text-[#FFFFFF] font-semibold'>₹4,508</h3>
                </div>
            </div>
        </div>
    )
}
