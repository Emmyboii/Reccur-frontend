import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import 'react-phone-input-2/lib/style.css';
import CountryCode from './CountryCode';

const VerifyNumber = () => {
    const location = useLocation()

    const [verify, setVerify] = useState(false)
    const [validationError, setValidationError] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [phoneCode, setPhoneCode] = useState('');
    const [selectedCode, setSelectedCode] = useState(CountryCode[122]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (country) => {
        setSelectedCode(country);
        setIsOpen(false);
        setPhoneCode(country.code)
    };

    const [formData, setFormData] = useState({
        phone_number: '',
        phone_country_code: phoneCode
    })

    const handleFormData = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const validateForm = () => {
        const phone_NumberRegex = /^.{10,}$/;

        let error = {}

        if (!phone_NumberRegex.test(formData.phone_number)) {
            error.phone_number = 'Phone number must contain a minimum of 10 digits.'
        }

        setValidationError(error)
        return Object.keys(error).length === 0;
    }

    const verifyNumber = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            console.log("Validation failed!");
            return;
        }

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/create-kyc`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'KYC failed');
            } else {
                console.log('KYCAdded:', data);
                setVerify(!verify)
            }

        } catch (error) {
            console.error('Error during KYC:', error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className='flex flex-col max-w-[540px] md:p-10 py-10 px-4 mx-auto'>
            <div>
                <h1 className='text-[28px] font-medium text-[#1D1C1F] text-center'>Verify Your Number</h1>
                {verify ? (
                    <p className='text-[#525154] text-[14px] font-normal text-center'>
                        Enter the 6 digit code sent to (+234) 900000000
                    </p>
                ) : (
                    <p className='text-[#525154] text-[14px] font-normal text-center'>
                        We'll send a single-use verification code to your phone.
                    </p>
                )}
            </div>
            <div className='flex items-center justify-center gap-2 mt-5 transition-all duration-300'>
                <p className={location.pathname === '/verifynumber' ? 'bg-[#411c87] h-1 w-20 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/verifyaddress' ? 'bg-gray-300 h-1 w-5 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/verifyidentity' ? 'bg-gray-300 h-1 w-5 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
                <p className={location.pathname === '/uploadDocument' ? 'bg-gray-300 h-1 w-5 rounded-md' : 'bg-gray-300 h-1 w-5 rounded-md'}></p>
            </div>
            {verify ? (
                <div className='text-black/70'>
                    <div className='mt-12'>
                        <label htmlFor="code">Code</label>
                        <input
                            className='mt-1 border-[1.5px] border-black/20 rounded-md w-full p-2 outline-none'
                            type="number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={(e) => setFormData(e.target.value)}
                            id=""
                            required
                        />
                    </div>
                    <div className='flex gap-2 mt-7'>
                        <button
                            className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                            onClick={() => {
                                setVerify(!verify)
                                window.scrollTo(0, 0)
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className='p-3 rounded-lg bg-[#531CB3] text-white w-[80%]'
                            onClick={() => {
                                window.location.replace('/dashboard/verifyaddress')
                                window.scrollTo(0, 0)
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='mt-12 text-[#525154] text-[14px] font-normal'>
                        <label htmlFor="number">Phone Number</label>
                        <div className='mt-1 relative'>
                            <input
                                className='border-[1.5px] border-black/20 rounded-md placeholder-black w-full pl-[126px] p-2 outline-none'
                                type="number"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleFormData}
                                id="number"
                                required
                                placeholder='9000000000'
                            />
                            <div className="absolute top-[5px] left-1 w-[120px]">
                                <div
                                    className="flex items-center justify-between gap- p-1 border-none rounded cursor-pointer bg-transparent"
                                    onClick={toggleDropdown}
                                >
                                    {selectedCode.name} ({selectedCode.code})
                                    <IoIosArrowDown />
                                </div>

                                {isOpen && (
                                    <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-md max-h-60 overflow-y-auto">
                                        {CountryCode.map((country, index) => (
                                            <div
                                                key={index}
                                                onClick={() => handleSelect(country)}
                                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {country.name} ({country.code})
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {validationError.phone_number && <p className='text-red-500 text-[14px]'>{validationError.phone_number}</p>}
                        </div>
                    </div>
                    <div className='flex gap-2 mt-8'>
                        <button
                            className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                            onClick={() => {
                                window.location.replace('/dashboard/getready')
                                window.scrollTo(0, 0)
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className={`p-[10px] px-4 rounded-lg text-white w-[80%] ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                            onClick={(e) => {
                                setVerify(!verify)
                                verifyNumber(e)
                                window.scrollTo(0, 0)
                            }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                'Loading...'
                            ) : (
                                'Continue'
                            )}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VerifyNumber