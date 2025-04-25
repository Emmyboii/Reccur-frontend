import React, { useState } from 'react'
import OffToggle from '../Components/Images/OffToggle.png';
import OnToggle from '../Components/Images/OnToggle.png';

const InvoiceSettings = (props) => {
    const { TransactionType } = props

    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)

    return (
        <div className={TransactionType === 'Invoice' ? 'flex flex-col gap-10 lg:w-[90%]' : 'hidden'}>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[18px] font-medium text-[#1D1C1F]'>Invoice settings</p>
                    <p className='sp:text-[14px] text-[13px] font-normal text-[#525154]'>Update your invoice preferences</p>
                </div>
                <button className='text-[#531CB3] text-[14px] font-medium bg-[#E8E1F5] sa:px-4 px-2 py-[10px] rounded-lg'>Save changes</button>
            </div>
            <div className='flex sm:flex-row flex-col gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>Send automatically</p>
                </div>
                <div className='flex flex-col gap-2 sm:w-[70%]'>
                    <div className='flex items-center gap-2'>
                        {toggle1 ? (
                            <img
                                className='cursor-pointer'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggle1(false)}
                            />

                        ) : (
                            <img
                                className='cursor-pointer'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggle1(true)}
                            />
                        )}
                        <p className='text-[16px] font-medium text-[#302F33]'>Send invoice immediately</p>
                    </div>
                    <div className='ml-[46px]'>
                        <p className='text-[#525154] text-[16px] font-normal'>
                            Send invoices immediately as they are created. Enabling this would skip drafts
                            and send your invoice directly to your customer.This will enable a 10 sec callback
                            in case you need to make adjustments. We've always got your back.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col gap-5'>
                <div className='sm:w-[40%]'>
                    <p className='text-[14px] font-medium text-[#1D1C1F]'>Automated emails</p>
                </div>
                <div className='flex flex-col gap-2 sm:w-[70%]'>
                    <div className='flex items-center gap-2'>
                        {toggle2 ? (
                            <img
                                className='cursor-pointer'
                                src={OnToggle}
                                alt=""
                                onClick={() => setToggle2(false)}
                            />

                        ) : (
                            <img
                                className='cursor-pointer'
                                src={OffToggle}
                                alt=""
                                onClick={() => setToggle2(true)}
                            />
                        )}
                        <p className='text-[16px] font-medium text-[#302F33]'>Send automated reminder for invoices</p>
                    </div>
                    <div className='ml-[46px]'>
                        <p className='text-[#525154] text-[16px] font-normal'>
                            Send your clients a nudge when they have not responded to your invoice after the diue period.
                        </p>
                    </div>
                </div>
            </div>
            {toggle2 && (
                <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                    <div className='sm:w-[40%]'>
                        <p className='text-[14px] font-medium text-[#1D1C1F]'>Nudge amount</p>
                        <p className='text-[14px] font-normal text-[#525154]'>Select the duration for the automated emails.</p>
                    </div>
                    <select
                        className="rounded-lg py-[10px] sm:w-[70%] outline-none px-[14px] border border-[#D2D0D6] appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%227%22%20viewBox%3D%220%200%2012%207%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1%201L6%206L11%201%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center]"
                        name=""
                        id=""
                    >
                        <option value="">3 days</option>
                        <option value="">5 days</option>
                        <option value="">10 days</option>
                    </select>
                </div>
            )}
        </div >
    )
}

export default InvoiceSettings