import React, { useState } from 'react'
import Logo from '../Components/Images/Logomark2.png';
import arrow from '../Components/Images/arrowRight.png';
import { IoMdWarning } from 'react-icons/io';

const ForgotPassword = () => {

    const [formData, setFormData] = useState({
        email: ''
    })

    const [validationError, setValidationError] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ message: '', type: '' });
    const [showModal, setShowModal] = useState(false);

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let error = {}

        if (!emailRegex.test(formData.email)) {
            error.email = 'Please Enter a Valid Email address.'
        }

        setValidationError(error)
        return Object.keys(error).length === 0;
    }

    const Reset = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            console.log("Validation failed!");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/forgotpassword`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json();

            if (!response.ok) {
                setStatus({ message: data.error, type: 'error' })
                setShowModal(true)
                throw new Error(data.message);
            } else {
                setStatus({ message: data.message, type: 'success' })
                setShowModal(true)
                console.log('Signup successful:', data);
            }

        } catch (error) {
            console.error('Error during signup:', error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className='flex flex-col gap-24 pb-24'>
            <div className='py-4 px-20 flex items-center border-b border-b-[#F9F7FC] justify-between'>
                <div className='flex gap-2'>
                    <img src={Logo} alt="" />
                    <p className='text-[#1D1C1F] text-[20px] font-semibold'>reccur</p>
                </div>
                <div className='flex gap-3'>
                    <a href="/login">
                        <button className='py-3 px-5 w-[91px]'>Sign in</button>
                    </a>
                    <a href="/signup">
                        <button className='bg-[#531CB3] text-white flex gap-3 items-center justify-center py-3 px-5 w-[154px] rounded-lg'>
                            Get started
                            <img src={arrow} alt="" />
                        </button>
                    </a>
                </div>
            </div>
            <div className='mx-auto flex flex-col gap-8 w-[400px]'>
                <div className='flex flex-col gap-4 items-center'>
                    <p className='text-[#1D1C1F] text-[36px] font-semibold'>Forgot password</p>
                    <p className='text-[16px] font-normal text-[#525154] text-center'>No need to worry, we're here to assist. We'll send a recovery link to the email on file if we have it.</p>
                </div>
                <form onSubmit={Reset} className='flex flex-col gap-6 text-[14px] font-medium text-[#525154]' action="">
                    {showModal && (
                        <div className={status.type === 'error' ? 'bg-red-500 text-white p-2 rounded-md flex items-center justify-between' : 'bg-green-500 text-white p-2 rounded-md flex items-center justify-between'}>
                            <p className='text-[17px] font-bold'>
                                {status.message}
                            </p>
                            <IoMdWarning className='text-[25px]' />
                        </div>
                    )}
                    <div className='flex flex-col gap-[6px]'>
                        <p className='text-[14px] font-medium text-[#525154]'>Email</p>
                        <input
                            className='w-full px-[14px] py-[10px] rounded-lg border border-[#D2D0D6]'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData(e.target.value)}
                            id=""
                            placeholder='Enter your email'
                            required
                        />
                        {validationError.email && <p className='text-red-500 text-[14px]'>{validationError.email}</p>}
                        <a href='/' className='text-[#531CB3] mt-4 text-[14px] font-medium'>Can’t access your email?</a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <button
                            className={`text-white mt-2 flex gap-3 items-center justify-center py-3 px-5 w-[179px] rounded-lg ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                'Sending...'
                            ) : (
                                'Send recovery link'
                            )}
                        </button>
                    </div>
                </form>
                <hr className='border border-[#E6E4EB]' />
                <a href='/login' className='text-[#531CB3] cursor-pointer text-center'>Return to Sign in</a>
            </div>
        </div>
    )
}

export default ForgotPassword