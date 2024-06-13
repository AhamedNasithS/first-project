import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




export default function Comparative() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        swipe: true,
        arrows: true,
        autoplay: true,
        centerMode: false,
        prevArrow: <img src='https://dz1x1c630cl14.cloudfront.net/webassets/prevbtn.svg' alt='arrow' />,
        nextArrow: <img src='https://dz1x1c630cl14.cloudfront.net/webassets/nextbtn.svg' alt='arrow' />,
    };
    const slides = [
        { image: 'https://dz1x1c630cl14.cloudfront.net/webassets/Aimockup.webp', title: "AI", description: "Workfast.ai is most efficient for this one reason . Artificial Intelligence which is built over your companies data will provide basic to difficult suggestions whenever you need it . For example if you ask for projects which is completed above 80%, it will give the results . if you ask for a particular persons performance in a projects it will give it no time. similarly , leaves, Approvals, project decisions are very easy to manage.", description1: "" },
        { image: `https://dz1x1c630cl14.cloudfront.net/webassets/Automationmock.webp`, title: "Automation", description: "Workfast.ai is most efficient for this one reason . Artificial Intelligence which is built over your companies data will provide basic to difficult suggestions whenever you need it . For example if you ask for projects which is completed above 80%, it will give the results . if you ask for a particular persons performance in a projects it will give it no time. similarly , leaves, Approvals, project decisions are very easy to manage.", description1: "" },
        { image: `https://dz1x1c630cl14.cloudfront.net/webassets/intergration.webp`, title: "Integration", description: "While working in Workfast.ai it is very simple to integrate any software tools which is much needed to your present work . For example , you can integrate , Notion, slack , Asana, Jira and the list extends. It makes work easier and does not interrupt the work flow ." },
        { image: `https://dz1x1c630cl14.cloudfront.net/webassets/channel&chat.webp`, title: "Channel and Chat", description: "This features will help users to communicate professionally on certain projects or tasks . The user can create numerous channels for communication , share images , videos , links , documents and send voice note", description1: "While chatting , the user can change the message into tasks and assign it to any members without going out the channel or chat. This helps in evading miscommunication and increase the efficiency of assigning tasks " },
        { image: `https://dz1x1c630cl14.cloudfront.net/webassets/task&project.webp`, title: "Task and project management", description: "Every projects are divided into multiple tasks . one can create projects and assign as many team members they want. once done , the user can see the improvements in the dashboard . Similarly , the projects can be given status, tags and priority for easy understanding. Once the tasks are getting complete , the dashboard shows weekly analytics , project owner details and project description etc.", description1: "one can create their own workflow for the project . when needed the team members can message and comment on the project itself." },
        { image: `https://dz1x1c630cl14.cloudfront.net/webassets/mac&phone.webp`, title: "Mobile and web view", description: "Giving same experience as web view to mobile view is a difficult task. Workfast.ai accommodates the same experience as web thus giving relief to people who don't like to carry laptops to travelling places. This helps people who are managers , VPʼs, CEOʼs , CXOʼs and people who are freelancers and WFH employees.", description1: "" },
    ]
    return (
        <div className='flex flex-col justify-center items-center w-10/12 relative z-[1] mx-auto'>
            <h2 className='text-[20px] md:text-[26px] lg:text-[32px] xl:text-[40px] bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent inter-bold relative z-[1] w-10/12 lg:w-9/12'>How Workfast.ai is most efficient software tool comparatively ?</h2>
            <Slider {...settings} className='w-full relative mt-[30px] md:mt-[60px] lg:mt-[100px] mb-[50px] comparative'>
                {slides.map((each, index) => (
                    <div key={index} className='focus:outline-none relative'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={each?.image} alt='ai' className=" md:w-[80%]" />
                            <div className="w-[80%] mx-auto mt-[30px] md:mt-[60px] lg:mt-[100px]">
                                <h2 className={`text-[20px] md:text-[26px] lg:text-[32px] xl:text-[40px] bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent inter-bold ${index === 0 ? "w-[12%] md:w-[5%] xl:w-[4%]" : index === 1 || index === 2 ? "w-[60%] md:w-[30%] xl:w-[25%]" : index === 3 ? "w-[70%] md:w-[50%] xl:w-[38%]" : index === 4 ? "w-full md:w-[80%] lg:w-[70%] xl:w-[62%]" : "w-full md:w-[60%] lg:w-[50%] xl:w-[43%]" }`}>{each?.title}</h2>
                                <p className='text-[#E4E8EB] font-normal text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] mt-[20px]'>{each?.description}</p>
                                {each?.description1 !== "" && (
                                    <p className='text-[#E4E8EB] font-normal text-[12px] md:text-[16px] lg:text-[20px] xl:text-[26px] mt-[10px]'>{each?.description1}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className='w-9/12 mx-auto h-[1px] rounded-sm' style={{background: 'radial-gradient(6488.24% 804% at -355.73% -23.71%, #18599F 0%, rgba(53, 45, 10, 0) 100%)'}}></div>
            <p className='text-[#E4E8EB] font-normal text-[12px] md:text-[16px] lg:text-[20px] xl:ext-[26px] mt-[40px] text-center w-10/12'>As we conclude , it is not about the tool rather it is about the efficiency which delivers best for the product development and management. Workfast.ai gives the best all-in features where one does not to find a replacement. Since product managers need to connect all dots , it is very important for them to find a workable software to work productively.</p>
        </div>
    )
}