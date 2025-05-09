import React, { useRef, useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import Logo from '../Components/Images/Logomark2.png';
import arrow from '../Components/Images/arrowRight.png';

const UpdatePassword = () => {

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    })

    const [validationError, setValidationError] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [status, setStatus] = useState({ message: '', type: '' });
    const [showModal, setShowModal] = useState(false);

    const openModal = useRef()

    const modal = (e) => {
        if (openModal.current === e.target) {
            setShowModal(false)
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setValidationError((prev) => ({ ...prev, [e.target.name]: '' }));
    }

    const validateForm = () => {
        const passwordRegex = /^.{8,}$/;

        let error = {}

        if (!passwordRegex.test(formData.password)) {
            error.password = 'Password must contain a minimum of 8 characters.'
        }

        setValidationError(error)
        return Object.keys(error).length === 0;
    }
    const handleModalClose = () => {
        setShowModal(false);
        if (status.type === 'success' && localStorage.getItem('token')) {
            window.location.replace('/');
        } else if (status.type === 'success') {
            window.location.replace('/login');
        }
    };

    const Update = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            console.log("Validation failed!");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/updatepassword`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json();

            if (!response.ok) {
                setStatus({ message: data.message, type: 'success' })
                setShowModal(true)
                throw new Error(data.message);
            } else {
                setStatus({ message: data.message, type: 'error' })
                console.log('Password Updated:', data);
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
                    <p className='text-[#1D1C1F] text-[36px] font-semibold'>Update your password</p>
                    <p className='text-[16px] font-normal text-[#525154] text-center'>Just to make sure, we'll have you enter your new password twice. Sorry for the extra step.</p>
                </div>
                <form onSubmit={Update} className='flex flex-col gap-6 text-[14px] font-medium text-[#525154]' action="">
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
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                        <p className='text-[14px] font-medium text-[#525154]'>Confirm Password</p>
                        <div className='flex items-center'>
                            <input
                                className='w-full px-[14px] py-[10px] rounded-lg border border-[#D2D0D6]'
                                onChange={handleChange}
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                id="confirmPassword"
                                placeholder='Create a password'
                                required
                            />
                            {formData.confirmPassword && (
                                showConfirmPassword ?
                                    <IoEyeOffOutline onClick={toggleConfirmPasswordVisibility} className='ml-[-30px] size-4 cursor-pointer' />
                                    :
                                    <IoEyeOutline onClick={toggleConfirmPasswordVisibility} className='ml-[-30px] size-4 cursor-pointer' />
                            )}
                        </div>
                        {validationError.password && <p className='text-red-500 text-[14px]'>{validationError.password}</p>}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <button
                            className={`text-white mt-2 flex gap-3 items-center justify-center py-3 px-5 w-[179px] rounded-lg ${isSubmitting ? 'bg-[#E8E1F5]' : 'bg-[#531CB3]'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                'Loading...'
                            ) : (
                                'Update password'
                            )}
                        </button>
                    </div>
                    {showModal && (
                        <div ref={openModal} onClick={modal} className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-[1.5px]'>
                            <div className='bg-white w-[80%] max-w-[500px] rounded-lg text-center p-5'>
                                <h1 className='text-[20px] font-bold'>SUCCESS</h1>
                                <p className='text-[18px]'>{status.message}</p>
                                <button className='bg-black text-white rounded-md p-2 mt-2' onClick={handleModalClose}>OK</button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword