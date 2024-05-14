import React from 'react'
// import Pricing from "../../../images/pricingicons.svg";
import oneAi from "../../../images/oneaipricing.svg";
import rate from "../../../images/rate.svg";
import three2one from "../../../images/three2one.svg";



export default function Price() {
    return (
        <div className='relative px-[20px] md:px-0 w-full md:w-11/12 mx-auto flex flex-col justify-center items-center mt-[30px] md:mt-[40px] lg:mt-[80px] xl:mt-[100px] overflow-hidden'>
            <h2 className='text-[20px] lg:text-[26px] xl:text-[36px] sen-bold bg-clip-text text-transparent bg-gradient-to-l from-[#A9A9B2] to-[#FFFFFF] mt-[62px] text-center hidden md:block'>Introducing Our All-in-One Intelligent Platform, where you can manage</h2>
            <h2 className='text-[20px] lg:text-[26px] xl:text-[36px] sen-bold text-[#FDD220] text-center hidden md:block mt-[20px]'>Communication, Collaboration and Productivity</h2>
            <h2 className='text-[20px] fsen-bold text-[#FFFFFF] mt-[30px] text-center md:hidden'>Introducing Our All-in-One Intelligent Platform, where you can manage <span className='text-[#FDD220]'>Communication, Collaboration and Productivity</span></h2>
            <img src={oneAi} alt='oneAi' className='mt-[20px] md:mt-[40px] lg:mt-[80px] md:w-[70%] lg:w-[80%] xl:w-auto' />
            <h3 className='text-[#E1E1E1] text-[18px] md:text-[22px] lg:text-[28px] xl:text-[38px] sen-bold text-center mt-[20px] md:mt-[40px] lg:mt-[80px] w-10/12 mx-a'>Average <span className='text-[#FDD220]'>Spending by compaines</span> on communication, Project, Task management & Collaboration software </h3> 
            <img src={rate} alt='oneAi' className='mt-[20px] md:mt-[40px] lg:mt-[80px]' />
            <div className='bg-[#0B1017] py-[40px] px-[36px] lg:py-[53px] rounded-[47px] border-[1px] border-[#FFDD0980] justify-between w-[500px] lg:w-[720px] hidden md:flex'>
                <div className='flex flex-col gap-[40px] justify-between'>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] sen-bold'>Monthly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] sen-bold'>Per user </span></h3>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] sen-bold'>Yearly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] sen-bold'>Per user </span></h3>
                </div>
                <div className='flex flex-col gap-[40px] items-center  justify-between'>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>$53</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-bold'>$636</h3>
                </div>
                <div className='flex flex-col gap-[40px] items-center  justify-between'>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>₹4,425</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>₹1,36,627</h3>
                </div>
            </div>
            <div className='bg-[#0B1017] py-[40px] px-[36px] rounded-[22px] flex flex-col gap-[30px] border-[1px] border-[#FFDD0980] md:hidden' >
                <div className='flex flex-col items-center gap-[22px]'>
                    <h3 className='text-[18px] text-[#FDD220] sen-bold'>Monthly / <span className='text-[12px] text-[#FFFFFFCC] sen-bold'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>$53</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>₹4,425</h3>
                </div>
                <div className='flex flex-col items-center gap-[22px]'>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] sen-bold'>Yearly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] sen-bold'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-bold'>$636</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>₹1,36,627</h3>
                </div>
            </div>
            <div className='mt-[20px] md:mt-[40px] lg:mt-[80px] md:flex justify-between items-center w-[80%] mx-auto'>
                <img src={three2one} alt='one' className='md:w-[55%] xl:w-auto mx-auto md:mx-0'/>
                <div className='sen-bold text-[20px] lg:text-[26px] xl:text-[32px] text-center mt-[30px]'>
                    <h3 className='text-[#FFFFFF]'>We replace 3 tools with</h3>
                    <h3 className='text-[#FDD220]'>One Tool & One Price</h3>
                </div>
            </div>
            <div className='bg-[#0B1017] py-[40px] px-[36px] lg:py-[53px] rounded-[47px] border-[1px] border-[#FFDD0980] mt-[65px] justify-between w-[500px] lg:w-[720px] hidden md:flex'>
                <div className='flex flex-col gap-[40px]  justify-between'>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] sen-bold'>Monthly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] sen-bold'>Per user </span></h3>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] sen-bold'>Yearly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] sen-bold'>Per user </span></h3>
                </div>
                <div className='flex flex-col gap-[40px] items-center  justify-between'>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>$7</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>$54</h3>
                </div>
                <div className='flex flex-col gap-[40px] items-center  justify-between'>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>₹584</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>₹4508</h3>
                </div>
            </div>
            <div className='bg-[#0B1017] py-[40px] px-[36px] rounded-[22px] mt-[30px] border-[1px] border-[#FFDD0980] flex flex-col gap-[30px] md:hidden'>
                <div className='flex flex-col items-center gap-[22px]'>
                    <h3 className='text-[18px] text-[#FDD220] sen-bold'>Monthly / <span className='text-[12px] text-[#FFFFFFCC] sen-bold'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>$7</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>₹584</h3>
                </div>
                <div className='flex flex-col items-center gap-[22px]'>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] sen-bold'>Yearly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] sen-bold'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-bold'>$54</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-bold'>₹4508</h3>
                </div>
            </div>
            {/* <img src={Pricing} alt='price' />
            <h3 className='text-[#E1E1E1] text-[18px] md:text-[22px] lg:text-[28px] xl:text-[38px] font-normal text-center'>Average <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#FDD220] to-[#FFFFFF]'>Spending by compaines</span> on communication, Project, Task management & Collaboration software </h3> */}
            {/* <div className='mt-[16px] lg:mt-[32px] border-[1px] border-[#18599F] rounded-[20px] md:rounded-[42px] px-[20px] py-[10px] md:px-[50px] md:py-[30px] lg:px-[80px] lg:py-[50px] flex gap-[30px] md:gap-[100px] lg:gap-[190px]'>
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
            </div> */}
            {/* <div className='bg-[#0B1017] py-[40px] px-[36px] lg:py-[53px] rounded-[47px] mt-[65px] justify-between w-[500px] lg:w-[720px] hidden md:flex'>
                <div className='flex flex-col gap-[40px]  items-center justify-between'>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] font-medium'>Monthly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] font-medium'>Yearly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                </div>
                <div className='flex flex-col gap-[40px] items-center  justify-between'>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>$53</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>$636</h3>
                </div>
                <div className='flex flex-col gap-[40px] items-center  justify-between'>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>₹4,425</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>₹1,36,627</h3>
                </div>
            </div>
            <div className='bg-[#0B1017] py-[40px] px-[36px] rounded-[22px] mt-[30px] flex flex-col gap-[30px] md:hidden'>
                <div className='flex flex-col items-center gap-[22px]'>
                    <h3 className='text-[18px] text-[#FDD220] font-medium'>Monthly / <span className='text-[12px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>$53</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>₹4,425</h3>
                </div>
                <div className='flex flex-col items-center gap-[22px]'>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] font-medium'>Yearly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>$636</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>₹1,36,627</h3>
                </div>
            </div> */}
            {/* <h3 className='text-[#E1E1E1] text-[22px] md:text-[30px] lg:text-[38px] font-normal mt-[30px] lg:mt-[60px] xl:mt-[100px] text-center'>If your answer is <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] text-[22px] md:text-[30px] xl:text-[38px] font-medium'>Yes,</span> We are here to help you out </h3>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] text-[32px] md:text-[40px] lg:text-[62px] font-semibold mt-[32px]'>With Workfast.ai</h2> */}
            {/* <img src={oneAi} alt='oneAi' className='mt-[20px] md:mt-[40px] lg:mt-[80px]' /> */}
            {/* <h2 className='text-[26px] lg:text-[32px] xl:text-[38px] font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#A9A9B2] to-[#FFFFFF] mt-[62px] text-center hidden md:block'>Introducing Our All-in-One Intelligent Platform, where you can manage</h2>
            <h2 className='text-[26px] lg:text-[32px] xl:text-[38px] font-bold text-[#FFFFFF] text-center hidden md:block'>Communication, <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#FDD220] to-[#FFFFFF]'>Collaboration and Productivity</span></h2>
            <h2 className='text-[20px] font-bold text-[#FFFFFF] mt-[30px] text-center md:hidden'>Introducing Our All-in-One Intelligent Platform, where you can manage Communication,<span className='bg-clip-text text-transparent bg-gradient-to-l from-[#FDD220] to-[#FFFFFF]'> Collaboration and Productivity</span></h2> */}
            {/* <div className='bg-[#0B1017] py-[40px] px-[36px] lg:py-[53px] rounded-[47px] mt-[65px] justify-between w-[500px] lg:w-[720px] hidden md:flex'>
                <div className='flex flex-col gap-[40px]  items-center justify-between'>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] font-medium'>Monthly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] font-medium'>Yearly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                </div>
                <div className='flex flex-col gap-[40px] items-center  justify-between'>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>$7</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>$54</h3>
                </div>
                <div className='flex flex-col gap-[40px] items-center  justify-between'>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>₹584</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>₹4508</h3>
                </div>
            </div>
            <div className='bg-[#0B1017] py-[40px] px-[36px] rounded-[22px] mt-[30px] flex flex-col gap-[30px] md:hidden'>
                <div className='flex flex-col items-center gap-[22px]'>
                    <h3 className='text-[18px] text-[#FDD220] font-medium'>Monthly / <span className='text-[12px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>$7</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>₹584</h3>
                </div>
                <div className='flex flex-col items-center gap-[22px]'>
                    <h3 className='text-[18px] md:text-[22px] lg:text-[26px] text-[#FDD220] font-medium'>Yearly / <span className='text-[12px] md:text-[16px] lg:text-[20px] text-[#FFFFFFCC] font-normal'>Per user </span></h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] text-[#FFFFFF] font-semibold'>$54</h3>
                    <h3 className='text-[12px] md:text-[16px] lg:text-[26px] text-[#FFFFFF] font-semibold'>₹4508</h3>
                </div>
            </div> */}
            {/* <h3 className='bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] to-[#71717A] font-bold text-[20px] md:text-[24px] lg:text-[32px] xl:text-[42px] mt-[40px] md:mt-[60px] text-center'>Introducing Our All-in-One Intelligent Platform Workfast.ai </h3>
            <h4 className='bg-clip-text text-transparent bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] font-medium text-[18px] md:text-[22px] lg:text-[26px] xl:text-[36px] mt-[16px] xl:mt-[22px]'>Simplify Your Workflow with One Price.</h4>
            <h5 className='text-[#FFFFFF] text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] font-normal mt-[10px] lg:mt-[20px] xl:mt-[30px]'>Gives you the same experience and 2X value with just </h5> */}
            {/* <div className='mt-[16px] lg:mt-[32px] border-[1px] border-[#18599F] rounded-[20px] md:rounded-[42px] px-[20px] py-[10px] md:px-[50px] md:py-[30px] lg:px-[80px] lg:py-[50px] flex gap-[30px] md:gap-[100px] lg:gap-[190px]'>
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
            </div> */}
        </div>
    )
}
