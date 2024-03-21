import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resources() {
    const [isHovered, setIsHovered] = React.useState(false);

    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='mb-[40px] sm:mb-[70px] xl:mb-[100px] text-[18px] sm:text-[30px] lg:text-[45px] relative z-[4] w-full' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <h1 className='text-center text-[#FFFFFF] relative z-[4] DarkerGrostesqueSemibold'>It’s for companies that treat <span className='text-[#FFE269]'>Humans as Relationships</span></h1>
            <h1 className='text-center text-[#FFFFFF6B] line-through decoration-[#FFE269] decoration-1 relative z-[4]'>not as Resources</h1>
            {isHovered && (<img src="https://dz1x1c630cl14.cloudfront.net/webassets/lightsf.png" alt='light' data-aos="zoom-in" data-aos-duration="1000" className='hidden xl:flex absolute -top-[350px] max-w-full w-full' />)}
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/lightsf.png" alt='light' data-aos="zoom-in" data-aos-duration="1000" className='flex xl:hidden absolute -top-[20px] sm:-top-[180px] lg:-top-[230px]  max-w-full w-full' />
            <div className={`mt-[80px] sm:mt-[150px] lg:mt-[200px] xl:mt-[380px] relative z-[4] transition-transform duration-[1000ms] ${isHovered ? "xl:scale-[1]" : "xl:scale-[0.8]"}`}>
                <h1 className='text-[#EDEDED] text-[22px] sm:text-[40px] lg:text-[60px] xl:text-[80px] text-center leading-10 DarkerGrostesqueMedium'>We Have<span className='text-[#FFE269]'> Reinvented</span></h1>
                <h1 className='textBorder text-[24px] sm:text-[60px] lg:text-[100px] xl:text-[140px] text-[#FFF] sm:text-transparent  text-center font-medium'>HOW?</h1>
                <div className='w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-5 gap-[10px]'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Company.svg" alt='compant' className='w-[22px] sm:w-[40px] lg:w-[55px]' />
                        <h1 className='text-[14px] lg:text-[20px] text-[#FFFFFF] DarkerGrostesqueSemibold mt-[10px]'>Companies Run</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Teams.svg" alt='compant' className='w-[22px] sm:w-[40px] lg:w-[55px]' />
                        <h1 className='text-[14px] lg:text-[20px] text-[#FFFFFF] DarkerGrostesqueSemibold mt-[10px]'>Teams Work</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Collaborate.svg" alt='compant' className='w-[22px] sm:w-[40px] lg:w-[55px]' />
                        <h1 className='text-[14px] lg:text-[20px] text-[#FFFFFF] DarkerGrostesqueSemibold mt-[10px]'>Collaborate</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Productive.svg" alt='compant' className='w-[22px] sm:w-[40px] lg:w-[55px]' />
                        <h1 className='text-[14px] lg:text-[20px] text-[#FFFFFF] DarkerGrostesqueSemibold mt-[10px]'>Productive</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center col-span-2 sm:col-span-1'>
                        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Balance_work.svg" alt='compant' className='w-[22px] sm:w-[40px] lg:w-[55px]' />
                        <h1 className='text-[14px] lg:text-[20px] text-[#FFFFFF] DarkerGrostesqueSemibold mt-[10px]'>Balance Work & Life</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
