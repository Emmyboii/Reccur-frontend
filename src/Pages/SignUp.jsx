import React, { useState } from 'react'
import Logo from '../Components/Images/Logomark2.png';
import arrow from '../Components/Images/arrowRight.png';
import google from '../Components/Images/Google.png';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IoMdWarning } from 'react-icons/io';

const SignUp = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    })

    const [showPassword, setShowPassword] = useState(false)
    const [validationError, setValidationError] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ message: '', type: '' });
    const [showModal, setShowModal] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setValidationError((prev) => ({ ...prev, [e.target.name]: '' }));
    }

    const validateForm = () => {
        const passwordRegex = /^.{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let error = {}

        if (!emailRegex.test(formData.email)) {
            error.email = 'Please Enter a Valid Email address.'
        }

        if (!passwordRegex.test(formData.password)) {
            error.password = 'Password must contain a minimum of 8 characters.'
        }

        setValidationError(error)
        return Object.keys(error).length === 0;
    }

    const SignUp = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            console.log("Validation failed!");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`${process.env.BACKEND_URL}/signup`, {
                method: 'POST',
                credentials: "include",
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
                throw new Error(data.message || 'Signup failed');
            } else {
                setStatus({ message: data.message, type: 'success' })
                setShowModal(true)
                console.log('Signup successful:', data);
                window.location.replace('/login')
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
                    <p className='text-[#1D1C1F] text-[36px] font-semibold'>Sign up to reccur</p>
                    <p className='text-[16px] font-normal text-[#525154]'>Psst! it’s free!</p>
                </div>
                <form onSubmit={SignUp} className='flex flex-col gap-6 text-[14px] font-medium text-[#525154]' action="">
                    {showModal && (
                        <div className={status.type === 'error' ? 'bg-red-500 text-white p-2 rounded-md flex items-center justify-between' : 'bg-green-500 text-white p-2 rounded-md flex items-center justify-between'}>
                            <p className='text-[17px] font-bold'>
                                {status.message}
                            </p>
                            <IoMdWarning className='text-[25px]' />
                        </div>
                    )}
                    <div className='flex flex-col gap-[6px]'>
                        <p className='text-[14px] font-medium text-[#525154]'>First Name</p>
                        <input
                            className='w-full px-[14px] py-[10px] rounded-lg border border-[#D2D0D6]'
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            id=""
                            placeholder='Enter your first name'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                        <p className='text-[14px] font-medium text-[#525154]'>Last Name</p>
                        <input
                            className='w-full px-[14px] py-[10px] rounded-lg border border-[#D2D0D6]'
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            id=""
                            placeholder='Enter your last name'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                        <p className='text-[14px] font-medium text-[#525154]'>Email</p>
                        <input
                            className='w-full px-[14px] py-[10px] rounded-lg border border-[#D2D0D6]'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            id=""
                            placeholder='Enter your email'
                            required
                        />
                        {validationError.email && <p className='text-red-500 text-[14px]'>{validationError.email}</p>}
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                        <p className='text-[14px] font-medium text-[#525154]'>Password</p>
                        <div className='flex items-center'>
                            <input
                                className='w-full px-[14px] py-[10px] rounded-lg border border-[#D2D0D6]'
                                onChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                id="password"
                                placeholder='Create a password'
                                required
                            />
                            {formData.password && (
                                showPassword ?
                                    <IoEyeOffOutline onClick={togglePasswordVisibility} className='ml-[-30px] size-4 cursor-pointer' />
                                    :
                                    <IoEyeOutline onClick={togglePasswordVisibility} className='ml-[-30px] size-4 cursor-pointer' />
                            )}
                        </div>
                        {validationError.password && <p className='text-red-500 text-[14px]'>{validationError.password}</p>}
                        {!validationError.password && <p className='text-[#78757A] text-[14px] font-normal'>8+ characters, please.</p>}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <button
                            className={`text-white mt-2 flex gap-3 items-center justify-center py-3 px-5 w-[179px] rounded-lg ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                'Loading...'
                            ) : (
                                'Create account'
                            )}
                        </button>
                        <p className='text-center px-1'>By clicking “Create account” you agree to reccur’s <span className='text-[#531CB3] cursor-pointer'>Privacy policy and Terms of service.</span></p>
                    </div>
                </form>
                <hr className='border border-[#E6E4EB]' />
                <button className='px-4 py-3 w-full flex justify-center gap-3 rounded-lg border border-[#E6E4EB]'>
                    <img src={google} alt="" />
                    <p className='text-[#525154] font-medium text-[16px]'>Sign up with Google</p>
                </button>
                <p className='text-[14px] font-normal text-[#525154] text-center'>Already have an account? <a href='/login' className='text-[#531CB3] cursor-pointer'>Sign in</a></p>
            </div>
        </div>
    )
}

export default SignUp