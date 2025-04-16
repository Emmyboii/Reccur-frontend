import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline, IoMdAddCircle } from "react-icons/io";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import CreateAcctBar from './CreateAcctBar';
import { Context } from '../Context/Context';

const CreateAcct = () => {

    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)
    const [checked6, setChecked6] = useState(false)

    const { handleAcctBar, acctBar } = useContext(Context)

    return (
        <div>
            <div
                className={`w-[80%] h-screen absolute ${acctBar ? 'bg-black/30' : 'hidden'}`}
                onClick={handleAcctBar}
            ></div>
            <div className='flex items-center justify-between px-8 py-5'>
                <div>
                    <p className='text-[20px] font-semibold'>Home</p>
                    <p className='text-[18px]'>Welcome back, Cooper!</p>
                </div>
                <div className='flex items-center gap-4'>
                    <CiSearch className='text-[20px]' />
                    <IoMdNotificationsOutline className='text-[20px]' />
                    <IoMdAddCircle className='text-[30px] text-[#411c87]' />
                </div>
            </div>
            <div className='flex flex-col items-center gap-9 mt-[60px] bg-[#f3f0f6] mx-8 py-10 rounded-md border-2 border-black/70 border-dashed'>
                <div>
                    <p className='text-center font-semibold text-[18px]'>We are here to help you get paid for your work.</p>
                    <p className='text-center mt-1'>Get started by creating your first bank account for any supported country <br /> (e.g., USA, Canada, UK)</p>
                </div>
                <button
                    className="bg-[#411c87] text-white p-3 rounded-lg"
                    onClick={handleAcctBar}
                >
                    Create your first bank account
                </button>
            </div>
            <div className='mt-[25px] mx-8'>
                <h1 className='font-semibold text-[20px]'>Congratulations on taking the first step!</h1>
                <p>Complete these simple steps to get started using reccur.</p>
                <div className='flex justify-between w-[80%] mt-4'>
                    <div className='flex flex-col gap-4'>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={() => setChecked(!checked)}
                        >
                            {checked ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Create your first bank account</p>
                        </div>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked2 ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={() => setChecked2(!checked2)}
                        >
                            {checked2 ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Create your first invoice</p>
                        </div>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked3 ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={() => setChecked3(!checked3)}
                        >
                            {checked3 ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Get your first payment</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked4 ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={() => setChecked4(!checked4)}
                        >
                            {checked4 ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Create your KYC verification</p>
                        </div>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked5 ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={() => setChecked5(!checked5)}
                        >
                            {checked5 ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Make your first withdrawal</p>
                        </div>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked6 ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={() => setChecked6(!checked6)}
                        >
                            {checked6 ? (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
                            ) : (
                                <FaRegCircle className='mt-1 text-black/50' />
                            )}
                            <p>Update your profile</p>
                        </div>
                    </div>
                </div>
            </div>
            <CreateAcctBar />
        </div>
    )
}

export default CreateAcct