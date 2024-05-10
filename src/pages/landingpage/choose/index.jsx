import React from 'react'

export default function Choose({setIsForm,setEmail ,email}) {

    const handleEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    return (
        <div className='relative px-[20px] md:px-0 w-full md:w-11/12 mx-auto flex flex-col justify-center items-center gap-[20px] lg:gap-[45px] overflow-hidden mt-[30px] md:mt-[60px] lg:mt-[100px]'>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] font-semibold text-[24px] md:text-[30px] lg:text-[40px] xl:text-[55px] text-center w-10/12'>When you can work fast in one platform , Why spending on multiple tools ?</h2>
            <div className='bg-[#0F162F80] border-[1px] border-[#E2E8FF66] rounded-[10px] md:rounded-[20px] lg:rounded-[30px] px-[30px] py-[10px] md:px-[50px] md:py-[16px] lg:px-[72px] lg:py-[22px]'>
                <h3 className='text-[#FEF9F1] text-[14px] md:text-[22px] lg:text-[28px] xl:text-[38px] font-normal'>Choose <a href='https://workfast.ai'><span class="glitter-text text-[#FFDD09] underline ">https://workfast.ai</span></a> with just <span className='text-[#FFDD09]'>$7</span></h3>
            </div>
            <div className='flex gap-[20px] items-center mb-[20px]'>
                <div className='w-[180px] sm:w-[250px] lg:w-[278px] h-[40px] lg:h-[54px] animate bg-[#3E3E3E] p-[1px] relative z-[1] rounded-[6px] lg:rounded-[8px]'>
                    <div className='w-full h-full bg-[#000] relative z-[5] rounded-[6px] lg:rounded-[8px]'>
                        <div className='w-full h-full bg-[#E2E8FF12] lg:py-[10px]'>
                            <input type='email' className='w-full text-[#E2E8FF] placeholder:text-[#E2E8FF] h-full text-[12px] lg:text-[18px] placeholder:text-[12px] lg:placeholder:text-[18px] bg-transparent focus:outline-none ml-[18px]' value={email} placeholder='Enter your work email' onChange={handleEmail} />
                        </div>
                    </div>
                </div>
                <div className='w-[100px] lg:w-[150px] h-[40px] lg:h-[54px]'>
                    <button className='w-full h-full rounded-[14px] bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B] border-[1px] border-[#995900] b1 relative' onClick={() =>{setIsForm(true)}}>
                        <span className='text text-[#2A2200] text-[12px] lg:text-[18px] inter-medium'>Book a Demo</span>
                        <span class="shimmer"></span>
                    </button>
                </div>
            </div>

        </div>
    )
}
