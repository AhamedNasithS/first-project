import React from 'react'
import yellowGlow from "../../images/yellowglow.png";
// import logo from "../../images/workfast.svg";
import Main from './main'
import Price from './pricing';
import Choose from './choose';
import Footer from './footer';
import Header from './header';
import { Helmet } from 'react-helmet';

export default function LandingPageInd({ email, setEmail }) {

    return (
        <div className='flex flex-col w-full h-full bg-[#010306] relative overflow-hidden'>
            <Helmet>
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16567153004"></script>
                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
        
                    gtag('config', 'AW-16567153004');
                    `}
                </script>
                {/* <!-- Google tag (gtag.js) --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-WFR8HYW6H1"></script>
                <script>
                    {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-WFR8HYW6H1');`}
                </script>
                {/* <!-- Hotjar Tracking Code for https://www.workfast.ai/landingin --> */}
                <script>
                    {`
                    (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:4994407,hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
                </script>
            </Helmet>
            <Header />
            <img src={yellowGlow} alt='yellowGlow' className='absolute top-[73px] md:top-[80px] z-[0] ' />
            <Main />
            <Price />
            <Choose />
            <Footer />
        </div>
    )
}
