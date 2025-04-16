import React, { useContext, useState } from 'react'
import Select from 'react-select';
import { IoMdNotificationsOutline, IoMdAddCircle, IoIosInformationCircleOutline, IoIosSearch } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { LuArrowLeftRight } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import { Context } from '../Context/Context';


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
        setChecked6
    } = useContext(Context)

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
                    <img className='w-5' src="data:image/png;base64,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" alt="" />
                    USD
                </div>
            ),
        },
        {
            value: 'eur',
            label: (
                <div className="flex items-center gap-2">
                    <img className='w-5' src="data:image/png;base64,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" alt="" />
                    EUR
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
        <div className='my-5'>
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
                <button className='py-2 px-4 border border-black/30 rounded-md'>Live rates</button>
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
                        <p className='border border-black/40 p-2 rounded-md w-full flex items-center gap-2'><FaBuildingColumns /><span className='font-semibold'>Details</span></p>
                        <p className='border border-black/40 p-2 rounded-md w-full flex items-center gap-2'><LuArrowLeftRight /><span className='font-semibold'>Convert</span></p>
                        <p className='border border-black/40 p-2 rounded-md w-full flex items-center gap-2'><GoArrowUpRight /> <span className='font-semibold'>Send</span></p>
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
            <div className='px-8 mt-[30px]'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-[22px] font-semibold'>Transactions</p>
                        <p>Track and manage all your payments, transfers, and conversions in one place.</p>
                    </div>
                    <button className='p-2 border border-black/50 rounded-lg'>All Transactions</button>
                </div>
                <div className='mt-[30px]'>
                    <p className='flex items-center gap-4'><IoIosSearch className='text-[23px] mt-1' /> Search transactions by invoice, date, name or email... </p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview