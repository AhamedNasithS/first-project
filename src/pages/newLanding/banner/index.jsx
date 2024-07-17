import React from 'react'
import axios from 'axios';
import Main from "../../../videos/logoBackground.mp4";
import Swal from 'sweetalert2'

export default function Banner() {
  const [email, setEmail] = React.useState('');
  const textArray = ["Changers", "Dreamers", "Doers", "Rebels", "Makers"];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [btnLoad, setBtnLoad] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoad(true);
    const { data } = await axios.post(
      'https://devarus.aftergen.in/dev/API/release_v43/register_mail.php',
      { email: email },
    );
    if (data.message) {
      setEmail('');
      setBtnLoad(false);
      if (data.status_code === 500) {
        Swal.fire({
          title: "Error!",
          text: data.message,
          icon: "error"
        });
      } else {
        Swal.fire({
          title: "Success!",
          text: data.message,
          icon: "success"
        });
      }
    } else {
      setEmail('');
      setBtnLoad(false);
      Swal.fire({
        title: "Success!",
        text: 'Registration successful',
        icon: "success"
      });
    }
  }

  const handleEmail = (e) => {
    const email = e.target.value;
    const gmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(email);
    if (email === "") {
      setEmailError('');
    }
    else if (!gmailRegex.test(email)) {
      setEmailError("Invalid Email");
    } else {
      setEmailError('');
    }
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1800);
    return () => clearInterval(intervalId);
  }, [currentIndex, textArray.length]);

  return (
    <div className='flex flex-col justify-start items-center'>
      <img src="https://dz1x1c630cl14.cloudfront.net/webassets/one.ai_Logo.svg" alt='logo' className='z-[1] mt-[50px] w-[55px] sm:w-auto' />
      <video src={Main} className='absolute z-[0] left-[50%] -translate-x-[50%] sm:w-[460px] sm:-top-[30px] mainVideo' autoPlay muted loop />
      <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Glowing.svg" alt='Glow' className='absolute left-[50%] -translate-x-[50%] z-0 -top-[280px] xl:top-auto' />
      <div className='DarkerGrostesqueSemibold text-center z-[1] mt-[40px] sm:mt-[80px] text-[#FEF9F1]'>
        <h1 className='text-[30px] sm:text-[50px] xl:text-[80px] leading-3'>One intelligent App</h1>
        <h1 className='text-[30px] sm:text-[60px] xl:text-[110px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent z-[1] text-center'>to manage your work and life </h1>
        <h1 className='DarkerGrostesqueMedium text-[14px] sm:text-[24px] mt-[10px] sm:mt-[20px]'>Built with intelligence & empathy</h1>
      </div>
      <div className='max-w-[500px] w-full mt-[30px] sm:mt-[40px]'>
        <div className='bg-transparent w-full p-[1px] rounded-[10px] z-[1] animation relative squircle'>
          <div className='w-full bg-[#000] rounded-[10px] z-[5] flex gap-[10px] relative p-[10px]'>
            <input type='email' className='w-full text-[#FEF9F1] text-[14px] sm:text-[18px] font-normal placeholder:text-[#FEF9F1] placeholder:text-[14px] sm:placeholder:text-[16px] bg-transparent focus:outline-none' value={email} placeholder='Enter your email' onChange={handleEmail} />
            <button className={`px-[15px] py-[10px] bg-[#FDD320] text-nowrap rounded-[5px] text-[#0E1014] text-[12px] sm:text-[14px] font-medium ${btnLoad ? "opacity-50" : "opacity-100"} ${email ? "opacity-100" : "opacity-50"}`} onClick={handleSubmit} disabled={!email || emailError}>{btnLoad ? 'Loading...' : 'Request early access'}</button>
          </div>
        </div>
        {emailError && (<h1 className='text-[#FF6157] text-[14px] text-start mt-[10px] font-medium'>{emailError}</h1>)}
      </div>
      <div className='w-full overflow-hidden z-[10] radialGradient'>
                <h1 className='font-semibold text-[14px] sm:text-[18px] lg:text-[26px] xl:text-[35px] text-[#FEF9F1] text-center mt-[30px] sm:mt-[50px] w-10/12 sm:w-9/12 lg:w-8/12 xl:w-1/2 mx-auto mb-[20px]'>it’s not for everyone</h1>
            </div>
            <div className='w-full relative z-[6]'>
                <div className='z-[2] p-[10px] border-[#FDD320]/[20%] h-[70px] sm:h-[90px] lg:h-[100px] xl:h-[150px] border-[1px] rounded-[20px] DarkerGrostesqueSemibold text-[24px] sm:text-[36px] lg:text-[50px] xl:text-[80px] max-w-[300px] sm:max-w-[400px] lg:max-w-[730px] w-full mx-auto relative mb-[40px] sm:mb-[70px] xl:mb-[100px]'>
                    <div className='flex gap-[20px] absolute left-[35%] -translate-x-[50%]'>
                        <h1 className='text-[#FEF9F1]'>It’s for</h1>
                        <div className='inline-block'>
                            {textArray.map((text, index) => (
                                <h1 key={index} className={`verticalFilp absolute z-0 text-[#FFE269] ${currentIndex === index ? 'current-index' : 'hidden'}`}>{text}</h1>
                            ))}
                        </div>
                        <div className='h-[22px] sm:h-[28px] lg:h-[20px] xl:h-[30px] w-[100px] rounded-b-[20px] sm:w-[250px] lg:w-[300px] xl:w-[480px] mx-[10px] bg-[0c163a] z-[2] absolute -bottom-[22px] sm:-bottom-[23px] lg:-bottom-[12px] xl:-bottom-[17px] left-[52px] sm:left-[0px]'></div>
                    </div>
                </div>
            </div>
    </div>
  )
}
