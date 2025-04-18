import React, { useContext, useState } from 'react'
import Select from 'react-select';
import { IoMdNotificationsOutline, IoMdAddCircle, IoIosInformationCircleOutline, IoIosSearch } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { LuArrowLeftRight } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import { Context } from '../Context/Context';
import { IoArrowDownSharp } from "react-icons/io5";
import AcctDetailsBar from './AcctDetailsBar';
import ConvertCurrency from './ConvertCurrency';
import SendBar from './SendBar';
import LiveRates from './LiveRates';
import { AiTwotoneFileText } from 'react-icons/ai';

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
        liveRatesBar
    } = useContext(Context)
    const [filterOption, setFilterOption] = useState('activities')

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value)
    }

    const option1 = [
        {
            value: '',
            label: (
                <p>This Week</p>
            )
        }
    ]
    const option2 = [
        {
            value: '',
            label: (
                <p>This Week</p>
            )
        }
    ]

    const options = [
        {
            value: 'usd',
            label: (
                <div className="flex items-center gap-2">
                    <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                    USD
                </div>
            ),
        },
        {
            value: 'ngn',
            label: (
                <div className="flex items-center gap-2">
                    <img className='w-5' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
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
            backgroundColor: '#f9f9f9',
            borderWidth: '1.5px',
            padding: '4px',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#4e22a0',
            },
            borderRadius: '10px'
        }),
        menu: (base) => ({
            ...base,
            zIndex: 999,
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#4e22a0' : 'white',
            color: state.isFocused ? 'white' : 'black',
            padding: 10,
            cursor: 'pointer',
        }),
    }

    const Transctions = [
        {
            Invoice: '#RC787024',
            Date: '27 July, 2022',
            Type: 'Sent',
            Amount: '-$500',
            Currency: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[15px] mt-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
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
                    <img className='w-[15px] h-[15px] mt-1' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
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
                    <img className='w-[15px] h-[15px] mt-1' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                </div>
            ),
            Currency2: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[15px] mt-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
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
                    <img className='w-[15px] h-[15px] mt-1' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                </div>
            ),
            Currency2: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[15px] mt-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
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
                    <img className='w-[15px] h-[15px] mt-1' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                </div>
            ),
            Currency2: (
                <div className='flex gap-[5px]'>
                    <img className='w-[15px] h-[15px] mt-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
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
                className={`w-[80%] min-h-full absolute z-10 ${acctDetailsBar || sendBar || convertBar || liveRatesBar ? 'bg-black/20' : 'hidden'}`}
                onClick={acctDetailsBar ? handleAcctDetailsBar : convertBar ? handleConvertBar : sendBar ? handleSendBar : liveRatesBar ? handleLiveRates : null}
            ></div>
            <div className='flex items-center justify-between px-8 py-5'>
                <div>
                    <p className='text-[20px] font-semibold'>Home</p>
                    <p className='text-[18px]'>Welcome back, Cooper!</p>
                </div>
                <div className='flex items-center gap-4'>
                    <CiSearch className='text-[20px]' />
                    <IoMdNotificationsOutline className='text-[20px]' />
                    <IoMdAddCircle className='text-[30px] text-[#411c87]' />
                </div>
            </div>
            <div className='flex justify-between items-center px-8 py-2'>
                <p className='font-medium text-[20px]'>OverView</p>
                <button
                    onClick={handleLiveRates}
                    className='py-2 px-4 border border-black/30 rounded-md'
                >
                    Live rates
                </button>
            </div>
            <div className='px-8 pt-4 flex'>
                <div className='w-full border-r-2 pr-3 border-black/50'>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-1'>
                            Total Balance <IoIosInformationCircleOutline className='mt-1' />
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
                        <p className='bg-green-200 border-2 border-green-500 w-20 py-1 rounded-md text-green-500 text-center'>+25%</p>
                    </div>
                    <div className='flex gap-2 mt-5 text-center text-black/60'>
                        <p
                            className='border border-black/40 p-2 rounded-md w-full flex items-center gap-2 cursor-pointer hover:bg-black/20 active:scale-95 duration-500 transition-all'
                            onClick={handleAcctDetailsBar}
                        >
                            <FaBuildingColumns /><span className='font-semibold'>Details</span>
                        </p>
                        <p
                            className='border border-black/40 p-2 rounded-md w-full flex items-center gap-2 cursor-pointer hover:bg-black/20 active:scale-95 duration-500 transition-all'
                            onClick={handleConvertBar}
                        >
                            <LuArrowLeftRight className='mt-1' /><span className='font-semibold'>Convert</span>
                        </p>
                        <p
                            className='border border-black/40 p-2 rounded-md w-full flex items-center gap-2 cursor-pointer hover:bg-black/20 active:scale-95 duration-500 transition-all'
                            onClick={handleSendBar}
                        >
                            <GoArrowUpRight className='mt-1' /> <span className='font-semibold'>Send</span>
                        </p>
                    </div>
                </div>
                <div className='w-full ml-3 border-r-2 pr-3 border-black/50'>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-1'>
                            Total Balance <IoIosInformationCircleOutline className='mt-1' />
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
                    </div>
                </div>
                <div className='w-full ml-3'>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-1'>
                            Total Balance <IoIosInformationCircleOutline className='mt-1' />
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
                    </div>
                </div>
            </div>
            <div className='mt-[45px] mx-8'>
                <h1 className='font-semibold text-[20px]'>Congratulations on taking the first step!</h1>
                <p>Complete these simple steps to get started using reccur.</p>
                <div className='flex justify-between w-[80%] mt-4'>
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
            {filterOption === 'transactions' ? (
                <div className='mt-[30px] px-8 pb-8 text-black/50'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-[22px] font-semibold text-black'>Transactions</p>
                            <p>Track and manage all your payments, transfers, and conversions in one place.</p>
                        </div>
                        <select value={filterOption} onChange={handleFilterChange} className='appearance-none outline-none bg-white p-2 border border-black/50 rounded-lg cursor-pointer' name="" id="">
                            <option value="activities">All Activities</option>
                            <option value="transactions">All Transactions</option>
                        </select>
                    </div>
                    <div className='mt-[30px]'>
                        <p className='flex items-center gap-4'><IoIosSearch className='text-[23px] mt-1' /> Search transactions by invoice, date, name or email... </p>
                        <div className='mt-[20px] '>
                            <div className='grid grid-cols-9 gap-5 border-t border-b border-black/50 py-2 text-[14px] font-medium text-left'>
                                <div className='flex gap-2 items-center min-w-0'>
                                    <input className='mt-1' type="checkbox" />
                                    <p>Invoice</p>
                                </div>
                                <div className='flex gap-2 items-center min-w-0'>
                                    <p className='truncate'>Payment date</p>
                                    <IoArrowDownSharp className='mt-1' />
                                </div>
                                <div className='flex gap-2 items-center min-w-0'>
                                    <p className='truncate'>Type</p>
                                    <IoArrowDownSharp className='mt-1' />
                                </div>
                                <div className='flex items-center justify-end col-span-2 min-w-0'>
                                    <p className='truncate'>Amount</p>
                                </div>
                                <div className='min-w-0'>
                                    <p className='truncate'>Currency</p>
                                </div>
                                <div className='flex items-center min-w-0'>
                                    <p className='truncate'>Sender/Recipient</p>
                                </div>
                                <div className='flex items-center min-w-0'>
                                    <p className='truncate'>Status</p>
                                </div>
                                <div className='flex items-center min-w-0 invisible'>
                                    <p className='truncate'>Details</p>
                                </div>
                            </div>

                            {Transctions.map((transact, index) => (
                                <div key={index} className='grid grid-cols-9 gap-5 border-b border-black/10 py-2 text-[14px] text-left items-center'>
                                    <div className='flex gap-2 items-center min-w-0'>
                                        <input className='mt-1' type="checkbox" />
                                        <p className='truncate'>{transact.Invoice}</p>
                                    </div>

                                    <div className='min-w-0'>
                                        <p className='truncate'>{transact.Date}</p>
                                    </div>

                                    <div className='min-w-0'>
                                        <p className='truncate'>{transact.Type}</p>
                                    </div>

                                    <div className='col-span-2 min-w-0 text-right'>
                                        <p className='truncate'>
                                            {transact.Amount ? transact.Amount : `${transact.ConvertedFrom} ➔ ${transact.ConvertedTo}`}
                                        </p>
                                    </div>

                                    <div className='min-w-0'>
                                        {transact.Currency ? (
                                            <div className='flex items-center gap-1 truncate'>
                                                {transact.Currency}
                                            </div>
                                        ) : (
                                            <p className='truncate flex gap-1'>{transact.Currency1} -- {transact.Currency2}</p>
                                        )}
                                    </div>

                                    <div className='min-w-0'>
                                        <p className='truncate'>{transact.Sender} / {transact.Recipient}</p>
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
                                        <p className='text-[#542d9d] cursor-pointer truncate'>View Details</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className='mt-[30px] px-8 pb-8 text-black/50'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-[22px] font-semibold text-black'>Activites</p>
                            <p>Stay up to date on recent activities in your account.</p>
                        </div>
                        <select value={filterOption} onChange={handleFilterChange} className='appearance-none outline-none bg-white p-2 border border-black/50 rounded-lg cursor-pointer' name="" id="">
                            <option value="activities">All Activities</option>
                            <option value="transactions">All Transactions</option>
                        </select>
                    </div>
                    <div className='mt-[30px] flex flex-col gap-7 text-[18px] text-black'>
                        <div className='flex justify-between'>
                            <p className='flex items-center gap-2'>
                                <AiTwotoneFileText className='mt-1 text-[#9d6df7] text-[20px]' />
                                Your invoice <span className='text-[#542d9d]'>#RC0001</span> for Samantha Tino has been paid.
                            </p>
                            <p className='text-black/50'>8/30/2022, 12:46 am</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='flex items-center gap-2'>
                                <AiTwotoneFileText className='mt-1 text-[#9d6df7] text-[20px]' />
                                Your invoice <span className='text-[#542d9d]'>#RC0001</span> for Samantha Tino has been paid.
                            </p>
                            <p className='text-black/50'>8/30/2022, 12:46 am</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='flex items-center gap-2'>
                                <AiTwotoneFileText className='mt-1 text-[#9d6df7] text-[20px]' />
                                <span className='text-[#542d9d]'>$5000</span> has been deposited into your account.
                            </p>
                            <p className='text-black/50'>8/30/2022, 12:46 am</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='flex items-center gap-2'>
                                <AiTwotoneFileText className='mt-1 text-[#9d6df7] text-[20px]' />
                                Your invoice <span className='text-[#542d9d]'>#RC0001</span> for Samantha Tino has been paid.
                            </p>
                            <p className='text-black/50'>8/30/2022, 12:46 am</p>
                        </div>
                    </div>
                </div>
            )}
            <AcctDetailsBar />
            <ConvertCurrency />
            <SendBar />
            <LiveRates />
        </div >
    )
}

export default Overview