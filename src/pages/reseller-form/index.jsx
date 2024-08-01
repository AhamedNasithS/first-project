import React from 'react'
import campaignIcon from "../../images/campaignIcon.svg";
import { IoIosCheckbox } from "react-icons/io";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function ResellerForm() {
    const [partnershipName, setpartnershipName] = React.useState('');
    const [name, setName] = React.useState('');
    const [companyName, setCompanyName] = React.useState('');
    const [companyEmail, setCompanyEmail] = React.useState('');
    const [companyWebsite, setCompanyWebsite] = React.useState('');
    const [mobileNumber, setMobileNumber] = React.useState('');
    const [selectedCountry, setSelectedCountry] = React.useState('');
    const [reason, setReason] = React.useState('');
    const [industries, setIndustries] = React.useState('');
    const [audience, setAudience] = React.useState('');
    const [previousState, setPreviousState] = React.useState('');
    const [previousStateReason, setPreviousStateReason] = React.useState('');
    const [previousState1, setPreviousState1] = React.useState('');
    const [previousStateReason1, setPreviousStateReason1] = React.useState('');
    const [marketTarget, setMarketTarget] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [businessActivities, setBusinessActivities] = React.useState('');




    const [nameError, setNameError] = React.useState(false);
    const [companyNameError, setCompanyNameError] = React.useState('');
    const [companyEmailError, setCompanyEmailError] = React.useState('');
    const [companyWebsiteError, setCompanyWebsiteError] = React.useState('');
    const [mobileNumberError, setMobileNumberError] = React.useState('');
    const [reasonError, setReasonError] = React.useState('');
    const [industriesError, setIndustriesError] = React.useState('');
    const [audienceError, setAudienceError] = React.useState('');
    const [previousStateReasonError, setPreviousStateReasonError] = React.useState('');
    const [previousStateReasonError1, setPreviousStateReasonError1] = React.useState('');
    const [marketTargetError, setMarketTargetError] = React.useState('');
    const [addressError, setAddressError] = React.useState('');
    const [businessActivitiesError, setBusinessActivitiesError] = React.useState('');

    const invalidCharsRegex = /[<>'/\\;’”:{}[\]|+=\-_()*&^%$#!~`]/;


    const handleSubmit = async (e) => {
        try {
            if (!name.trim()) {
                setNameError(true)
            }
            else if (invalidCharsRegex.test(name)) {
                setNameError(true)
            }
            if (!companyName.trim()) {
                setCompanyNameError(true)
            }
            else if (invalidCharsRegex.test(companyName)) {
                setCompanyNameError(true)
            }
            const gmailRegex = /^[^\s@]+@[^\s@]+\.(?:com)$/i;
            if (companyEmail === "") {
                setCompanyEmailError(true);
            }
            else if (invalidCharsRegex.test(companyEmail)) {
                setCompanyEmailError(true)
            }
            else if (!gmailRegex.test(companyEmail)) {
                setCompanyEmailError(true);
            }
            if (!companyWebsite.trim()) {
                setCompanyWebsiteError(true)
            }
            else if (invalidCharsRegex.test(companyWebsite)) {
                setCompanyWebsiteError(true)
            }
            if (mobileNumber.replace(`+${selectedCountry}`, '') === "") {
                setMobileNumberError(true)
            }
            if (!reason.trim()) {
                setReasonError(true)
            }
            else if (invalidCharsRegex.test(reason)) {
                setReasonError(true)
            }
            if (!industries.trim()) {
                setIndustriesError(true)
            }
            else if (invalidCharsRegex.test(industries)) {
                setIndustriesError(true)
            }
            if (!audience.trim()) {
                setAudienceError(true)
            }
            else if (invalidCharsRegex.test(audience)) {
                setAudienceError(true)
            }
            if (!previousStateReason.trim()) {
                setPreviousStateReasonError(true)
            }
            else if (invalidCharsRegex.test(previousStateReason)) {
                setPreviousStateReasonError(true)
            }
            if (!marketTarget.trim()) {
                setMarketTargetError(true)
            }
            else if (invalidCharsRegex.test(marketTarget)) {
                setMarketTargetError(true)
            }
        } catch
         (error) {
            console.log(error)
        }
    }



    return (
        <div className={`bg-white w-full py-[100px] ${partnershipName === "" ? "h-screen" : "h-full"}`}>
            <div className='w-6/12 mx-auto border border-[#CECEEA] rounded-[12px]'>
                <div className='p-8 border-b border-[#CECEEA] flex gap-[50px] items-center'>
                    <img src={campaignIcon} alt='campaignIcon' />
                    <div>
                        <div className='text-[32px] font-semibold text-[#000]'>Workfast.ai</div>
                        <div className='text-[22px] font-normal text-[#000] mt-[20px]'>{partnershipName === "" ? "Join Our Reseller and Affiliate Program" : partnershipName === "Affiliate partnership" ? "Join Our Affiliate Program" : "Join Our Reseller Program"}</div>
                    </div>
                </div>
                <div className='p-8 flex flex-col gap-[20px]'>
                    <div>
                        <div className='text-neutral-950 text-[14px] font-medium'>What type of partnership are you seeking with us?</div>
                        <div className='flex items-center gap-[10px] mt-[5px]' onClick={() => { setpartnershipName('Affiliate partnership') }}>
                            {partnershipName !== "Affiliate partnership" ? <div className='size-[15px] rounded-[2px] border-[#CECEEA] border ml-[3px]'></div> : <IoIosCheckbox className='fill-[#27AE60] size-[20px]' />}
                            <div className='text-neutral-950 text-[14px] font-semibold'>Affiliate partnership</div>
                        </div>
                        <div className='flex items-center gap-[10px] mt-[5px] cursor-pointer' onClick={() => { setpartnershipName('Reseller partnership') }}>
                            {partnershipName !== "Reseller partnership" ? <div className='size-[15px] rounded-[2px] border-[#CECEEA] border ml-[3px]'></div> : <IoIosCheckbox className='fill-[#27AE60] size-[20px]' />}
                            <div className='text-neutral-950 text-[14px] font-semibold'>Reseller partnership</div>
                        </div>
                    </div>
                    {partnershipName === "Affiliate partnership" ? (
                        <>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Personal Name :</div>
                                <div className={`w-full  mt-[5px] border py-2 px-[10px]  rounded-[2px] ${nameError ? "border-[#ff2c2c]" : "border-[#CECEEA]"}`}>
                                    <input type='text' value={name} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] text-[14px] font-semibold text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setName(e.target.value); setNameError(false) }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Company Name :</div>
                                <div className={`w-full  mt-[5px] border py-2 px-[10px]  rounded-[2px] ${companyNameError ? "border-[#ff2c2c]" : "border-[#CECEEA]"}`}>
                                    <input type='text' value={companyName} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] text-[14px] text-[#000] font-semibold placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setCompanyName(e.target.value); setCompanyNameError(false) }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Company Email :</div>
                                <div className={`w-full  mt-[5px] border py-2 px-[10px]  rounded-[2px] ${companyEmailError ? "border-[#ff2c2c]" : "border-[#CECEEA]"}`}>
                                    <input type='text' value={companyEmail} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] font-semibold text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setCompanyEmail(e.target.value); setCompanyEmailError(false) }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Company website :</div>
                                <div className={`w-full  mt-[5px] border py-2 px-[10px]  rounded-[2px] ${companyWebsiteError ? "border-[#ff2c2c]" : "border-[#CECEEA]"}`}>
                                    <input type='text' value={companyWebsite} placeholder='' className='max-w-full w-full bg-transparent font-semibold placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setCompanyWebsite(e.target.value); setCompanyWebsiteError(false) }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Contact number with country code :</div>
                                <div className={`w-full  mt-[5px] border py-2 px-[10px]  rounded-[2px] ${mobileNumberError ? "border-[#ff2c2c]" : "border-[#CECEEA]"}`}>
                                    {/* <input type='text' value={name} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setName(e.target.value); setNameError('') }} /> */}
                                    <PhoneInput country={"us"} value={mobileNumber} onChange={(phone, country) => { setMobileNumber(phone); setSelectedCountry(country?.country?.dialCode); setMobileNumberError(false); }} className="max-h-[40px] h-full w-full focus:outline-none cursor-pointer reseller" />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Why you want to be a Affiliate with [workfast.ai](https://workfast.ai) ?</div>
                                <div className={`w-full  mt-[5px] border py-2 px-[10px]  rounded-[2px] ${reasonError ? "border-[#ff2c2c]" : "border-[#CECEEA]"}`}>
                                    <input type='text' value={reason} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] font-semibold text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setReason(e.target.value); setReasonError(false) }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Which industries or sectors does you primarily serve?</div>
                                <div className={`w-full  mt-[5px] border py-2 px-[10px]  rounded-[2px] ${industriesError ? "border-[#ff2c2c]" : "border-[#CECEEA]"}`}>
                                    <input type='text' value={industries} placeholder='' className='max-w-full w-full bg-transparent font-semibold placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setIndustries(e.target.value); setIndustriesError(false) }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>How do you currently reach and engage with your audience (e.g., social media, email marketing, events)?</div>
                                <div className={`w-full  mt-[5px] border py-2 px-[10px]  rounded-[2px] ${audienceError ? "border-[#ff2c2c]" : "border-[#CECEEA]"}`}>
                                    <input type='text' value={audience} placeholder='' className='max-w-full w-full bg-transparent font-semibold placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setAudience(e.target.value); setAudienceError(false) }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Have you previously been an affiliate for other technology products? If yes, please specify:</div>
                                <div className='flex items-center gap-[10px] mt-[5px]' onClick={() => { setPreviousState('YES') }}>
                                    {previousState !== "YES" ? <div className='size-[15px] rounded-[2px] border-[#CECEEA] border ml-[3px]'></div> : <IoIosCheckbox className='fill-[#27AE60] size-[20px]' />}
                                    <div className='text-neutral-950 text-[14px] font-semibold'>Yes</div>
                                </div>
                                <div className='flex items-center gap-[10px] mt-[5px] cursor-pointer' onClick={() => { setPreviousState('NO') }}>
                                    {previousState !== "NO" ? <div className='size-[15px] rounded-[2px] border-[#CECEEA] border ml-[3px]'></div> : <IoIosCheckbox className='fill-[#27AE60] size-[20px]' />}
                                    <div className='text-neutral-950 text-[14px] font-semibold'>No</div>
                                </div>
                                {previousState === "YES" && (
                                    <div className={`w-full  mt-[5px] border py-2 px-[10px]  rounded-[2px] ${previousStateReasonError ? "border-[#ff2c2c]" : "border-[#CECEEA]"}`}>
                                        <input type='text' value={previousStateReason} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setPreviousStateReason(e.target.value); setPreviousStateReasonError(false) }} />
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>What is the size of your target market or customer base ?</div>
                                <div className={`w-full  mt-[5px] border py-2 px-[10px]  rounded-[2px] ${marketTargetError ? "border-[#ff2c2c]" : "border-[#CECEEA]"}`}>
                                    <input type='text' value={marketTarget} placeholder='' className='max-w-full w-full font-semibold bg-transparent placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setMarketTarget(e.target.value); setMarketTargetError(false) }} />
                                </div>
                            </div>
                        </>
                    ) : partnershipName === "Reseller partnership" ? (
                        <>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Personal Name :</div>
                                <div className='w-full  mt-[5px] border border-[#CECEEA] py-2 px-[10px]  rounded-[2px]'>
                                    <input type='text' value={name} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] text-[14px] font-semibold text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setName(e.target.value); setNameError('') }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Company Name :</div>
                                <div className='w-full  mt-[5px] border border-[#CECEEA] py-2 px-[10px]  rounded-[2px]'>
                                    <input type='text' value={companyName} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] text-[14px] text-[#000] font-semibold placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setCompanyName(e.target.value); setCompanyNameError('') }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Company Email :</div>
                                <div className='w-full  mt-[5px] border border-[#CECEEA] py-2 px-[10px]  rounded-[2px]'>
                                    <input type='text' value={companyEmail} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] font-semibold focus:outline-none cursor-pointer' onChange={(e) => { setCompanyEmail(e.target.value); setCompanyEmailError('') }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Company website :</div>
                                <div className='w-full  mt-[5px] border border-[#CECEEA] py-2 px-[10px]  rounded-[2px]'>
                                    <input type='text' value={companyWebsite} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] font-semibold focus:outline-none cursor-pointer' onChange={(e) => { setCompanyWebsite(e.target.value); setCompanyWebsiteError('') }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Contact number with country code :</div>
                                <div className='w-full  mt-[5px] border border-[#CECEEA] py-3 px-[10px]  rounded-[2px]'>
                                    {/* <input type='text' value={name} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setName(e.target.value); setNameError('') }} /> */}
                                    <PhoneInput country={"us"} value={mobileNumber} onChange={(phone, country) => { setMobileNumber(phone); setSelectedCountry(country?.country?.dialCode); setMobileNumberError(''); }} className="max-h-[40px] h-full w-full focus:outline-none cursor-pointer reseller" />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Company Address and location :</div>
                                <div className='w-full  mt-[5px] border border-[#CECEEA] py-2 px-[10px]  rounded-[2px]'>
                                    <input type='text' value={address} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] font-semibold text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setAddress(e.target.value); setAddressError('') }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Describe your company’s primary business activities and services:</div>
                                <div className='w-full  mt-[5px] border border-[#CECEEA] py-2 px-[10px]  rounded-[2px]'>
                                    <input type='text' value={businessActivities} placeholder='' className='max-w-full w-full bg-transparent font-semibold placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setBusinessActivities(e.target.value); setBusinessActivitiesError('') }} />
                                </div>
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>Do you have any existing Reselling partnerships with similar technology or software companies? If so, please list them:</div>
                                <div className='flex items-center gap-[10px] mt-[5px]' onClick={() => { setPreviousState1('YES') }}>
                                    {previousState1 !== "YES" ? <div className='size-[15px] rounded-[2px] border-[#CECEEA] border ml-[3px]'></div> : <IoIosCheckbox className='fill-[#27AE60] size-[20px]' />}
                                    <div className='text-neutral-950 text-[14px] font-semibold'>Yes</div>
                                </div>
                                <div className='flex items-center gap-[10px] mt-[5px] cursor-pointer' onClick={() => { setPreviousState1('NO') }}>
                                    {previousState1 !== "NO" ? <div className='size-[15px] rounded-[2px] border-[#CECEEA] border ml-[3px]'></div> : <IoIosCheckbox className='fill-[#27AE60] size-[20px]' />}
                                    <div className='text-neutral-950 text-[14px] font-semibold'>No</div>
                                </div>
                                {previousState1 === "YES" && (
                                    <div className='w-full  mt-[5px] border border-[#CECEEA] py-2 px-[10px]  rounded-[2px]'>
                                        <input type='text' value={previousStateReason1} placeholder='' className='max-w-full w-full bg-transparent placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setPreviousStateReason1(e.target.value); setPreviousStateReasonError1('') }} />
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className='text-neutral-950 text-[14px] font-medium'>What is the size of your target market or customer base ?</div>
                                <div className='w-full  mt-[5px] border border-[#CECEEA] py-2 px-[10px]  rounded-[2px]'>
                                    <input type='text' value={marketTarget} placeholder='' className='max-w-full w-full bg-transparent font-semibold placeholder:text-[14px] text-[14px] text-[#000] placeholder:text-[#000] focus:outline-none cursor-pointer' onChange={(e) => { setMarketTarget(e.target.value); setMarketTargetError('') }} />
                                </div>
                            </div>
                        </>
                    ) : null}
                    {partnershipName !== "" && (
                        <button className='w-full p-[10px] rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] text-[#2A2200] text-[18px] font-semibold text-center' onClick={(e) => { handleSubmit(e) }}>Submit</button>
                    )}
                </div>
            </div>
        </div>
    )
}
