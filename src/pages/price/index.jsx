import React from 'react'
import Header from '../main1/component/header'
import VanillaTilt from 'vanilla-tilt';
import { IoIosCheckmark } from "react-icons/io";

export default function Pricing() {
    const [toggleValue, setToggleValue] = React.useState('Month');
    const tiltRef = React.useRef(null);
    const tiltRef1 = React.useRef(null);


    React.useEffect(() => {
        VanillaTilt.init(tiltRef.current, {
            max: 25,
            speed: 700,
        });

        // Clean up the effect on component unmount
        return () => tiltRef.current.vanillaTilt.destroy();
    }, []);

    React.useEffect(() => {
        VanillaTilt.init(tiltRef1.current, {
            max: 25,
            speed: 700,
        });

        // Clean up the effect on component unmount
        return () => tiltRef1.current.vanillaTilt.destroy();
    }, []);

    const pricing = [
        { content: "Price", free: "Free", $6: "$6" },
        { content: "No of users", free: "Unlimited 🚀", $6: "Unlimited 🚀" },
        { content: "File storage", free: "1 GB ", $6: "Unlimited 🚀" },
        { content: "Mobile Apps", free: "✅", $6: "✅" },
        { content: "Projects (Web Only)", free: "Upto 10 Projects", $6: "Unlimited 🚀" },
        { content: "Chats", free: "Unlimited 🚀", $6: "Unlimited 🚀" },
        { content: "Collaboarators ", free: "Unlimited 🚀", $6: "Unlimited 🚀" },
        { content: "Workflow Stages", free: "Unlimited 🚀", $6: "Unlimited 🚀" },
        { content: "Task Creation", free: "Monthly 40 tasks", $6: "Unlimited 🚀" },
        { content: "Sharing documents and media", free: "Unlimited 🚀", $6: "Unlimited 🚀" },
        { content: "Guest users", free: "Max 1 / Only in Specific channel", $6: "Free upto 3 (4 guests charged as 1 licence) Only in Specific channel" },
        { content: "Guest collabs", free: "Max 1", $6: "Free upto 3 ( 4 guests charged as 1 licence )" },
        { content: "Guest access", free: "Only Viewer", $6: "Only Viewer, Viewer + Editor on Request" },
        { content: "Real time updates", free: "✅", $6: "✅" },
        { content: "Channel creation", free: "Unlimited 🚀", $6: "Unlimited 🚀" },
        { content: "Feedback Channel", free: "✅", $6: "✅" },
        { content: "Chat - Add to task", free: "Upto 40 Tasks", $6: "Unlimited 🚀" },
        { content: "Project view", free: "✅", $6: "✅" },
        { content: "People view", free: "✅", $6: "✅" },
        { content: "Date view", free: "✅", $6: "✅" },
        { content: "Priority view", free: "✅", $6: "✅" },
        { content: "Workspace Creation", free: "One workspace", $6: "Max 4" },
        { content: "Universal search", free: "✅", $6: "✅" },
        { content: "Customer support", free: "✅", $6: "✅" },
    ]

    return (
        <div className='flex flex-col justify-start items-center w-full h-screen bg-[#010306] relative px-0 mb-[50px]'>
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Glowing.svg" alt='glow' className='absolute w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0' />
            <div className='relative z-[10] w-full'><Header /></div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='text-center mt-[20px] lg:mt-[60px] xl:mt-[100px] relative z-[10] px-[20px] sm:px-0'>
                <h2 className='text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[64px] text-[#F9F9F9] font-black'>Our Pricing Solutions</h2>
                <h2 className='text-[14px] sm:text-[18px] lgtext-[22px] xl:text-[32px] text-[#F9F9F9] font-medium'>No hidden fees, just simple and affordable plans tailored to your needs</h2>
            </div>
            <div className='p-[3px] lg:p-2 bg-[#2B2D37] rounded-[28px] flex items-center mt-[10px] lg:mt-[20px] relative z-[10]'>
                <div className={`p-[3px] lg:p-2 ${toggleValue === "Month" ? " bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B] text-[#2A2200]" : "bg-transparent text-[#F9F9F9]"} cursor-pointer rounded-[20px]`} onClick={() => { setToggleValue("Month") }}>
                    <h3 className='mx-[10px] font-normal text-[12px] lg:text-[16px]'>Monthly</h3>
                </div>
                <div className={`p-[3px] lg:p-2 ${toggleValue === "Year" ? " bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B] text-[#2A2200]" : "bg-transparent text-[#F9F9F9]"} cursor-pointer rounded-[20px]`}>
                    <h3 className='mx-[10px] font-normal text-[12px] lg:text-[16px]' onClick={() => { setToggleValue("Year") }}>Yearly</h3>
                </div>
            </div>
            <div className='flex gap-[7px] items-center justify-center relative z-[10] mt-[10px] lg:mt-[20px]'>
                <h3 className='text-[#999999] font-semibold text-[14px]'>Monthly</h3>
                <div className='w-[2px] bg-[#999999] h-[16px]'></div>
                <h3 className='text-[#FFDD09] font-semibold text-[14px]'>Yearly - SAVE 20%</h3>
            </div>
            <div className='grid sm:grid-cols-2 lg:flex gap-[31px] items-center justify-center relative z-[10] mt-[30px] lg:mt-[50px]'>
                <div ref={tiltRef} className="group">
                    <div className='bg-gradient-to-r from-[#3D444E] via-[#2F353F] to-[#0D111A] rounded-[10px] lg:rounded-[30px] transition-all duration-700 p-[1px]'>
                        <div className={`px-[32px] py-[38px] w-full lg:w-[440px] rounded-[10px] lg:rounded-[30px] relative overflow-hidden bg-[#000000] flex flex-col gap-[14px]`}>
                            <div className='bg-[#2b4762] w-[200px] h-[200px] rounded-full absolute blur-[67px] top-[50%] -translate-y-[59%] z-0 -left-[40%]'></div>
                            <div className='bg-[#2b4762] w-[100px] h-[100px] rounded-full absolute blur-[55px] top-[20px] z-0 -right-[0]'></div>
                            <div>
                                <h2 className='text-[#FFFFFF] text-[28px] font-bold relative z-[10]'>Basic</h2>
                                <h3 className='text-[#A5A5A5] text-[16px] font-medium relative z-[10]'>For small teams</h3>
                            </div>
                            <div>
                                <h2 className='text-[#FFFFFF] text-[44px] font-bold relative z-[10]'>Free <span className='text-[#818181] font-normal text-[16px]'>Unlimited</span></h2>
                            </div>
                            <button className='w-full py-[10px] border-[#FFDD09] border rounded-[11px] text-[#FFDD09] font-medium text-[16px] relative z-[10]'>Get Started</button>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>1 workspace</h3>
                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>Unlimited users</h3>
                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>Upto 7 Projects</h3>
                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>1 GB storage </h3>
                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>Monthly 40 tasks</h3>
                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>Mobile Apps</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={tiltRef1} className="group">
                    <div className='bg-gradient-to-l from-[#3D444E] via-[#2F353F] to-[#0D111A] rounded-[10px] lg:rounded-[30px] transition-all duration-700 p-[1px]'>
                        <div className={`px-[32px] py-[38px] w-full lg:w-[440px] rounded-[10px] lg:rounded-[30px] relative overflow-hidden bg-[#000000] flex flex-col gap-[14px]`}>
                            <div className='bg-[#2b4762] w-[200px] h-[200px] rounded-full absolute blur-[67px] top-[50%] -translate-y-[59%] z-0 -left-[40%]'></div>
                            <div className='bg-[#2b4762] w-[100px] h-[100px] rounded-full absolute blur-[55px] top-[20px] z-0 -right-[0]'></div>
                            <div>
                                <h2 className='text-[#FFFFFF] text-[28px] font-bold relative z-[10]'>Starter Pack</h2>
                                <h3 className='text-[#A5A5A5] text-[16px] font-medium relative z-[10]'>For advanced teams & businesses</h3>
                            </div>
                            <div className='flex gap-[29px] items-center'>
                                <h2 className='text-[#FFFFFF] text-[44px] font-bold relative z-[10]'>$6<span className='text-[#545454] font-semibold text-[20px] diagonal-strike'>$7</span></h2>
                                <div>
                                    <h2 className='text-[#818181] font-medium text-[16px] relative z-[10]'>Per member / month</h2>
                                    <h2 className='text-[#818181] font-medium text-[16px] relative z-[10]'>billed annually</h2>
                                </div>
                            </div>
                            <button className='w-full py-[10px] border-[#FFDD09] border rounded-[11px] text-[#FFDD09] font-medium text-[16px] relative z-[10]'>Get Started</button>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>Upto 4 workspaces</h3>
                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>Unlimited users</h3>
                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>Unlimited Projects</h3>
                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>Unlimited storage </h3>
                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>Unlimited Tasks Creation</h3>
                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <IoIosCheckmark className='text-[#FFDD09] text-[27px]' />
                                <h3 className='text-[#FFFFFF] font-medium text-[17px]'>Unlimited Add to tasks - Chat</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-l w-11/12 from-[#4B6AE766] to-[#5F8AFA66] rounded-[10px] lg:rounded-[30px] p-[1px] my-[30px] lg:my-[50px]'>
                <div className={`px-[22px] py-[18px] sm:px-[53px] sm:pt-[33px] pb-[12px] w-full overflow-x-auto mx-auto rounded-[10px] lg:rounded-[30px] relative overflow-hidden bg-[#000000] flex flex-col gap-[14px]`}>
                    <div className='bg-[#2b4762] w-[200px] h-[200px] rounded-full absolute blur-[67px] -top-[50%] -translate-y-[59%] z-0 left-[0%]'></div>
                    <div className='bg-[#2b4762] w-[100px] h-[100px] rounded-full absolute blur-[55px] bottom-[0px] z-0 -right-[0]'></div>
                    <h2 className='text-center text-[#FFFFFF] text-[20px] sm:text-[36px] font-semibold relative z-[10]'>Plans and features</h2>
                    <div className='mt-[15px] w-full'>
                        <div className='py-[20px] grid grid-cols-3 justify-between items-center text-[#FFFFFF] text-[14px] sm:text-[24px] font-bold border-b-[1px] border-[#484848]'>
                            <h2>Content</h2>
                            <h2 className='text-center'>Basic - Free</h2>
                            <h2 className='text-end sm:ml-auto w-[100px] sm:w-[220px] sm:mr-[35px]'>Starter Pack</h2>
                        </div>
                        {pricing.map((each, index) => (
                            <div key={index} className={'py-[20px] grid grid-cols-3 justify-between items-center text-[#C0C0C0] text-[14px] sm:text-[20px] font-medium border-b-[1px] border-[#484848]'}>
                                <h2 className='text-[#FFFFFF] font-semibold'>{each?.content}</h2>
                                <h2 className='text-center text-[12px] sm:text-[20px]'>{each?.free}</h2>
                                <h2 className={`text-center ml-auto w-[100px] sm:w-[220px] text-[12px] sm:text-[20px]`}>{each?.$6}</h2>
                            </div>
                        ))}
                        {/* <div className='py-[20px] grid grid-cols-3 gap-[388px] justify-between items-center text-[#C0C0C0] text-[20px] font-medium border-b-[1px] border-[#484848]'>
                            <h2 className='text-[#FFFFFF] font-semibold'>No of users</h2>
                            <h2 className='text-center'>Unlimited 🚀</h2>
                            <h2 className='text-center'>Unlimited 🚀</h2>
                        </div>
                        <div className='py-[20px] grid grid-cols-3 gap-[388px] justify-between items-center text-[#C0C0C0] text-[20px] font-medium border-b-[1px] border-[#484848]'>
                            <h2 className='text-[#FFFFFF] font-semibold'>No of users</h2>
                            <h2 className='text-center'>Unlimited 🚀</h2>
                            <h2 className='text-center'>Unlimited 🚀</h2>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
