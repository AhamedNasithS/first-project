import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function IpadView() {

    React.useEffect(() => {
        AOS.init();
    }, []);
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % 3);
        }, 1200); // Change the delay time as needed (in milliseconds)

        return () => clearInterval(interval);
    }, []);
    // State to keep track of the current image index
    const [currentImage, setCurrentImage] = React.useState(0);

    // Setup to handle image sliding
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % 3);
        }, 3000); // Change image every 3000 ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center relative px-[20px] lg:px-0 lg:w-10/12 mx-auto mb-[20px] lg:mb-[100px]">
            <div className="bg-cover bg-center bg-no-repeat relative w-[300px] h-[300px] md:w-[700px] md:h-[700px] px-4 py-0 overflow-hidden z-10" style={{ backgroundImage: `url(https://dz1x1c630cl14.cloudfront.net/webassets/icontab.webp)`, backgroundSize: '100% 67%' }}>
                <div className='w-full h-full overflow-hidden  flex items-center '>
                    <img src="https://dz1x1c630cl14.cloudfront.net/webassets/tabscreen1.webp" alt='ipad' className={`w-full h-full object-contain transition-transform duration-[1s] ease-in-out relative z-[0] ${currentImage === 0 ? 'translate-x-0' : '-translate-x-[110%]'}`} />
                    <img src="https://dz1x1c630cl14.cloudfront.net/webassets/tabviewscreen2.webp" alt='ipad' className={`w-full h-full object-contain transition-transform duration-[1s] ease-in-out relative z-[0] ${currentImage === 0 ? "translate-x-[100%]" : currentImage === 1 ? '-translate-x-[100%]' : '-translate-x-[210%]'}`} />
                    <img src="https://dz1x1c630cl14.cloudfront.net/webassets/tabscreen3.webp" alt='ipad' className={`w-full h-full object-contain transition-transform duration-[1s] ease-in-out relative z-[0] ${currentImage === 0 ? "translate-x-[300%]" : currentImage === 1 ? 'translate-x-[200%]' : currentImage === 2 ? '-translate-x-[200%]' : '-translate-x-[310%]'}`} />
                </div>
                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/ipadview.webp' alt='tab' className='absolute w-[50%] bottom-[60px] md:bottom-[140px] left-[50%] -translate-x-[50%]'/>
            </div>
            {/* <img src='https://dz1x1c630cl14.cloudfront.net/webassets/icontab.webp' alt='ipad' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='w-[80%]'/> */}
            <h3 className='mt-[10px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent font-semibold text-[22px] lg:text-[45px] lg:w-[99%] text-center'>When you can manage complex task easily with 1.ai, why would you still prefer  multiple tools to run your business?</h3>
            <div className='w-full sm:w-10/12 mt-[10px] lg:mt-[80px] mx-auto bg-[#0F162F80] border-[1px] border-[#E2E8FF1A] rounded-[4px] lg:rounded-[10px] p-4'>
                <h2 className={`font-normal text-[22px] lg:text-[50px] text-[#FEF9F1] text-center h2 ${activeIndex === 0 ? 'block active' : 'hidden'}`}>No More <span className='text-[#FDD220]'>Excel Sheets</span></h2>
                <h2 className={`font-normal text-[22px] lg:text-[50px] text-[#FEF9F1] text-center h2 ${activeIndex === 1 ? 'block active' : 'hidden'}`}>No More <span className='text-[#FDD220]'>Word Docs</span></h2>
                <h2 className={`font-normal text-[22px] lg:text-[50px] text-[#FEF9F1] text-center h2 ${activeIndex === 2 ? 'block active' : 'hidden'}`}>No More <span className='text-[#FDD220]'>Miscommunications</span></h2>
            </div>
        </div>
    )
}

