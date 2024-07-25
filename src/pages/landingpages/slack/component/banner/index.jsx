import React from 'react'
import bannerImg from "../../../../../images/slackbanner.svg";
import eclipse from "../../../../../images/comparisonEclipse.png";


export default function Banner() {
    const [isColour, setIsColour] = React.useState(0);
    const [isList, setIsList] = React.useState(0);
    const list = [
        { title: "Direct messages to ping anyone in your team urgently" },
        { title: "Group Messages to chat with team casually" },
        { title: "Channels for project and task discussion to get in focus" },
        { title: "Voting and ticketing channels" },
        { title: "Town hall for sharing great news" },
        { title: "Express your platform and app Feedbacks in seperate channels" },
        { title: "Add any messages to Task list." },
        { title: "Check-In to show your team that you are up for work." },
    ];

    const scrollContainerRef = React.useRef(null);

    React.useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const handleScroll = () => {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                scrollContainer.scrollLeft = 0;
            }
        };
        scrollContainer.addEventListener('scroll', handleScroll);
        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    React.useEffect(() => {
        const interval = setInterval(() => {
          setIsList((prevIsList) => (prevIsList + 1) % 8);
        }, 2000); // Change the interval duration as needed
    
        return () => clearInterval(interval);
    },[]);

    React.useEffect(() => {
        const interval = setInterval(() => {
          setIsColour((prevIsList) => (prevIsList + 1) % 2);
        }, 2000); // Change the interval duration as needed
    
        return () => clearInterval(interval);
    },[]);

    return (
        <div className='w-full sm:w-11/12 lg:w-10/12 flex flex-col justify-center items-center bg-[#FFF] mx-auto px-[20px] sm:px-0'>
            <div className='flex flex-col gap-[22px] justify-center items-center'>
                <h1 className='text-[24px] sm:text-[32px] lg:text-[50px] font-bold text-[#161000] text-center'>No <span className={`${isColour === 0 ? "text-[#FF2D55]" : "text-[#34C759]"}`}>#1 Alternative to Slack</span> to manage your team communication in half the Price</h1>
                <h3 className='text-[#161000] font-medium text-[14px] sm:text-[18px] lg:text-[24px] text-center w-[80%] leading-[60px]'>workfast.ai provides new updated features more than slack , so your team wont miss any piece of information when communicating in larger groups.</h3>
                <button className='text-[#2A2200] text-[14px] sm:text-[18px] lg:text-[21px] font-semibold px-[30px] py-[14px] lg:px-[38px] lg:py-[18px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[11px] relative z-[10] border border-[#FFF]'>Get Started</button>
            </div>
            <div className='mt-[20px] sm:mt-[46px] lg:mt-[116px] relative'>
                <img src={eclipse} alt='eclipse' className='absolute -top-[40px] sm:-top-[70px] lg:-top-[130px] left-1/2 -translate-x-1/2 z-[0] w-[80%] lg:w-auto' />
                <img src={bannerImg} alt='bannerImg' className='z-[10] relative' />
            </div>
            <div className='mt-[46px] lg:mt-[66px] flex flex-col gap-[30px] sm:gap-[80px] lg:gap-[120px] justify-center items-center relative z-[10] w-10/12 overflow-hidden'>
                <div ref={scrollContainerRef} className='flex gap-[22px] items-center justify-center w-full'>
                    {[...list, ...list, ...list].map((item, index) => (
                        <div
                            key={index}
                            className={`w-[80%] mx-auto rounded-[24px] border h-[100px] sm:h-[151px] flex shrink-0 justify-center items-center text-center transition-transform duration-500 ${index % 8 === 0
                                    ? "border-[#FF3B30]"
                                    : index % 8 === 1
                                        ? "border-[#FF9500]"
                                        : index % 8 === 2
                                            ? "border-[#007AFF]" 
                                            : index % 8 === 3 ?
                                            "border-[#34C759]"
                                            : index % 8 === 4 ? 
                                            "border-[#00C7BE]" 
                                            : index % 8 === 5 ? 
                                            "border-[#32ADE6]"
                                            : index % 8 === 6 ? 
                                            "border-[#5856D6]"
                                            : 'border-[#AF52DE]' 
                                 } ${isList === 0 ? "translate-x-[165%] sm:translate-x-[155%]" : isList === 1 ? "translate-x-[55%]" : isList === 2 ? "-translate-x-[55%]" : isList === 3 ? "-translate-x-[165%] sm:-translate-x-[155%]" : isList === 4 ? "-translate-x-[257%]" : isList === 5 ? "-translate-x-[360%]" : isList === 6 ? "-translate-x-[463%]" : isList === 7 ? "-translate-x-[565%]" :  ""}`}
                        >
                            <div className={`text-[#261900] font-semibold text-[14px] sm:text-[20px] lg:text-[24px] ${ index % 8 === 0 ? "w-9/12 lg:w-8/12" : index % 8 === 2 ? "w-9/12 lg:w-8/12" : index % 8 ===  5 ? "w-9/12 lg:w-8/12" : index % 8 ===  7 && "w-9/12 lg:w-8/12" }`}>{item?.title}</div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-[18px] justify-center items-center'>
                    <h4 className='text-[#383838] text-[22px] sm:text-[32px] lg:text-[44px] font-semibold text-center'>Focus is the new currency , earn it with Workfast.ai</h4>
                    <button className='text-[#2A2200] text-[14px] sm:text-[18px] lg:text-[21px] font-semibold px-[30px] py-[14px] lg:px-[38px] lg:py-[18px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[11px] relative z-[10] border border-[#FFF]'>Try it Free</button>
                </div>
            </div>
        </div>
    )
}
