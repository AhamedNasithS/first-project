import React from 'react'
// import { RxCross1 } from "react-icons/rx";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { RiCornerDownLeftFill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import axios from 'axios';
import API from '../../utils/API';
import { FaThumbsUp } from "react-icons/fa";


export default function InvestorFrom() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [linkedin, setLinkedin] = React.useState('');
    const [mobileNumber, setMobileNumber] = React.useState('');
    const [reason, setReason] = React.useState('');
    const [risk, setRisk] = React.useState('');
    const [investment, setInvestment] = React.useState('');
    const [anything, setAnything] = React.useState('');
    const [selectedCountry, setSelectedCountry] = React.useState('us'); 

    const [nameError, setNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [linkedinError, setLinkedinError] = React.useState('');
    const [mobileNumberError, setMobileNumberError] = React.useState('');
    const [reasonError, setReasonError] = React.useState('');
    const [investmentError, setInvestmentError] = React.useState('');
    const [anythingError, setAnythingError] = React.useState('');

    const [isName, setIsName] = React.useState(false);
    const [isEmail, setIsEmail] = React.useState(false);
    const [isLinkedin, setIsLinkedin] = React.useState(false);
    const [isMobileNumber, setIsMobileNumber] = React.useState(false);
    const [isReason, setIsReason] = React.useState(false);
    const [isRisk, setIsRisk] = React.useState(false);
    const [isInvestment, setIsInvestment] = React.useState('');
    const [isAnything, setIsAnything] = React.useState(false);
    const [isResponse, setIsResponse] = React.useState(false);

    const [otherReason, setOtherReason] = React.useState({ value: '', reason: '' });
    const invalidCharsRegex = /[<>'/\\;’”:{}[\]|+=\-_()*&^%$#!~`]/;

    const handleNameSubmit = () => {
        if (!name.trim()) {
            setNameError('Please fill in this')
        }
        else if (invalidCharsRegex.test(name)) {
            setNameError("invalid special characters")
        }
        else {
            setIsName(true);
        }
    }

    const handleEmailSubmit = () => {
        const gmailRegex = /^[^\s@]+@[^\s@]+\.(?:com)$/i;
        if (email === "") {
            setEmailError('Please fill in this');
        }
        else if (invalidCharsRegex.test(email)) {
            setEmailError("invalid special characters")
        }
        else if (!gmailRegex.test(email)) {
            setEmailError("Hmm... that email doesn't look right");
        } else {
            setIsEmail(true);
        }
    }

    const handleLinkdinSubmit = () => {
        const linkedinRegex = /www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?/;
        if (linkedin === "") {
            setLinkedinError('Please fill in this');
        }
        else if (!linkedinRegex.test(linkedin)) {
            setLinkedinError("Hmm… that web address doesn’t look right. Check for any typos or errors.");
        } else {
            setIsLinkedin(true);
        }
    }

    const handleMobileNumberSubmit = () => {
        if (mobileNumber === "") {
            setMobileNumber('Please fill in this');
        }
        else if (mobileNumber.length < 10) {
            setMobileNumberError("Hmm... that mobile number doesn't look right");
        } else {
            setIsMobileNumber(true);
        }
    }

    const handleReason = (value) => {
        if (value === 'Other' || otherReason.reason ) {
            setReason('Other');
        } else {
            if (reason === 'Other') {
                setOtherReason({ reason: '' });
            }
            setReason((prevValue) => (prevValue === value ? '' : value));
        }
    };

    const handleReasonChange = (event) => {
        const { value } = event.target;
        setOtherReason({ reason: value });
    };

    const handleReasonSubmit = () => {
        if (reason === "") {
            setReasonError('Oops! Please make a selection')
        } else if (reason === "Other") {
            if (otherReason.reason === "") {
                setReasonError('Oops! Please make a selection')
                console.log("nasith")
            }
            else {
                setReasonError('');
                setReason(otherReason.reason)
            }
        }
        else if (invalidCharsRegex.test(name)) {
            setNameError("invalid special characters")
        }
        else {
            setReasonError('');
            setIsReason(true)
        }
    }

    const handleRisk = (value) => {
        setRisk((prevValue) => (prevValue === value ? '' : value));
    };

    const handleRiskSubmit = () => {
        if (invalidCharsRegex.test(name)) {
            setNameError("invalid special characters")
        }
        else if (risk === "Yes") {
            setIsRisk(true);
        }
    }

    const handleInvestmentSubmit = () => {
        if (!investment.trim()) {
            setInvestmentError("Please fill in this")
        }
        else if (invalidCharsRegex.test(name)) {
            setNameError("invalid special characters")
        }
        else {
            setIsInvestment(true);
        }

    }


    const handleUpArrow = () => {
        if (isAnything) {
            setIsAnything(false)
        }
        else if (isInvestment) {
            setIsInvestment(false)
        }
        else if (isRisk) {
            setIsRisk(false)
        }
        else if (isReason) {
            setIsReason(false)
        }
        else if (isMobileNumber) {
            setIsMobileNumber(false)
        }
        else if (isLinkedin) {
            setIsLinkedin(false)
        }
        else if (isEmail) {
            setIsEmail(false)
        }
        else if (isName) {
            setIsName(false)
        }
    }


    const handleDownArrow = () => {
        if (isName && isEmail && isLinkedin && isMobileNumber && isReason && isRisk && isInvestment && !isAnything) {
            if (!anything.trim()) {
                setAnythingError(true)
            } else {
                setIsAnything(true);
            }
        }
        else if (isName && isEmail && isLinkedin && isMobileNumber && isReason && isRisk && !isInvestment) {
            if (!investment.trim()) {
                setInvestmentError("Please fill in this")
            }
            else if (invalidCharsRegex.test(name)) {
                setNameError("invalid special characters")
            }
            else {
                setIsInvestment(true);
            }
        }
        else if (isName && isEmail && isLinkedin && isMobileNumber && isReason && !isRisk) {
            if (invalidCharsRegex.test(name)) {
                setNameError("invalid special characters")
            }
            else if (risk === "Yes") {
                setIsRisk(true);
            }
        }
        else if (isName && isEmail && isLinkedin && isMobileNumber && !isReason) {
            if (reason === "") {
                setReasonError('Oops! Please make a selection')
            } else if (reason === "Other") {
                if (otherReason.reason === "") {
                    setReasonError('Oops! Please make a selection')
                    console.log("nasith")
                }
                else {
                    setReasonError('');
                    setReason(otherReason.reason)
                }
            }
            else if (invalidCharsRegex.test(name)) {
                setNameError("invalid special characters")
            }
            else {
                setReasonError('');
                setIsReason(true)
            }
        }
        else if (isName && isEmail && isLinkedin && !isMobileNumber) {
            if (mobileNumber === "") {
                setMobileNumber('Please fill in this');
            }
            else if (mobileNumber.length < 10) {
                setMobileNumberError("Hmm... that mobile number doesn't look right");
            } else {
                setIsMobileNumber(true);
            }
        }
        else if (isName && isEmail && !isLinkedin) {
            const linkedinRegex = /www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?/;
            if (linkedin === "") {
                setLinkedinError('Please fill in this');
            }
            else if (!linkedinRegex.test(linkedin)) {
                setLinkedinError("Hmm… that web address doesn’t look right. Check for any typos or errors.");
            } else {
                setIsLinkedin(true);
            }
        }
        else if (isName && !isEmail) {
            const gmailRegex = /^[^\s@]+@[^\s@]+\.(?:com)$/i;
            if (email === "") {
                setEmailError('Please fill in this');
            }
            else if (invalidCharsRegex.test(email)) {
                setEmailError("invalid special characters")
            }
            else if (!gmailRegex.test(email)) {
                setEmailError("Hmm... that email doesn't look right");
            } else {
                setIsEmail(true);
            }
        }
        else if (!isName) {
            if (!name.trim()) {
                setNameError('Please fill in this')
            }
            else if (invalidCharsRegex.test(name)) {
                setNameError("invalid special characters")
            }
            else {
                setIsName(true);
            }
        }
    }


    const handleSubmit = async (e) => {

        try {
            const response = await axios.post(`${API.INVESTORS}`, { name: name, email: email, linkedin: linkedin, countryCode:selectedCountry, mobileNumber: mobileNumber, reason: reason, risk: risk, investment: investment, anything: anything });
            if (response.data.statusCode === 200) {
                setIsResponse(true);
                setName('');
                setEmail('');
                setLinkedin('');
                setSelectedCountry('');
                setMobileNumber('');
                setReason('');
                setRisk('');
                setInvestment('');
                setAnything('');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='relative h-screen bg-[#000]'>
            {isResponse && (
                <>
                    <div className='fixed w-full h-screen overflow-hidden bg-[#66666699] z-[1] inset-0'></div>
                    <div className='absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-[#000] w-full max-w-[700px] h-full max-h-[600px] rounded-[30px] z-[2] flex flex-col gap-[10px] justify-center items-center'>
                        <h1 className='text-[#FFF] text-[30px] font-bold'>Your Form Has</h1>
                        <h1 className='text-[#FFF] text-[30px] font-bold'>Been <span className='text-[#FDD220]'>Successfully</span></h1>
                        <h1 className='text-[#FFF] text-[30px] font-bold'>Submitted</h1>
                        <FaThumbsUp className='text-[#FFF] text-[30px] font-bold' />
                        <button className='bg-[#FDD220] p-3 mt-[70px] rounded-md text-[#FFF] text-[30px] font-semibold' onClick={() => window.location.href = 'https://www.workfast.ai/investors'}>Click Here</button>
                    </div>
                </>
            )}
            {/* <RxCross1 className="text-[#FFF] absolute top-3 right-3 w-6 h-6" /> */}
            <div className='p-6 relative h-screen w-full'>
                <div class="w-full bg-[#0142ac4d] rounded-full h-[4px] mt-5 xl:mt-4">
                    <div class={`bg-[#FDD220] h-full rounded-full transition-all duration-200 ${anything ? "w-full" : investment ? "w-[87.5%]" : risk === "No" ? "w-[100%]" : risk === "Yes" ? "w-[75%]" : reason ? "w-[83.333%]" : linkedin ? "w-[50%]" : email ? "w-[33.3333%]" : name ? "w-[16.6667%]" : "w-0"}`}></div>
                </div>
                <div className='flex flex-col justify-start items-center h-full overflow-y-hidden' >
                    {/* ----------- Name -----------  */}
                    <div className={`flex flex-col justify-center w-10/12 lg:w-9/12 xl:w-6/12 mx-auto min-h-full transition-all ease-in-out duration-500 p-3 lg:p-6 xl:p-0 
                        ${isName ? "opacity-0 -translate-y-full" : ""}`
                    }>
                        <div className='relative'>
                            <div className='flex items-center mr-2 absolute end-full  mt-1 lg:mt-0.5 text-[8px] sm:text-[10px]'>
                                <h1 className='text-[#e6e6e6] flex shrink-0 text-[14px] sm:text-[18px]'>1</h1>
                                <FaArrowRight className='text-[#e6e6e6] flex shrink-0 ' />
                            </div>
                            <div className='text-[#e0d9d9]'>
                                <h1 className='text-xl sm:text-2xl font-light'>Hi! What is Your Name ?*</h1>
                            </div>
                            <div className='mt-[20px] sm:mt-[32px] w-full max-w-full sm:max-w-[530px] lg:max-w-[720px]'>
                                <input type='text' value={name} placeholder='Type your answer here...' className='max-w-full w-full bg-transparent border-none pb-2 placeholder:text-[24px] sm:placeholder:text-[30px] text-[24px] sm:text-[30px] text-[#e6e6e6] placeholder:text-[#4f4946] focus:outline-none focus:shadow-focus shadow-focus cursor-pointer' onChange={(e) => { setName(e.target.value); setNameError('') }} />
                            </div>
                            {nameError ?
                                (
                                    <div className='mt-[16px] w-full flex gap-4 items-center'>
                                        <div className='bg-[#f7e6e6] min-h-7 rounded-[3px] flex gap-1 items-center justify-center py-1.5 pl-2 pr-3'>
                                            <TbAlertTriangleFilled className='text-[#af0404] w-4 h-4' />
                                            <h1 className='text-[#af0404] text-sm'>{nameError}</h1>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='mt-[16px] w-full flex gap-4 items-center'>
                                        <button type='button' className='min-h-10 py-1.5 px-3.5 bg-[#FDD220] text-[#000] rounded-[4px] flex items-center text-md sm:text-xl gap-1 font-bold hover:bg-[#FDD220]/[80%] transition-colors duration-200' onClick={handleNameSubmit}><h1>OK</h1><MdDone className='text-xl' /></button>
                                    </div>
                                )}
                        </div>
                    </div>
                    {/* ----------- Email -----------  */}
                    <div className={`flex flex-col justify-center w-10/12 lg:w-9/12 xl:w-6/12 mx-auto min-h-full transition-all ease-in-out duration-500 p-3 lg:p-6 xl:p-0
                        ${isEmail ? "opacity-0 -translate-y-[200%]" :
                            isName ? "opacity-1 -translate-y-full" : ""}`}
                    >
                        <div className='relative'>
                            <div className='flex items-center mr-2 absolute end-full  mt-1 lg:mt-0.5 text-[8px] sm:text-[10px]'>
                                <h1 className='text-[#e6e6e6] flex shrink-0 text-[14px] sm:text-[18px]'>2</h1>
                                <FaArrowRight className='text-[#e6e6e6] flex shrink-0 ' />
                            </div>
                            <div className='text-[#e0d9d9]'>
                                <h1 className='text-xl sm:text-2xl font-light'>What’s your email address ? *</h1>
                            </div>
                            <div className='mt-[20px] sm:mt-[32px] w-full max-w-[280px] sm:max-w-[530px] lg:max-w-[720px]'>
                                <input type='email' value={email} placeholder='name@example.com' className='max-w-full w-full bg-transparent border-none pb-2 placeholder:text-[24px] sm:placeholder:text-[30px] text-[24px] sm:text-[30px] text-[#e6e6e6] placeholder:text-[#4f4946] focus:outline-none focus:shadow-focus shadow-focus cursor-pointer' onChange={(e) => { setEmail(e.target.value); setEmailError('') }} />
                            </div>
                            {emailError ?
                                (
                                    <div className='mt-[16px] w-full flex gap-4 items-center'>
                                        <div className='bg-[#f7e6e6] min-h-7 rounded-[3px] flex gap-1 items-center justify-center py-1.5 pl-2 pr-3'>
                                            <TbAlertTriangleFilled className='text-[#af0404] w-4 h-4' />
                                            <h1 className='text-[#af0404] text-sm'>{emailError}</h1>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='mt-[16px] w-full flex gap-4 items-center'>
                                        <button type='button' className='min-h-10 py-1.5 px-3.5 bg-[#FDD220] text-[#000] rounded-[4px] flex items-center text-md sm:text-xl gap-1 font-bold hover:bg-[#FDD220]/[80%] transition-colors duration-200' onClick={handleEmailSubmit}><h1>OK</h1><MdDone className='text-xl' /></button>
                                        {/* <h1 className='text-[#e0d9d9] text-xs flex items-center gap-1'>press <strong>Enter</strong> <RiCornerDownLeftFill className='w-3 h-3' /> </h1> */}
                                    </div>
                                )}
                        </div>
                    </div>
                    {/* ----------- Linkedin Profile -----------  */}
                    <div className={`flex flex-col justify-center w-10/12 lg:w-9/12 xl:w-6/12 mx-auto min-h-full transition-all ease-in-out duration-500 p-3 lg:p-6 xl:p-0
                        ${isLinkedin ? "opacity-0 -translate-y-[300%]" :
                            isEmail ? "opacity-1 -translate-y-[200%]" :
                                isName ? "opacity-1 -translate-y-full" : ""}`}
                    >
                        <div className='relative'>
                            <div className='flex items-center mr-2 absolute end-full  mt-1 lg:mt-0.5 text-[8px] sm:text-[10px]'>
                                <h1 className='text-[#e6e6e6] flex shrink-0 text-[14px] sm:text-[18px]'>3</h1>
                                <FaArrowRight className='text-[#e6e6e6] flex shrink-0 ' />
                            </div>
                            <div className='text-[#e0d9d9]'>
                                <h1 className='text-xl sm:text-2xl font-light'>Please share your Linkedin profile *</h1>
                            </div>
                            <div className='mt-[20px] sm:mt-[32px] w-full max-w-[280px] sm:max-w-[530px] lg:max-w-[720px]'>
                                <input type='text' value={linkedin} placeholder='https://' className='max-w-full w-full bg-transparent border-none pb-2 placeholder:text-[24px] sm:placeholder:text-[30px] text-[24px] sm:text-[30px] text-[#e6e6e6] placeholder:text-[#4f4946] focus:outline-none focus:shadow-focus shadow-focus cursor-pointer' onChange={(e) => { setLinkedin(e.target.value); setLinkedinError('') }} />
                            </div>
                            {linkedinError ?
                                (
                                    <div className='mt-[16px] w-full flex gap-4 items-center'>
                                        <div className='bg-[#f7e6e6] min-h-7 rounded-[3px] flex gap-1 items-center justify-center py-1.5 pl-2 pr-3'>
                                            <TbAlertTriangleFilled className='text-[#af0404] w-4 h-4' />
                                            <h1 className='text-[#af0404] text-sm'>{linkedinError}</h1>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='mt-[16px] w-full flex gap-4 items-center'>
                                        <button type='button' className='min-h-10 py-1.5 px-3.5 bg-[#FDD220] text-[#000] rounded-[4px] flex items-center text-md sm:text-xl gap-1 font-bold hover:bg-[#FDD220]/[80%] transition-colors duration-200' onClick={handleLinkdinSubmit}><h1>OK</h1><MdDone className='text-xl' /></button>
                                        {/* <h1 className='text-[#e0d9d9] text-xs flex items-center gap-1'>press <strong>Enter</strong> <RiCornerDownLeftFill className='w-3 h-3' /> </h1> */}
                                    </div>
                                )}
                        </div>
                    </div>
                    {/* ----------- Mobile Number -----------  */}
                    <div className={`flex flex-col justify-center w-10/12 lg:w-9/12 xl:w-6/12 mx-auto min-h-full transition-all ease-in-out duration-500 p-3 lg:p-6 xl:p-0 
                        ${isMobileNumber ? "opacity-0 -translate-y-[400%]" :
                            isLinkedin ? "opacity-1 -translate-y-[300%]" :
                                isEmail ? "opacity-1 -translate-y-[200%]" :
                                    isName ? "opacity-1 -translate-y-full" : ""}`
                    }>
                        <div className='relative'>
                            <div className='flex items-center mr-2 absolute end-full  mt-1 lg:mt-0.5 text-[8px] sm:text-[10px]'>
                                <h1 className='text-[#e6e6e6] flex shrink-0 text-[14px] sm:text-[18px]'>4</h1>
                                <FaArrowRight className='text-[#e6e6e6] flex shrink-0' />
                            </div>
                            <div className='text-[#e0d9d9]'>
                                <h1 className='text-xl sm:text-2xl font-normal'>Contact Number*</h1>
                            </div>
                            <PhoneInput country={"us"} value={mobileNumber} onChange={(phone, country) => {setMobileNumber(phone);setSelectedCountry(country?.country?.dialCode);setMobileNumberError('');}} className="max-h-[40px] sm:max-h-[60px] h-full mt-[20px] w-full max-w-full sm:max-w-[530px] lg:max-w-[720px] focus:outline-none cursor-pointer" />
                            {mobileNumberError ?
                                (
                                    <div className='mt-[16px] w-full flex gap-4 items-center'>
                                        <div className='bg-[#f7e6e6] min-h-7 rounded-[3px] flex gap-1 items-center justify-center py-1.5 pl-2 pr-3'>
                                            <TbAlertTriangleFilled className='text-[#af0404] w-4 h-4' />
                                            <h1 className='text-[#af0404] text-sm'>{mobileNumberError}</h1>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='mt-[16px] w-full flex gap-4 items-center'>
                                        <button type='button' className='min-h-10 py-1.5 px-3.5 bg-[#FDD220] text-[#000] rounded-[4px] flex items-center text-md sm:text-xl gap-1 font-bold hover:bg-[#FDD220]/[80%] transition-colors duration-200' onClick={handleMobileNumberSubmit}><h1>OK</h1><MdDone className='text-xl' /></button>
                                    </div>
                                )}
                        </div>
                    </div>
                    {/* ----------- Reason -----------  */}
                    <div className={`flex flex-col justify-center w-10/12 sm:w-9/12 xl:w-6/12 mx-auto min-h-full transition-all ease-in-out duration-500 lg:p-6 xl:p-0
                        ${isReason ? "opacity-0 -translate-y-[500%]" :
                            isMobileNumber ? "opacity-1 -translate-y-[400%]" :
                                isLinkedin ? "opacity-1 -translate-y-[300%]" :
                                    isEmail ? "opacity-1 -translate-y-[200%]" :
                                        isName ? "opacity-1 -translate-y-full" : ""}`}
                    >
                        <div className='relative'>
                            <div className='flex items-center mr-2 absolute end-full  mt-1 lg:mt-0.5 text-[8px] sm:text-[10px]'>
                                <h1 className='text-[#e6e6e6] flex shrink-0 text-[14px] sm:text-[18px]'>5</h1>
                                <FaArrowRight className='text-[#e6e6e6] flex shrink-0 ' />
                            </div>
                            <div className='text-[#e0d9d9]'>
                                <h1 className='text-xl sm:text-2xl font-light'>What's the reason behind your idea to invest on workfast.ai?*</h1>
                            </div>
                            <div className='mt-[32px] w-full flex flex-col max-w-full min-w-[168px] items-stretch'>
                                <div className={`mb-2 w-11/12 lg:w-[65%] xl:w-[68%] relative flex items-start sm:items-center rounded-[4px] bg-[#e6e6e61a] hover:bg-[#FFFFFF4d] text-[#e6e6e6] min-h-[40px] py-1 break-words cursor-pointer opacity-1 shadow-radio ${reason === "To make huge ROI" ? "border-[1px]" : ""}`} onClick={() => { handleReason("To make huge ROI"); setReasonError('') }}>
                                    <div className={`my-1 mx-2 w-6 h-6 min-h-[22px] shrink-0 rounded-[2px] text-xs border-[#e6e6e699]  border-[1px] flex justify-center items-center ${reason === "To make huge ROI" ? "bg-[#e6e6e6] text-[#0d0601]" : "bg-[#0d0601] text-[#e6e6e6]"}`}>
                                        <span className='font-bold'>A</span>
                                    </div>
                                    <h1 className='w-full min-w-[100px] text-start break-word text-[16px] sm:text-[20px] text-[#e6e6e6] my-auto'>To make huge ROI</h1>
                                    {reason === "To make huge ROI" && (
                                        <IoMdCheckmark className='text-[#e6e6e6] my-auto text-end text-[20px] sm:text-[24px] mr-2' />
                                    )}
                                </div>
                                <div className={`mb-2 w-11/12 lg:w-[65%] xl:w-[68%] relative flex items-start sm:items-center rounded-[4px] bg-[#e6e6e61a] hover:bg-[#FFFFFF4d] text-[#e6e6e6] min-h-[40px] py-1 break-words cursor-pointer opacity-1 shadow-radio ${reason === "Just interested on Workfast.ai idea & vision" ? "border-[1px]" : ""}`} onClick={() => { handleReason("Just interested on Workfast.ai idea & vision"); setReasonError('') }}>
                                    <div className={`my-1 mx-2 w-6 h-6 min-h-[22px] shrink-0 rounded-[2px] text-xs border-[#e6e6e699] border-[1px] flex justify-center items-center ${reason === "Just interested on Workfast.ai idea & vision" ? "bg-[#e6e6e6] text-[#0d0601]" : "bg-[#0d0601] text-[#e6e6e6]"}`}>
                                        <span className='font-bold'>B</span>
                                    </div>
                                    <h1 className='w-full min-w-[100px] text-start break-word text-[16px] sm:text-[20px] text-[#e6e6e6] my-auto'>Just interested on Workfast.ai idea & vision</h1>
                                    {reason === "Just interested on Workfast.ai idea & vision" && (
                                        <IoMdCheckmark className='text-[#e6e6e6] my-auto text-end text-[20px] sm:text-[24px] mr-2' />
                                    )}
                                </div>
                                <div className={`mb-2 w-11/12 lg:w-[65%] xl:w-[68%] relative flex items-start sm:items-center rounded-[4px] bg-[#e6e6e61a] hover:bg-[#FFFFFF4d] text-[#e6e6e6] min-h-[40px] py-1 break-words cursor-pointer opacity-1 shadow-radio ${reason === "To boost Made in India internet businesses" ? "border-[1px]" : ""}`} onClick={() => { handleReason("To boost Made in India internet businesses"); setReasonError('') }}>
                                    <div className={`my-1 mx-2 w-6 h-6 min-h-[22px] shrink-0 rounded-[2px] text-xs border-[#e6e6e699] border-[1px] flex justify-center items-center ${reason === "To boost Made in India internet businesses" ? "bg-[#e6e6e6] text-[#0d0601]" : "bg-[#0d0601] text-[#e6e6e6]"}`}>
                                        <span className='font-bold'>C</span>
                                    </div>
                                    <h1 className='w-full min-w-[100px] text-start break-word text-[16px] sm:text-[20px] text-[#e6e6e6] my-auto'>To boost Made in India internet businesses</h1>
                                    {reason === "To boost Made in India internet businesses" && (
                                        <IoMdCheckmark className='text-[#e6e6e6] my-auto text-end text-[20px] sm:text-[24px] mr-2' />
                                    )}
                                </div>
                                <div className='mb-2 w-11/12 lg:w-[65%] xl:w-[68%] relative flex items-start sm:items-center rounded-[4px] bg-[#e6e6e61a] hover:bg-[#FFFFFF4d] text-[#e6e6e6] min-h-[40px] py-1 break-words cursor-pointer opacity-1 shadow-radio ' onClick={() => handleReason("Other")}>
                                    {reason === 'Other' ? (
                                        <>
                                            {otherReason.reason && (
                                                <div className='my-1 mx-2 w-6 h-6 min-h-[22px] rounded-[2px] text-xs border-[#e6e6e699] border-[1px] flex justify-center items-center'>
                                                    <span className='font-bold'>D</span>
                                                </div>
                                            )}
                                            <input type='text' placeholder='Type your answer' className={`w-full min-w-[100px] text-start break-word text-[16px] sm:text-[20px] text-[#e6e6e6] my-auto placeholder:text-[#e6e6e64d] bg-transparent ml-2 focus:outline-none `} value={otherReason.reason} onChange={handleReasonChange} />
                                            {otherReason.reason === "" && (
                                                <IoMdCheckmark className='text-[#0d0601] my-auto text-end text-[24px] w-8 h-7 mr-2 p-1 bg-[#e6e6e6] rounded-[4px]' />
                                            )}
                                            {otherReason.reason && (
                                                <IoMdCheckmark className='text-[#e6e6e6] my-auto text-end text-[24px] mr-2' />
                                            )}
                                        </>

                                    ) : (
                                        <>
                                            <div className='my-1 mx-2 w-6 h-6 min-h-[22px] shrink-0 rounded-[2px] text-xs border-[#e6e6e699] border-[1px] bg-[#0d0601] text-[#e6e6e6] flex justify-center items-center'>
                                                <span className='font-bold'>D</span>
                                            </div>
                                            <h1 className='w-full min-w-[100px] text-start break-word text-[16px] sm:text-[20px] text-[#e6e6e6] my-auto'>{reason !== "Other" && otherReason.reason === "" ? "Other" : otherReason.reason}</h1>
                                            {reason && otherReason.reason && (
                                                <IoMdCheckmark className='text-[#e6e6e6] text-end text-[20px] sm:text-[24px] mr-2' />
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                            {reasonError === "" ? (
                                <div className='mt-[16px] w-full flex gap-4 items-center'>
                                    <button type='button' className='min-h-10 py-1.5 px-3.5 bg-[#FDD220] text-[#000] rounded-[4px] flex items-center text-md sm:text-xl gap-1 font-bold hover:bg-[#FDD220]/[80%] transition-colors duration-200' onClick={handleReasonSubmit}>
                                        <h1>OK</h1><MdDone className='text-xl' />
                                    </button>
                                    <h1 className='text-[#e0d9d9] text-xs flex items-center gap-1'>press <strong>Enter</strong> <RiCornerDownLeftFill className='w-3 h-3' /> </h1>
                                </div>
                            ) : (
                                <div className='mt-[16px] w-full flex gap-4 items-center'>
                                    <div className='bg-[#f7e6e6] min-h-7 rounded-[3px] flex gap-1 items-center justify-center py-1.5 pl-2 pr-3'>
                                        <TbAlertTriangleFilled className='text-[#af0404] w-4 h-4' />
                                        <h1 className='text-[#af0404] text-sm'>{reasonError}</h1>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* ----------- Risk -----------  */}
                    <div className={`flex flex-col justify-center w-10/12 sm:w-9/12 xl:w-6/12 mx-auto min-h-full transition-all ease-in-out duration-500 lg:p-6 xl:p-0
                        ${isRisk ? "opacity-0 -translate-y-[600%]" :
                            isReason ? "opacity-1 -translate-y-[500%]" :
                                isMobileNumber ? "opacity-0 -translate-y-[400%]" :
                                    isLinkedin ? "opacity-1 -translate-y-[300%]" :
                                        isEmail ? "opacity-1 -translate-y-[200%]" :
                                            isName ? "opacity-1 -translate-y-full" : ""}`}
                    >
                        <div className='relative'>
                            <div className='flex items-center mr-2 absolute end-full  mt-1 lg:mt-0.5 text-[8px] sm:text-[10px]'>
                                <h1 className='text-[#e6e6e6] flex shrink-0 text-[14px] sm:text-[18px]'>6</h1>
                                <FaArrowRight className='text-[#e6e6e6] flex shrink-0 ' />
                            </div>
                            <div className='text-[#e0d9d9]'>
                                <h1 className='text-xl sm:text-2xl font-light'>Are you aware that this is a very "high-risk investment"?</h1>
                            </div>
                            <div className='mt-[20px] sm:mt-[32px] w-full flex flex-col flex-wrap max-w-full min-w-[168px] items-stretch'>
                                <div className={`mb-2 w-[60%] sm:w-[33%] lg:w-[25%] relative flex items-center rounded-[4px] bg-[#e6e6e61a] text-[#e6e6e6] min-h-[40px] py-1 break-words cursor-pointer opacity-1 shadow-radio ${risk === "Yes" ? "border-[1px]" : ""}`} onClick={() => handleRisk("Yes")}>
                                    <div className={`my-1 mx-2 w-6 h-6 min-h-[22px] shrink-0 rounded-[4px] text-xs border-[#e6e6e699]  border-[1px] flex justify-center items-center ${risk === "Yes" ? "bg-[#e6e6e6] text-[#0d0601]" : "bg-[#0d0601] text-[#e6e6e6]"}`}>
                                        <span className='font-bold'>Y</span>
                                    </div>
                                    <h1 className='w-full min-w-[100px] text-start break-word text-[16px] sm:text-[20px] text-[#e6e6e6] my-auto'>Yes</h1>
                                    {risk === "Yes" && (
                                        <IoMdCheckmark className='text-[#e6e6e6] text-end text-[20px] sm:text-[24px] mr-2' />
                                    )}
                                </div>
                                <div className={`mb-2 w-[60%] sm:w-[33%] lg:w-[25%] relative flex items-center rounded-[4px] bg-[#e6e6e61a] hover:bg-[#FFFFFF4d] text-[#e6e6e6] min-h-[40px] py-1 break-words cursor-pointer opacity-1 shadow-radio ${risk === "No" ? "border-[1px]" : ""}`} onClick={() => handleRisk("No")}>
                                    <div className={`my-1 mx-2 w-6 h-6 min-h-[22px] shrink-0 rounded-[4px] text-xs border-[#e6e6e699] border-[1px] flex justify-center items-center ${risk === "No" ? "bg-[#e6e6e6] text-[#0d0601]" : "bg-[#0d0601] text-[#e6e6e6]"}`}>
                                        <span className='font-bold'>N</span>
                                    </div>
                                    <h1 className='w-full min-w-[100px] text-start break-word text-[16px] sm:text-[20px] text-[#e6e6e6] my-auto'>No</h1>
                                    {risk === "No" && (
                                        <IoMdCheckmark className='text-[#e6e6e6] text-end text-[20px] sm:text-[24px] mr-2' />
                                    )}
                                </div>
                            </div>
                            {risk && (
                                <div className='mt-[16px] w-full flex gap-4 items-center'>
                                    <button type='button' className='min-h-10 py-1.5 px-3.5 bg-[#FDD220] text-[#000] rounded-[4px] flex items-center text-md sm:text-xl gap-1 font-bold hover:bg-[#FDD220]/[80%] transition-colors duration-200' onClick={() => { if (risk === "Yes") { handleRiskSubmit() } else { handleSubmit() } }}>
                                        {risk === "Yes" ? <h1>OK</h1> : risk === "No" && <h1>Submit</h1>}<MdDone className='text-xl' />
                                    </button>
                                    <h1 className='text-[#e0d9d9] text-xs flex items-center gap-1'>press <strong>Enter</strong> <RiCornerDownLeftFill className='w-3 h-3' /> </h1>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* ----------- Invesment -----------  */}
                    <div className={`flex flex-col justify-center w-10/12 sm:w-9/12 xl:w-6/12 mx-auto min-h-full transition-all ease-in-out duration-500 lg:p-6 xl:p-0
                        ${isInvestment ? "opacity-0 -translate-y-[700%]" :
                            isRisk ? "opacity-1 -translate-y-[600%]" :
                                isReason ? "opacity-1 -translate-y-[500%]" :
                                    isMobileNumber ? "opacity-0 -translate-y-[400%]" :
                                        isLinkedin ? "opacity-1 -translate-y-[300%]" :
                                            isEmail ? "opacity-1 -translate-y-[200%]" :
                                                isName ? "opacity-1 -translate-y-full" : ""}`}
                    >
                        <div className='relative'>
                            <div className='flex items-center mr-2 absolute end-full  mt-1 lg:mt-0.5 text-[8px] sm:text-[10px]'>
                                <h1 className='text-[#e6e6e6] flex shrink-0 text-[14px] sm:text-[18px]'>7</h1>
                                <FaArrowRight className='text-[#e6e6e6] flex shrink-0 ' />
                            </div>
                            <div className='text-[#e0d9d9]'>
                                <h1 className='text-xl sm:text-2xl font-light'>What is the investment amount you are planning to invest? Kindly Mention along with Currency. *</h1>
                            </div>
                            <div className='mt-[20px] sm:mt-[32px] w-full max-w-[280px] sm:max-w-[530px] lg:max-w-[720px]'>
                                <input type='text' value={investment} placeholder='Type your answer here...' className='max-w-full w-full bg-transparent border-none pb-2 placeholder:text-[24px] sm:placeholder:text-[30px] text-[24px] sm:text-[30px] text-[#e6e6e6] placeholder:text-[#4f4946] focus:outline-none focus:shadow-focus shadow-focus cursor-pointer' onChange={(e) => { setInvestment(e.target.value); setInvestmentError('') }} />
                            </div>
                            {investmentError ?
                                (
                                    <div className='mt-[16px] w-full flex gap-4 items-center'>
                                        <div className='bg-[#f7e6e6] min-h-7 rounded-[3px] flex gap-1 items-center justify-center py-1.5 pl-2 pr-3'>
                                            <TbAlertTriangleFilled className='text-[#af0404] w-4 h-4' />
                                            <h1 className='text-[#af0404] text-sm'>{investmentError}</h1>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='mt-[16px] w-full flex gap-4 items-center'>
                                        <button type='button' className='min-h-10 py-1.5 px-3.5 bg-[#FDD220] text-[#000] rounded-[4px] flex items-center text-md sm:text-xl gap-1 font-bold hover:bg-[#FDD220]/[80%] transition-colors duration-200' onClick={handleInvestmentSubmit}><h1>OK</h1><MdDone className='text-xl' /></button>
                                        {/* <h1 className='text-[#e0d9d9] text-xs flex items-center gap-1'>press <strong>Enter</strong> <RiCornerDownLeftFill className='w-3 h-3' /> </h1> */}
                                    </div>
                                )}
                        </div>
                    </div>
                    {/* ----------- Anything -----------  */}
                    <div className={`flex flex-col justify-center w-10/12 sm:w-9/12 xl:w-6/12 mx-auto min-h-full transition-all ease-in-out duration-500 lg:p-6 xl:p-0
                        ${isInvestment ? "opacity-1 -translate-y-[700%]" :
                            isRisk ? "opacity-1 -translate-y-[600%]" :
                                isReason ? "opacity-1 -translate-y-[500%]" :
                                    isMobileNumber ? "opacity-0 -translate-y-[400%]" :
                                        isLinkedin ? "opacity-1 -translate-y-[300%]" :
                                            isEmail ? "opacity-1 -translate-y-[200%]" :
                                                isName ? "opacity-1 -translate-y-full" : ""}`}
                    >
                        <div className='relative'>
                            <div className='flex items-center mr-2 absolute end-full  mt-1 lg:mt-0.5 text-[8px] sm:text-[10px]'>
                                <h1 className='text-[#e6e6e6] flex shrink-0 text-[14px] sm:text-[18px]'>8</h1>
                                <FaArrowRight className='text-[#e6e6e6] flex shrink-0 ' />
                            </div>
                            <div className='text-[#e0d9d9]'>
                                <h1 className='text-xl sm:text-2xl font-light'>Anything else you would like to tell us.</h1>
                                <h2 className='text-md sm:text-xl font-light mt-1 sm:mt-2 text-[#e0d9d9b3]'>This detail will help us understand you more and give you quick access to Workfast.ai.</h2>
                            </div>
                            <div className='mt-[20px] sm:mt-[32px] w-full max-w-[310px] sm:max-w-[550px] lg:max-w-[720px]'>
                                <input type='text' value={anything} placeholder='Type your answer here...' className='max-w-full w-full bg-transparent border-none pb-2 placeholder:text-[24px] sm:placeholder:text-[30px] text-[24px] sm:text-[30px] text-[#e6e6e6] placeholder:text-[#4f4946] focus:outline-none focus:shadow-focus shadow-focus cursor-pointer' onChange={(e) => { setAnything(e.target.value); setAnythingError('') }} />
                            </div>
                            {anythingError === '' &&
                                <div className='mt-[16px] w-full flex gap-4 items-center'>
                                    <button type='button' className='min-h-10 py-1.5 px-3.5 w-full md:w-auto mx-auto xl:mx-0 bg-[#FDD220] text-[#000] rounded-[4px] flex items-center justify-center text-md sm:text-xl gap-1 font-semibold hover:bg-[#FDD220]/[80%] transition-colors duration-200' onClick={handleSubmit}><h1>Submit</h1></button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='flex justify-end absolute bottom-8 right-8'>
                    <button className={`bg-[#FDD220] transition-colors duration-200 w-9 h-8 border-r-[1px] border-[#00000099] rounded-s-[4px] flex justify-center items-center ${isName ? "hover:bg-[#FDD22099] text-[#000000]" : "text-[#00000099]"}`} disabled={!isName} onClick={handleUpArrow}><FaChevronUp className='w-4 h-4' /></button>
                    <button className={`bg-[#FDD220] transition-colors duration-200 w-9 h-8 rounded-e-[4px] flex justify-center items-center ${isInvestment || risk === "No" ? "text-[#00000099]" : "text-[#00000099] hover:bg-[#FDD22099]"}`} onClick={handleDownArrow} disabled={isInvestment || (isReason && risk === "No")}><FaChevronDown className='w-4 h-4' /></button>
                </div>
            </div>
        </div >
    )
}
