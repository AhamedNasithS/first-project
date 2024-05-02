import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Ai from "../../../../images/Aimockup.webp";
import Automation from "../../../../images/Automationmock.webp";
import Integration from "../../../../images/intergration.webp";
import ChannelAndChat from "../../../../images/channel&chat.webp";
import TaskAndProject from "../../../../images/task&project.webp";
import WebAndMobile from "../../../../images/mac&phone.webp";
import nextBtn from "../../../../images/nextbtn.svg";
import prevBtn from "../../../../images/prevbtn.svg";




export default function Comparative() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        swipe: false,
        arrows: true,
        autoplay: true,
        centerMode: false,
        prevArrow: <img src={prevBtn} alt='arrow' />,
        nextArrow: <img src={nextBtn} alt='arrow' />,
    };
    const slides = [
        { image: `${Ai}`, title: "AI", description: "Workfast.ai is most efficient for this one reason . Artificial Intelligence which is built over your companies data will provide basic to difficult suggestions whenever you need it . For example if you ask for projects which is completed above 80%, it will give the results . if you ask for a particular persons performance in a projects it will give it no time. similarly , leaves, Approvals, project decisions are very easy to manage.", description1: "" },
        { image: `${Automation}`, title: "Automation", description: "Workfast.ai is most efficient for this one reason . Artificial Intelligence which is built over your companies data will provide basic to difficult suggestions whenever you need it . For example if you ask for projects which is completed above 80%, it will give the results . if you ask for a particular persons performance in a projects it will give it no time. similarly , leaves, Approvals, project decisions are very easy to manage.", description1: "" },
        { image: `${Integration}`, title: "Integration", description: "While working in Workfast.ai it is very simple to integrate any software tools which is much needed to your present work . For example , you can integrate , Notion, slack , Asana, Jira and the list extends. It makes work easier and does not interrupt the work flow ." },
        { image: `${ChannelAndChat}`, title: "Channel and Chat", description: "This features will help users to communicate professionally on certain projects or tasks . The user can create numerous channels for communication , share images , videos , links , documents and send voice note", description1: "While chatting , the user can change the message into tasks and assign it to any members without going out the channel or chat. This helps in evading miscommunication and increase the efficiency of assigning tasks " },
        { image: `${TaskAndProject}`, title: "Task and project management", description: "Every projects are divided into multiple tasks . one can create projects and assign as many team members they want. once done , the user can see the improvements in the dashboard . Similarly , the projects can be given status, tags and priority for easy understanding. Once the tasks are getting complete , the dashboard shows weekly analytics , project owner details and project description etc.", description1: "one can create their own workflow for the project . when needed the team members can message and comment on the project itself." },
        { image: `${WebAndMobile}`, title: "Mobile and web view", description: "Giving same experience as web view to mobile view is a difficult task. Workfast.ai accommodates the same experience as web thus giving relief to people who don't like to carry laptops to travelling places. This helps people who are managers , VPʼs, CEOʼs , CXOʼs and people who are freelancers and WFH employees.", description1: "" },
    ]
    return (
        <div className='flex flex-col justify-center items-center w-10/12 relative z-[1] mx-auto'>
            <h2 className='text-[40px] bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent inter-bold relative z-[1] w-9/12'>How Workfast.ai is most efficient software tool comparatively ?</h2>
            <Slider {...settings} className='w-full relative mt-[100px] mb-[50px] comparative'>
                {slides.map((each, index) => (
                    <div key={index} className='focus:outline-none relative'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={each?.image} alt='ai' className={`${index === 2 ? "w-[20%]" :"w-[50%]"}`} />
                            <div className={`w-[80%] mx-auto ${index === 0 ? "mt-[100px]" : index === 1 ? "mt-[168px]" : index === 2 ? "mt-[105px]" : index === 3 ? "mt-[123px]" : index === 4 ? "mt-[160px]" : "mt-[77px]"}`}>
                                <h2 className={`text-[40px] bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent inter-bold ${index === 0 ? "w-[4%]" : index === 1 || index === 2 ? "w-[25%]" : index === 3 ? "w-[38%]" : index === 4 ? "w-[62%]" : "w-[43%]" }`}>{each?.title}</h2>
                                <p className='text-[#E4E8EB] font-normal text-[26px] mt-[20px]'>{each?.description}</p>
                                {each?.description1 !== "" && (
                                    <p className='text-[#E4E8EB] font-normal text-[26px] mt-[10px]'>{each?.description1}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className='bg-[#18599F] w-9/12 mx-auto h-[1px] rounded-sm'></div>
            <p className='text-[#E4E8EB] font-normal text-[26px] mt-[40px] text-center w-10/12'>As we conclude , it is not about the tool rather it is about the efficiency which delivers best for the product development and management. Workfast.ai gives the best all-in features where one does not to find a replacement. Since product managers need to connect all dots , it is very important for them to find a workable software to work productively.</p>
        </div>
    )
}