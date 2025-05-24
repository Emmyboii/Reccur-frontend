import React, { useContext, useEffect, useMemo, useState } from 'react'
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
import CreateAcctBar from './CreateAcctBar';

function filterPaymentsByDate(payments, filterType) {
    const now = new Date();

    return payments.filter(payment => {
        const paymentDate = new Date(payment.date_created);

        switch (filterType) {
            case 'lastWeek': {
                const oneWeekAgo = new Date(now);
                oneWeekAgo.setDate(now.getDate() - 7);
                return paymentDate >= oneWeekAgo && paymentDate <= now;
            }
            case '3daysAgo': {
                const threeDaysAgo = new Date(now);
                threeDaysAgo.setDate(now.getDate() - 3);
                return paymentDate >= threeDaysAgo && paymentDate <= now;
            }
            case '5daysAgo': {
                const fiveDaysAgo = new Date(now);
                fiveDaysAgo.setDate(now.getDate() - 5);
                return paymentDate >= fiveDaysAgo && paymentDate <= now;
            }
            case 'lastMonth': {
                const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
                const startOfLastMonth = new Date(startOfThisMonth);
                startOfLastMonth.setMonth(startOfThisMonth.getMonth() - 1);
                const endOfLastMonth = new Date(startOfThisMonth);
                endOfLastMonth.setDate(0); // last day of previous month
                return paymentDate >= startOfLastMonth && paymentDate <= endOfLastMonth;
            }
            default:
                return false;
        }
    });
}


