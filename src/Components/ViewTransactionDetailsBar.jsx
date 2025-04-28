import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import close from '../Components/Images/x-close.png';
import menu from '../Components/Images/menu.png';

const ViewTransactionDetailsBar = () => {

    const {
        handleViewTransactionDetails,
        viewTransactionDetails,
        selectedTransactionDetails,
        overViewTransactionDetails,
        handleOverViewTransactionDetails
    } = useContext(Context)

    const onClick = () => {
        if (viewTransactionDetails) {
            handleViewTransactionDetails()
        } else if (overViewTransactionDetails) {
            handleOverViewTransactionDetails()
        }
    }

    return (
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-3 duration-700 transition-all text-black z-30 overflow-auto ${viewTransactionDetails || overViewTransactionDetails ? 'sm:w-[40%] w-full right-0' : 'right-[-100%]'}`}>
            <div className='flex gap-2 justify-between'>
                <div>
                    <p className='text-[24px] font-medium text-[#1D1C1F]'>Transaction details</p>
                    <p className='text-[#525154]'>Invoice has not been sent to payer yet.</p>
                </div>
                <img
                    className='size-5 mt-1 cursor-pointer' src={close} alt=""
                    onClick={onClick}
                />
            </div>
            <div className='flex gap-2 mt-5'>
                <button
                    onClick={() => {
                        handleViewTransactionDetails()
                    }}
                    className='p-2 px-4 border-[#E6E4EB] text-[#525154] border rounded-lg'
                >
                    Download
                </button>
                <button
                    onClick={() => {
                        handleViewTransactionDetails()
                    }}
                    className='p-2 px-4 border-[#E6E4EB] text-[#525154] border rounded-lg'
                >
                    Share
                </button>
            </div>
            <p className='text-[20px] flex items-center justify-between mt-12 mb-7 font-medium text-[#1D1C1F]'>
                Invoice #RC787024
                <img className='cursor-pointer' src={menu} alt="" />
            </p>
            <div className='flex justify-between border-b-[1.5px] pb-6 rounded-lg border-b-[#EAECF0]'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#525154] tetx-[14px]'>Status</p>
                    {selectedTransactionDetails && (
                        <p
                            className={`rounded-xl py-[2px] text-[14px] text-[#667085] px-2 flex items-center justify-center w-fit truncate
                         ${selectedTransactionDetails.Status === 'Completed' ? 'text-[#027A48] bg-[#ECFDF3]' :
                                    selectedTransactionDetails.Status === 'Pending' ? 'bg-[#FFFAEB] text-[#B54708]' :
                                        'text-[#EF4444] bg-red-100'}`
                            }>
                            {` ${selectedTransactionDetails.Status}`}
                        </p>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#667085] tetx-[14px]'>Date sent</p>
                    <p className='text-[16px] text-[#101828]'>Aug 1, 2022</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#667085] tetx-[14px]'>Time sent</p>
                    <p className='text-[16px] text-[#101828]'>6:42 PM</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='flex justify-between'>
                    <p className='text-[18px] text-[#1D1C1F]'>Recipient</p>
                    <p className='text-[14px] text-[#531CB3] cursor-pointer'>View beneficiary</p>
                </div>
                <div className='mt-5'>
                    <h1 className='text-[16px] font-medium text-[#302F33]'>Samantha Tino</h1>
                    <p className='text-[#525154] text-[14px]'><span className='text-[#531CB3]'>sam@tino.com •</span> Biffco Enterprises Ltd.</p>
                </div>
            </div>
            <div className='mt-7'>
                <p className='text-[18px] font-medium text-[#1D1C1F]'>Currency summary</p>
                {selectedTransactionDetails && (
                    <div>
                        <div className={selectedTransactionDetails.Currency1 ? 'hidden' : 'flex justify-between my-3'}>
                            <p className='text-[#302F33] font-normal text-[16px]'>Account credited</p>
                            <div className='flex items-center gap-2'>
                                <img className='w-[26px] h-[18px] rounded-[2px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                                <p className='text-[16px] text-[#1D1C1F]'>USD</p>
                            </div>
                        </div>
                        <div className={!selectedTransactionDetails.Currency1 ? 'hidden' : 'flex justify-between my-3'}>
                            <p className='text-[#302F33] font-normal text-[16px]'>Account credited</p>
                            <div className='flex items-center gap-2'>
                                <img className='w-[26px] h-[18px] rounded-[2px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                                <p className='text-[16px] text-[#1D1C1F]'>USD</p>
                            </div>
                        </div>
                        <div className={!selectedTransactionDetails.Currency1 ? 'hidden' : 'flex justify-between my-3'}>
                            <p className='text-[#302F33] font-normal text-[16px]'>Account credited</p>
                            <div className='flex items-center gap-2'>
                                <img className='w-[26px] h-[18px] rounded-[2px]' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                                <p className='text-[16px] text-[#1D1C1F]'>NGN</p>
                            </div>
                        </div>
                    </div>

                )}
            </div>
            <div className='mt-7'>
                <p className='text-[18px] font-medium text-[#1D1C1F]'>Payment summary</p>
                {selectedTransactionDetails && (
                    <div>
                        <div className={selectedTransactionDetails.Currency1 ? 'hidden' : 'block'}>
                            <div className='flex justify-between mt-5'>
                                <p className='text-[#302F33] font-normal text-[16px]'>Amount sent</p>
                                <p className='text-[#302F33] text-[16px]'>$2,000.00</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p className='text-[#302F33] font-normal text-[16px]'>Charges</p>
                                <p className='text-[#302F33] text-[16px]'>$20.00</p>
                            </div>
                        </div>
                        <div className={!selectedTransactionDetails.Currency1 ? 'hidden' : 'block'}>
                            <div className='flex justify-between mt-5'>
                                <p className='text-[#302F33] font-normal text-[16px]'>Amount converted</p>
                                <p className='text-[#302F33] text-[16px]'>₦166,000</p>
                            </div>
                            <div
                                className='flex justify-between mt-5'>
                                <p className='text-[#302F33] font-normal text-[16px]'>Rate</p>
                                <p className='text-[#302F33] text-[16px]'>1 USD = 1650 USD</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p className='text-[#302F33] font-normal text-[16px]'>Conversion Fee</p>
                                <p className='text-[#302F33] text-[16px]'>₦10,000</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className='text-[16px] text-[#1D1C1F] flex justify-between border border-[#F3F0F7] rounded-lg p-4 mt-5'>
                    <p>Total</p>
                    <p className='font-semibold text-[#1D1C1F] text-[16px]'>$2,020.00</p>
                </div>
            </div>
            <div className='mt-7 flex flex-col gap-3'>
                <p className='text-[18px] font-medium text-[#1D1C1F]'>Note</p>
                <p className='text-[#525154] text-[16px]'>A sample note relating to the transaction goes here</p>
            </div>
        </div>
    )
}

export default ViewTransactionDetailsBar