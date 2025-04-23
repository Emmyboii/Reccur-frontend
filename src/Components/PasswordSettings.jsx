import React from 'react'

const PasswordSettings = (props) => {
    const { TransactionType } = props

    return (
        <div className={TransactionType === 'password' ? 'flex flex-col gap-10 lg:w-[80%]' : 'hidden'}>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[18px] font-medium text-[#1D1C1F]'>Password settings</p>
                    <p className='text-[14px] font-normal text-[#525154]'>Update your password</p>
                </div>
                <button className='text-[#531CB3] text-[14px] font-medium bg-[#E8E1F5] px-4 py-[10px] rounded-lg'>Save changes</button>
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>Current password</p>
                </div>
                <input
                    type="text"
                    name=""
                    id=""
                    className='rounded-lg py-[10px] sm:w-[70%] px-[14px] border border-[#D2D0D6]'
                    placeholder='Your current password'
                />
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>New password</p>
                </div>
                <input
                    type="text"
                    name=""
                    id=""
                    className='rounded-lg py-[10px] sm:w-[70%] px-[14px] border border-[#D2D0D6]'
                    placeholder='Your new password'
                />
            </div>
        </div>
    )
}

export default PasswordSettings