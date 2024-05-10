import React from 'react'
// import Slack from "../../../images/slack1.svg";
// import Jira from "../../../images/jira1.svg";
// import Asana from "../../../images/asana1.svg";
import iconGroup from "../../../images/icongroup1.svg";



export default function Main({setIsForm,setEmail ,email}) {

    const handleEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    return (
        <div className='relative w-11/12 mx-auto flex flex-col justify-center items-center gap-[45px] overflow-hidden'>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='shooting-stars1'></div>
            <div className='shooting-stars'></div>
            <img src={iconGroup} alt='iconGroup' className='relative z-[30] mt-[100px]' />
            <h2 className='bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] to-[#71717A] font-bold text-[50px]'>Using Multiple Software tool to manage your work </h2>
            <h3 className='text-[#E1E1E1] text-[38px] font-normal w-8/12 text-center'>Spending too much on multiple software too that doesn't deliver value?</h3>
            <div className='flex gap-[20px] items-center mb-[20px]'>
                <div className='w-[180px] sm:w-[250px] lg:w-[278px] h-[40px] lg:h-[54px] animate bg-[#3E3E3E] p-[1px] relative z-[1] rounded-[6px] lg:rounded-[8px]'>
                    <div className='w-full h-full bg-[#000] relative z-[5] rounded-[6px] lg:rounded-[8px]'>
                        <div className='w-full h-full bg-[#E2E8FF12] lg:py-[10px]'>
                            <input type='email' className='w-full text-[#E2E8FF] placeholder:text-[#E2E8FF] h-full text-[12px] lg:text-[18px] placeholder:text-[12px] lg:placeholder:text-[18px] bg-transparent focus:outline-none ml-[18px]' value={email} placeholder='Enter your work email' onChange={handleEmail} />
                        </div>
                    </div>
                </div>
                <div className='w-[100px] lg:w-[150px] h-[54px]'>
                    <button className='w-full h-full rounded-[14px] bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B] border-[1px] border-[#995900] b1 relative' onClick={() =>{setIsForm(true)}}>
                        <span className='text text-[#2A2200] text-[12px] lg:text-[18px] inter-medium'>Book a Demo</span>
                        <span class="shimmer"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
