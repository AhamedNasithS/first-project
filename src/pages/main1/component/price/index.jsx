import React from 'react';
import tik from "../../../../images/tik.svg";


export default function Pricing() {
    const [toggleValue, setToggleValue] = React.useState('Month');

    return (
        <div className="flex flex-col items-center relative w-10/12 mx-auto my-[100px]">
            <h2 className='text-[#F9F9F9] text-[43px] font-bold'>Our Pricing Solutions</h2>
            <h3 className='text-[#F9F9F9] text-[22px] font-medium mt-[10px]'>No hidden fees, just simple and affordable plans tailored to your needs</h3>
            <div className='p-2 bg-[#2B2D37] rounded-[28px] flex items-center mt-[20px]'>
                <div className={`p-2 ${toggleValue === "Month" ? " bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] text-[#2A2200]" : "bg-transparent text-[#F9F9F9]"} cursor-pointer rounded-[20px]`} onClick={() => { setToggleValue("Month") }}>
                    <h1 className='mx-[10px] font-normal text-[16px]'>Monthly</h1>
                </div>
                <div className={`p-2 ${toggleValue === "Year" ? " bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] text-[#2A2200]" : "bg-transparent text-[#F9F9F9]"} cursor-pointer rounded-[20px]`}>
                    <h1 className='mx-[10px] font-normal text-[16px]' onClick={() => { setToggleValue("Year") }}>Yearly</h1>
                </div>
            </div>
            {toggleValue === "Month" ? (
                <div className='flex gap-[30px] mt-[100px]'>
                    <div className='p-5 w-[320px] h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[36px] font-bold mt-[10px] ml-[20px]'>$8 <span className='text-[#BCBCBC] text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[30px] font-medium my-[10px] ml-[20px]'>Basecamp 1</h3>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Basic Project Management</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>3 Premium Apps </h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>2 Users Team</h3>
                        </div>
                        <button className='w-[170px] h-[45px] ml-[50px] mt-[40px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-[340px] h-[480px] border-[1px] border-[#FFFFFF1A] rounded-[30px]' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[36px] font-bold mt-[20px] ml-[20px]'>$13 <span className='text-[#BCBCBC] text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[30px] font-medium my-[40px] ml-[20px]'>Basecamp 2</h3>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Advanced Project Management</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>50 Users team</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Shared Workspace</h3>
                        </div>
                        <button className='w-[170px] h-[45px] ml-[65px] mt-[20px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-[320px] h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[36px] font-bold ml-[20px]'>$25 <span className='text-[#BCBCBC] text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[30px] font-medium my-[10px] ml-[20px]'>Basecamp 3</h3>
                        <div className='flex gap-2 items-center ml-[20px] my-[15px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited Project Scaling</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[15px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[15px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited user Team</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[15px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Advanced Admin</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[15px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Custom Data Retention</h3>
                        </div>
                        <button className='w-[170px] h-[45px] ml-[50px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-[320px] h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[36px] font-bold ml-[20px]'>$49 <span className='text-[#BCBCBC] text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[30px] font-medium ml-[20px]'>Summit</h3>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited Project Scaling</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited user Team</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Advanced Admin</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>50 Users team</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Custom Data Retention</h3>
                        </div>
                        <button className='w-[170px] h-[45px] ml-[50px] mt-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                </div>
            ) : toggleValue === "Year" && (
                <div className='flex gap-[30px] mt-[100px]'>
                    <div className='p-5 w-[320px] h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[36px] font-bold mt-[10px] ml-[20px]'>$7 <span className='text-[#BCBCBC] text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[30px] font-medium my-[10px] ml-[20px]'>Basecamp 1</h3>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Basic Project Management</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>3 Premium Apps </h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>2 Users Team</h3>
                        </div>
                        <button className='w-[170px] h-[45px] ml-[50px] mt-[40px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-[340px] h-[480px] border-[1px] border-[#FFFFFF1A] rounded-[30px]' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[36px] font-bold mt-[20px] ml-[20px]'>$12 <span className='text-[#BCBCBC] text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[30px] font-medium my-[40px] ml-[20px]'>Basecamp 2</h3>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Advanced Project Management</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>50 Users team</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[20px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Shared Workspace</h3>
                        </div>
                        <button className='w-[170px] h-[45px] ml-[65px] mt-[20px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-[320px] h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[36px] font-bold ml-[20px]'>$24 <span className='text-[#BCBCBC] text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[30px] font-medium my-[10px] ml-[20px]'>Basecamp 3</h3>
                        <div className='flex gap-2 items-center ml-[20px] my-[15px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited Project Scaling</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[15px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[15px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited user Team</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[15px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Advanced Admin</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[15px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Custom Data Retention</h3>
                        </div>
                        <button className='w-[170px] h-[45px] ml-[50px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                    <div className='p-5 w-[320px] h-[400px] border-[1px] border-[#FFFFFF1A] rounded-[30px] my-auto' style={{ background: 'url(https://dz1x1c630cl14.cloudfront.net/webassets/card.svg)' }}>
                        <h2 className='text-[#FFFFFF] text-[36px] font-bold ml-[20px]'>$49 <span className='text-[#BCBCBC] text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[30px] font-medium ml-[20px]'>Summit</h3>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited Project Scaling</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited Premium </h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Unlimited user Team</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Advanced Admin</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>50 Users team</h3>
                        </div>
                        <div className='flex gap-2 items-center ml-[20px] my-[10px]'>
                            <img src={tik} alt='tik' />
                            <h3 className='text-[#F0F0F0] text-[15px] font-medium'>Custom Data Retention</h3>
                        </div>
                        <button className='w-[170px] h-[45px] ml-[50px] mt-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]'>Get Started</button>
                    </div>
                </div>
            )}
        </div>
    )
}

