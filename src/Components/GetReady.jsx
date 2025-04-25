import React from 'react'
import { useNavigate } from 'react-router-dom';
import ID from '../Components/Images/IDNum.png'
import warn from '../Components/Images/warn.png'
import person from '../Components/Images/person.png'
import map from '../Components/Images/map.png'

const GetReady = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col mx-auto max-w-[560px] md:p-10 py-10 px-4'>
            <div className='pt-10'>
                <h1 className='text-[28px] font-medium text-[#1D1C1F] text-center'>Get ready to verify your identity</h1>
                <p className='text-[#525154] text-[14px] font-normal text-center'>
                    To keep your account secure and compliant, we need a few details from you.
                    Have these ready before you begin.
                </p>
            </div>
            <div className='flex flex-col gap-6 mt-7'>
                <div className='flex gap-2 items-start'>
                    <img className='mt-1' src={person} alt="" />
                    <div>
                        <p className='font-medium text-[16px] text-[#1D1C1F]'>Proof of Identity</p>
                        <p className='text-[#525154] text-[14px] font-normal'>
                            For this step, you'll need to upload one of the following:
                            Your Driver's License, National ID Card, or Passport. Make sure the document is valid
                            and clearly visible.
                        </p>
                    </div>
                </div>
                <div className='flex gap-2 items-start'>
                    <img className='mt-1' src={map} alt="" />
                    <div>
                        <p className='font-medium text-[16px] text-[#1D1C1F]'>Proof of Address</p>
                        <p className='text-[#525154] text-[14px] font-normal'>
                            To complete this step, please upload a recent utility bill along with your full address
                            details.
                        </p>
                    </div>
                </div>
                <div className='flex items-start gap-2'>
                    <img className='mt-1' src={ID} alt="" />
                    <div>
                        <p className='font-medium text-[16px] text-[#1D1C1F]'>Your Taxpayer Identification Number</p>
                        <p className='text-[#525154] text-[14px] font-normal'>
                            To complete this step, you’ll need to provide your Tax Identification Number (TIN)
                            details.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex items-start gap-2 bg-[#E8E1F5] text-[#431594] rounded-lg my-7 py-3 px-4'>
            <img className='mt-1' src={warn} alt="" />
            <p>
                    Ensure your documents are valid and clearly visible before uploading. We collect this information
                    to verify your identity and provide you with a secure and seamless experience.
                </p>
            </div>
            <div className='flex gap-2'>
                <button
                    className='p-3 rounded-lg w-[25%] border-[1.5px] border-black/10'
                    onClick={() => {
                        navigate(-1)
                        window.scrollTo(0, 0)
                    }}
                >
                    Cancel
                </button>
                <button
                    className='p-3 rounded-lg bg-[#531CB3] text-white w-[80%]'
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