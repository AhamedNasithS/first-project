import React, { useState } from 'react'
import axios from 'axios';
import Logo from "../../images/one.ai_Logo.svg";
import Main from "../../videos/logoBackground.mp4";
import Swal from 'sweetalert2'
// import Glow from "../../images/Glowing.svg";

export default function Landing() {
    const [email, setEmail] = React.useState('');
    const textArray = ["Changers", "Dreamers", "Doers", "Rebels", "Makers"];
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [btnLoad,setBtnLoad] = useState(false);

    const handleSubmit = async () => {
        setBtnLoad(true);
        const { data } = await axios.post(
            'https://devarus.aftergen.in/dev/API/release_v43/register_mail.php',
            { email: email },
        );
        if(data.message) {
            setBtnLoad(false);
            // alert(data.message);
            Swal.fire({
                title: "Success!",
                text: data.message,
                icon: "success"
              });
        }else{
            setBtnLoad(false);
            Swal.fire({
                title: "Success!",
                text: 'Registration successful',
                icon: "success"
              });
        }
      
    }

    React.useEffect(() => {
        
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, 1800);
        return () => clearInterval(intervalId);
    }, [currentIndex, textArray.length]);

    return (
        <div className='flex flex-col justify-start items-center w-full h-full bg-[#010306] relative overflow-hidden'>
            <img src={Logo} alt='logo' className='z-[1] mt-[80px] w-[75px] sm:w-auto' />
            <video src={Main} className='absolute z-[0] left-[50%] -translate-x-[50%] sm:w-[460px] top-[10px] sm:top-[0px]' autoPlay muted loop />
            <h1 className='DarkerGrostesqueSemibold text-[30px] sm:text-[50px] text-[#FEF9F1] z-[1] mt-[30px]'>One intelligent App</h1>
            <h1 className='DarkerGrostesqueSemibold text-[30px] sm:text-[60px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent z-[1]'>to manage your work and life </h1>
            <h1 className='DarkerGrostesqueMedium text-[14px] sm:text-[24px] text-[#FEF9F1] mt-[20px] z-[1]'>Built with intelligence & empathy</h1>
            <div className='bg-transparent w-10/12 sm:w-9/12 lg:w-8/12 xl:w-1/2 h-[65px] lg:h-[75px] p-[1px] rounded-[10px] mt-[40px] z-[1] animation relative'>
                <div className='w-full h-full bg-[#000] rounded-[10px] z-[5] relative p-[10px] sm:p-[15px] flex gap-[10px] justify-between items-center'>
                    <input type='email' className='text-[#FEF9F1] text-[14px] sm:text-[18px] font-normal placeholder:text-[#FEF9F1] placeholder:text-[14px] sm:placeholder:text-[22px] w-7/12 bg-transparent focus:outline-none' value={email} placeholder='Enter your work email' onChange={(e) => setEmail(e.target.value)} />
                    <button className={` h-full bg-[#FDD320] rounded-[10px] text-[#0E1014] text-[12px] sm:text-[14px] lg:text-[18px] font-medium w-4/12 ${btnLoad ? "opacity-50" : "opacity-100"}`} onClick={handleSubmit}>{ btnLoad ? 'Loading...' : 'Request early access' }</button>
                </div>
            </div>
            {/* <img src={Glow} alt='Glow'  className='absolute left-[50%] -translate-x-[50%] -bottom-[20%] w-[800px] z-0'/> */}
            <div className='w-full bg-[#010306] z-[3]'><h1 className='font-semibold text-[14px] sm:text-[26px] xl:text-[45px] text-[#FEF9F1] text-center mt-[50px] mb-[20px]'>it’s not for everyone</h1></div>
            <div className='p-[10px] border-[#FDD320]/[20%] h-[70px] sm:h-[90px] lg:h-[100px] xl:h-[150px] border-[1px] rounded-[20px] DarkerGrostesqueSemibold text-[24px] sm:text-[36px] lg:text-[50px] xl:text-[80px] w-8/12 mx-auto relative mb-[120px] sm:mb-[150px]'>
                <div className='flex gap-[20px] absolute left-[40%] -translate-x-[50%]'>
                    <h1 className='text-[#FEF9F1]'>It’s for</h1>
                    <div className='inline-block'>
                        {textArray.map((text, index) => (
                            <h1 key={index} className={`verticalFilp absolute z-0 text-[#FFE269] ${currentIndex === index ? 'current-index' : 'hidden'}`}>{text}</h1>
                        ))}
                    </div>
                    <div className='h-[20px] xl:h-[20px] w-[100px] sm:w-[200px] xl:w-11/12 mx-[10px] bg-[#010306] z-[2] absolute -bottom-[22px] sm:bottom-0 left-[54px] sm:left-[0px]'></div>
                </div>
            </div>
        </div>
    )
}
