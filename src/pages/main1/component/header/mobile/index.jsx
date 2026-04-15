import React from 'react'
import { TbMenuDeep } from "react-icons/tb"
import { RxCross2 } from "react-icons/rx";
import { Logo } from '../SVG';
import { toast } from 'react-toastify';

export default function Mobile({ setIsForm }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleFeatureClick = () => {
        toast.success("Coming soon...!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored"
        });
    };

    return (
        <>
            {isOpen ? (
                <div className='fixed inset-0 bg-[#000]/[80%] z-[40]'>
                    <div className={`rounded-b-[20px] bg-gradient-to-t from-[#111830] to-[#13131300] z-[50] fixed top-0 left-0 right-0`}>
                        <div className='w-full mx-auto flex justify-between items-center p-[20px] border-b-[1px] border-[#24203D] z-[5]'>
                            <a title='Workfast' href='/'>
                                <div className='py-[6px] border border-[#0A7CFF] rounded-[16px]' style={{ boxShadow: '0px 4px 7px 0px #432E860A' }}>
                                    <Logo width="100" height="26" />
                                </div>
                            </a>
                            <RxCross2 className='bg-gradient-to-t from-[#111830] to-[#13131300] text-[#E2E8FFBF] w-[24px] h-[24px] p-[3px] border-[#E2E8FFBF] border-[1px] rounded' onClick={() => setIsOpen(!isOpen)} />
                        </div>
                        <div className='w-9/12 mx-auto my-6'>
                            <div className={`mr-[40px] text-[#FFF] pb-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => { setIsOpen(false); handleFeatureClick() }}>
                                <h1 className="font-medium text-1xl">Features</h1>
                            </div>
                            <div className={`mr-[40px] text-[#FFF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={(e) => { handleFeatureClick() }}>
                                <h1 className="font-medium text-1xl">Blog</h1>
                            </div>
                            <div className={`mr-[40px] text-[#FFF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => { handleFeatureClick() }}>
                                <h1 className="font-medium text-1xl">Pricing</h1>
                            </div>
                            <div className={`mr-[40px] text-[#FFF] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={(e) => { handleFeatureClick() }}>
                                <h1 className="font-medium text-1xl">Investor</h1>
                            </div>
                            <button className='py-[8px] px-[12px] text-[#1B1600] mb-6 text-[14px] font-semibold rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] w-full' onClick={(e) => { handleFeatureClick() }}>Sign up</button>
                            <div>
                                <button className='py-[10px] px-[12px] bg-[#FFF] text-[14px] font-semibold rounded-[8px] text-[#1B1600] w-full' onClick={(e) => { handleFeatureClick() }}>Log in</button>
                            </div>
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
