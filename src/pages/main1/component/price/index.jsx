import React from 'react';
import tik from "../../../../images/tik.svg";


export default function Pricing({ setIsForm }) {
    const [toggleValue, setToggleValue] = React.useState('Month');
    const [knowMoreB1M, setKnowMoreB1M] = React.useState(false);
    const [knowMoreB2M, setKnowMoreB2M] = React.useState(false);
    const [knowMoreB3M, setKnowMoreB3M] = React.useState(false);
    const [knowMoreB4M, setKnowMoreB4M] = React.useState(false);
    const [knowMoreB1Y, setKnowMoreB1Y] = React.useState(false);
    const [knowMoreB2Y, setKnowMoreB2Y] = React.useState(false);
    const [knowMoreB3Y, setKnowMoreB3Y] = React.useState(false);
    const [knowMoreB4Y, setKnowMoreB4Y] = React.useState(false);


    return (
        <div className="flex flex-col items-center relative w-10/12 mx-auto mb-[20px] lg:mb-[100px]" id='pricing'>
            <h2 className='text-[#F9F9F9] text-[22px] lg:text-[43px] font-bold'>Our Pricing Solutions</h2>
            <h3 className='text-[#F9F9F9] text-[12px] lg:text-[22px] font-medium mt-[10px] text-center'>No hidden fees, just simple and affordable plans tailored to your needs</h3>
            <div className='p-[3px] lg:p-2 bg-[#2B2D37] rounded-[28px] flex items-center mt-[10px] lg:mt-[20px]'>
                <div className={`p-[3px] lg:p-2 ${toggleValue === "Month" ? " bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] text-[#2A2200]" : "bg-transparent text-[#F9F9F9]"} cursor-pointer rounded-[20px]`} onClick={() => { setToggleValue("Month") }}>
                    <h1 className='mx-[10px] font-normal text-[12px] lg:text-[16px]'>Monthly</h1>
                </div>
                <div className={`p-[3px] lg:p-2 ${toggleValue === "Year" ? " bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] text-[#2A2200]" : "bg-transparent text-[#F9F9F9]"} cursor-pointer rounded-[20px]`}>
                    <h1 className='mx-[10px] font-normal text-[12px] lg:text-[16px]' onClick={() => { setToggleValue("Year") }}>Yearly</h1>
                </div>
            </div>
            {toggleValue === "Month" ? (
                <div className='flex sm:grid grid-cols-2 xl:flex flex-col lg:flex-row gap-[30px] mt-[20px] lg:mt-[40px]'>
                    <div className={`p-5 w-full lg:w-[320px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] sm:hover:scale-[1.1] transition-all duration-700 relative overflow-hidden ${knowMoreB1M ? "h-[490px] lg:h-[650px]" : "h-[380px] lg:h-[500px]"}`}>
                        <div className='bg-[#355D86] w-[200px] h-[200px] rounded-full absolute blur-[67px] top-[50%] -translate-y-[59%] z-0 -left-[40%]'></div>
                        <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] top-[20px] z-0 -right-[0]'></div>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[10px] lg:ml-[20px] relative z-[1]'>$8 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px] relative z-[1]'>Basecamp 1</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Channels</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Chats</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Projects and Task management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Artificial intelligence</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>People and work teams</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Goals</h3>
                        </div>
                        {!knowMoreB1M && (
                            <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB1M(true) }}>Know More...</h3>
                        )}
                        {knowMoreB1M && (
                            <>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Integration with basic 5 softwares</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Organisation chart</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Users upto 50</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Suitable for small teams</h3>
                                </div>
                                <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB1M(false) }}>less...</h3>
                                <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] bottom-[20px] z-0 -right-[0]'></div>
                            </>)}
                        <button className='w-10/12 lg:w-[170px] h-[45px] absolute bottom-4 z-[1] left-[50%] -translate-x-[50%] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]' onClick={() => { setIsForm(true) }}>Get Started</button>
                    </div>
                    <div className={`p-5 w-full lg:w-[320px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] sm:hover:scale-[1.1] transition-all duration-700 relative overflow-hidden ${knowMoreB2M ? "h-[830px] lg:h-[1050px]" : "h-[380px] lg:h-[500px]"}`}>
                        <div className='bg-[#355D86] w-[200px] h-[200px] rounded-full absolute blur-[67px] top-[50%] -translate-y-[59%] z-0 -left-[40%]'></div>
                        <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] top-[20px] z-0 -right-[0]'></div>
                        <div className='p-0.5 lg:p-1 rounded-[10px] bg-[#303018] w-6/12 ml-auto text-center absolute top-4 right-6 z-[1]'>
                            <h3 className='font-bold text-[#FFDD09] text-[8px] lg:text-[10px]'>MOST POPULAR</h3>
                        </div>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[10px] lg:ml-[20px] relative z-[1]'>$13 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px] relative z-[1]'>Basecamp 2</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Channels</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Chats</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Projects and Task management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Artificial intelligence</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>People and work teams</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Goals</h3>
                        </div>
                        {!knowMoreB2M && (
                            <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB2M(true) }}>Know More...</h3>
                        )}
                        {knowMoreB2M && (
                            <>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Integration with basic 5 softwares</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Organisation chart</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Leave Management</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Daily report</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Finance</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Calendar</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Feedback</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Personalisation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Alerts</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Universal search</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Automation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Emails</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Users upto 500</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Suitable for medium enterprises</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Can retrive last 12 months data</h3>
                                </div>
                                <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB2M(false) }}>less...</h3>
                                <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] bottom-[20px] z-0 -right-[0]'></div>
                            </>
                        )}
                        <button className='w-10/12 lg:w-[170px] h-[45px] absolute z-[1] bottom-4 left-[50%] -translate-x-[50%] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]' onClick={() => { setIsForm(true) }}>Get Started</button>
                    </div>
                    <div className={`p-5 w-full lg:w-[320px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] sm:hover:scale-[1.1] transition-all duration-700 relative overflow-hidden ${knowMoreB3M ? "h-[810px] lg:h-[1050px]" : "h-[380px] lg:h-[500px]"}`}>
                        <div className='bg-[#355D86] w-[200px] h-[200px] rounded-full absolute blur-[67px] top-[50%] -translate-y-[59%] z-0 -left-[40%]'></div>
                        <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] top-[20px] z-0 -right-[0]'></div>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[10px] lg:ml-[20px] relative z-[1]'>$25 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px] relative z-[1]'>Basecamp 3</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Channels</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Chats</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Projects and Task management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Artificial intelligence</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>People and work teams</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Goals</h3>
                        </div>
                        {!knowMoreB3M && (
                            <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB3M(true) }}>Know More...</h3>
                        )}
                        {knowMoreB3M && (
                            <>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium '>Integration with basic 5 softwares</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Organisation chart</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Leave Management</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Daily report</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Finance</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Calendar</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Feedback</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Personalisation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Alerts</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Universal search</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Automation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Emails</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Users upto 500</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Suitable for Large enterprises</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Can retrive all years data</h3>
                                </div>
                                <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB3M(false) }}>less...</h3>
                                <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] bottom-[20px] z-0 -right-[0]'></div>
                            </>
                        )}
                        <button className='w-10/12 lg:w-[170px] h-[45px] absolute z-[1] bottom-4 left-[50%] -translate-x-[50%] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]' onClick={() => { setIsForm(true) }}>Get Started</button>
                    </div>
                    <div className={`p-5 w-full lg:w-[320px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] sm:hover:scale-[1.1] transition-all duration-700 relative overflow-hidden ${knowMoreB4M ? "h-[860px] lg:h-[1100px]" : "h-[380px] lg:h-[500px]"}`}>
                        <div className='bg-[#355D86] w-[200px] h-[200px] rounded-full absolute blur-[67px] top-[50%] -translate-y-[59%] z-0 -left-[40%]'></div>
                        <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] top-[20px] z-0 -right-[0]'></div>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[10px] lg:ml-[20px] relative z-[1]'>$49 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px] relative z-[1]'>Summit</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Channels</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Chats</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Projects and Task management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Artificial intelligence</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>People and work teams</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Goals</h3>
                        </div>
                        {!knowMoreB4M && (
                            <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB4M(true) }}>Know More...</h3>
                        )}
                        {knowMoreB4M && (
                            <>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Integration with basic 5 softwares</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Organisation chart</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Leave Management</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Daily report</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Finance</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Calendar</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Feedback</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Personalisation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Alerts</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Universal search</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Automation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Emails</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Users upto 500</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Suitable for Large enterprises</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Can retrive all years data</h3>
                                </div>
                                {/* <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Custom Pricing</h3>
                                </div> */}
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>24/7 Support</h3>
                                </div>
                                <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB4M(false) }}>less...</h3>
                                <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] bottom-[20px] z-0 -right-[0]'></div>
                            </>
                        )}
                        <button className='w-10/12 lg:w-[170px] h-[45px] absolute z-[1] bottom-4 left-[50%] -translate-x-[50%] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]' onClick={() => { setIsForm(true) }}>Contact Sales</button>
                    </div>
                </div>
            ) : toggleValue === "Year" && (
                <div className='flex sm:grid grid-cols-2 xl:flex flex-col lg:flex-row gap-[30px] mt-[20px] lg:mt-[40px]'>
                    <div className={`p-5 w-full lg:w-[320px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] sm:hover:scale-[1.1] transition-all duration-700 relative overflow-hidden ${knowMoreB1Y ? "h-[490px] lg:h-[650px]" : "h-[380px] lg:h-[500px]"}`}>
                        <div className='bg-[#355D86] w-[200px] h-[200px] rounded-full absolute blur-[67px] top-[50%] -translate-y-[59%] z-0 -left-[40%]'></div>
                        <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] top-[20px] z-0 -right-[0]'></div>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[10px] lg:ml-[20px] relative z-[1]'>$7 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px] relative z-[1]'>Basecamp 1</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Channels</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Chats</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Projects and Task management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Artificial intelligence</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>People and work teams</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Goals</h3>
                        </div>
                        {!knowMoreB1Y && (
                            <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB1Y(true) }}>Know More...</h3>
                        )}
                        {knowMoreB1Y && (
                            <>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Integration with basic 5 softwares</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Organisation chart</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Users upto 50</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Suitable for small teams</h3>
                                </div>
                                <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB1Y(false) }}>less...</h3>
                                <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] bottom-[20px] z-0 -right-[0]'></div>
                            </>)}
                        <button className='w-10/12 lg:w-[170px] h-[45px] absolute bottom-4 z-[1] left-[50%] -translate-x-[50%] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]' onClick={() => { setIsForm(true) }}>Get Started</button>
                    </div>
                    <div className={`p-5 w-full lg:w-[320px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] sm:hover:scale-[1.1] transition-all duration-700 relative overflow-hidden ${knowMoreB2Y ? "h-[830px] lg:h-[1050px]" : "h-[380px] lg:h-[500px]"}`}>
                        <div className='bg-[#355D86] w-[200px] h-[200px] rounded-full absolute blur-[67px] top-[50%] -translate-y-[59%] z-0 -left-[40%]'></div>
                        <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] top-[20px] z-0 -right-[0]'></div>
                        <div className='p-0.5 lg:p-1 rounded-[10px] bg-[#303018] w-6/12 ml-auto text-center absolute top-4 right-6 z-[1]'>
                            <h3 className='font-bold text-[#FFDD09] text-[8px] lg:text-[10px]'>MOST POPULAR</h3>
                        </div>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[10px] lg:ml-[20px] relative z-[1]'>$12 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px] relative z-[1]'>Basecamp 2</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Channels</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Chats</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Projects and Task management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Artificial intelligence</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>People and work teams</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Goals</h3>
                        </div>
                        {!knowMoreB2Y && (
                            <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB2Y(true) }}>Know More...</h3>
                        )}
                        {knowMoreB2Y && (
                            <>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Integration with basic 5 softwares</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Organisation chart</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Leave Management</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Daily report</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Finance</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Calendar</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Feedback</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Personalisation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Alerts</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Universal search</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Automation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Emails</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Users upto 500</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Suitable for medium enterprises</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Can retrive last 12 months data</h3>
                                </div>
                                <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB2Y(false) }}>less...</h3>
                                <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] bottom-[20px] z-0 -right-[0]'></div>
                            </>
                        )}
                        <button className='w-10/12 lg:w-[170px] h-[45px] absolute z-[1] bottom-4 left-[50%] -translate-x-[50%] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]' onClick={() => { setIsForm(true) }}>Get Started</button>
                    </div>
                    <div className={`p-5 w-full lg:w-[320px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] sm:hover:scale-[1.1] transition-all duration-700 relative overflow-hidden ${knowMoreB3Y ? "h-[810px] lg:h-[1050px]" : "h-[380px] lg:h-[500px]"}`}>
                        <div className='bg-[#355D86] w-[200px] h-[200px] rounded-full absolute blur-[67px] top-[50%] -translate-y-[59%] z-0 -left-[40%]'></div>
                        <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] top-[20px] z-0 -right-[0]'></div>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[10px] lg:ml-[20px] relative z-[1]'>$25 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px] relative z-[1]'>Basecamp 3</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Channels</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Chats</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Projects and Task management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Artificial intelligence</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>People and work teams</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Goals</h3>
                        </div>
                        {!knowMoreB3Y && (
                            <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB3Y(true) }}>Know More...</h3>
                        )}
                        {knowMoreB3Y && (
                            <>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium '>Integration with basic 5 softwares</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Organisation chart</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Leave Management</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Daily report</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Finance</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Calendar</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Feedback</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Personalisation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Alerts</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Universal search</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Automation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Emails</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Users upto 500</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Suitable for Large enterprises</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Can retrive all years data</h3>
                                </div>
                                <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB3Y(false) }}>less...</h3>
                                <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] bottom-[20px] z-0 -right-[0]'></div>
                            </>
                        )}
                        <button className='w-10/12 lg:w-[170px] h-[45px] absolute z-[1] bottom-4 left-[50%] -translate-x-[50%] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]' onClick={() => { setIsForm(true) }}>Get Started</button>
                    </div>
                    <div className={`p-5 w-full lg:w-[320px] border-[1px] border-[#FFFFFF1A] rounded-[10px] lg:rounded-[30px] sm:hover:scale-[1.1] transition-all duration-700 relative overflow-hidden ${knowMoreB4Y ? "h-[860px] lg:h-[1100px]" : "h-[380px] lg:h-[500px]"}`}>
                        <div className='bg-[#355D86] w-[200px] h-[200px] rounded-full absolute blur-[67px] top-[50%] -translate-y-[59%] z-0 -left-[40%]'></div>
                        <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] top-[20px] z-0 -right-[0]'></div>
                        <h2 className='text-[#FFFFFF] text-[20px] lg:text-[36px] font-bold lg:mt-[10px] lg:ml-[20px] relative z-[1]'>$49 <span className='text-[#BCBCBC] text-[10px] lg:text-[16px] font-medium'>User/month</span></h2>
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[30px] font-medium my-[5px] lg:my-[10px] lg:ml-[20px] relative z-[1]'>Summit</h3>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Channels</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Chats</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Projects and Task management</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Artificial intelligence</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>People and work teams</h3>
                        </div>
                        <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                            <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                            <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Goals</h3>
                        </div>
                        {!knowMoreB4Y && (
                            <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB4Y(true) }}>Know More...</h3>
                        )}
                        {knowMoreB4Y && (
                            <>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Integration with basic 5 softwares</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Organisation chart</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Leave Management</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Daily report</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Finance</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Calendar</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Feedback</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Personalisation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Alerts</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Universal search</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Automation</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Emails</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Users upto 500</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Suitable for Large enterprises</h3>
                                </div>
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Can retrive all years data</h3>
                                </div>
                                {/* <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>Custom Pricing</h3>
                                </div> */}
                                <div className='flex gap-2 items-center lg:ml-[20px] my-[10px] lg:my-[15px] relative z-[1]'>
                                    <img src={tik} alt='tik' className='w-[15px] lg:w-[17px]' />
                                    <h3 className='text-[#F0F0F0] text-[13px] lg:text-[15px] font-medium'>24/7 Support</h3>
                                </div>
                                <h3 className='text-[#FFDD09] text-[11px] lg:text-[13px] font-medium lg:ml-[20px] my-[10px] lg:my-[15px] cursor-pointer relative z-[1]' onClick={() => { setKnowMoreB4Y(false) }}>less...</h3>
                                <div className='bg-[#355D86] w-[100px] h-[100px] rounded-full absolute blur-[55px] bottom-[20px] z-0 -right-[0]'></div>
                            </>
                        )}
                        <button className='w-10/12 lg:w-[170px] h-[45px] absolute z-[1] bottom-4 left-[50%] -translate-x-[50%] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[5px] lg:rounded-[10px] text-[#2A2200] font-medium text-[16px] border-[1px] border-[#FFE784]' onClick={() => { setIsForm(true) }}>Contact Sales</button>
                    </div>
                </div>
            )}
        </div>
    )
}

