import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Context'
import { useNavigate } from 'react-router-dom'

const AdvancedSettings = (props) => {
    const { TransactionType } = props

    const navigate = useNavigate()

    const [onDelete, setOnDelete] = useState(false)
    const [count, setCount] = useState(5);

    const { setDeleted, handleNoDelete, deleted } = useContext(Context)

    useEffect(() => {
        if (onDelete) {
            if (count === 0) {
                setDeleted(true)
                setTimeout(() => {
                    setDeleted(false)
                    navigate('/')
                }, 3000)
                return
            }
            const timer = setTimeout(() => {
                setCount(prev => prev - 1);
            }, 1500);

            return () => clearTimeout(timer);
        } else {
            setCount(5)
        }
    }, [count, setDeleted, setCount, navigate, onDelete]);

    const handleCancel = () => {
        if (deleted) {
            return
        } else {
            setOnDelete(false)
            handleNoDelete()
        }
    }

    return (
        <div className={TransactionType === 'Advanced' ? 'flex flex-col gap-10 lg:w-[90%]' : 'hidden'}>
            <div className='flex flex-col gap-1'>
                <p className='text-[18px] font-medium text-[#1D1C1F]'>Advanced settings</p>
            </div>
            <div className='flex md:flex-row flex-col md:gap-5 gap-8'>
                <div className='md:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F] mb-1'>Danger zone</p>
                    <p className='text-[14px] font-normal text-[#525154]'>
                        Deleting your account will delete all of your client information and invoices,
                        as well as any payment made and payout information.
                    </p>
                </div>
                {onDelete ? (
                    <div className='md:w-[70%]'>
                        {count === 0 ? (
                            <p className='text-[#1D1C1F] text-[14px] font-normal'>Your account has been deleted.</p>
                        ) : (
                            <p className='text-[#1D1C1F] text-[14px] font-normal'>Your account will be deleted in  {count}...</p>
                        )}
                        <span
                            onClick={handleCancel}
                            className={`text-[14px] text-[#531CB3] font-medium mt-1 ${deleted ? 'cursor-not-allowed' : 'text-[#531CB3] cursor-pointer'}`}
                        >
                            Cancel deletion
                        </span>
                    </div>
                ) : (
                    <div className='flex flex-col gap-4 md:w-[70%]'>
                        <p className='text-[14px] font-normal text-[#1D1C1F]'>
                            Uh... Enter the email address (ma***.com) associated with your account to continue.
                        </p>
                        <input
                            type="text"
                            name=""
                            id=""
required
                            className='rounded-lg py-[10px] px-[14px] border border-[#D2D0D6]'
                            placeholder='Your email address'
                        />
                        <button
                            onClick={() => setOnDelete(true)}
                            className='text-white rounded-lg py-[10px] mt-3 md:w-[40%] 2xl:w-[30%] sp:w-[50%] w-[65%] text-[14px] font-medium px-4 bg-[#EF4444]'
                        >
                            Delete your account
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default AdvancedSettings