import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function Calendar() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <Helmet>
                {/* <!-- Meta Pixel Code --> */}
                <script>
                    {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '451621453912756');
                    fbq('track', 'PageView');
                    `}
                </script>
                <noscript>
                    {`
                        <img height="1" width="1" style="display:none"
                            src="https://www.facebook.com/tr?id=451621453912756&ev=PageView&noscript=1" />
                    `}
                </noscript>
                {/* <!-- End Meta Pixel Code --> */}
            </Helmet>
            <div className="calendly-inline-widget min-w-[320px] h-[700px]" data-url="https://calendly.com/sabari-25/one-intelligent-platform-for-your-team-to-work-faster"></div>
        </div>
    );
}
