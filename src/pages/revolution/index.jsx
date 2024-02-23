import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Revolution() {
    const [email, setEmail] = React.useState('');
    const [btnLoad, setBtnLoad] = React.useState(false);
    const [emailError, setEmailError] = React.useState('')


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
    return (
        <div className='mb-[40px] sm:mb-[70px] xl:mb-[100px] w-full'>
            <h1 className='text-center DarkerGrostesqueSemibold text-[#FFF] text-[30px] lg:text-[50px] xl:text-[90px]'>Join the revolution</h1>
            <div className='max-w-[500px] mt-[40px] mx-auto'>
                <div className='bg-transparent w-full p-[1px] rounded-[10px] mt-[40px] z-[1] animation relative'>
                    <div className='w-full bg-[#010306] rounded-[10px] z-[5] flex gap-[10px] relative p-[10px]'>
                        <input type='email' className='text-[#FEF9F1] w-full text-[14px] sm:text-[18px] font-normal placeholder:text-[#FEF9F1] placeholder:text-[14px] sm:placeholder:text-[16px] bg-transparent focus:outline-none' value={email} placeholder='Enter your email' onChange={handleEmail} />
                        <button className={`px-[15px] py-[10px] bg-transparent text-nowrap rounded-[5px] text-[#FDD320] border-[#FDD320] border-[2px] text-[12px] sm:text-[14px] font-medium ${btnLoad ? "opacity-50" : "opacity-100"} ${email ? "opacity-100" : "opacity-50"}`} onClick={handleSubmit} disabled={!email || emailError}>{btnLoad ? 'Loading...' : 'Get the early beta!'}</button>
                    </div>
                </div>
                {emailError && (<h1 className='text-[#FF6157] text-[14px] text-start mt-[10px] font-medium'>{emailError}</h1>)}
            </div>
        </div>
    )
}
