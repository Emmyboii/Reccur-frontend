import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { Context } from '../Context/Context';
import { IoArrowDownSharp } from "react-icons/io5";
import AcctDetailsBar from './AcctDetailsBar';
import ConvertCurrency from './ConvertCurrency';
import SendBar from './SendBar';
import LiveRates from './LiveRates';
import Search from '../Components/Images/search.png'
import Bell from '../Components/Images/bell.png'
import Add from '../Components/Images/AddBtn.png'
import Warn from '../Components/Images/info-circle.png'
import arrow from '../Components/Images/arrowUp.png'
import switchs from '../Components/Images/switch-horizontal.png'
import Bank from '../Components/Images/bank.png'
import GreenLine from '../Components/Images/greenLine.png'
import RedLine from '../Components/Images/redLine.png'
import Increase from '../Components/Images/Increase.png'
import ViewTransactionDetailsBar from './ViewTransactionDetailsBar';

const Overview = () => {

    const {
        checked,
        checked2,
        setChecked2,
        checked3,
        setChecked3,
        checked4,
        setChecked4,
        checked5,
        setChecked5,
        checked6,
        setChecked6,
        handleAcctDetailsBar,
        acctDetailsBar,
        handleSendBar,
        sendBar,
        handleConvertBar,
        convertBar,
        handleLiveRates,
        liveRatesBar,
        setSelectedTransactionDetails,
        handleOverViewTransactionDetails,
        overViewTransactionDetails
    } = useContext(Context)

    const option1 = [
        {
            value: '',
            label: (
                <p className='text-[14px]'>This week</p>
            )
        }
    ]
    const option2 = [
        {
            value: '',
            label: (
                <p className='text-[14px]'>This week</p>
            )
        }
    ]

    const options = [
        {
            value: 'usd',
            label: (
                <div className="flex items-center gap-2">
                    <img className='w-[20px] h-4 rounded-sm' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                    USD
                </div>
            ),
        },
        {
            value: 'ngn',
            label: (
                <div className="flex items-center gap-2">
                    <img className='w-[20px] h-4 rounded-sm' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                    NGN
                </div>
            )
        }
    ];
    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none',
        }),
        control: (base) => ({
            ...base,
            borderWidth: '1.5px',
            boxShadow: 'none',
            borderRadius: '10px',
        }),
        menu: (base) => ({
            ...base,
            zIndex: 999,
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '0 4px', // adjust this value to reduce the space
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#4e22a0' : 'white',
            color: state.isFocused ? 'white' : 'black',
            cursor: 'pointer',
        }),
    }

    const Transactions = [
        {
            Invoice: '#RC787024',
            Date: '27 July, 2022',
            Type: 'Sent',
            Amount: '-$500',
            Currency: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                    <p>USD</p>
                </div>
            ),
            Sender: 'Samantha',
            Recipient: 'Tino',
            Status: 'Completed'
        },
        {
            Invoice: '#RC787024',
            Date: '27 July, 2022',
            Type: 'Recieved',
            Amount: '+$1,200',
            Currency: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px] ' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                    <p>NGN</p>
                </div>
            ),
            Sender: 'Samantha',
            Recipient: 'Tino',
            Status: 'Pending'
        },
        {
            Invoice: '#RC787024',
            Date: '27 July, 2022',
            Type: 'Converted',
            ConvertedFrom: '#40,000',
            ConvertedTo: '$29',
            Currency1: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px] ' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                </div>
            ),
            Currency2: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                </div>
            ),
            Sender: 'Samantha',
            Recipient: 'Tino',
            Status: 'Completed'
        },
        {
            Invoice: '#RC787024',
            Date: '27 July, 2022',
            Type: 'Converted',
            ConvertedFrom: '#40,000',
            ConvertedTo: '$29',
            Currency1: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px] ' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                </div>
            ),
            Currency2: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                </div>
            ),
            Sender: 'Samantha',
            Recipient: 'Tino',
            Status: 'Completed'
        },
        {
            Invoice: '#RC787024',
            Date: '27 July, 2022',
            Type: 'Converted',
            ConvertedFrom: '#40,000',
            ConvertedTo: '$29',
            Currency1: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px]' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                </div>
            ),
            Currency2: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                </div>
            ),
            Sender: 'Samantha',
            Recipient: 'Tino',
            Status: 'Completed'
        },
    ]

    const [selectedBalance, setSelectedBalance] = useState(options[0]);
    const [selectedMoneyRecieved, setSelectedMoneyRecieved] = useState(option1[0]);
    const [selectedMoneySent, setSelectedMoneySent] = useState(option2[0]);

    const handleChange = (selectedOption) => {
        setSelectedBalance(selectedOption);
    }
    const handleChange2 = (selectedOption) => {
        setSelectedMoneyRecieved(selectedOption);
    }
    const handleChange3 = (selectedOption) => {
        setSelectedMoneySent(selectedOption);
    }

    return (
        <div>
            <div
                className={`w-[80%] h-[200%] absolute z-30 ${acctDetailsBar || sendBar || convertBar || liveRatesBar || overViewTransactionDetails ? 'bg-black/20' : 'hidden'}`}
                onClick={acctDetailsBar ? handleAcctDetailsBar : convertBar ? handleConvertBar : sendBar ? handleSendBar : liveRatesBar ? handleLiveRates : overViewTransactionDetails ? handleOverViewTransactionDetails : null}
            ></div>
            <div className='flex items-center justify-between text-[#1D1C1F] md:p-10 px-4 py-8'>
                <div>
                    <p className='text-[28px] font-semibold'>Home</p>
                    <p className='text-[16px] font-normal text-[#525154]'>Welcome back, Cooper!</p>
                </div>
                <div className='flex md:items-center items-start gap-9'>
                    <img className='md:block hidden' src={Search} alt="" />
                    <img className='md:block hidden' src={Bell} alt="" />
                    <img className='sp:w-8 w-[30px]' src={Add} alt="" />
                </div>
            </div>
            <div className='flex justify-between items-center md:px-10 px-4 py-2'>
                <p className='font-medium text-[18px]'>Overview</p>
                <button
                    onClick={handleLiveRates}
                    className='py-[10px] px-4 border text-[14px] border-black/30 rounded-lg'
                >
                    Live rates
                </button>
            </div>
            <div className='px-10 pt-4 flex md:flex-row flex-col md:gap-0 gap-7'>
                <div className='w-full md:border-r-2 md:pr-4 border-black/50'>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-1 text-[14px] text-[#78757A]'>
                            Total balance <img src={Warn} alt="" />
                        </p>
                        <Select
                            styles={customStyles}
                            options={options}
                            onChange={handleChange}
                            value={selectedBalance}
                            isSearchable={false}
                        />
                    </div>
                    <div>
                        <p className='text-[36px] font-semibold'>$0</p>
                        <p className='bg-green-200 border-2 flex items-center gap-1 justify-center border-green-500 w-20 py-1 rounded-md text-green-500 text-center'>
                            +25% <img src={Increase} alt="" />
                        </p>
                    </div>
                    <div className='flex md:gap-1 gap-4 w-full mt-5 items-center text-[#78757A]'>
                        <div
                            className='border border-black/40 py-2 rounded-md w-full flex items-center justify-center gap-1 cursor-pointer text-[13px] text-[#525154] font-medium hover:bg-black/20 active:scale-95 duration-500 transition-all'
                            onClick={handleAcctDetailsBar}
                        >
                            <img className='w-[15px]' src={Bank} alt="" /><p className='font-semibold'>Details</p>
                        </div>
                        <div
                            className='border border-black/40 py-2 rounded-md w-full flex items-center justify-center gap-1 cursor-pointer text-[13px] text-[#525154] font-medium hover:bg-black/20 active:scale-95 duration-500 transition-all'
                            onClick={handleConvertBar}
                        >
                            <img className='w-[15px]' src={switchs} alt="" /><p className='font-semibold'>Convert</p>
                        </div>
                        <div
                            className='border border-black/40 py-2 rounded-md w-full flex items-center justify-center gap-1 cursor-pointer text-[13px] text-[#525154] font-medium hover:bg-black/20 active:scale-95 duration-500 transition-all'
                            onClick={handleSendBar}
                        >
                            <img className='w-[14px]' src={arrow} alt="" /><p className='font-semibold'>Send</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:ml-5 md:border-r-2 md:pr-4 border-black/50'>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-1 text-[14px] text-[#78757A]'>
                            Total money recieved
                        </p>
                        <Select
                            styles={customStyles}
                            options={option1}
                            onChange={handleChange2}
                            value={selectedMoneyRecieved}
                            isSearchable={false}
                        />
                    </div>
                    <div>
                        <p className='text-[36px] font-semibold'>$0</p>
                        <img className='ml-3 w-full xl:w-[50%]' src={GreenLine} alt="" />
                    </div>
                </div>
                <div className='w-full md:ml-5'>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-1 text-[14px] text-[#78757A]'>
                            Total money sent
                        </p>
                        <Select
                            styles={customStyles}
                            options={option2}
                            onChange={handleChange3}
                            value={selectedMoneySent}
                            isSearchable={false}
                        />
                    </div>
                    <div>
                        <p className='text-[36px] font-semibold'>$0</p>
                        <img className='w-full xl:w-[50%]' src={RedLine} alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-[45px] mx-10'>
                <h1 className='font-medium text-[18px]'>Congratulations on taking the first step!</h1>
                <p className='text-[14px] font-normal text-[#525154]'>Complete these simple steps to get started using reccur.</p>
                <div className='flex sm:flex-row flex-col text-[14px] justify-between gap-4 w-[80%] mt-4'>
                    <div className='flex flex-col gap-4'>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${checked ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={null}
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
            <div className='mt-[30px] px-10 pb-8 text-black/70'>
                <div className='sm:flex items-center justify-between'>
                    <div>
                        <p className='text-[18px] font-medium'>Transactions</p>
                        <p className='text-[14px] font-normal text-[#525154]'>Track and manage all your payments, transfers, and conversions in one place.</p>
                    </div>
                    <Link to='/transactions' className='appearance-none mt-2 outline-none bg-white px-4 py-[10px] border border-black/50 rounded-lg' name="" id="">
                        <p>All Transactions</p>
                    </Link>
                </div>
                <div className='mt-[30px]'>
                    <p className='flex items-center text-[14px] font-normal gap-4 text-[#667085]'><img src={Search} alt="" /> Search transactions by invoice, date, name or email... </p>
                    <div className='mt-[20px] '>
                        <div className='grid lg:grid-cols-9 sm:grid-cols-6 grid-cols-4 gap-5 border-t border-b text-[#667085] border-black/50 py-[14px] px-4 text-[14px] font-normal text-left'>
                            <div className='flex gap-2 items-center min-w-0'>
                                <input className='mt-1 size-4 rounded-md' type="checkbox" />
                                <p>Invoice</p>
                            </div>
                            <div className='lg:flex gap-2 items-center min-w-0 hidden'>
                                <p className='truncate'>Payment date</p>
                                <IoArrowDownSharp className='mt-1 text-[20px]' />
                            </div>
                            <div className='sm:flex gap-2 items-center min-w-0 hidden'>
                                <p className='truncate'>Type</p>
                                <IoArrowDownSharp className='mt-1 text-[16px]' />
                            </div>
                            <div className='flex items-center justify-end sm:col-span-2 min-w-0'>
                                <p className='truncate'>Amount</p>
                            </div>
                            <div className='min-w-0 lg:block hidden'>
                                <p className='truncate'>Currency</p>
                            </div>
                            <div className='lg:flex items-center min-w-0 hidden'>
                                <p className='truncate'>Sender/Recipient</p>
                            </div>
                            <div className='flex items-center min-w-0'>
                                <p className='truncate'>Status</p>
                            </div>
                            <div className='flex items-center min-w-0 invisible'>
                                <p className='truncate'>Details</p>
                            </div>
                        </div>

                        {Transactions.map((transact, index) => (
                            <div key={index} className='grid lg:grid-cols-9 sm:grid-cols-6 grid-cols-4 gap-5 border-b border-black/10 py-[14px] px-4 text-[14px] text-[#344054] text-left items-center'>
                                <div className='flex gap-2 items-center min-w-0'>
                                    <input className='mt-1 size-5 rounded-2xl' type="checkbox" />
                                    <p className='truncate'>{transact.Invoice}</p>
                                </div>

                                <div className='min-w-0 lg:block hidden'>
                                    <p className='truncate'>{transact.Date}</p>
                                </div>

                                <div className='min-w-0 sm:block hidden'>
                                    <p className='truncate'>{transact.Type}</p>
                                </div>

                                <div className='sm:col-span-2 min-w-0 text-right'>
                                    <p className='truncate'>
                                        {transact.Amount ? transact.Amount : `${transact.ConvertedFrom} ➔ ${transact.ConvertedTo}`}
                                    </p>
                                </div>

                                <div className='min-w-0 lg:block hidden'>
                                    {transact.Currency ? (
                                        <div className='flex items-center gap-1 truncate'>
                                            {transact.Currency}
                                        </div>
                                    ) : (
                                        <p className='truncate flex gap-1'>{transact.Currency1}—{transact.Currency2}</p>
                                    )}
                                </div>

                                <div className='min-w-0 lg:block hidden'>
                                    <p className='truncate'>{transact.Sender} {transact.Recipient}</p>
                                </div>

                                <div className='min-w-0'>
                                    <div className={`rounded-xl py-[2px] px-2 flex items-center justify-center w-fit truncate
                                  ${transact.Status === 'Completed' && 'bg-green-100 text-green-600'}
                                  ${transact.Status === 'Pending' && 'bg-orange-100 text-orange-600'}
                                  ${transact.Status === 'Failed' && 'bg-red-100 text-red-600'}
                                `}>
                                        {transact.Status}
                                    </div>
                                </div>

                                <div className='min-w-0'>
                                    <button
                                        className='text-[#542d9d] truncate'
                                        onClick={() => {
                                            setSelectedTransactionDetails(transact)
                                            handleOverViewTransactionDetails()
                                        }}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AcctDetailsBar />
            <ConvertCurrency />
            <SendBar />
            <LiveRates />
            {overViewTransactionDetails && (
                <ViewTransactionDetailsBar />
            )}
        </div >
    )
}

export default Overview