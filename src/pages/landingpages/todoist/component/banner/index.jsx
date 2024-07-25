import React from 'react'
import bannerImg from "../../../../../images/todoistBanner.svg";
import eclipse from "../../../../../images/comparisonEclipse.png";


export default function Banner() {
    const [isList, setIsList] = React.useState(0);
    const list = [
        { title: "Create tasks and subtasks easily with one step." },
        { title: "Track and Monitor Tasks and bring in collaborators." },
        { title: "Do more in less time with bubbled focus." },
        { title: "Tasks Analysis and reports to show a best overview of what have done." },
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
          setIsList((prevIsList) => (prevIsList + 1) % 4);
        }, 2000); // Change the interval duration as needed
    
        return () => clearInterval(interval);
    },[]);

    return (
        <div className='w-full sm:w-11/12 lg:w-10/12 flex flex-col justify-center items-center bg-[#FFF] mx-auto px-[20px] sm:px-0'>
            <div className='flex flex-col gap-[22px] justify-center items-center'>
                <h1 className='text-[24px] sm:text-[32px] lg:text-[50px] font-bold text-[#161000] text-center'><span className={`text-[#FF2D55]`}>#Workfast.ai</span>  Is Much Better Than <span className={`text-[#FF2D55]`}>#Todoist</span> For Your Business Growth</h1>
                <h3 className='text-[#161000] font-medium text-[14px] sm:text-[18px] lg:text-[24px] text-center'>Complete your personal and professional tasks in less time than usual.</h3>
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
                            className={`w-[80%] mx-auto rounded-[24px] border h-[100px] sm:h-[151px] flex shrink-0 justify-center items-center text-center transition-transform duration-500 ${index % 4 === 0
                                    ? "border-[#FF3B30]"
                                    : index % 4 === 1
                                        ? "border-[#FF9500]"
                                        : index % 4 === 2
                                            ? "border-[#007AFF]"
                                            : "border-[#34C759]"
                                } ${isList === 0 ? "translate-x-[165%] sm:translate-x-[155%]" : isList === 1 ? "translate-x-[55%]" : isList === 2 ? "-translate-x-[55%]" : isList === 3 ? "-translate-x-[165%] sm:-translate-x-[155%]" : ""}`}
                        >
                            <div className={`text-[#261900] font-semibold text-[14px] sm:text-[20px] lg:text-[24px] ${index % 4 === 1 ? "w-9/12 lg:w-7/12" : index % 4 ===  3 && "w-9/12 lg:w-7/12"}`}>{item?.title}</div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-[18px] justify-center items-center'>
                    <h4 className='text-[#383838] text-[22px] sm:text-[32px] lg:text-[44px] font-semibold text-center'>Do more in less time with bubbled focus</h4>
                    <button className='text-[#2A2200] text-[14px] sm:text-[18px] lg:text-[21px] font-semibold px-[30px] py-[14px] lg:px-[38px] lg:py-[18px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[11px] relative z-[10] border border-[#FFF]'>Try it Free</button>
                </div>
            </div>
        </div>
    )
}
