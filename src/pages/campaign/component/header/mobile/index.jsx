import React from 'react'
import { TbMenuDeep } from "react-icons/tb"
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import Logo from "../../../../../images/whiteThemeLogo.svg"

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
                <div className={`rounded-b-[20px] bg-white z-[15] fixed top-0 left-0 right-0`}>
                    <div className='w-full mx-auto flex justify-between items-center p-[20px] border-b-[1px] border-[#FDD01F] z-[5]'>
                        <img src={Logo} alt='logo' />
                        <RxCross2 className='bg-white text-[#000] w-[24px] h-[24px] p-[3px] border-[#000] border-[1px] rounded' onClick={() => setIsOpen(!isOpen)} />
                    </div>
                    <div className='w-9/12 mx-auto my-6'>
                        {/* <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`}>
                            <h1 className="font-medium text-1xl">Product</h1>
                        </div> */}
                        {/* <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => {setIsOpen(false); handleFeatureClick()}}>
                            <h1 className="font-medium text-1xl">Features</h1>
                        </div> */}
                        {/* <div className={`mr-[40px] text-[#FFDD09] py-[10px] mb-6 cursor-pointer rounded-[5px]`}>
                            <h1 className="font-medium text-1xl">Blog</h1>
                        </div>
                        <div className={`mr-[40px] text-[#FFF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => { navigate('/pricing') }}>
                            <h1 className="font-medium text-1xl">Pricing</h1>
                        </div>
                        <div className={`mr-[40px] text-[#FFF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={(e) => { navigate('/investor') }}>
                            <h1 className="font-medium text-1xl">Investor</h1>
                        </div> */}
                        {/* <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => {setIsForm(true)}}>
                            <h1 className="font-medium text-1xl">Enterprise</h1>
                        </div> */}
                        <div className='bg-gradient-to-l from-[#FDD01F33] via-[#FDD32033] to-[#F8861B33] rounded-[12px] p-[1px] h-[40px] mb-6'>
                            <button className='py-[8px] px-[12px] w-full text-[#000] text-[14px] font-semibold rounded-[12px] bg-white'>Log in</button>
                        </div>
                        <a href='https://app.workfast.ai/'><button className='py-[8px] px-[12px] w-full text-[#1B1600] text-[14px] font-semibold rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B]'>Sign up</button></a>
                    </div>
                </div>
            ) : (
                <div className='w-full flex justify-between items-center p-[20px]  border-b-[1px] border-[#FDD01F] z-[5]'>
                    <a href='/'><img src={Logo} alt='logo' /></a>
                    <TbMenuDeep className='bg-white text-[#000] w-[24px] h-[24px] p-[3px] border-[#000] border-[1px] rounded' onClick={() => setIsOpen(!isOpen)} />
                </div>
            )}
            {isOpen && (
                <div className='fixed h-screen w-full top-0 left-0 bg-[#000]/[90%] z-[10]' onClick={() => setIsOpen(!isOpen)}></div>
            )}
        </>
    )
}
