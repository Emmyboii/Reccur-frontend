import React from 'react'
import Green from '../Components/Images/green.png'

const KYC = (props) => {
    const { TransactionType } = props

    return (
        <div className={TransactionType === 'KYC' ? 'flex flex-col gap-10 w-[848px]' : 'hidden'}>
            <div className='flex flex-col gap-1'>
                <p className='text-[18px] font-medium text-[#1D1C1F]'>Verify Your Identity</p>
                <p className='text-[14px] font-normal text-[#525154]'>Help us get to know you better so we can keep your account secure and offer you the best experience.</p>
            </div>
            <div className='flex gap-5'>
                <div className='w-[30%] flex flex-col gap-1'>
                    <div
                        className='text-[14px] font-medium text-[#1D1C1F] flex items-center gap-1'
                    >
                        <p>KYC</p>
                        <p className='rounded-2xl bg-[#ECFDF3] text-[#027A48] py-1 px-3 font-medium text-[14px]'>Verified</p>
                    </div>
                    <p className='text-[14px] font-normal text-[#525154]'>Your tax identification has been successfully verified.</p>
                </div>
                <div className='flex flex-col rounded-lg border text-[#1D1C1F] text-[14px] font-normal border-[#F3F0F7] justify-between w-[60%]'>
                    <div className='flex items-center gap-10'>
                        <p className='py-[14px] px-3 w-[40%]'>Tax identification</p>
                        <div className='flex items-center gap-1 py-[14px] px-3'>
                            <img src={Green} alt="" />
                            <p className='text-[#1CB353]'>Completed</p>
                        </div>
                    </div>
                    <div className='flex items-center border-t border-t-[#F3F0F7] gap-10'>
                        <p className='py-[14px] px-3 w-[40%]'>Passport</p>
                        <div className='flex items-center gap-1 py-[14px] px-3'>
                            <img src={Green} alt="" />
                            <p className='text-[#1CB353]'>Completed</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-10 border-t-[#F3F0F7] border-t'>
                        <p className='py-[14px] px-3 w-[40%]'>Address verification</p>
                        <div className='flex items-center gap-1 py-[14px] px-3'>
                            <img src={Green} alt="" />
                            <p className='text-[#1CB353]'>Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KYC