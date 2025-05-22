import React, { useContext, useMemo } from 'react'
import { Context } from '../Context/Context'
import close from '../Components/Images/x-close.png';
import ViewDetailsBar from './ViewDetailsBar';

const ViewTransactionDetailsBar = () => {

    const {
        handleViewTransactionDetails,
        viewTransactionDetails,
        selectedTransactionDetails,
        overViewTransactionDetails,
        handleOverViewTransactionDetails,
        handleViewDetails
    } = useContext(Context)

    const onClick = () => {
        if (viewTransactionDetails) {
            handleViewTransactionDetails()
        } else if (overViewTransactionDetails) {
            handleOverViewTransactionDetails()
        }
    }

    const handleBeneficairyClick = (id) => {
        localStorage.setItem('BeneficairyID', id);
    };

    const currencyLogos = useMemo(() => ({
        USD: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
        EUR: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
        GBP: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
        JPY: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
        CAD: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg',
        AUD: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg',
        CHF: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg',
        CNY: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        INR: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
        NGN: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
        ZAR: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
        BRL: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
        MXN: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
        RUB: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
        SEK: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
        NOK: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Flag_of_Norway.svg',
        DKK: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Flag_of_Denmark.svg',
        SGD: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
        HKD: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg',
        KRW: 'https://upload.wikimedia.org/wikipedia/en/0/09/Flag_of_South_Korea.svg',
        AED: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
        SAR: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Flag_of_Saudi_Arabia.svg',
        TRY: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
        EGP: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
        KES: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg',
    }), []);

    return (
        <div>
            <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-3 duration-700 transition-all text-black z-50 overflow-auto ${viewTransactionDetails || overViewTransactionDetails ? 'sm:w-[50%] lg:w-[40%] w-full right-0' : 'right-[-100%]'}`}>
                <div className='flex gap-2 justify-between'>
                    <div>
                        <p className='text-[24px] font-medium text-[#1D1C1F]'>Transaction details</p>
                        {selectedTransactionDetails && (
                            <p className='text-[#525154]'>
                                {` ${selectedTransactionDetails.payment.status === 'completed' ? 'Payment has been completed.' : 'Payment has not been completed.'}`}
                            </p>
                        )}
                    </div>
                    <img
                        className='size-5 mt-1 cursor-pointer' src={close} alt=""
                        onClick={onClick}
                    />
                </div >
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
                <div className='flex justify-between mt-12 border-b-[1.5px] pb-6 rounded-lg border-b-[#EAECF0]'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#525154] tetx-[14px]'>Status</p>
                        {selectedTransactionDetails && (
                            <p
                                className={`rounded-xl py-[2px] text-[14px] text-[#667085] px-2 flex items-center justify-center w-fit truncate
                         ${selectedTransactionDetails.payment.status === 'completed' ? 'text-[#027A48] bg-[#ECFDF3]' :
                                        selectedTransactionDetails.payment.status === 'pending' ? 'bg-[#FFFAEB] text-[#B54708]' :
                                            'text-[#EF4444] bg-red-100'}`
                                }>
                                {` ${selectedTransactionDetails.payment.status}`}
                            </p>
                        )}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#667085] tetx-[14px]'>Date sent</p>
                        <p className='text-[16px] text-[#101828]'>
                            {new Date(selectedTransactionDetails.date_created).toLocaleDateString("en-GB", {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                            })}
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#667085] tetx-[14px]'>Time sent</p>
                        <p className='text-[16px] text-[#101828]'>
                            {new Date(selectedTransactionDetails.date_created).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </p>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='flex justify-between'>
                        <p className='text-[18px] text-[#1D1C1F]'>Recipient</p>
                        <p
                            className='text-[14px] text-[#531CB3] cursor-pointer'
                            onClick={() => {
                                handleViewDetails()
                                handleBeneficairyClick(selectedTransactionDetails.payment.beneficiary.id)
                            }}
                        >
                            View beneficiary
                        </p>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-[16px] font-medium text-[#302F33]'>{selectedTransactionDetails.payment.beneficiary.full_name}</h1>
                    </div>
                </div>
                <div className='mt-7'>
                    <p className='text-[18px] font-medium text-[#1D1C1F]'>Currency summary</p>
                    {selectedTransactionDetails && (
                        <div>
                            <div className={selectedTransactionDetails.Currency1 ? 'hidden' : 'flex justify-between my-3'}>
                                <p className='text-[#302F33] font-normal text-[16px]'>Account credited</p>
                                <div className='flex items-center gap-2'>
                                    <img
                                        src={currencyLogos[selectedTransactionDetails.currency]}
                                        alt={selectedTransactionDetails.currency}
                                        className="w-[20px] h-4 rounded-md"
                                    />
                                    {selectedTransactionDetails.currency}
                                </div>
                            </div>
                            {/* <div className='flex justify-between my-3'>
                                <p className='text-[#302F33] font-normal text-[16px]'>Account credited</p>
                                <div className='flex items-center gap-2'>
                                    <img
                                        src={selectedTransactionDetails.Currency2?.flag}
                                        className='w-[26px] h-[18px] rounded-[2px] mt-[6px]'
                                        alt={selectedTransactionDetails.Currency2?.code}
                                    />
                                    <p>{selectedTransactionDetails.Currency2?.code}</p>
                                </div>
                            </div> */}
                            <div className={!selectedTransactionDetails.Currency1 ? 'hidden' : 'flex justify-between my-3'}>
                                <p className='text-[#302F33] font-normal text-[16px]'>Account debited</p>
                                <div className='flex items-center gap-2'>
                                    <img
                                        src={selectedTransactionDetails.Currency1?.flag}
                                        className='w-[26px] h-[18px] rounded-[2px] mt-[6px]'
                                        alt={selectedTransactionDetails.Currency1?.code}
                                    />
                                    <p>{selectedTransactionDetails.Currency1?.code}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='mt-7'>
                    <p className='text-[18px] font-medium text-[#1D1C1F]'>Payment summary</p>
                    {selectedTransactionDetails && (
                        <div>
                            <div className='block'>
                                <div className='flex justify-between mt-5'>
                                    <p className='text-[#302F33] font-normal text-[16px]'>Amount sent</p>
                                    <p className='text-[#302F33] text-[16px]'>
                                        {selectedTransactionDetails.currency === 'USD' ? '$' : '€'}
                                        {selectedTransactionDetails.amount}
                                    </p>
                                </div>
                                <div className='flex justify-between mt-5'>
                                    <p className='text-[#302F33] font-normal text-[16px]'>Charges</p>
                                    <p className='text-[#302F33] text-[16px]'>
                                        {selectedTransactionDetails.currency === 'USD' ? '$' : '€'}
                                        {selectedTransactionDetails.fee}
                                    </p>
                                </div>
                            </div>
                            {/* <div className={!selectedTransactionDetails.Currency1 ? 'hidden' : 'block'}>
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
                            </div> */}
                        </div>
                    )}
                    <div className='text-[16px] text-[#1D1C1F] flex justify-between border border-[#F3F0F7] rounded-lg p-4 mt-5'>
                        <p>Total</p>
                        <p className='font-semibold text-[#1D1C1F] text-[16px]'>
                            {selectedTransactionDetails.currency === 'USD' ? '$' : '€'}
                            {(
                                parseFloat(selectedTransactionDetails.amount || 0) +
                                parseFloat(selectedTransactionDetails.fee || 0)
                            ).toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className='mt-7 flex flex-col gap-3'>
                    <p className='text-[18px] font-medium text-[#1D1C1F]'>Note</p>
                    <p className='text-[#525154] text-[16px]'>A sample note relating to the transaction goes here</p>
                </div>
            </div >
        </div>
    )
}

export default ViewTransactionDetailsBar