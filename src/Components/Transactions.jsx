import React, { useContext, useEffect, useMemo, useState } from 'react'
import Search from '../Components/Images/search.png'
import Bell from '../Components/Images/bell.png'
import Add from '../Components/Images/AddBtn.png'
import Select from 'react-select';
import Increase from '../Components/Images/Increase.png'
import Decrease from '../Components/Images/decrease.png'
import { IoArrowDownSharp } from 'react-icons/io5';
import { Context } from '../Context/Context';
import ViewTransactionDetailsBar from './ViewTransactionDetailsBar';
import ViewDetailsBar from './ViewDetailsBar';

const Transactions = () => {

    const [TransactionType, setTransactionType] = useState('all')
    const { setSelectedTransactionDetails, handleViewTransactionDetails, handleViewDetails, viewDetails, viewTransactionDetails } = useContext(Context)
    const [searchQuery, setSearchQuery] = useState('');
    const [transaction, setTransaction] = useState([])
    const [status, setStatus] = useState([])

    const handleTransactionClick = (id) => {
        localStorage.setItem('TransactionID', id);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);  // Update the search query state
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchTransactions = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/transactions`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setTransaction(data);
        };

        fetchTransactions();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchPendingStatuses = async () => {
            if (!transaction || transaction.length === 0) return;

            const pendingTxns = transaction.filter(txn => txn.status !== 'completed');

            try {
                const statusResults = await Promise.all(
                    pendingTxns.map(async (txn) => {
                        const paymentId = txn?.payment?.id;
                        if (!paymentId) return { id: txn.id, status: 'Missing Payment ID' };

                        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/payments/${paymentId}/get_data`, {
                            method: "GET",
                            headers: {
                                Authorization: `Token ${token}`,
                            },
                        });

                        if (!res.ok) {
                            console.error(`Failed to fetch for transaction ID ${transaction.id}`);
                            return { id: transaction.id, status: 'Error' };
                        }

                        const text = await res.text();
                        if (!text) return { id: transaction.id, status: 'Empty' };

                        const data = JSON.parse(text);
                        return { id: transaction.id, status: data.status };
                    })
                );

                console.log("Statuses for pending transactions:", statusResults);
                setStatus(statusResults);

            } catch (error) {
                console.error("Error fetching statuses:", error);
            }
        };

        fetchPendingStatuses();
    }, [transaction]);


    useEffect(() => {
        if (!viewDetails) return;
        console.log("Status:", status);
    }, [status, viewDetails]);


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
                className={`w-full top-0 h-[200%] absolute z-10 ${viewTransactionDetails || viewDetails ? 'bg-black/30' : 'hidden'}`}
                onClick={viewDetails ? handleViewDetails : handleViewTransactionDetails}
            ></div>
            <div className='lg:p-10 py-8 px-4 overflow-x-hidden'>
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
                        <div className='sp:grid md:grid-cols-9 sm:grid-cols-8 sp:grid-cols-7 flex gap-5 border-t border-b text-[#667085] border-black/50 py-[14px] px-4 text-[14px] font-medium text-left'>
                            <div className='flex gap-2 col-span-2 items-center min-w-0'>
                                <p className='truncate'>Payment date</p>
                                <IoArrowDownSharp className='mt-1 text-[16px]' />
                            </div>
                            <div className='flex gap-2 items-center min-w-0'>
                                <p className='truncate'>Type</p>
                                <IoArrowDownSharp className='mt-1 text-[16px]' />
                            </div>
                            <div className='sp:flex hidden items-center justify-end min-w-0'>
                                <p className='truncate'>Amount</p>
                            </div>
                            <div className='min-w-0 md:block hidden'>
                                <p className='truncate'>Currency</p>
                            </div>
                            <div className='sm:flex hidden items-center col-span-2 min-w-0'>
                                <p className='truncate'>Sender/Recipient</p>
                            </div>
                            <div className='sp:flex hidden items-center min-w-0'>
                                <p className='truncate'>Status</p>
                            </div>
                            <div className='flex items-center min-w-0 invisible'>
                                <p className='truncate'>Details</p>
                            </div>
                        </div>

                        {transaction.filter(transact => {
                            const formattedDate = new Date(transact.date_created).toLocaleDateString("en-GB", {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                            }).toLowerCase();
                            return (
                                formattedDate.includes(searchQuery.toLowerCase()) ||
                                (transact.Type?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                                (transact.Recipient?.toLowerCase() || '').includes(searchQuery.toLowerCase())
                            );
                        }).map((transact, index) => (
                            <div key={index} className='sp:grid md:grid-cols-9 sm:grid-cols-8 sp:grid-cols-7 flex justify-between gap-5 border-b border-black/10 py-[14px] px-4 text-[14px] text-[#344054] text-left items-center'>

                                <div className='min-w-0 block col-span-2'>
                                    <p className='truncate'>
                                        {new Date(transact.date_created).toLocaleDateString("en-GB", {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </p>
                                </div>

                                <div className='min-w-0'>
                                    <p className='truncate'>{transact.type.charAt(0).toUpperCase() + transact.type.slice(1)}</p>
                                </div>

                                <div className='min-w-0 sp:block hidden text-right'>
                                    <p className='truncate text-[14px]'>
                                        {transact.currency === 'USD' ? '$' : '€'}
                                        {transact.amount}
                                    </p>
                                </div>

                                <div className='min-w-0 md:flex gap-1 items-center hidden'>
                                    <img
                                        src={currencyLogos[transact.currency]}
                                        alt={transact.currency}
                                        className="w-[20px] h-4 rounded-md"
                                    />
                                    {transact.currency}
                                </div>

                                <div className='min-w-0 sm:block col-span-2 hidden'>
                                    <p className='truncate'>{transact.payment.beneficiary.full_name}</p>
                                </div>

                                <div className='min-w-0 sp:block hidden'>
                                    <div
                                        className={`rounded-xl py-[2px] px-2 flex items-center justify-center w-fit truncate
                                              ${transact.payment.status === 'completed' && 'bg-[#ECFDF3] text-[#027A48]'}
                                              ${transact.payment.status === 'pending' && 'bg-[#FFFAEB] text-[#B54708]'}
                                              ${transact.payment.status === 'failed' && 'bg-red-100 text-red-600'}
                                            `}
                                    >
                                        {transact.payment.status}
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
                            {transaction.length} items
                        </div>
                    </div>
                </div>
            </div>
            {viewTransactionDetails && (
                <ViewTransactionDetailsBar
                    className='duration-700 transition-all'
                />
            )}

            <ViewDetailsBar />
        </div>
    )
}

export default Transactions