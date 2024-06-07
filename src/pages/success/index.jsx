import React from 'react'
import yellowGlow from "../../images/yellowglow.png"
import Header from './header'
import LoadLottie from '../loadLottie';
import sucess from "../../sucess.json";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Success() {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate('/signup')
    }, 2000);
  }, [])

  return (
    <div className='flex flex-col w-full h-full bg-[#010306] relative overflow-hidden'>
      <Helmet>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16567153004"></script>
        <script>
          {`  
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16567153004');
          `}
        </script>
        {/* <!-- Google Tag Manager --> */}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N743ZL57');
          `}
        </script>
        {/* <!-- End Google Tag Manager --> */}
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N743ZL57" title='googletag'
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
        </body>
      </Helmet>
      <Header />
      <img src={yellowGlow} alt='yellowGlow' className='absolute top-[73px] md:top-[80px] z-[0] ' />
      <div className='relative px-[20px] md:px-0 w-full md:w-11/12 mx-auto flex flex-col justify-center items-center gap-[30px] lg:gap-[60px] overflow-hidden'>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div className='shooting-stars1'></div>
        <div className='shooting-stars'></div>
        <div className='w-[300px] md:w-[630px] md:h-[200px] bg-[#121825] rounded-[16px] p-[32px] relative z-[10] my-[200px]'>
          <div className='w-full flex  justify-center'>
            <div className="w-[100px] flex justify-center">
              <LoadLottie animationData={sucess} loop={true} />
            </div>
          </div>
          <h3 className='text-[14px] sen-bold text-[#FFF] text-center'>Thank you You can create your workspace now.</h3>
        </div>
      </div>
    </div>
  )
}
