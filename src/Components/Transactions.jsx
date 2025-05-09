import React, { useContext, useEffect, useState } from 'react'
import Search from '../Components/Images/search.png'
import Bell from '../Components/Images/bell.png'
import Add from '../Components/Images/AddBtn.png'
import Select from 'react-select';
import Increase from '../Components/Images/Increase.png'
import Decrease from '../Components/Images/decrease.png'
import { IoArrowDownSharp } from 'react-icons/io5';
import { Context } from '../Context/Context';
import ViewTransactionDetailsBar from './ViewTransactionDetailsBar';

const Transactions = () => {

    const [TransactionType, setTransactionType] = useState('all')
    const { setSelectedTransactionDetails, handleViewTransactionDetails, viewTransactionDetails } = useContext(Context)
    const [searchQuery, setSearchQuery] = useState('');
    const [transaction, setTransaction] = useState([])

    const handleTransactionClick = (id) => {
        localStorage.setItem('invoiceID', id);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);  // Update the search query state
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchInvoices = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/activity`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setTransaction(data);
        };

        fetchInvoices();
    }, []);

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
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '0 0px',
        }),
        menu: (base) => ({
            ...base,
            zIndex: 999,
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#4e22a0' : 'white',
            color: state.isFocused ? 'white' : 'black',
            cursor: 'pointer',
        }),
    }

    const option1 = [
        {
            value: '',
            label: (
                <p className='text-[14px]'>This week</p>
            )
        },
        {
            value: '',
            label: (
                <p className='text-[14px]'>Last week</p>
            )
        },
        {
            value: '',
            label: (
                <p className='text-[14px]'>Last Month</p>
            )
        }
    ]
    const option2 = [
        {
            value: '',
            label: (
                <p className='text-[14px]'>This week</p>
            )
        },
        {
            value: '',
            label: (
                <p className='text-[14px]'>Last week</p>
            )
        },
        {
            value: '',
            label: (
                <p className='text-[14px]'>Last Month</p>
            )
        }
    ]
    const option3 = [
        {
            value: '',
            label: (
                <p className='text-[14px]'>This week</p>
            )
        },
        {
            value: '',
            label: (
                <p className='text-[14px]'>Last week</p>
            )
        },
        {
            value: '',
            label: (
                <p className='text-[14px]'>Last Month</p>
            )
        }
    ]

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
            Currency1: {
                code: 'NGN',
                flag: 'https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg'
            },
            Currency2: {
                code: 'USD',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'
            },
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
            Currency1: {
                code: 'NGN',
                flag: 'https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg'
            },
            Currency2: {
                code: 'USD',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'
            },
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
            Currency1: {
                code: 'NGN',
                flag: 'https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg'
            },
            Currency2: {
                code: 'USD',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'
            },
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
            Currency1: {
                code: 'NGN',
                flag: 'https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg'
            },
            Currency2: {
                code: 'USD',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'
            },
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
            Currency1: {
                code: 'NGN',
                flag: 'https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg'
            },
            Currency2: {
                code: 'USD',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'
            },
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
            Currency1: {
                code: 'NGN',
                flag: 'https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg'
            },
            Currency2: {
                code: 'USD',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'
            },
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
            Currency1: {
                code: 'NGN',
                flag: 'https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg'
            },
            Currency2: {
                code: 'USD',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png'
            },
            Sender: 'Samantha',
            Recipient: 'Tino',
            Status: 'Completed'
        },
    ]

    const [selectedTotalTransaction, setSelectedTotalTransaction] = useState(option1[0]);
    const [selectedInflow, setSelectedInflow] = useState(option2[0]);
    const [selectedOutflow, setSelectedOutflow] = useState(option3[0]);

    const handleChange1 = (selectedOption) => {
        setSelectedTotalTransaction(selectedOption);
    }
    const handleChange2 = (selectedOption) => {
        setSelectedInflow(selectedOption);
    }
    const handleChange3 = (selectedOption) => {
        setSelectedOutflow(selectedOption);
    }

    return (
        <div>
            <div
                className={`w-full h-[200%] absolute z-10 ${viewTransactionDetails ? 'bg-black/30' : 'hidden'}`}
                onClick={handleViewTransactionDetails}
            ></div>
            <div className='lg:p-10 py-8 px-4'>
                <div className='flex items-start justify-between pb-5'>
                    <div>
                        <p className='text-[28px] font-semibold'>Transactions</p>
                        <p className='text-[16px] font-normal text-[#525154]'>Track and manage all your payments, transfers, and conversions in one place.</p>
                    </div>
                    <div className='flex md:items-center items-start gap-9'>
                        <img className='lg:block hidden cursor-pointer' src={Search} alt="" />
                    <img className='lg:block hidden cursor-pointer' src={Bell} alt="" />
                        <img className='sp:w-8 w-[60px]' src={Add} alt="" />
                    </div>
                </div>
                <div className='flex gap-6 border-b-[1.5px]'>
                    <p
                        onClick={() => setTransactionType('all')}
                        className={TransactionType === 'all' ? 'text-[#491f97] border-b-[#491f97] border-b-2 cursor-pointer py-3 transition-colors duration-700 font-medium' : 'font-medium cursor-pointer py-3'}
                    >
                        All accounts
                    </p>
                    <div
                        onClick={() => setTransactionType('usd')}
                        className={TransactionType === 'usd' ? 'text-[#491f97] border-b-[#491f97] border-b-2 cursor-pointer py-3 transition-colors duration-700 font-medium flex gap-2' : 'font-medium cursor-pointer py-3 flex gap-2'}
                    >
                        <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
                        <p>USD</p>
                    </div>
                    <div
                        onClick={() => setTransactionType('ngn')}
                        className={TransactionType === 'ngn' ? 'text-[#491f97] border-b-[#491f97] border-b-2 cursor-pointer py-3 transition-colors duration-700 font-medium flex gap-2' : 'font-medium cursor-pointer py-3 flex gap-2'}
                    >
                        <img className='w-[15px] h-[12px] rounded-[2px] mt-[6px]' src="https://cdn.britannica.com/68/5068-050-53E22285/Flag-Nigeria.jpg" alt="" />
                        <p>NGN</p>
                    </div>
                </div>
                <div>
                    <p className='text-[#1D1C1F] text-[18px] my-7 font-medium'>Overview</p>
                    <div className='flex md:flex-row flex-col lg:gap-6 gap-4'>
                        <div className='w-full border-[1.5px] rounded-lg pr-5 border-[#D0D5DD] p-3'>
                            <div className='flex items-center justify-between'>
                                <p className='flex items-center gap-1 text-[14px] text-[#78757A]'>
                                    Total transactions
                                </p>
                                <Select
                                    styles={customStyles}
                                    options={option1}
                                    onChange={handleChange1}
                                    value={selectedTotalTransaction}
                                    isSearchable={false}
                                />
                            </div>
                            <div>
                                <p className='text-[36px] font-medium font'>$0</p>
                                <p className='bg-green-200 border-2 flex items-center gap-1 justify-center border-green-500 w-20 py-1 rounded-md text-green-500 text-center'>
                                    +25% <img src={Increase} alt="" />
                                </p>
                            </div>
                        </div>
                        <div className='w-full border-[1.5px] rounded-lg pr-5 border-[#D0D5DD] p-3'>
                            <div className='flex justify-between'>
                                <p className='flex items-center gap-1 text-[14px] text-[#78757A]'>
                                    Inflow
                                </p>
                                <Select
                                    styles={customStyles}
                                    options={option2}
                                    onChange={handleChange2}
                                    value={selectedInflow}
                                    isSearchable={false}
                                />
                            </div>
                            <div>
                                <p className='text-[36px] font-medium font'>$0</p>
                                <p className='bg-green-200 border-2 flex items-center gap-1 justify-center border-green-500 w-20 py-1 rounded-md text-green-500 text-center'>
                                    +25% <img src={Increase} alt="" />
                                </p>
                            </div>
                        </div>
                        <div className='w-full border-[1.5px] rounded-lg pr-5 border-[#D0D5DD] p-3'>
                            <div className='flex justify-between'>
                                <p className='flex items-center gap-1 text-[14px] text-[#78757A]'>
                                    Outflow
                                </p>
                                <Select
                                    styles={customStyles}
                                    options={option3}
                                    onChange={handleChange3}
                                    value={selectedOutflow}
                                    isSearchable={false}
                                />
                            </div>
                            <div>
                                <p className='text-[36px] font-medium font'>$0</p>
                                <p className='bg-red-200 border-[1.5px] flex items-center gap-1 justify-center border-[#EF4444] w-20 py-1 rounded-md text-[#EF4444] text-center'>
                                    +25% <img src={Decrease} alt="" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[50px]'>
                    <div className='relative'>
                     <input
                            type="text"
                            placeholder="Search invoices by number, items, clients or amount"
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="px-4 py-2 border-none outline-none border-gray-300 w-full placeholder:text-[#667085] ml-5 rounded-md"
                        />
                        <img src={Search} alt="" className='absolute top-2' />
                    </div>
                    <div className='mt-[20px] '>
                        <div className='sp:grid md:grid-cols-8 sm:grid-cols-6 sp:grid-cols-5 flex justify-between gap-5 border-t border-b text-[#667085] border-black/50 py-[14px] px-4 text-[14px] font-medium text-left'>
                            <div className='flex gap-2 items-center min-w-0'>
                                <input className='mt-1 size-4 rounded-md' type="checkbox" />
                                <p>Invoice</p>
                            </div>
                            <div className='md:flex hidden gap-2 items-center min-w-0'>
                                <p className='truncate'>Payment date</p>
                                <IoArrowDownSharp className='mt-1 text-[20px]' />
                            </div>
                            <div className='flex gap-2 items-center justify-center min-w-0'>
                                <p className='truncate'>Type</p>
                                <IoArrowDownSharp className='mt-1 text-[16px]' />
                            </div>
                            <div className='sp:flex hidden items-center justify-end min-w-0'>
                                <p className='truncate'>Amount</p>
                            </div>
                            <div className='min-w-0 md:block hidden'>
                                <p className='truncate'>Currency</p>
                            </div>
                            <div className='sm:flex hidden items-center min-w-0'>
                                <p className='truncate'>Sender/Recipient</p>
                            </div>
                            <div className='sp:flex hidden items-center min-w-0'>
                                <p className='truncate'>Status</p>
                            </div>
                            <div className='flex items-center min-w-0 invisible'>
                                <p className='truncate'>Details</p>
                            </div>
                        </div>

                        {Transactions.filter(transact =>
                            (transact.Invoice?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                            (transact.Date?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                            (transact.Type?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                            (transact.Recipient?.toLowerCase() || '').includes(searchQuery.toLowerCase())
                        ).map((transact, index) => (
                            <div key={index} className='sp:grid md:grid-cols-8 sm:grid-cols-6 sp:grid-cols-5 flex justify-between gap-5 border-b border-black/10 py-[14px] px-4 text-[14px] text-[#344054] text-left items-center'>
                                <div className='flex gap-2 items-center min-w-0'>
                                    <input className='mt-1 size-5 rounded-lg' type="checkbox" />
                                    <p className='truncate'>{transact.Invoice}</p>
                                </div>

                                <div className='min-w-0 md:block hidden'>
                                    <p className='truncate'>{transact.Date}</p>
                                </div>

                                <div className='min-w-0 flex justify-end'>
                                    <p className='truncate'>{transact.Type}</p>
                                </div>

                                <div className='min-w-0 sp:block hidden text-right'>
                                    <p className='truncate text-[14px]'>
                                        {transact.Amount ? transact.Amount : `${transact.ConvertedFrom} ➔ ${transact.ConvertedTo}`}
                                    </p>
                                </div>

                                <div className='min-w-0 md:block hidden'>
                                    {transact.Currency ? (
                                        <div className='flex items-center gap-1 truncate'>
                                            {transact.Currency}
                                        </div>
                                    ) : (
                                        <div className='truncate flex gap-1 items-center'>
                                            <img
                                                src={transact.Currency1.flag}
                                                alt={transact.Currency1.code}
                                                className='w-[15px] h-[12px] rounded-[2px] mt-[6px]'
                                            />
                                            <span>—</span>
                                            <img
                                                src={transact.Currency2.flag}
                                                alt={transact.Currency2.code}
                                                className='w-[15px] h-[12px] rounded-[2px] mt-[6px]'
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className='min-w-0 sm:block hidden'>
                                    <p className='truncate'>{transact.Sender} {transact.Recipient}</p>
                                </div>

                                <div className='min-w-0 sp:block hidden'>
                                    <div
                                        className={`rounded-xl py-[2px] px-2 flex items-center justify-center w-fit truncate
                                              ${transact.Status === 'Completed' && 'bg-[#ECFDF3] text-[#027A48]'}
                                              ${transact.Status === 'Pending' && 'bg-[#FFFAEB] text-[#B54708]'}
                                              ${transact.Status === 'Failed' && 'bg-red-100 text-red-600'}
                                            `}
                                    >
                                        {transact.Status}
                                    </div>
                                </div>

                                <div className='min-w-0'>
                                    <button
                                        className='text-[#542d9d] truncate'
                                        onClick={() => {
                                            setSelectedTransactionDetails(transact)
                                            handleViewTransactionDetails()
                                            handleTransactionClick(transact.id)
                                        }}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className='my-4 text-[#344054]'>
                            {Transactions.length} items
                        </div>
                    </div>
                </div>
            </div>
            {viewTransactionDetails && (
                <ViewTransactionDetailsBar className='duration-700 transition-all' />
            )}

        </div>
    )
}

export default Transactions