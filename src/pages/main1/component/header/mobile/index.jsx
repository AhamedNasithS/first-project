import React from 'react'
import { TbMenuDeep } from "react-icons/tb"
import { RxCross2 } from "react-icons/rx";
import API from '../../../../../utils/API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Mobile({ setIsForm }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleFeatureClick = () => {
        const element = document.getElementById('features');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // const handlePricingClick = () => {
    //     const element = document.getElementById('pricing');
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "SIGN_UP_FOR_FREE_MAIN"
            }
        );
        if (response.data.statusCode === 200) {
            // window.location.href = 'https://app.workfast.ai/';
            navigate('/signup')
        }
    };

    const handleBlog = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "BLOG_MAIN"
            }
        );
        if (response.data.statusCode === 200) {
            navigate('/blog')
        }
    };

    const handleLiginClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "LOG_IN_FOR_FREE_MAIN"
            }
        );
        if (response.data.statusCode === 200) {
            window.location.href = 'https://app.workfast.ai/';
            // navigate('/signup')
        }
    };

    return (
        <>
            {isOpen ? (
                <div className={`rounded-b-[20px] bg-gradient-to-t from-[#111830] to-[#13131300] z-[15] fixed top-0 left-0 right-0`}>
                    <div className='w-full mx-auto flex justify-between items-center p-[20px] border-b-[1px] border-[#24203D] z-[5]'>
                        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/one_ai-Logo1.svg" alt='logo' />
                        <RxCross2 className='bg-gradient-to-t from-[#111830] to-[#13131300] text-[#E2E8FFBF] w-[24px] h-[24px] p-[3px] border-[#E2E8FFBF] border-[1px] rounded' onClick={() => setIsOpen(!isOpen)} />
                    </div>
                    <div className='w-9/12 mx-auto my-6'>
                        {/* <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`}>
                            <h1 className="font-medium text-1xl">Product</h1>
                        </div> */}
                        <div className={`mr-[40px] text-[#E2E8FF] pb-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => { setIsOpen(false); handleFeatureClick() }}>
                            <h1 className="font-medium text-1xl">Features</h1>
                        </div>
                        <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={(e) => { handleBlog(e) }}>
                            <h1 className="font-medium text-1xl">Blog</h1>
                        </div>
                        <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => {navigate('/pricing')}}>
                            <h1 className="font-medium text-1xl">Price</h1>
                        </div>
                        <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={(e) => { navigate('/investor') }}>
                            <h1 className="font-medium text-1xl">Investor</h1>
                        </div>
                        {/* <div className={`mr-[40px] text-[#E2E8FF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => { setIsForm(true) }}>
                            <h1 className="font-medium text-1xl">Enterprise</h1>
                        </div> */}
                        <button className='py-[8px] px-[12px] text-[#1B1600] mb-6 text-[14px] font-semibold rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] w-full' onClick={(e) => { handleClick(e) }}>Sign up</button>
                        <div>
                            <button className='py-[10px] px-[12px] bg-[#FFF] text-[14px] font-semibold rounded-[8px] text-[#1B1600] w-full' onClick={(e) => { handleLiginClick(e) }}>Log in</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full flex justify-between items-center p-[20px]  border-b-[1px] border-[#24203D] z-[5]'>
                    <a href='/'><img src="https://dz1x1c630cl14.cloudfront.net/webassets/one_ai-Logo1.svg" alt='logo' /></a>
                    <TbMenuDeep className='bg-gradient-to-t from-[#111830] to-[#13131300] text-[#E2E8FFBF] w-[24px] h-[24px] p-[3px] border-[#E2E8FFBF] border-[1px] rounded' onClick={() => setIsOpen(!isOpen)} />
                </div>
            )}
            {isOpen && (
                <div className='fixed h-screen w-full top-0 left-0 bg-[#000]/[90%] z-[10]' onClick={() => setIsOpen(!isOpen)}></div>
            )}
        </>
    )
}
