import React from 'react'
// import yellowGlow from "../../images/yellowglow.png";
// // import logo from "../../images/workfast.svg";
// import Main from './main'
// import Price from './pricing';
// import Choose from './choose';
// import Footer from './footer';
// import Header from './header';
// import { Helmet } from 'react-helmet';
import Header from './component/header';
import Intro from './component/intro';
import Channel from './component/channel';
import Project from './component/project';
import Task from './component/task';
import Chat from './component/chat';
import Ai from './component/ai';
import Features from './component/features';
import Footer from './component/footer';
import Testimonial from './component/testimonials';
import Availbles from './component/avaibles';
// import Pricing from './component/price';
import IpadView from './component/ipadview';
import Support from './component/support';
import Access from './component/access';
import { IoCloseSharp } from "react-icons/io5";
import Mobile from "../../images/mobile.webp";
import Avalaible1 from '../../images/Devicemockup1.webp'

export default function LandingPageInd({ email, setEmail }) {
    const [isVideo, setIsVideo] = React.useState(false);
    const [videoIndex, setVideoIndex] = React.useState(null);
    

    return (
        // <div className='flex flex-col w-full h-full bg-[#010306] relative overflow-hidden'>
        //     <Helmet>
        //         {/* Google tag (gtag.js) */}
        //         <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16567153004"></script>
        //         <script>
        //             {`
        //             window.dataLayer = window.dataLayer || [];
        //             function gtag(){dataLayer.push(arguments);}
        //             gtag('js', new Date());
        
        //             gtag('config', 'AW-16567153004');
        //             `}
        //         </script>
        //         {/* <!-- Google tag (gtag.js) --> */}
        //         <script async src="https://www.googletagmanager.com/gtag/js?id=G-WFR8HYW6H1"></script>
        //         <script>
        //             {`window.dataLayer = window.dataLayer || [];
        //             function gtag(){dataLayer.push(arguments);}
        //             gtag('js', new Date());

        //             gtag('config', 'G-WFR8HYW6H1');`}
        //         </script>
        //         {/* <!-- Hotjar Tracking Code for https://www.workfast.ai/landingin --> */}
        //         <script>
        //             {`
        //             (function(h,o,t,j,a,r){
        //                 h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        //                 h._hjSettings={hjid:4994407,hjsv:6};
        //                 a=o.getElementsByTagName('head')[0];
        //                 r=o.createElement('script');r.async=1;
        //                 r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        //                 a.appendChild(r);
        //             })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        //         </script>
        //     </Helmet>
        //     <Header />
        //     <img src={yellowGlow} alt='yellowGlow' className='absolute top-[73px] md:top-[80px] z-[0] ' />
        //     <Main />
        //     <Price />
        //     <Choose />
        //     <Footer />
        // </div>
        <div className='flex flex-col justify-start items-center w-full h-full bg-[#010306] relative overflow-hidden px-0'>
        <Header/>
        <Intro email={email} setEmail={setEmail} />
        <Features />
        <img src={Mobile} alt='mobileView'
          // data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="10000" 
          className='my-[20px] lg:my-[100px] p-[20px] w-[80%]' />
        <Channel />
        <Project />
        <Task />
        <Chat />
        <Ai />
        <Availbles />
        <img src={Avalaible1} alt='availble' className='mt-[10px] lg:mt-[50px] p-[20px] w-[80%] z-[1]'
        // data-aos="zoom-in" data-aos-duration="2000" 
        />
        {/* <Pricing setIsForm={setIsForm} /> */}
        <IpadView />
        <Support />
        <Testimonial setIsVideo={setIsVideo} setVideoIndex={setVideoIndex} />
        <Access />
        <Footer />
        {isVideo && (
          <div className="flex justify-center items-center text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#121825] bg-opacity-30 z-30">
            <div
              className="w-[95%] h-[95%] flex items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat relative"
              style={{
                backdropFilter: "blur(100px)",
              }}
            >
              <div className=" w-10/12 h-screen flex items-center justify-center">
                {videoIndex === 0 ? (
                  <video
                    className=" object-contain max-h-[90%] rounded-lg"
                    controls
                    autoPlay
                  >
                    <source
                      src={`https://dz1x1c630cl14.cloudfront.net/webassets/TestimonialLandscape.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : videoIndex === 1 && (
                  <video
                    className=" object-contain max-h-[90%] rounded-lg"
                    controls
                    autoPlay
                  >
                    <source
                      src={`https://dz1x1c630cl14.cloudfront.net/webassets/testimonial2.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
  
  
              <div
                className="absolute top-0 right-0 cursor-pointer border-[#FFFFFF] p-2 rounded-lg"
                onClick={() => {
                  setIsVideo(false);
                }}
              >
                <IoCloseSharp className='text-[#FFF] w-[30px] h-[30px]' />
              </div>
            </div>
          </div>
        )}
      </div>
    )
}




