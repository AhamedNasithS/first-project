import React from 'react'
import yellowGlow from "../../images/yellowglow.png";
// import logo from "../../images/workfast.svg";
import Main from './main'
import Price from './pricing';
import Choose from './choose';
import Footer from './footer';
import Header from './header';
import { Helmet } from 'react-helmet';

export default function LandingPageInd({email, setEmail}) {

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
                {/*<!-- Google tag (gtag.js) -->*/}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-FN35QYKKBB"></script>
                <script>
                {`    
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-FN35QYKKBB');
                `}
                </script>
            </Helmet>
            <Header />
            <img src={yellowGlow} alt='yellowGlow' className='absolute top-[73px] md:top-[80px] z-[0] ' />
            <Main />
            <Price />
            <Choose/>
            <Footer />
        </div>
    )
}
