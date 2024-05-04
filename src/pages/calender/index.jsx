import React, { useEffect } from 'react';

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
        <div className="calendly-inline-widget min-w-[320px] h-[700px]" data-url="https://calendly.com/sabari-25/one-intelligent-platform-for-your-team-to-work-faster"></div>
    );
}
