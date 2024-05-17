import React from 'react'
import { TbMenuDeep } from "react-icons/tb"
import { RxCross2 } from "react-icons/rx";
import logo from "../../../../images/one_ai-Logo1.svg";
import { useNavigate } from 'react-router-dom';


export default function Mobile({ setIsForm }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();

    // const handleFeatureClick = () => {
    //     const element = document.getElementById('features');
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    // const handlePricingClick = () => {
    //     const element = document.getElementById('pricing');
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    return (
        <>
            {isOpen ? (
                <div className={`rounded-b-[20px] bg-gradient-to-t from-[#111830] to-[#13131300] z-[15] fixed top-0 left-0 right-0 pb-[20px]`}>
                    <div className='w-full mx-auto flex justify-between items-center p-[20px] border-b-[1px] border-[#24203D] z-[5]'>
                        <img src={logo} alt='logo' />
                        <RxCross2 className='bg-gradient-to-t from-[#111830] to-[#13131300] text-[#E2E8FFBF] w-[24px] h-[24px] p-[3px] border-[#E2E8FFBF] border-[1px] rounded' onClick={() => setIsOpen(!isOpen)} />
                    </div>
                    <div className='w-9/12 mx-auto mt-6'>
                        {/* <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`}>
                            <h1 className="font-medium text-1xl">Product</h1>
                        </div> */}
                        {/* <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => {setIsOpen(false); handleFeatureClick()}}>
                            <h1 className="font-medium text-1xl">Features</h1>
                        </div> */}
                        {/* <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => {setIsOpen(false); handlePricingClick()}}>
                            <h1 className="font-medium text-1xl">Pricing</h1>
                        </div> */}
                        <a href='/blog'>
                            <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`}>
                                <h1 className="font-medium text-1xl">Blog</h1>
                            </div>
                        </a>
                        <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => { setIsForm(true) }}>
                            <h1 className="font-medium text-1xl">Enterprise</h1>
                        </div>
                        <button className='py-[8px] px-[12px] text-[#1B1600] text-[14px] font-semibold rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] mb-6' onClick={() => { setIsForm(true) }}>Book a demo</button>
                        {/* <div className='w-[128px] h-[38px] rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] p-[0.5px] md:p-[1px] cursor-pointer' onClick={() => { navigate('/calendly') }}>
                            <div className='w-full h-full rounded-[10px] bg-[#010306] flex justify-center'>
                                <h3 className='text-[#FFFFFF] text-[14px] font-semibold my-auto'>Request Demo</h3>
                            </div>
                        </div> */}
                    </div>
                </div>
            ) : (
                <div className='w-full flex justify-between items-center p-[20px]  border-b-[1px] border-[#24203D] z-[5]'>
                    <a href='/'><img src={logo} alt='logo' /></a>
                    <TbMenuDeep className='bg-gradient-to-t from-[#111830] to-[#13131300] text-[#E2E8FFBF] w-[24px] h-[24px] p-[3px] border-[#E2E8FFBF] border-[1px] rounded' onClick={() => setIsOpen(!isOpen)} />
                </div>
            )}
            {isOpen && (
                <div className='fixed h-screen w-full top-0 left-0 bg-[#000]/[90%] z-[10]' onClick={() => setIsOpen(!isOpen)}></div>
            )}
        </>
    )
}