const Overview = ({ acct }) => {

    const {
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
        overViewTransactionDetails,
        handleAcctBar,
        acctBar,
        handleViewDetails,
        viewDetails
    } = useContext(Context)

    const userAcct = localStorage.getItem('UserAcct')

    const handleCreateAcct = () => {
        if (userAcct < 2) {
            handleAcctBar()
        } else {
            alert("You can't create more than 2 accounts")
            return null
        }
    }

    const option1 = [
        {
            value: '',
            label: (
                <p className='text-[14px]'>This week</p>
            )
        }
    ]
    const option2 = [
        { value: 'lastWeek', label: <p className='text-[14px]'>Last week</p> },
        { value: '3daysAgo', label: <p className='text-[14px]'>3 days ago</p> },
        { value: '5daysAgo', label: <p className='text-[14px]'>5 days ago</p> },
        { value: 'lastMonth', label: <p className='text-[14px]'>Last month</p> }
    ];

    const [transaction, setTransaction] = useState([])
    const [sent, setSent] = useState([])
    const [filteredPayments, setFilteredPayments] = useState([])
    const [selectedMoneyRecieved, setSelectedMoneyRecieved] = useState(null);
    const [selectedMoneySent, setSelectedMoneySent] = useState(option2[0]);

    const roundUp = (value, decimals = 2) => {
        const factor = Math.pow(10, decimals);
        return Math.ceil(value * factor) / factor;
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


    const [formData, setFormData] = useState({
        first_name: '',
    })
    const [accounts, setAccounts] = useState([]);
    const [balance, setBalance] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [output, setOutput] = useState("");
    const [selectedAccount, setSelectedAccount] = useState('');
    // const [status, setStatus] = useState('');

    useEffect(() => {
        if (selectedCurrency) {
            const acct = accounts.find(
                (account) => account.currency === selectedCurrency.value
            );
            setSelectedAccount(acct);
        }
    }, [selectedCurrency, accounts]);

    // useEffect(() => {
    //     const token = localStorage.getItem('token');

    //     const fetchStatus = async () => {
    //         const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${selectedAccount.id}/status`, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Token ${token}`,
    //             },
    //         });

    //         if (!res.ok) {
    //             console.error(`HTTP error! status: ${res.status}`);
    //             return;
    //         }

    //         const text = await res.text();
    //         if (!text) {
    //             console.warn("Empty response body");
    //             return;
    //         }

    //         const data = JSON.parse(text);
    //         setStatus(data);
    //     };

    //     fetchStatus();
    // }, [selectedAccount])

    // console.log(status.status);



    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchProfile = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/profile`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setFormData(data);
        };

        fetchProfile();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchBalance = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_wallet_balance`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setBalance(data);
        };

        fetchBalance();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchAccount = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/account`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });

            const data = await res.json();

            // Filter for USD account only
            const usdAccount = data.find(account => account.currency === 'USD');

            setAccounts(usdAccount ? [usdAccount] : []);

            if (usdAccount) {
                setSelectedCurrency({
                    value: usdAccount.currency,
                    label: (
                        <div className="flex items-center gap-2">
                            <img
                                src={currencyLogos[usdAccount.currency]}
                                alt={usdAccount.currency}
                                className="w-[20px] h-4"
                            />
                            <span>{usdAccount.currency}</span>
                        </div>
                    ),
                });
            }
        };

        fetchAccount();
    }, [currencyLogos]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchTransactions = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/payments`, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });

            const data = await res.json();

            const amounts = data.map(txn => parseFloat(txn.amount));

            const total = amounts.reduce((sum, val) => sum + val, 0);
            setSent(total);
        };

        fetchTransactions();
    }, []);

    useEffect(() => {
        async function fetchPayments() {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/payments`, {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setSent(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        }

        fetchPayments();
    }, []);

    useEffect(() => {
        if (selectedMoneySent && Array.isArray(sent)) {
            const filtered = filterPaymentsByDate(sent, selectedMoneySent.value);
            setFilteredPayments(filtered);
        } else {
            setFilteredPayments([]);
        }
    }, [selectedMoneySent, sent]);

    useEffect(() => {
        if (selectedCurrency?.value === 'USD') {
            setOutput("USD");
        } else if (selectedCurrency?.value === 'EUR') {
            setOutput("EUR");
        } else {
            setOutput("");
        }
    }, [selectedCurrency]);

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const currencyOptions = accounts.map((account) => ({
        value: account.currency, // string
        label: (
            <div className="flex items-center gap-2">
                <img
                    src={currencyLogos[account.currency]}
                    alt={account.currency}
                    className="w-[20px] h-4"
                />
                <span>{account.currency}</span>
            </div>
        ),
    }));

    const handleTransactionClick = (id) => {
        localStorage.setItem('invoiceID', id);
    };

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



    const handleChange2 = (selectedOption) => {
        setSelectedMoneyRecieved(selectedOption);
    }
    const handleChange3 = (selectedOption) => {
        setSelectedMoneySent(selectedOption);
    }

    const filteredTransactions = searchQuery
        ? transaction.filter(transact => {
            const formattedDate = new Date(transact.date_created).toLocaleDateString("en-GB", {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            }).toLowerCase();

            const query = searchQuery.toLowerCase();

            return (
                formattedDate.includes(query) ||
                (transact.type?.toLowerCase() || '').includes(query) ||
                (transact.amount?.toString().toLowerCase() || '').includes(query) ||
                (transact.payment?.beneficiary?.full_name?.toLowerCase() || '').includes(query) ||
                (transact.currency?.toLowerCase() || '').includes(query) ||
                (transact.payment?.status?.toLowerCase() || '').includes(query)
            );
        })
        : transaction;  // return all if no search query


    return (
        <div>
            <div
                className={`w-full top-0 h-[200%] absolute z-50 ${viewDetails || acctDetailsBar || sendBar || convertBar || liveRatesBar || overViewTransactionDetails || acctBar ? 'bg-black/20' : 'hidden'}`}
                onClick={viewDetails ? handleViewDetails : acctDetailsBar ? handleAcctDetailsBar : convertBar ? handleConvertBar : sendBar ? handleSendBar : liveRatesBar ? handleLiveRates : overViewTransactionDetails ? handleOverViewTransactionDetails : acctBar ? handleAcctBar : null}
            ></div>
            <div className='flex items-center justify-between text-[#1D1C1F] md:p-10 px-4 py-8'>
                <div>
                    <p className='text-[28px] font-semibold'>Home</p>
                    <p className='text-[16px] font-normal text-[#525154]'>Welcome back, {formData.first_name}!</p>
                </div>
                <div className='flex md:items-center items-start gap-9'>
                    <img className='lg:block hidden cursor-pointer' src={Search} alt="" />
                    <img className='lg:block hidden cursor-pointer' src={Bell} alt="" />
                    <img
                        onClick={handleCreateAcct}
                        className='sp:w-8 w-[30px] cursor-pointer' src={Add} alt=""
                    />
                </div>
            </div>
            <div className='flex justify-between items-center md:px-10 px-4 py-2'>
                <p className='font-medium text-[18px]'>Overview</p>
                {/* <button
                    onClick={handleLiveRates}
                    className='py-[10px] px-4 border text-[14px] border-black/30 rounded-lg'
                >
                    Live rates
                </button> */}
            </div>
            <div className='md:px-10 px-4 pt-4 flex md:flex-row flex-col md:gap-0 gap-7'>
                <div className='w-full md:border-r-2 md:pr-4 border-black/50'>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-1 text-[14px] text-[#78757A]'>
                            Total balance <img src={Warn} alt="" />
                        </p>
                        {/* <Select
                            styles={customStyles}
                            options={currencyOptions}
                            onChange={handleCurrencyChange}
                            value={selectedCurrency}
                            isSearchable={false}
                        /> */}
                        <div className="relative w-[100px]">
                            <input
                                type="text"
                                value={selectedCurrency?.value || ''}
                                readOnly
                                className="pl-8 pr-2 py-2 border-[1.5px] text-center rounded-[10px] w-full"
                            />
                            <img
                                src={currencyLogos[selectedCurrency?.value]}
                                alt={selectedCurrency?.value}
                                className="w-[20px] h-4 absolute left-3 top-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-[36px] font-semibold">
                            {selectedCurrency && selectedAccount && (
                                <>
                                    {selectedCurrency.value === 'USD' && '$'}
                                    {/* {selectedCurrency.value === 'EUR' && '€'} */}
                                    {roundUp(balance.balance, 0)}
                                </>
                            )}
                        </p>
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
                        <img className='ml-3 md:w-full w-[70%] xl:w-[50%]' src={GreenLine} alt="" />
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
                        <div className='text-[36px] flex font-semibold'>
                            {selectedCurrency?.value === 'USD' && '$'}
                            {filteredPayments.length === 0 ? (
                                <p>0</p>
                            ) : (
                                <>
                                    {filteredPayments.reduce((sum, p) => sum + Number(p.amount), 0)}
                                </>
                            )}
                        </div>
                        <img className='md:w-full w-[70%] xl:w-[50%]' src={RedLine} alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-[45px] md:mx-10 mx-4'>
                <h1 className='font-medium text-[18px]'>Congratulations on taking the first step!</h1>
                <p className='text-[14px] font-normal text-[#525154]'>Complete these simple steps to get started using reccur.</p>
                <div className='flex sm:flex-row flex-col text-[14px] justify-between gap-4 w-[80%] mt-4'>
                    <div className='flex flex-col gap-4'>
                        <div
                            className={`flex items-center gap-2 cursor-pointer ${acct > 0 ? 'text-black/50 line-through' : 'text-[#542d9d] underline'}`}
                            onClick={acct = 0 ? handleAcctBar : null}
                        >
                            {acct > 0 ? (
                                <FaRegCircle className='mt-1 text-black/50' />
                            ) : (
                                <FaCheckCircle className='mt-1 text-[#542d9d]' />
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
            <div className='mt-[30px] md:px-10 px-4 pb-8 text-black/70'>
                <div className='sm:flex items-center justify-between'>
                    <div className='mb-5 sm:mb-0'>
                        <p className='text-[18px] font-medium'>Transactions</p>
                        <p className='text-[14px] font-normal text-[#525154]'>Track and manage all your payments, transfers, and conversions in one place.</p>
                    </div>
                    <a href='/transactions'>
                        <span className='mt-4 bg-white px-4 py-[10px] border border-black/50 rounded-lg'>
                            All Transactions
                        </span>
                    </a>

                </div>
                <div className='mt-[30px]'>
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

                        {filteredTransactions.map((transact, index) => (
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
                                            handleOverViewTransactionDetails()
                                            handleTransactionClick(transact.id)
                                        }}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className='my-4 text-[#344054]'>
                            {filteredTransactions.length} {filteredTransactions.length > 1 ? 'items' : 'item'}

                        </div>
                    </div>
                </div>
            </div>
            <AcctDetailsBar
                selectedCurrency={selectedCurrency}
                currencyOptions={currencyOptions}
                output={output}
                roundUp={roundUp}
                currencyLogos={currencyLogos}
                selectedAccount={selectedAccount}
                balance={balance}
            />
            <ConvertCurrency />
            <SendBar
                selectedAccount={selectedAccount}
                accounts={accounts}
                currencyLogos={currencyLogos}

            />
            <CreateAcctBar />
            <LiveRates />
            {overViewTransactionDetails && (
                <ViewTransactionDetailsBar className='duration-700 transition-all' />
            )}
        </div >
    )
}

export default Overview