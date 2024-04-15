import React from 'react';
import tik from "../../../../images/tik.svg";


export default function Pricing() {
    const [toggleValue, setToggleValue] = React.useState('Month');

    return (
        <div className="flex flex-col items-center relative w-10/12 mx-auto my-[20px] lg:my-[100px]">
            <h2 className='text-[#F9F9F9] text-[22px] lg:text-[43px] font-bold'>Our Pricing Solutions</h2>
            <h3 className='text-[#F9F9F9] text-[12px] lg:text-[22px] font-medium mt-[10px] text-center'>No hidden fees, just simple and affordable plans tailored to your needs</h3>
            <div className='p-[3px] lg:p-2 bg-[#2B2D37] rounded-[28px] flex items-center mt-[10px] lg:mt-[20px]'>
                <div className={`p-[3px] lg:p-2 ${toggleValue === "Month" ? " bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] text-[#2A2200]" : "bg-transparent text-[#F9F9F9]"} cursor-pointer rounded-[20px]`} onClick={() => { setToggleValue("Month") }}>
                    <h1 className='mx-[10px] font-normal text-[12px] lg:text-[16px]'>Monthly</h1>
                </div>
                <div className={`p-[3px] lg:p-2 ${toggleValue === "Year" ? " bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] text-[#2A2200]" : "bg-transparent text-[#F9F9F9]"} cursor-pointer rounded-[20px]`}>
                    <h1 className='mx-[10px] font-normal text-[12px] lg:text-[16px]' onClick={() => { setToggleValue("Year") }}>Yearly</h1>
                </div>
            </div>
            {toggleValue === "Month" ? (
                <div className='flex sm:grid grid-cols-2 xl:flex flex-col lg:flex-row gap-[30px] mt-[20px] lg:mt-[100px]'>
                    <div className='p-5 w-full lg:w-[320px] h-[300px] lg:h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[10px] lg:ml-[20px]'>$8 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px]'>Basecamp 1</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Basic Project Management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>3 Premium Apps </h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>2 Users Team</h3>
                        </div>
                        <button className='w-full lg:w-[170px] h-[45px] lg:ml-[50px] mt-[60px] lg:mt-[40px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-full lg:w-[320px] h-[300px] lg:h-[480px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px]' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[20px] lg:ml-[20px]'>$13 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[40px] lg:ml-[20px]'>Basecamp 2</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Advanced Project Management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>50 Users team</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik'className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Shared Workspace</h3>
                        </div>
                        <button className='w-full lg:w-[170px] h-[45px] lg:ml-[65px] mt-[30px] lg:mt-[20px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-full lg:w-[320px] h-[300px] lg:h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:ml-[20px]'>$25 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px]'>Basecamp 3</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited Project Scaling</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited user Team</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Advanced Admin</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Custom Data Retention</h3>
                        </div>
                        <button className='w-full lg:w-[170px] h-[45px] lg:ml-[50px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-full lg:w-[320px] h-[300px] lg:h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:ml-[20px]'>$49 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium lg:ml-[20px]'>Summit</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited Project Scaling</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited user Team</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Advanced Admin</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>50 Users team</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Custom Data Retention</h3>
                        </div>
                        <button className='w-full lg:w-[170px] h-[45px] lg:ml-[50px] mt-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                </div>
            ) : toggleValue === "Year" && (
                <div className='flex sm:grid grid-cols-2 xl:flex flex-col lg:flex-row gap-[30px] mt-[20px] lg:mt-[100px]'>
                    <div className='p-5 w-full lg:w-[320px] h-[300px] lg:h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[10px] lg:ml-[20px]'>$7 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px]'>Basecamp 1</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Basic Project Management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>3 Premium Apps </h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>2 Users Team</h3>
                        </div>
                        <button className='w-full lg:w-[170px] h-[45px] lg:ml-[50px] mt-[60px] lg:mt-[40px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-full lg:w-[320px] h-[300px] lg:h-[480px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px]' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[20px] lg:ml-[20px]'>$12 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[40px] lg:ml-[20px]'>Basecamp 2</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Advanced Project Management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>50 Users team</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[20px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Shared Workspace</h3>
                        </div>
                        <button className='w-full lg:w-[170px] h-[45px] lg:ml-[65px] mt-[30px] lg:mt-[20px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-full lg:w-[320px] h-[300px] lg:h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:ml-[20px]'>$24 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px]'>Basecamp 3</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited Project Scaling</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited user Team</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Advanced Admin</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Custom Data Retention</h3>
                        </div>
                        <button className='w-full lg:w-[170px] h-[45px] lg:ml-[50px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-full lg:w-[320px] h-[300px] lg:h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:ml-[20px]'>$49 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium lg:ml-[20px]'>Summit</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited Project Scaling</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Unlimited user Team</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Advanced Admin</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>50 Users team</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[5px] lg:my-[10px]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-auto'/>
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Custom Data Retention</h3>
                        </div>
                        <button className='w-full lg:w-[170px] h-[45px] lg:ml-[50px] mt-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                </div>
            )}
        </div>
    )
}

