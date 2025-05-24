import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Context'
import close from '../Components/Images/x-close.png';
import menus from '../Components/Images/menu.png';

const ViewDetailsBar = () => {

    const { handleViewDetails, viewDetails, handleDeleteProfile, handleProfileEdit } = useContext(Context)

    const [Transaction, setTransaction] = useState([])
    const [payments, setPayments] = useState([])
    const [BenficairyDetails, setBenficairyDetails] = useState(null)
    const [paymentId, setPaymentId] = useState(null)

    // const [status, setStatus] = useState()

    useEffect(() => {
        if (
            BenficairyDetails &&
            Array.isArray(Transaction) &&
            Transaction.length > 0
        ) {
            // Find a transaction with matching beneficiary id
            const matchingTransaction = Transaction.find(
                (t) => t.beneficiary && t.beneficiary.id === BenficairyDetails.id
            );

            if (matchingTransaction) {
                setPaymentId(matchingTransaction.id);
            }
        }
    }, [BenficairyDetails, Transaction]);

    useEffect(() => {
        if (!viewDetails) return;
        console.log('paymentId updated:', paymentId);
    }, [paymentId, viewDetails]);


    useEffect(() => {

        if (!viewDetails) return;

        const token = localStorage.getItem('token');
        const BeneficairyID = localStorage.getItem('BeneficairyID');

        const fetchBenficairy = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/beneficiary/${BeneficairyID}`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setBenficairyDetails(data);
        };

        fetchBenficairy();
    }, [viewDetails]);

    useEffect(() => {

        if (!viewDetails) return;

        const token = localStorage.getItem('token');

        const fetchTransactions = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/payments`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setTransaction(data);
        };

        fetchTransactions();
    }, [viewDetails]);

    useEffect(() => {
        if (!viewDetails || !paymentId) return;

        const token = localStorage.getItem('token');

        const fetchPayments = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/payments/${paymentId}`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = await res.json();
            setPayments(data);
        };

        fetchPayments();
    }, [viewDetails, paymentId]);


    // useEffect(() => {
    //     if (!viewDetails) return;

    //     const token = localStorage.getItem('token');
    //     const BeneficairyID = localStorage.getItem('BeneficairyID');

    //     const fetchStatus = async () => {
    //         const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/beneficiary/${BeneficairyID}/status`, {
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
    //         console.log("Raw text response:", text);
    //         if (!text) {
    //             console.warn("Empty response body");
    //             return;
    //         }

    //         const data = JSON.parse(text);
    //         setStatus(data.status);
    //     }

    //     fetchStatus();
    // }, [viewDetails])


    const handleBeneficairyClick = (id) => {
        localStorage.setItem('BeneficairyID', id);
    };

    const Payment = [
        {
            Payments: '#RC787024',
            PaymentDate: '07/05/2016',
            Amount: ' $2,097'
        },
        {
            Payments: '#RC787024',
            PaymentDate: '07/05/2016',
            Amount: ' $2,097'
        },
        {
            Payments: '#RC787024',
            PaymentDate: '07/05/2016',
            Amount: ' $2,097'
        },
        {
            Payments: '#RC787024',
            PaymentDate: '07/05/2016',
            Amount: ' $2,097'
        },
        {
            Payments: '#RC787024',
            PaymentDate: '07/05/2016',
            Amount: ' $2,097'
        },
        {
            Payments: '#RC787024',
            PaymentDate: '07/05/2016',
            Amount: ' $2,097'
        }
    ]

    return (
        <div className={`fixed top-0 h-screen bg-white lg:p-10 py-8 px-3 duration-700 text-black z-50 overflow-auto ${viewDetails ? 'sm:w-[50%] lg:w-[40%] w-full right-0' : 'right-[-100%] w-[40%]'}`}>
            <div className='flex gap-2 justify-between'>
                <div>
                    {payments?.beneficiary && (
                        <h1 className='text-[20px] font-medium text-[#1D1C1F]'>{payments.beneficiary.full_name}</h1>
                    )}

                    {/* <p className='text-[#525154]'><span className='text-[#531CB3]'>sam@tino.com •</span> Biffco Enterprises Ltd.</p> */}
                </div>
                <img
                    className='size-5 mt-1 cursor-pointer' src={close} alt=""
                    onClick={handleViewDetails}
                />
            </div>
            <div className='flex gap-2 mt-5'>
                <button
                    onClick={() => {
                        handleDeleteProfile()
                        handleBeneficairyClick(BenficairyDetails.id)
                    }}
                    className='p-2 px-3 text-[14px] border-[1.5px] rounded-lg'
                >
                    Delete Profile
                </button>
                <button
                    onClick={() => {
                        handleProfileEdit()
                        handleBeneficairyClick(BenficairyDetails.id)
                    }}
                    className='p-2 px-3 text-[14px] bg-[#E8E1F5] text-[#531CB3] border rounded-lg'
                >
                    Edit Profile
                </button>
                <button
                    onClick={() => {
                        handleViewDetails()
                    }}
                    className='p-2 px-3 text-[14px] bg-[#531CB3] text-white border rounded-lg'
                >
                    Send Money
                </button>
            </div>
            {payments ? (
                <div>
                    <div className='mt-7 border rounded-lg p-5 flex flex-col gap-3'>
                        <p className='text-[18px] font-medium text-[#302F33]'>Summary</p>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#525154]'>Amount Sent</p>
                                <p className='text-[#1D1C1F] text-[20px] font-semibold'>${payments.amount}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#525154]'>Number of Transactions</p>
                                <p className='text-[#1D1C1F] text-[20px] xl:text-start lg:text-center md:text-start sm:text-center font-semibold'>{payments.transactions ? payments.transactions.length : 1}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <p className='text-[20px] text-[#302F33]'>Transactions</p>
                        <div className='grid grid-cols-3 gap-5 py-3 border-b border-b-black/50 text-[#525154]'>
                            <p>Payment Date</p>
                            <p>Payment type</p>
                            <p className='flex items-center justify-between mr-5'>
                                Amount
                                <p className='font-semibold invisible text-[18px] text-black/60 cursor-pointer'>
                                    <img src={menus} alt="" />
                                </p>
                            </p>
                        </div>
                        <div className='grid grid-cols-3 gap-5 py-3 border-b border-b-black/50 text-[#525154]'>
                            <p>{new Date(payments.date_created).toLocaleDateString()}</p>
                            <p className='truncate'>
                                {payments.account_type === 'crypto' ? (
                                    payments.cryptocurrency_type
                                ) : (
                                    'Bank Transfer'
                                )}
                            </p>
                            <div className='flex items-center justify-between mr-5'>
                                ${payments.amount}
                                <p className='font-semibold text-[18px] text-black/60 cursor-pointer'>
                                    <img src={menus} alt="" />
                                </p>
                            </div>
                        </div>
                        <p className='text-[#78757A] mt-3'>{payments.transactions ? payments.transactions.length : 1} {payments.transactions && payments.transactions.length > 1 ? 'items' : 'item'}</p>
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