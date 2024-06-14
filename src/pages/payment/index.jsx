import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CountryDropdown } from 'react-country-region-selector';


export default function Payment({ priceIndex }) {

    const [showAll, setShowAll] = React.useState(false);
    const [organisationName, setOrganisationName] = React.useState('');
    const [organisationNameError, setOrganisationNameError] = React.useState(false);
    const [membersCount, setMemberCount] = React.useState('');
    const [membersCountError, setMemberCountError] = React.useState(false);
    const [totalAmount, setTotalAmount] = React.useState(0);
    const [country, setCountry] = React.useState('India');
    const [streetName, setStreetName] = React.useState('');
    const [streetNameError, setStreetNameError] = React.useState(false);
    const [cityName, setCityName] = React.useState('');
    const [cityNameError, setCityNameError] = React.useState(false);
    const [stateName, setStateName] = React.useState('');
    const [stateNameError, setStateNameError] = React.useState(false);
    const [postalCode, setPotalCode] = React.useState('');
    const [postalCodeError, setPotalCodeError] = React.useState(false);
    const [GSTIN, setGSTIN] = React.useState('');
    const [paymentMethod, setPaymentMethod] = React.useState('Pay By Card');
    const [cardNumber, setCardNumber] = React.useState('');
    const [cardNumberError, setCardNumberError] = React.useState(false);
    const [expiry, setExpiry] = React.useState('');
    const [expiryError, setExpiryError] = React.useState(false);
    const [cvvNum, setCvvNum] = React.useState('');
    const [cvvNumError, setCvvNumError] = React.useState(false);
    const [accountNumber, setAccountNumber] = React.useState('');
    const [accountNumberError, setAccountNumberError] = React.useState(false);
    const [ifscCode, setIfscCode] = React.useState('');
    const [ifscCodeError, setIfscCodeError] = React.useState(false);
    const [accountHolderName, setAccountHolderName] = React.useState('');
    const [accountHolderNameError, setAccountHolderNameError] = React.useState(false);
    const [submit, setSumbit] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [selectedCurrency, setSelectedCurrency] = React.useState('USD');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const handleSeeMore = () => {
        setShowAll(true);
    };

    React.useEffect(() => {
        let total;
        if (selectedCurrency === "USD"){
            total = 13 * membersCount;
        }
        else if (selectedCurrency === "INR"){
                total = 999 * membersCount;
        }
        else if (selectedCurrency === "EURO"){
            total = 12 * membersCount;
        }
        else if (selectedCurrency === "YEN"){
            total = 19999 * membersCount;
        }
        setTotalAmount(total)
    }, [membersCount])

    const index1 = [
        { title: "Channels" },
        { title: "Chats" },
        { title: "Projects and Task management" },
        { title: "Artificial intelligence" },
        { title: "People and work teams" },
        { title: "Goals" },
        { title: "Integration with basic 5 softwares" },
        { title: "Organisation chart" },
        { title: "Users upto 50" },
        { title: "Suitable for small teams" }
    ]

    const handleNameChange = (e) => {
        if (/^[\x20-\x7E]*$/.test(e.target.value)) {
            setOrganisationName(e.target.value)
            setOrganisationNameError(false);
        }
        if (e.target.value === "") {
            setOrganisationNameError(false);
        }
    }

    const handleMemberCountChange = (e) => {
        const memberCount = e.target.value.replace(/\D/g, '');
        setMemberCount(memberCount);
        if (e.target.value === "" || memberCount !== "") {
            setMemberCountError(false)
        }
    }

    const handleStreetName = (e) => {
        if (/^[\x20-\x7E]*$/.test(e.target.value)) {
            setStreetName(e.target.value)
        }
        if (e.target.value === "" || e.target.value !== "") {
            setStreetNameError(false)
        }
    }

    const handleCityName = (e) => {
        if (/^[\x20-\x7E]*$/.test(e.target.value)) {
            setCityName(e.target.value)
        }
        if (e.target.value === "" || e.target.value !== "") {
            setCityNameError(false)
        }
    }

    const handleStateName = (e) => {
        if (/^[\x20-\x7E]*$/.test(e.target.value)) {
            setStateName(e.target.value)
        }
        if (e.target.value === "" || e.target.value !== "") {
            setStateNameError(false)
        }
    }

    const handlePostalCodeChange = (e) => {
        let postalCode = e.target.value.replace(/\D/g, '');
        setPotalCode(postalCode);
        if (e.target.value === "" || postalCode !== "") {
            setPotalCodeError(false)
        }
    }

    const handleGSTINChange = (e) => {
        const value = e.target.value.toUpperCase(); // Convert to uppercase
        const sanitizedValue = value.replace(/[^A-Z0-9]/g, ''); // Remove non-uppercase letters and non-digits
        setGSTIN(sanitizedValue); // Update state with sanitized value
    };

    const handleCardNumber = (e) => {
        let card = e.target.value.replace(/\D/g, '');
        if (card.length > 16) {
            card = card.slice(0, 16);
        }
        card = card.match(/.{1,4}/g)?.join(' ') || '';
        setCardNumber(card);
        if (e.target.value === "" || card !== "") {
            setCardNumberError(false);
        }
    };

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 4) {
            value = value.slice(0, 4);
        }
        if (value.length >= 3) {
            const month = value.slice(0, 2);
            const year = value.slice(2, 4);
            if (parseInt(month, 10) > 12) {
                value = '12/' + year;
            } else {
                value = month + '/' + year;
            }
        } else if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        setExpiry(value);
        if (e.target.value === "" || value !== "") {
            setCardNumberError(false);
        }
    };

    const handleCvvNumber = (e) => {
        let cvv = e.target.value.replace(/\D/g, '');
        if (cvv.length > 3) {
            cvv = cvv.slice(0, 3);
        }
        setCvvNum(cvv);
        if (e.target.value === "" || cvv !== "") {
            setCvvNumError(false);
        }
    };

    const handleAccountNumber = (e) => {
        let account = e.target.value.replace(/\D/g, '');
        setAccountNumber(account);
        if (e.target.value === "" || account !== "") {
            setCvvNumError(false);
        }
    };

    const handleIfscCodeChange = (e) => {
        const value = e.target.value.toUpperCase();
        const sanitizedValue = value.replace(/[^A-Z0-9]/g, '');
        setIfscCode(sanitizedValue);
        if (e.target.value === "" || value !== "") {
            setIfscCodeError(false)
        }
    };

    const handleAccountNameChange = (e) => {
        if (/^[\x20-\x7E]*$/.test(e.target.value)) {
            setAccountHolderName(e.target.value)
        }
        if (e.target.value === "" || e.target.value !== "") {
            setAccountHolderNameError(false);
        }
    }

    const handleSubmit = () => {
        if (organisationName === "") {
            setOrganisationNameError(true)
        } else {
            setOrganisationNameError(false)
        }
        if (membersCount === "") {
            setMemberCountError(true)
        } else {
            setMemberCountError(false)
        }
        if (streetName === "") {
            setStreetNameError(true)
        } else {
            setStreetNameError(false)
        }
        if (cityName === "") {
            setCityNameError(true)
        } else {
            setCityNameError(false)
        }
        if (stateName === "") {
            setStateNameError(true)
        } else {
            setStateNameError(false)
        }
        if (postalCode === "") {
            setPotalCodeError(true)
        } else {
            setPotalCodeError(false)
        }
        if (cardNumber === "") {
            setCardNumberError(true)
        } else {
            setCardNumberError(false)
        }
        if (expiry === "") {
            setExpiryError(true)
        } else {
            setExpiryError(false)
        }
        if (cvvNum === "") {
            setCvvNumError(true)
        } else {
            setCvvNumError(false)
        }
        setSumbit(true)
    }

    const handleSubmit1 = () => {
        if (organisationName === "") {
            setOrganisationNameError(true)
        } else {
            setOrganisationNameError(false)
        }
        if (membersCount === "") {
            setMemberCountError(true)
        } else {
            setMemberCountError(false)
        }
        if (streetName === "") {
            setStreetNameError(true)
        } else {
            setStreetNameError(false)
        }
        if (cityName === "") {
            setCityNameError(true)
        } else {
            setCityNameError(false)
        }
        if (stateName === "") {
            setStateNameError(true)
        } else {
            setStateNameError(false)
        }
        if (postalCode === "") {
            setPotalCodeError(true)
        } else {
            setPotalCodeError(false)
        }
        if (accountNumber === "") {
            setAccountNumberError(true)
        } else {
            setAccountNumberError(false)
        }
        if (ifscCode === "") {
            setIfscCodeError(true)
        } else {
            setIfscCodeError(false)
        }
        if (accountHolderName === "") {
            setAccountHolderNameError(true)
        } else {
            setAccountHolderNameError(false)
        }
        setSumbit(true)
    }

    React.useEffect(() => {
        if (paymentMethod === "Pay By Bank" && submit && !organisationNameError && !membersCountError && !streetNameError && !cityNameError && !postalCodeError && !accountNumberError && !ifscCodeError && !accountHolderNameError) {
            setSuccess(true)
        } else if (paymentMethod === "Pay By Card" && submit && !organisationNameError && !membersCountError && !streetNameError && !cityNameError && !postalCodeError && !cardNumberError && !expiryError && !cvvNumError) {
            console.log("object");
            setSuccess(true)
        } else {
            setSuccess(false)
        }
    }, [])

    React.useEffect(() => {
        if (success) {
            setTimeout(() => {
                navigate('/')
            }, 2000);
        }
    }, [success]);

    return (
        <div className='w-full h-full bg-[#FFFFFF]'>
            <div className='w-full bg-[#ffffff] py-[15px] px-[30px] relative' style={{ boxShadow: "0px 0px 4px 0px #00000040" }}>
                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/payment_logo.svg" alt='logo' />
                <h3 className='text-[#000000] text-[20px] nunito-semibold absolute top-[50%] -translate-x-1/2 left-[50%] -translate-y-1/2'>Upgrade <span className='nunito-bold'>workfast.ai workSpace</span> to pro </h3>
            </div>
            <div className='w-10/12 mx-auto py-[32px] grid grid-cols-3'>
                <div className='col-span-2'>
                    <div className='ml-[150px] w-7/12 flex flex-col gap-[27px]'>
                        <div>
                            <h3 className='text-[#000000] text-[20px] nunito-semibold'>1. Organisation info</h3>
                            <div className='py-[27px] border-b-[1px] border-[#D9D9D9] flex flex-col gap-[17px] text-[#000000] nunito-normal text-[16px]'>
                                <div className='flex flex-col gap-[8px] w-full'>
                                    <h3>Organisation name</h3>
                                    <input type='text' value={organisationName} placeholder='Enter your company name' className={`px-[11px] py-[12px] max-w-full border-[1px] rounded-[8px] bg-transparent text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none ${organisationNameError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`} onChange={(e) => { handleNameChange(e) }} />
                                </div>
                                <div className='flex flex-col gap-[8px] w-full'>
                                    <h3>Organisation Members</h3>
                                    <input type='text' value={membersCount} placeholder='Enter your employees count' className={`px-[11px] py-[12px] max-w-full border-[1px] rounded-[8px] bg-transparent text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none ${membersCountError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`} onChange={(e) => { handleMemberCountChange(e) }} />
                                </div>
                                <div className='flex flex-col gap-[8px] w-full'>
                                    <h3>Country or region</h3>
                                    <div className='border-[#D9D9D9] border-[1px] rounded-[8px]'>
                                        <CountryDropdown
                                            value={country}
                                            onChange={(val) => setCountry(val)}
                                            className="country focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[8px] w-full'>
                                    <h3>Address</h3>
                                    <input type='text' value={streetName} placeholder='Street name' className={`px-[11px] py-[12px] max-w-full border-[#D9D9D9] border-[1px] rounded-[8px] bg-transparent text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none ${streetNameError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`} onChange={(e) => { handleStreetName(e) }} />
                                </div>
                                <div className='grid grid-cols-2 w-full gap-[13px]'>
                                    <input type='text' value={cityName} placeholder='City name' className={`px-[11px] py-[12px] max-w-full border-[#D9D9D9] border-[1px] rounded-[8px] bg-transparent text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none ${cityNameError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`} onChange={(e) => { handleCityName(e) }} />
                                    <input type='text' value={stateName} placeholder='State name' className={`px-[11px] py-[12px] max-w-full border-[#D9D9D9] border-[1px] rounded-[8px] bg-transparent text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none ${stateNameError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`} onChange={(e) => { handleStateName(e) }} />
                                    <input type='text' value={postalCode} placeholder='Postal code' className={`px-[11px] py-[12px] max-w-full border-[#D9D9D9] border-[1px] rounded-[8px] bg-transparent text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none ${postalCodeError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`} onChange={(e) => { handlePostalCodeChange(e) }} />
                                </div>
                                <div className='flex flex-col gap-[8px] w-full'>
                                    <h3>GSTIN ID <span className='text-[#5C5C5C]'>(optional)</span></h3>
                                    <input type='text' value={GSTIN} placeholder='12ABCDE3456F7Z8' className='px-[11px] py-[12px] max-w-full border-[#D9D9D9] border-[1px] rounded-[8px] bg-transparent text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none' onChange={(e) => { handleGSTINChange(e) }} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[25px] items-center'>
                            <div className='flex justify-between w-full'>
                                <h3 className='text-[#000000] text-[20px] nunito-semibold'>2. Payment method</h3>
                                <div className='flex items-center gap-[2px]'>
                                    <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Lock.svg" alt='lock' />
                                    <h3 className='text-[#000000] text-[18px] nunito-semibold'>Secure form</h3>
                                </div>
                            </div>
                            <div className='w-full border-b-[1px] border-[#D9D9D9] px-[8px] flex gap-[22px] transition-all duration-500'>
                                <h3 className={`pb-[10px] border-[#FFC700] text-[#000000] text-[20px] nunito-normal cursor-pointer ${paymentMethod === "Pay By Card" ? "border-b-[2px]" : ""}`} onClick={() => { setPaymentMethod('Pay By Card') }}>Pay now</h3>
                                <h3 className={`pb-[10px] border-[#FFC700] text-[#000000] text-[20px] nunito-normal cursor-pointer ${paymentMethod === "Pay By Bank" ? "border-b-[2px]" : ""}`} onClick={() => { setPaymentMethod('Pay By Bank') }}>Pay by bank transfer</h3>
                            </div>
                            {paymentMethod === "Pay By Card" ? (
                                <div className='flex flex-col gap-[25px] items-center w-full'>
                                    <div className='flex flex-col gap-[8px] w-full'>
                                        <h3>Card number</h3>
                                        <div className={`px-[11px] py-[12px] max-w-full border-[1px] rounded-[8px] flex justify-between ${cardNumberError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`}>
                                            <input type='text' value={cardNumber} placeholder='1234 1234 1234 1234' className='bg-transparent max-w-full text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none' onChange={(e) => { handleCardNumber(e) }} />
                                            <div className='flex gap-[4px] items-center'>
                                                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Visa.svg" alt='visa' />
                                                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Mastercard.svg" alt='masterCard' />
                                                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Americanexpress.svg" alt='americanExpress' />
                                                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Paypal.svg" alt='paypal' />
                                                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Bancontact.svg" alt='banContact' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 w-full gap-[13px]'>
                                        <div className='flex flex-col gap-[8px] w-full'>
                                            <h3>Expiry</h3>
                                            <input type='text' value={expiry} placeholder='MM /YY' className={`px-[11px] py-[12px] max-w-full border-[1px] rounded-[8px] bg-transparent text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none ${expiryError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`} onChange={(e) => handleExpiryChange(e)} />
                                        </div>
                                        <div className='flex flex-col gap-[8px] w-full'>
                                            <h3>CVC</h3>
                                            <div className={`px-[11px] py-[12px] max-w-full border-[1px] rounded-[8px] flex justify-between ${cvvNumError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`}>
                                                <input type='text' value={cvvNum} placeholder='CVC' className='bg-transparent max-w-full text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none' onChange={(e) => { handleCvvNumber(e) }} />
                                                <div className='flex gap-[4px] items-center'>
                                                    <img src="https://dz1x1c630cl14.cloudfront.net/webassets/cvv.svg" alt='cvv' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='w-full py-[11px] bg-[#007DE5] rounded-[6px] text-[#FFFFFF] text-[14px] nunito-semibold' onClick={() => { handleSubmit() }}>Purchased Workfast.ai </button>
                                </div>
                            ) : paymentMethod === "Pay By Bank" ? (
                                <div className='flex flex-col gap-[25px] items-center w-full'>
                                    <div className='flex flex-col gap-[8px] w-full'>
                                        <h3>Enter recipient details</h3>
                                        <input type='text' value={accountNumber} placeholder='Bank account number' className={`px-[11px] py-[12px] max-w-full border-[1px] rounded-[8px] bg-transparent text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none ${accountNumberError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`} onChange={(e) => { handleAccountNumber(e) }} />
                                    </div>
                                    <input type='text' value={ifscCode} placeholder='IFSC code' className={`px-[11px] py-[12px] w-full border-[1px] rounded-[8px] bg-transparent text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none ${ifscCodeError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`} onChange={(e) => { handleIfscCodeChange(e) }} />
                                    <input type='text' value={accountHolderName} placeholder='Account holder name' className={`px-[11px] py-[12px] w-full border-[1px] rounded-[8px] bg-transparent text-[15px] text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-[15px] focus:outline-none ${accountHolderNameError ? "border-[#F92A4B]" : "border-[#D9D9D9]"}`} onChange={(e) => { handleAccountNameChange(e) }} />
                                    <button className='w-full py-[11px] bg-[#007DE5] rounded-[6px] text-[#FFFFFF] text-[14px] nunito-semibold' onClick={() => { handleSubmit1() }}>Purchased Workfast.ai </button>
                                </div>
                            ) : null}
                            <div className='flex flex-col gap-[6px] items-center text-[#000000] text-[12px] nunito-normal'>
                                <p>You can cancel your subscription at any time. Purchases made by credit card can't be refunded, although your credit can be transferred to another account.</p>
                                <p>By submitting this form, you confirm that you agree to our <span className='text-[#005998]'>terms of service</span> and <span className='text-[#005998]'>privacy policy.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-[8px] w-full' style={{ boxShadow: "0px 2px 6px 0px #00000040" }}>
                    <div className='px-[22px] py-[11px] bg-[#FFC700] rounded-t-[8px] flex justify-between'>
                        <div>
                            <h3 className='nunito-semibold text-[#000000] text-[20px]'>workfast.ai estimate</h3>
                            <h4 className='nunito-normal text-[#000000] text-[14px]'>Billed monthly</h4>
                        </div>
                        <select id="countries" class="bg-[#FFC700] border border-[#3D3C41] text-[#000000] max-h-[32px] my-auto nunito-semibold text-[14px] rounded-lg  block px-[12px] py-[5px] focus:outline-none" value={selectedCurrency} onChange={handleChange}>
                            <option value="USD">USD</option>
                            <option value="INR">INR</option>
                            <option value="EURO">EURO</option>
                            <option value="YEN">Yen</option>
                        </select>
                    </div>
                    <div className='rounded-b-[8px] py-[32px]'>
                        <div className='px-[24px] border-b-[1px] border-[#D9D9D9] pb-[32px] flex flex-col gap-[22px]'>
                            <h3 className='nunito-semibold text-[#000000] text-[16px]'>Top features:</h3>
                            <ul className='flex flex-col gap-[12px]'>
                                {index1.slice(0, showAll ? index1.length : 4).map((item, index) => (
                                    <div className='flex gap-[2px]' key={index}>
                                        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/check.svg" alt='check' />
                                        <li className='text-[#000000] nunito-normal text-[14px]'>{item.title}</li>
                                    </div>
                                ))}
                            </ul>
                            {!showAll && (
                                <h3 onClick={handleSeeMore} className='text-[#000000] text-[16px] nunito-medium cursor-pointer underline'>See all features</h3>
                            )}
                        </div>
                        <div className='pt-[32px] px-[24px] flex flex-col gap-[32px]'>
                            <div className='flex flex-col gap-[14px] text-[#000000] nunito-normal text-[16px]'>
                                <div className='flex justify-between items-center'>
                                    <h3>{selectedCurrency === "USD" ? '$13' : selectedCurrency === "INR" ? '₹999' : selectedCurrency === "EURO" ? "€12" : "¥1999"} × {membersCount === '' ? 0 : membersCount} members x 1 month</h3>
                                    <h3>{selectedCurrency === "USD" ? '$' : selectedCurrency === "INR" ? '₹' : selectedCurrency === "EURO" ? "€" : "¥"}{totalAmount}</h3>
                                </div>
                                <h3 className='text-[14px]'>You're upgrading for every active member of your team. If new people join or inactive members become active, they'll be added to your next bill.</h3>
                            </div>
                            <div className='w-full py-[22px] border-y-[1px] border-dashed border-[#D9D9D9] flex justify-between text-[#000000] nunito-normal text-[16px]'>
                                <h3>Sales tax</h3>
                                <h3>{selectedCurrency === "USD" ? '$' : selectedCurrency === "INR" ? '₹' : selectedCurrency === "EURO" ? "€" : "¥"}0</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
