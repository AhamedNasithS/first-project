import React from 'react'
import bannerImg from "../../../../../images/slackbanner.svg";
import eclipse from "../../../../../images/comparisonEclipse.png";


export default function Banner() {
    const [isColour, setIsColour] = React.useState(0);
    const [isList, setIsList] = React.useState(4);
    const list = [
        { title: "Personalised chat in groups and Direct messages" },
        { title: "Create channels for specific projects and tasks to be discussed by team members." },
        { title: "Add any messages from chats or channels to action item in Task list" },
        { title: "Manage Voting and ticketing within the channels for team support ." },
        { title: "Announce great news and share happiness with teams in Town hall." },
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
          setIsList((prevIsList) => (prevIsList + 1) % 5);
        }, 3000); 
    
        return () => clearInterval(interval);
    },[]);

    React.useEffect(() => {
        const interval = setInterval(() => {
          setIsColour((prevIsList) => (prevIsList + 1) % 3);
        }, 2000);
    
        return () => clearInterval(interval);
    },[]);

    return (
        <div className='w-full sm:w-11/12 lg:w-10/12 flex flex-col justify-center items-center bg-[#FFF] mx-auto px-[20px] sm:px-0'>
            <div className='flex flex-col gap-[22px] justify-center items-center'>
                <h1 className='text-[24px] sm:text-[32px] lg:text-[50px] font-bold text-[#161000] text-center'>One platform for effective communication with your team to save <span className={`${isColour === 0 ? "text-[#1F44C5]" : isColour === 0 ?  "text-[#34C759]" : "text-[#AF52DE]"}`}>TIME</span> and increase <span className={`${isColour === 0 ? "text-[#FF3B30]" : isColour === 0 ?  "text-[#FF9500]" : "text-[#32ADE6]"}`}>FOCUS.</span></h1>
                <h3 className='text-[#161000] font-medium text-[14px] sm:text-[18px] lg:text-[24px] text-center w-[80%] xl:leading-[60px]'>Manage your projects by breaking down complex task into sub tasks and assign to right resource to get more output with workfast.ai</h3>
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
                            className={`w-[80%] mx-auto rounded-[24px] border h-[100px] sm:h-[151px] flex shrink-0 justify-center items-center text-center transition-transform duration-500 ${index % 5 === 0
                                    ? "border-[#FF3B30]"
                                    : index % 5 === 1
                                        ? "border-[#FF9500]"
                                        : index % 5 === 2
                                            ? "border-[#007AFF]" 
                                            : index % 5 === 3 ?
                                            "border-[#34C759]"
                                            : "border-[#00C7BE]" 
                                 } ${isList === 0 ? "translate-x-[218%] sm:translate-x-[210%] lg:translate-x-[205%]" : isList === 1 ? "translate-x-[109%] sm:translate-x-[103%]" : isList === 2 ? "translate-x-[0%]" : isList === 3 ? "-translate-x-[110%] sm:-translate-x-[103%]" : isList === 4 ? "-translate-x-[220%] sm:-translate-x-[205%]" :  ""}`}
                        >
                            <div className={`text-[#261900] font-semibold text-[14px] sm:text-[20px] lg:text-[24px] ${ index % 5 === 1 ? "w-9/12 lg:w-8/12" : index % 5 ===  2 ? "w-9/12 lg:w-8/12" : index % 5 ===  3 ? "w-9/12 lg:w-8/12" : index % 5 ===  4 && "w-9/12 lg:w-8/12" }`}>{item?.title}</div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-[18px] justify-center items-center'>
                    <h4 className='text-[#383838] text-[22px] sm:text-[32px] lg:text-[44px] font-semibold text-center'>Communicate effectively and collaborate efficiently with Workfast.ai</h4>
                    <button className='text-[#2A2200] text-[14px] sm:text-[18px] lg:text-[21px] font-semibold px-[30px] py-[14px] lg:px-[38px] lg:py-[18px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[11px] relative z-[10] border border-[#FFF]'>Try it Free</button>
                </div>
            </div>
        </div>
    )
}
