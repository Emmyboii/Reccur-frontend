import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import ID from '../Components/Images/IDNum.png'

const GetReady = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col mx-auto max-w-[560px] py-[30px]'>
            <div>
                <h1 className='text-[30px] text-center'>Get ready to verify your identity</h1>
                <p className='text-black/60 text-center'>
                    To keep your account secure and compliant, we need a few details from you.
                    Have these ready before you begin.
                </p>
            </div>
            <div className='flex flex-col gap-7 mt-5'>
                <div className='flex gap-2 items-'>
                    <FiUser className='text-[50px] mt-[-10px]' />
                    <div>
                        <p className='font-semibold text-[19px]'>Proof of Identity</p>
                        <p>
                            For this step, you'll need to upload one of the following:
                            Your Driver's License, National ID Card, or Passport. Make sure the document is valid
                            and clearly visible.
                        </p>
                    </div>
                </div>
                <div className='flex gap-2 items-'>
                    <PiMapPinAreaDuotone className='text-[30px]' />
                    <div>
                        <p className='font-semibold text-[19px]'>Proof of Address</p>
                        <p>
                            To complete this step, please upload a recent utility bill along with your full address
                            details.
                        </p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <img className='h-5 mt-2' src={ID} alt="" />
                    <div>
                        <p className='font-semibold text-[19px]'>Your Taxpayer Identification Number</p>
                        <p>
                            To complete this step, you’ll need to provide your Tax Identification Number (TIN)
                            details.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 bg-[#e9e0fc] text-[#411c87] rounded-md my-7 p-2'>
                <IoMdInformationCircleOutline className='text-[50px] mt-[-10px]' />
                <p>
                    Ensure your documents are valid and clearly visible before uploading. We collect this information
                    to verify your identity and provide you with a secure and seamless experience.
                </p>
            </div>
            <div className='flex gap-2'>
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
                        navigate('/verifynumber')
                        window.scrollTo(0, 0)
                    }}
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default GetReady