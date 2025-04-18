import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const VerifyNumber = () => {
    const location = useLocation()
    const navigate = useNavigate();

    const [verify, setVerify] = useState(false)

    return (
        <div className='flex flex-col max-w-[540px] p-[40px] mx-auto'>
            <div>
                <h1 className='text-[30px] text-center'>Verify Your Number</h1>
                {verify ? (
                    <p className='text-black/60 text-center'>
                        Enter the 6 digit code sent to (+234) 900000000
                    </p>
                ) : (
                    <p className='text-black/60 text-center'>
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
                            name=""
                            id=""
                        />
                    </div>
                    <div className='flex gap-2 mt-7'>
                        <button
                            className='p-3 rounded-lg w-[30%] border-[1.5px] border-black/10'
                            onClick={() => {
                                setVerify(!verify)
                                window.scrollTo(0, 0)
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className='p-3 rounded-lg bg-[#411c87] text-white w-[70%]'
                            onClick={() => {
                                navigate('/verifyaddress')
                                window.scrollTo(0, 0)
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='mt-12 text-black/70'>
                        <label htmlFor="number">Phone Number</label>
                        <div className='flex mt-1'>
                            <input
                                className='border-[1.5px] border-black/20 rounded-md placeholder-black w-full pl-[126px] p-2 outline-none'
                                type="number"
                                name=""
                                id="number"
                                placeholder='9000000000'
                            />
                            <div className='flex gap-1 items-center ml-[-96%]'>
                                NG +(234)
                                <IoIosArrowDown className='mt-[2px]' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-7'>
                        <button
                            className='p-3 rounded-lg w-[30%] border-[1.5px] border-black/10'
                            onClick={() => {
                                navigate(-1)
                                window.scrollTo(0, 0)
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className='p-3 rounded-lg bg-[#411c87] text-white w-[70%]'
                            onClick={() => {
                                setVerify(!verify)
                                window.scrollTo(0, 0)
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VerifyNumber