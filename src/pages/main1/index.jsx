import React from 'react';
import Header from '../header';
import Intro from './component/intro';
import Channel from './component/channel';
import Project from './component/project';
import Task from './component/task';
import Chat from './component/chat';
import Ai from './component/ai';
import Features from './component/features';
import Footer from './component/footer';
import Testimonial from './component/testimonials';
import Availbles from './component/avaibles';
// import Pricing from './component/price';
import IpadView from './component/ipadview';
import Support from './component/support';
import Access from './component/access';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCloseSharp } from "react-icons/io5";
import user from "../../images/profileicon.svg";
import emailIcon from "../../images/emailicon.svg";
import phone from "../../images/phoneicon.svg";
import company from "../../images/companyicon.svg";
import API from '../../utils/API';
import axios from 'axios';
import LoadLottie from '../loadLottie';
import sucess from "../../sucess.json";

export default function Main1() {
  const [isVideo, setIsVideo] = React.useState(false);
  const [videoIndex, setVideoIndex] = React.useState(null);
  const [isForm, setIsForm] = React.useState(false);
  const [isSucess, setIsSucess] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [phoneNumberError, setPhoneNumberError] = React.useState(false);
  const [companyName, setCompanyName] = React.useState('');


  const handleNameChange = (e) => {
    if (/^[\x20-\x7E]*$/.test(e.target.value)) {
      setName(e.target.value)
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    const email = e.target.value;
    const gmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      setEmailError(false);
    }
    else if (!gmailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  const handleCompanyNameChange = (e) => {
    if (/^[\x20-\x7E]*$/.test(e.target.value)) {
      setCompanyName(e.target.value);
    }
  }

  const handlePhoneNumberChange = (e) => {
    const phoneNumbers = e.target.value.replace(/\D/g, '');
    setPhoneNumber(phoneNumbers)
    const isValidPhoneNumber = /^\d{10}$/;
    if (phoneNumbers === "") {
      setPhoneNumberError(false);
    }
    else if (!isValidPhoneNumber.test(phoneNumbers)) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(API.DETAILS,
      {
        name: name,
        email: email,
        phone: phoneNumber,
        company_name: companyName
      });
    const { response } =  await axios.post(API.HOST, { email: email });
    if (data?.statusCode === 200) {
      setName('');
      setEmail('');
      setPhoneNumber('');
      setCompanyName('');
      setIsForm(false);
      setIsSucess(true);
    }

  };

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='flex flex-col justify-start items-center w-full h-full bg-[#010306] relative overflow-hidden px-0'>
      <Header setIsForm={setIsForm} />
      <Intro setIsForm={setIsForm} email={email} setEmail={setEmail} />
      <Features />
      <img src='https://dz1x1c630cl14.cloudfront.net/webassets/Mobilemocs.webp' alt='mobileView'
        // data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="10000" 
        className='my-[20px] lg:my-[100px] p-[20px] w-[80%]' />
      <Channel />
      <Project />
      <Task />
      <Chat />
      <Ai />
      <Availbles />
      <img src='https://dz1x1c630cl14.cloudfront.net/webassets/Devicemockup3.webp' alt='availble' className='mt-[10px] lg:mt-[50px] p-[20px] w-[80%] z-[1]'
      // data-aos="zoom-in" data-aos-duration="2000" 
      />
      {/* <Pricing setIsForm={setIsForm} /> */}
      <IpadView />
      <Support />
      <Testimonial setIsVideo={setIsVideo} setVideoIndex={setVideoIndex} />
      <Access setIsForm={setIsForm} />
      <Footer />
      {isVideo && (
        <div className="flex justify-center items-center text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#121825] bg-opacity-30 z-30">
          <div
            className="w-[95%] h-[95%] flex items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat relative"
            style={{
              backdropFilter: "blur(100px)",
            }}
          >
            <div className=" w-10/12 h-screen flex items-center justify-center">
              {videoIndex === 0 ? (
                <video
                  className=" object-contain max-h-[90%] rounded-lg"
                  controls
                  autoPlay
                >
                  <source
                    src={`https://dz1x1c630cl14.cloudfront.net/webassets/testimonial1.mp4`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : videoIndex === 1 && (
                <video
                  className=" object-contain max-h-[90%] rounded-lg"
                  controls
                  autoPlay
                >
                  <source
                    src={`https://dz1x1c630cl14.cloudfront.net/webassets/testimonial2.mp4`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>


            <div
              className="absolute top-0 right-0 cursor-pointer border-[#FFFFFF] p-2 rounded-lg"
              onClick={() => {
                setIsVideo(false);
              }}
            >
              <IoCloseSharp className='text-[#FFF] w-[30px] h-[30px]' />
            </div>
          </div>
        </div>
      )}
      {isForm && (
        <div className="flex justify-center items-center text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#121825] bg-opacity-60 z-[100]">
          <div className='w-[300px] md:w-[630px] md:h-[330px] bg-[#121825] rounded-[16px] p-[32px] relative z-[10]'>
            <div
              className="absolute top-0 right-0 md:top-[20px] md:right-[20px] cursor-pointer border-[#FFFFFF] p-2 rounded-lg"
              onClick={() => {
                setIsForm(false);
                setName("");
                setEmail("");
                setCompanyName("");
                setPhoneNumber("");
              }}
            >
              <IoCloseSharp className='text-[#FFF] w-[20px] h-[20px] md:w-[30px] md:h-[30px]' />
            </div>
            <div className='grid md:grid-cols-2 gap-5 items-center mt-[15px] md:mt-[30px] w-full'>
              <div className='w-full'>
                <div className='flex items-center gap-1'>
                  <img src={user} alt='user' className='w-[19px] md:w-[23x]' />
                  <h3 className='text-[#FFFFFF] text-[12px] md:text-[14px] font-medium'>Name*</h3>
                </div>
                <div className={`w-full h-[38px] md:h-[44px] bg-[#1C2437] lg:py-[10px] mt-[10px] rounded-[8px]`}>
                  <input type='text' className='w-full text-[#E2E8FF] placeholder:text-[#E2E8FF]/[40%] h-full text-[12px] lg:text-[16px] placeholder:text-[12px] lg:placeholder:text-[16px] bg-transparent focus:outline-none ml-[18px]' value={name} placeholder='Enter your name' onChange={(e) => { handleNameChange(e); }} />
                </div>
              </div>
              <div className='w-full'>
                <div className='flex items-center gap-1'>
                  <img src={emailIcon} alt='user' className='w-[19px] md:w-[23x]' />
                  <h3 className='text-[#FFFFFF] text-[12px] md:text-[14px] font-medium'>Email*</h3>
                </div>
                <div className={`w-full h-[38px] md:h-[44px] bg-[#1C2437] lg:py-[10px] mt-[10px] rounded-[8px] ${emailError ? "border-[1px] border-[#F92A4B]" : ""}`}>
                  <input type='email' className='w-full text-[#E2E8FF] placeholder:text-[#E2E8FF]/[40%] h-full text-[12px] lg:text-[16px] placeholder:text-[12px] lg:placeholder:text-[16px] bg-transparent focus:outline-none ml-[18px]' placeholder='Enter your email' value={email} onChange={(e) => { handleEmailChange(e) }} />
                </div>
              </div>
              <div className='w-full'>
                <div className='flex items-center gap-1'>
                  <img src={phone} alt='user' className='w-[19px] md:w-[23x]' />
                  <h3 className='text-[#FFFFFF] text-[12px] md:text-[14px] font-medium'>Phone Number*</h3>
                </div>
                <div className={`w-full h-[38px] md:h-[44px] bg-[#1C2437] lg:py-[10px] mt-[10px] rounded-[8px] ${phoneNumberError ? "border-[1px] border-[#F92A4B]" : ""}`}>
                  <input type='text' className='w-full text-[#E2E8FF] placeholder:text-[#E2E8FF]/[40%] h-full text-[12px] lg:text-[16px] placeholder:text-[12px] lg:placeholder:text-[16px] bg-transparent focus:outline-none ml-[18px]' placeholder='Enter your Phone number' value={phoneNumber} onChange={(e) => { handlePhoneNumberChange(e) }} />
                </div>
              </div>
              <div className='w-full'>
                <div className='flex items-center gap-1'>
                  <img src={company} alt='user' className='w-[19px] md:w-[23x]' />
                  <h3 className='text-[#FFFFFF] text-[12px] md:text-[14px] font-medium'>Company name*</h3>
                </div>
                <div className={`w-full h-[38px] md:h-[44px] bg-[#1C2437] lg:py-[10px] mt-[10px] rounded-[8px]`}>
                  <input type='text' className='w-full text-[#E2E8FF] placeholder:text-[#E2E8FF]/[40%] h-full text-[12px] lg:text-[16px] placeholder:text-[12px] lg:placeholder:text-[16px] bg-transparent focus:outline-none ml-[18px]' placeholder='Enter your Company name' value={companyName} onChange={(e) => { handleCompanyNameChange(e) }} />
                </div>
              </div>
            </div>
            <button className={`w-full h-[38px] md:h-[44px] rounded-[8px] border-[1px] border-[#995900] bg-[#FDD01F] text-[#2A2200] text-[16px] font-medium mt-[30px] ${name === "" || email === "" || emailError || phoneNumber === "" || phoneNumberError || companyName === "" ? "opacity-30" : ""}`} disabled={name === "" || email === "" || emailError || phoneNumber === "" || phoneNumberError || companyName === ""} onClick={(e) => { handleSubmit(e) }}>Book a Demo</button>
          </div>
        </div>
      )}
      {isSucess && (
        <div className="flex justify-center items-center text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#121825] bg-opacity-60 z-[100]">
          <div className='w-[300px] md:w-[630px] md:h-[200px] bg-[#121825] rounded-[16px] p-[32px] relative z-[10]'>
            <div
              className="absolute top-0 right-0 md:top-[20px] md:right-[20px] cursor-pointer border-[#FFFFFF] p-2 rounded-lg"
              onClick={() => {
                setIsSucess(false);
              }}
            >
              <IoCloseSharp className='text-[#FFF] w-[20px] h-[20px] md:w-[30px] md:h-[30px]' />
            </div>
            <div className='w-full flex  justify-center'>
              <div className="w-[100px] flex justify-center">
                <LoadLottie animationData={sucess} loop={true} />
              </div>
            </div>
            <h3 className='text-[14px] font-medium text-[#FFF] '>Thank you for your interest! Our team will be reaching out to you shortly.</h3>
          </div>
        </div>
      )}
    </div>
  )
}
