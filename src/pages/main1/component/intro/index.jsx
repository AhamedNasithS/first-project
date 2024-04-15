import React from 'react'

export default function Intro() {
    const [email, setEmail] = React.useState('');

    const handleEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    return (
        <div className="bg-cover bg-center h-full w-full flex flex-col items-center relative mb-[20px] lg:mb-[60px] xl:mb-[100px]" style={{ backgroundImage: `url(https://dz1x1c630cl14.cloudfront.net/webassets/background.svg)` }}>
            <h2 className='text-[24px] sm:text-[40px] xl:text-[70px] text-[#FFFFFF] inter-bold mt-[40px]'>One intelligent Platform</h2>
            <h2 className='text-[24px]  sm:text-[40px] xl:text-[70px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent inter-bold'>for your team to work faster</h2>
            <div className='flex gap-[20px] items-center mt-[20px] lg:mt-[30px] xl:mt-[40px] '>
                <div className='w-[180px] sm:w-[250px] lg:w-[278px] h-[40px] lg:h-[44px] border-[#27273E] border-[1px] rounded-[8px]  bg-[#E2E8FF12] lg:py-[10px]'>
                    <input type='email' className='w-full text-[#E2E8FF] placeholder:text-[#E2E8FF66] h-full text-[12px] lg:text-[16px] placeholder:text-[12px] lg:placeholder:text-[16px] bg-transparent focus:outline-none ml-[18px]' value={email} placeholder='Enter your work email' onChange={handleEmail} />
                </div>
                <div className='w-[100px] lg:w-[140px] h-[40px] lg:h-[55px]'>
                    <div className='w-full h-full animate bg-transparent p-[1px] relative z-[1] border-[#3E3E3E] border-[1px] rounded-[6px] lg:rounded-[8px]'>
                        <div className='w-full h-full p-[2px] lg:p-[6px] bg-[#000] relative z-[5] rounded-[6px] lg:rounded-[8px]'>
                            <button className='w-full h-full rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] border-[1px] border-[#995900] text-[#2A2200] text-[12px] lg:text-[16px] inter-medium'>Book a Demo</button>
                        </div>
                    </div>
                </div>
            </div>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/intro.svg' alt='intro' className='mt-[15px] lg:mt-[25px] xl:mt-[50px]' />
        </div>
    )
}
