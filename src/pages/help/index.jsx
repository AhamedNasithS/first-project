import React from 'react'
import yellowGlow from "../../images/yellowglow.png"
import logo from "../../images/one_ai-Logo1.svg"

export default function Help() {
    const handleEmailClick = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=hello@get1.ai');
      };
    return (
        <div className='flex flex-col w-full h-screen justify-center items-center bg-[#010306] relative overflow-hidden p-[10px] md:p-[0px]'>
            <img src={yellowGlow} alt='yellowGlow' className='absolute top-[0px] z-[0] ' />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='shooting-stars1'></div>
            <div className='shooting-stars'></div>
            {/* <h1 className='DarkerGrostesqueSemibold text-[30px] sm:text-[40px] lg:text-[80px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent text-center z-[1]'>Help</h1> */}
            <img src={logo} alt='logo' className='relative z-[10] w-[200px] lg:w-[300px]'/>
            <h3 className='text-[#E4E8EB] font-medium text-[12px] sm:text-[14px] lg:text-[28px] mt-[30px] lg:mt-[50px] xl:w-[80%] text-center relative z-[10]'>For any queries and support needed, reach us at <span className='text-[#FDD220] underline cursor-pointer' onClick={() => {handleEmailClick()}}>hello@get1.ai</span>.</h3>
            <h3 className='text-[#E4E8EB] font-medium text-[12px] sm:text-[14px] lg:text-[28px] mt-[16px] w-[80%] text-center'>Our team will respond and do the needful.</h3>

        </div>
    )
}
