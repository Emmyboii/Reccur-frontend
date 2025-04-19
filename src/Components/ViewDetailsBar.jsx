import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context'
import close from '../Components/Images/x-close.png';
import menus from '../Components/Images/menu.png';

const ViewDetailsBar = () => {

    const { handleViewDetails, viewDetails, handleDeleteProfile, handleProfileEdit } = useContext(Context)

    const [Transaction, setTransaction] = useState(1)

    const Payment = [
        {
            Payments: '#RC787024',
            PaymentDate: <p>07/05/2016</p>,
            Amount: ' $2,097'
        },
        {
            Payments: '#RC787024',
            PaymentDate: <p>07/05/2016</p>,
            Amount: ' $2,097'
        },
        {
            Payments: '#RC787024',
            PaymentDate: <p>07/05/2016</p>,
            Amount: ' $2,097'
        },
        {
            Payments: '#RC787024',
            PaymentDate: <p>07/05/2016</p>,
            Amount: ' $2,097'
        },
        {
            Payments: '#RC787024',
            PaymentDate: <p>07/05/2016</p>,
            Amount: ' $2,097'
        },
        {
            Payments: '#RC787024',
            PaymentDate: <p>07/05/2016</p>,
            Amount: ' $2,097'
        }
    ]

    return (
        <div className={`fixed top-0 h-screen bg-white p-10 px- duration-700 text-black z-30 overflow-auto ${viewDetails ? 'w-[40%] right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex gap-2 justify-between'>
                <div>
                    <h1 className='text-[19px] font-medium text-black/80'>Samantha Tino</h1>
                    <p className='text-black/60'><span className='text-[#491f97]'>sam@tino.com •</span> Biffco Enterprises Ltd.</p>
                </div>
                <img
                    className='size-5 mt-1' src={close} alt=""
                    onClick={handleViewDetails}
                />
            </div>
            <div className='flex gap-2 mt-5'>
                <button
                    onClick={() => {
                        handleDeleteProfile()
                    }}
                    className='p-2 px-4 border-[1.5px] rounded-lg'
                >
                    Delete Profile
                </button>
                <button
                    onClick={() => {
                        handleProfileEdit()
                    }}
                    className='p-2 px-4 bg-[#E8E1F5] text-[#531CB3] border rounded-lg'
                >
                    Edit Profile
                </button>
                <button
                    onClick={() => {
                        handleViewDetails()
                    }}
                    className='p-2 px-4 bg-[#531CB3] text-white border rounded-lg'
                >
                    Send Money
                </button>
            </div>
            {Transaction > 0 ? (
                <div>
                    <div className='mt-7 border rounded-lg p-5 flex flex-col gap-3'>
                        <p className='text-[18px] font-medium text-[#302F33]'>Summary</p>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#525154]'>Amount Sent</p>
                                <p className='text-[#1D1C1F] text-[20px] font-semibold'>$1,440.40</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#525154]'>Number of Transactions</p>
                                <p className='text-[#1D1C1F] text-[20px] font-semibold'>6</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <p className='text-[20px] text-[#302F33]'>Transactions</p>
                        <div className='grid grid-cols-3 gap-5 py-3 border-b border-b-black/50 text-[#525154]'>
                            <p>Payments</p>
                            <p>Payment Date</p>
                            <p>Amount</p>
                        </div>
                        {Payment.map((pay, i) => (
                            <div key={i} className='grid grid-cols-3 gap-5 py-3 border-b border-b-black/50 text-[#525154]'>
                                <p>{pay.Payments}</p>
                                <p>{pay.PaymentDate}</p>
                                <div className='flex items-center gap-10'>
                                    {pay.Amount}
                                    <p
                                        className={`font-semibold text-[18px] text-black/60 cursor-pointer`}
                                    >
                                        <img src={menus} alt="" />
                                    </p>
                                </div>
                            </div>
                        ))}
                        <p className='text-[#78757A] mt-3'>6 items</p>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='mt-7 border rounded-lg p-5 flex flex-col gap-3'>
                        <p className='text-[18px] font-medium text-[#302F33]'>Summary</p>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#525154]'>Amount Sent</p>
                                <p className='text-[#1D1C1F] text-[20px] font-semibold'>0</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#525154]'>Number of Transactions</p>
                                <p className='text-[#1D1C1F] text-[20px] font-semibold'>0</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7 border-2 border-black/30 bg-[#F9F7FC] border-dashed rounded-lg p-9 flex flex-col gap-6'>
                        <p className='text-[20px] font-medium text-center'>No transactions yet</p>
                        <button className='bg-[#531CB3] text-white py-[10px] mx-auto px-4 rounded-lg'>Create Invoice</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ViewDetailsBar