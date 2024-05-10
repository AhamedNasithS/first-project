import React from 'react'
import Pricing from "../../../images/pricingicons.svg";
import oneAi from "../../../images/oneaipricing.svg";


export default function Price() {
    return (
        <div className='relative px-[20px] md:px-0 w-full md:w-11/12 mx-auto flex flex-col justify-center items-center mt-[30px] md:mt-[60px] lg:mt-[100px] overflow-hidden'>
            <img src={Pricing} alt='price' />
            <h3 className='text-[#E1E1E1] text-[18px] md:text-[22px] lg:text-[28px] xl:text-[38px] font-normal text-center'>Average Spending by compaines on communication, Project, Task management & Collaboration software </h3>
            <div className='mt-[16px] lg:mt-[32px] border-[1px] border-[#18599F] rounded-[20px] md:rounded-[42px] px-[20px] py-[10px] md:px-[50px] md:py-[30px] lg:px-[80px] lg:py-[50px] flex gap-[30px] md:gap-[100px] lg:gap-[190px]'>
                <div className='flex flex-col gap-[14px] md:gap-[22px] lg:gap-[37px] items-center'>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] xl:text-[32px] text-[#FDD220] font-medium'>Monthly / <span className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>$53</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>₹4,425</h3>
                </div>
                <div className='flex flex-col gap-[14px] md:gap-[22px] lg:gap-[37px] items-center'>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] xl:text-[32px] text-[#FDD220] font-medium'>Yearly / <span className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>$636</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>₹1,36,627</h3>
                </div>
            </div>
            <img src={oneAi} alt='oneAi' className='mt-[30px] md:mt-[60px] lg:mt-[100px]' />
            <h3 className='bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] to-[#71717A] font-bold text-[20px] md:text-[24px] lg:text-[32px] xl:text-[42px] mt-[40px] md:mt-[60px] text-center'>Introducing Our All-in-One Intelligent Platform Workfast.ai </h3>
            <h4 className='bg-clip-text text-transparent bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] font-medium text-[18px] md:text-[22px] lg:text-[26px] xl:text-[36px] mt-[16px] xl:mt-[22px]'>Simplify Your Workflow with One Price.</h4>
            <h5 className='text-[#FFFFFF] text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] font-normal mt-[10px] lg:mt-[20px] xl:mt-[30px]'>Gives you the same experience and 2X value with just </h5>
            <div className='mt-[16px] lg:mt-[32px] border-[1px] border-[#18599F] rounded-[20px] md:rounded-[42px] px-[20px] py-[10px] md:px-[50px] md:py-[30px] lg:px-[80px] lg:py-[50px] flex gap-[30px] md:gap-[100px] lg:gap-[190px]'>
                <div className='flex flex-col gap-[14px] md:gap-[22px] lg:gap-[37px] items-center'>
                    <h3 className='text-[16px] md:text-[22px] lg:text-[26px] xl:text-[32px] text-[#FDD220] font-medium'>Monthly / <span className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>$7</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>₹584</h3>
                </div>
                <div className='flex flex-col gap-[14px] md:gap-[22px] lg:gap-[37px] items-center'>
                    <h3 className='text-[14px] md:text-[22px] lg:text-[26px] xl:text-[32px] text-[#FDD220] font-medium'>Yearly / <span className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>$54</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>₹4,508</h3>
                </div>
            </div>
        </div>
    )
}
